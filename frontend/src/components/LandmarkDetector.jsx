import React, { useState } from "react";

export default function LandmarkDetector({ onLandmarkFound }) {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setLoading(true);
    setResult("Analyzing image...");

    try {
      const response = await fetch(
        "https://huggingface.co",
        {
          headers: { Authorization: `Bearer ${import.meta.env.VITE_HF_TOKEN}` },
          method: "POST",
          body: file,
        }
      );
      
      const data = await response.json();

      if (data && data.length > 0) {
        const topMatch = data[0].label;
        setResult(`Identified: ${topMatch}`);
        if (onLandmarkFound) onLandmarkFound(topMatch);
      } else {
        setResult("Could not identify the location.");
      }
    } catch (error) {
      console.error("Error identifying landmark:", error);
      setResult("Error processing image.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px", border: "1px dashed #ccc", borderRadius: "8px" }}>
      <h3>📸 Landmark Identification</h3>
      <input type="file" accept="image/*" onChange={handleImageUpload} disabled={loading} />
      <p style={{ marginTop: "10px", fontWeight: "bold" }}>{result}</p>
    </div>
  );
}
