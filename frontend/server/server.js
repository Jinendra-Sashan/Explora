import express from "express";
import cors from "cors";
import multer from "multer";
import dotenv from "dotenv";
import fs from "fs";
import OpenAI from "openai";

dotenv.config();

const app = express();
app.use(cors());

const upload = multer({ dest: "uploads/" });

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Test route
app.get("/", (req, res) => {
  res.send("Landmark AI Server is running!");
});

// Landmark detection
app.post("/detect-landmark", upload.single("image"), async (req, res) => {
  try {
    // Convert uploaded image to Base64
    const imageBytes = fs.readFileSync(req.file.path);
    const base64Image = imageBytes.toString("base64");

    const response = await client.responses.create({
      model: "gpt-4.1-mini",
      input: [
        {
          role: "user",
          content: [
            {
              type: "input_text",
              text: `Look at this image.

If it contains a famous landmark, return ONLY valid JSON in this format:

{
  "landmark": "",
  "country": "",
  "description": ""
}

If it is not a landmark, return:

{
  "landmark": "Unknown",
  "country": "",
  "description": "No famous landmark detected."
}`
            },
            {
              type: "input_image",
              image_url: `data:image/jpeg;base64,${base64Image}`
            }
          ]
        }
      ]
    });

    // Delete temporary uploaded file
    fs.unlinkSync(req.file.path);

    // Return AI response
    res.json(JSON.parse(response.output_text));

  } catch (err) {
    console.error(err);

    res.status(500).json({
      error: err.message
    });
  }
});

app.listen(5000, () => {
  console.log("🚀 Server running on http://localhost:5000");
});