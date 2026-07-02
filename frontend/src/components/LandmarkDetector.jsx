import React, { useState } from "react";

export default function LandmarkDetector() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");
  const [preview, setPreview] = useState(null);

  const handleImageUpload = async (event) => {
    const file = event.target.files[0]; 
    if (!file) return;

    setPreview(URL.createObjectURL(file));
    setLoading(true);
    setResult("Analyzing landmark details...");

    try {
      // ⬇️ FIXED URL: Must point to api-inference, NOT the main website address to avoid CORS blocks
      const response = await fetch(
        "https://huggingface.co",
        {
          headers: { Authorization: `Bearer ${import.meta.env.VITE_HF_TOKEN}` },
          method: "POST",
          body: file, 
        }
      );
      
      const data = await response.json();
      console.log("AI API Response Data:", data);

      // ⬇️ FIXED DATA PARSING: Reads the label out of the first object in the response array
      if (Array.isArray(data) && data.length > 0 && data[0].label) {
        const rawLabel = data[0].label;
        const topMatch = rawLabel.split(",")[0].replace(/_/g, " ");
        const formattedMatch = topMatch.charAt(0).toUpperCase() + topMatch.slice(1);
        setResult(formattedMatch);
      } else if (data && data.error) {
        setResult(`API Error: ${data.error}`);
      } else {
        setResult("Unknown Object or Landmark");
      }
    } catch (error) {
      console.error("Scanning Error Log:", error);
      setResult("Could not process image.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-5 bg-white rounded-2xl border border-gray-100 mt-4 text-left shadow-sm">
      <h3 className="text-md font-bold text-gray-800 mb-3 flex items-center gap-2">
        📸 Landmark Scanner
      </h3>

      {preview && (
        <div className="mb-3 relative rounded-xl overflow-hidden h-40 bg-gray-50 border border-gray-100">
          <img src={preview} alt="Preview" className="w-full h-full object-cover" />
          {loading && (
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white font-medium text-xs animate-pulse">
              Running AI Identification...
            </div>
          )}
        </div>
      )}

      <div className="w-full">
        <label className="flex flex-col items-center justify-center w-full h-24 border-2 border-dashed border-gray-200 rounded-xl cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors">
          <span className="text-xs font-semibold text-gray-500">Click to upload photo</span>
          <span className="text-[10px] text-gray-400 mt-1">PNG, JPG, or WebP</span>
          <input 
            type="file" 
            accept="image/*" 
            onChange={handleImageUpload} 
            className="hidden" 
            disabled={loading} 
          />
        </label>
      </div>

      {result && (
        <div className="mt-3 p-3 bg-blue-50/50 border border-blue-100 rounded-xl">
          <span className="text-[10px] font-bold text-blue-500 uppercase tracking-wider block">Result</span>
          <p className="text-gray-800 font-bold text-sm mt-0.5">{result}</p>
        </div>
      )}
    </div>
  );
}
