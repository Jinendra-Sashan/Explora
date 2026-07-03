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
    setResult("Analyzing landmark...");

    try {
      const formData = new FormData();
      formData.append("image", file);

      const response = await fetch(
        "http://localhost:5000/detect-landmark",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      console.log("OpenAI Response:", data);

      if (data.landmark) {
        setResult(
          `📍 Landmark: ${data.landmark}

🌍 Country: ${data.country}

📖 Description:
${data.description}`
        );
      } else if (data.error) {
        setResult(`Error: ${data.error}`);
      } else {
        setResult("Unknown landmark.");
      }
    } catch (error) {
      console.error("Scanning Error:", error);
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
          <img
            src={preview}
            alt="Preview"
            className="w-full h-full object-cover"
          />

          {loading && (
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white font-medium text-xs animate-pulse">
              Running AI Identification...
            </div>
          )}
        </div>
      )}

      <div className="w-full">
        <label className="flex flex-col items-center justify-center w-full h-24 border-2 border-dashed border-gray-200 rounded-xl cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors">
          <span className="text-xs font-semibold text-gray-500">
            Click to upload photo
          </span>

          <span className="text-[10px] text-gray-400 mt-1">
            PNG, JPG, or WebP
          </span>

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
        <div className="mt-3 p-3 bg-blue-50 border border-blue-200 rounded-xl whitespace-pre-line">
          <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider block">
            Result
          </span>

          <p className="text-gray-800 font-medium mt-1">
            {result}
          </p>
        </div>
      )}
    </div>
  );
}