// lib/gemini.ts
import { GoogleGenAI } from "@google/genai";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAi = new GoogleGenerativeAI(process.env.GEMINI_API_KEY as string);
const model = genAi.getGenerativeModel({ model: "gemini-1.5-pro-latest" });

const generationConfig = {
  temperature: 1,
  maxOutputTokens: 1024,
  topP: 0.8,
  topK: 40,
  responseMimeType: "text/plain",
};

export const chatSession = model.startChat({
  generationConfig,
  history: [],
});
