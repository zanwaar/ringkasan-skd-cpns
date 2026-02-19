# Ringkasan SKD CPNS - AI Agent Instructions

## Project Overview

This is a **Docusaurus 3-based documentation and interactive learning platform** for Indonesian Civil Service Exam (SKD CPNS) preparation. The project combines:
- Static markdown documentation on SKD exam topics (TWK, TIU, TKP)
- Interactive React components for practice questions and AI-driven quiz generation
- Google Gemini AI integration to dynamically generate exam questions

**Key URL structure:** Base deployed at `https://zanwaar.github.io/ringkasan-skd-cpns/`

---

## Architecture & Data Flows

### Core Stack
- **Framework:** Docusaurus 3.5.2 (Next-gen static site generator)
- **UI Framework:** React 18 + TypeScript
- **Styling:** Tailwind CSS 3.4.13 + styled-components 6.1.13
- **Math Rendering:** KaTeX (via `remark-math` & `rehype-katex`)
- **AI Integration:** Google Generative AI (`@google/genai` ^1.30.0)
- **Diagram Visualization:** react-flow-renderer for interactive flowcharts

### Folder Structure
```
docs/               # Markdown content (organized by SKD sections: TIU, TWK, TKP)
src/
  components/       # React components
    ai-funpice/     # AI quiz generation module (HomeTIU, MateriTIU, ModalGenerateSoal)
    diagram/        # ReactFlow-based diagram components (CircleSeating, GaleriDiagram, etc.)
    shared/         # Shared utilities (data.jsx with kuis templates, materi.tsx)
  pages/            # Docusaurus pages (index, ai-funpice, quiz, materi-tiu)
  utils/            # apiConfig.ts (Gemini API key management)
  clientModules/    # setupEnv.ts (runtime environment variable injection)
  css/              # Global styles
```

### Critical Data Flows

**1. AI Quiz Generation Flow:**
```
SubkategoriCard (click) 
  → ModalGenerateSoal (prompt + user settings)
  → AIModelGemini.chatSession.sendMessage()
  → Google Gemini API (gemini-2.5-flash model)
  → JSON response stored in localStorage
  → quiz.tsx reads from localStorage and renders
```

**2. Environment Variable Resolution (Two-Stage):**
- **Build time:** `process.env.REACT_APP_GOOGLE_GEMINI_AI_API_KEY` via `.env` + docusaurus2-dotenv
- **Runtime:** `setupEnv.ts` injects into `window.REACT_APP_GOOGLE_GEMINI_AI_API_KEY`
- **Access:** `getGeminiApiKey()` in `apiConfig.ts` checks both sources

**3. Content Organization:**
- `HomeTIU` (HomepageFeatures pattern) displays category structure
- `MateriTIU` iterates through `materiTIU` data structure (hard-coded in component)
- Content referenced across: `materi-tiu.tsx`, `ai-funpice.tsx`, shared `data.jsx`

---

## Developer Workflows

### Local Development
```bash
npm install              # Install dependencies (requires Node ≥18)
npm start                # Start Docusaurus dev server (port 3000)
npm build                # Production build
npm run typecheck        # Run TypeScript validation
npm run deploy           # Build + push to gh-pages branch
```

### Key Commands
- **Type Checking:** `npm run typecheck` (not run in CI by default)
- **Build Optimization:** Tailwind CSS is pre-processed in `tailwind-config.cjs`
- **Environment Setup:** Must set `GOOGLE_GEMINI_AI_API_KEY` in `.env` for AI features to work

### Common Debugging Patterns
- **API Key Issues:** Check both `process.env` (build-time) and `window` object (runtime) in `apiConfig.ts`
- **Quiz Generation Failures:** Look at `ModalGenerateSoal.tsx` - validates JSON response before localStorage
- **Math Rendering:** KaTeX stylesheets loaded via CDN in `docusaurus.config.ts`, ensure `<link>` tags preserved

---

## Project-Specific Conventions

### Component Patterns

**Docusaurus Layout Wrapper (for pages):**
```tsx
import Layout from "@theme/Layout";
import { useDocusaurusContext } from "@docusaurus/useDocusaurusContext";

// Pages use Layout + useDocusaurusContext() for consistency
export default function MyPage(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return <Layout><main>...</main></Layout>;
}
```

