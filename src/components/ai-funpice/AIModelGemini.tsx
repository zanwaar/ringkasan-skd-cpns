import { GoogleGenAI } from "@google/genai";
import { getGeminiApiKey } from "../../utils/apiConfig";

const generationConfig = {
  temperature: 1.45,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

let aiInstance: GoogleGenAI | null = null;

const initializeGenAI = (): GoogleGenAI | null => {
  if (aiInstance !== null) {
    return aiInstance;
  }

  try {
    const apiKey = getGeminiApiKey();

    if (!apiKey) {
      console.warn("REACT_APP_GOOGLE_GEMINI_AI_API_KEY is not set");
      return null;
    }

    aiInstance = new GoogleGenAI({ apiKey });
    return aiInstance;
  } catch (error) {
    console.error("Failed to initialize Gemini AI:", error);
    return null;
  }
};

export const getChatSession = () => {
  return initializeGenAI();
};

// For backward compatibility with existing code
export const chatSession = {
  sendMessage: async (message: string) => {
    const ai = initializeGenAI();
    if (!ai) {
      throw new Error(
        "Chat session not initialized. API key may not be set."
      );
    }

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: message,
      config: {
        temperature: generationConfig.temperature,
        topP: generationConfig.topP,
        topK: generationConfig.topK,
        maxOutputTokens: generationConfig.maxOutputTokens,
      },
    });

    // Clean the response text - remove markdown code blocks if present
    let cleanedText = response.text;

    // Remove markdown code block markers (```json and ```)
    if (cleanedText.includes("```json")) {
      cleanedText = cleanedText.replace(/```json\n?/g, "").replace(/```\n?/g, "");
    } else if (cleanedText.includes("```")) {
      cleanedText = cleanedText.replace(/```\n?/g, "");
    }

    cleanedText = cleanedText.trim();

    // Return in compatible format with expected API
    return {
      response: {
        text: () => cleanedText,
      },
    };
  },
  get __instance() {
    return initializeGenAI();
  },
} as any;
