import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv"; // 1. Import dotenv

dotenv.config(); // 2. Initialize it at the very top

// This now correctly reads the key you set in Render
const genAI = new GoogleGenerativeAI(process.env.OPENAI_API_KEY);

export const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash",
});