**Data-Driven UI (TIU Material):**
Material categories are defined as static objects within components (e.g., `materiTIU` in `HomeTIU.tsx`), NOT fetched externally. Structure:
```tsx
const materiTIU = {
  tes_tiu: {
    "1": { kemampuan: string, subkategori: { "1.1": { judul, deskripsi, prompt } } }
  }
};
```

**AI Prompt Storage:**
Prompts stored in `subkategori[key].prompt` field and passed to `ModalGenerateSoal`. Prompt should specify JSON output format for parser.

### URL & Routing
- Uses Docusaurus client-side routing (e.g., `/ringkasan-skd-cpns/ai-funpice`)
- Base URL is `/ringkasan-skd-cpns/` (set in `docusaurus.config.ts`)
- All internal links must account for base URL in redirects

### Styling Approach
- **TailwindCSS first** for components (utility classes)
- **Module CSS** for Docusaurus theme overrides (`index.module.css` in pages)
- **Styled-components** for complex, reusable styled containers (see `PosDiagram`, `Funpice`)
- **Markdown:** Global styles in `src/css/custom.css`

### State Management
- **No Redux/Zustand** - uses React hooks + `localStorage` for persistence
- Quiz data stored in `localStorage.generatedQuestions` (JSON string from AI)
- Session data in component state

---

## Integration Points & External Dependencies

### Google Gemini AI
- **API Wrapper:** `AIModelGemini.tsx` exports `chatSession` object
- **Model:** `gemini-2.5-flash` with fixed generation config (temperature 1.45, maxTokens 8192)
- **Response Format:** Must be valid JSON; markdown code blocks auto-stripped
- **Error Handling:** Null return if API key missing; client-side JSON validation before localStorage

### Docusaurus Ecosystem
- **Plugin:** `docusaurus2-dotenv` loads `.env` at build time
- **Search:** `@easyops-cn/docusaurus-search-local` for full-text search
- **PWA:** `@docusaurus/plugin-pwa` configured for offline support
- **Markdown Extensions:** remark-math + rehype-katex for LaTeX

### React Flow Diagrams
- Used in `CircleSeating.tsx`, `GaleriDiagram.tsx`, `StanDiagram.tsx`, `PosDiagram.tsx`
- Components wrap ReactFlow with fixed height (500px) and include MiniMap + Controls
- Node/edge definitions are static within each component

---

## Testing & Quality Assurance

- **No test suite** currently defined (no Jest/Vitest config)
- **Type Safety:** TypeScript enabled; run `npm run typecheck` before commits
- **Build Validation:** `onBrokenLinks: "throw"` in config prevents linking errors
- **Manual testing:** Start dev server and navigate through pages

---

## Common Gotchas & Anti-Patterns

❌ **DON'T:**
- Hardcode absolute URLs without `/ringkasan-skd-cpns/` base path
- Store sensitive data in components; keep API keys in `.env` only
- Modify `tes_tiu` data structure without updating all referencing components
- Add state to pages without checking localStorage first (platform state pattern)

✅ **DO:**
- Use `@site/` aliases for imports (configured in `tsconfig.json` as `baseUrl: "."`)
- Wrap new pages in Docusaurus `Layout` + `useDocusaurusContext()`
- Add new material categories to `materiTIU` with `prompt` field for AI generation
- Test KaTeX rendering by building locally; CDN can be flaky in dev

---

## Deploy & Release

- **Deployment:** GitHub Pages via `npm run deploy` (pushes `/build` to `gh-pages` branch)
- **Org:** zanwaar | Repo: ringkasan-skd-cpns
- **CI/CD:** No automated pipeline; manual deploy only
- **Environment:** Production `.env` must have `GOOGLE_GEMINI_AI_API_KEY` set before build

---

## Quick Reference: Key Files to Modify

| Task | Primary File(s) |
|------|-----------------|
| Add new SKD topic section | `docs/skd-*/` + update `sidebars.ts` |
| Extend AI quiz categories | `src/components/ai-funpice/HomeTIU.tsx` (add to `materiTIU` object) |
| Fix quiz generation | `src/components/ai-funpice/ModalGenerateSoal.tsx` + `AIModelGemini.tsx` |
| Add diagram visualizations | `src/components/diagram/*` (extend ReactFlow templates) |
| Update styling/theme | `src/css/custom.css` or `pages/*.module.css` |
| Modify navbar/footer | `docusaurus.config.ts` (themeConfig section) |

