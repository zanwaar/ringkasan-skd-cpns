/**
 * API configuration utility
 * Provides access to the Gemini API key from environment variables
 */

export const getGeminiApiKey = (): string | undefined => {
    // Check process.env first (build time)
    if (typeof process !== "undefined" && process.env) {
        const key = process.env.REACT_APP_GOOGLE_GEMINI_AI_API_KEY;
        if (key && key.trim()) {
            return key;
        }
    }

    // Check window object (client-side injected)
    if (typeof window !== "undefined") {
        const key = (window as any).REACT_APP_GOOGLE_GEMINI_AI_API_KEY;
        if (key && typeof key === "string" && key.trim()) {
            return key;
        }
    }

    return undefined;
};

export const isApiKeyConfigured = (): boolean => {
    return !!getGeminiApiKey();
};
