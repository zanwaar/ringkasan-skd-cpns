import { useEffect } from "react";

/**
 * Client module to expose environment variables to the browser
 * This runs on every page load and injects the API key into the window object
 */

export function onRouteDidUpdate() {
    if (typeof window !== "undefined") {
        // Expose the API key from build-time environment
        (window as any).REACT_APP_GOOGLE_GEMINI_AI_API_KEY =
            process.env.REACT_APP_GOOGLE_GEMINI_AI_API_KEY;
    }
}

export function clientModule() {
    onRouteDidUpdate();
}

export default clientModule;
