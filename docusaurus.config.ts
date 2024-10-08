import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import tailwindPlugin from "./tailwind-config.cjs";

import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

const config: Config = {
  title: "Ringkasan SKD CPNS",
  tagline:
    "Menggunakan teknologi kecerdasan buatan (AI) untuk memastikan kualitas dan relevansi materi",
  favicon: "img/fun.ico",

  url: "https://zanwaar.github.io",
  baseUrl: "/ringkasan-skd-cpns/",
  projectName: "ringkasan-skd-cpns",
  organizationName: "zanwaar",
  trailingSlash: false,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl: "https://github.com/zanwaar/ringkasan-cpns-skd/tree/main/",
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          editUrl: "https://github.com/zanwaar/ringkasan-cpns-skd/tree/main/",
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
          remarkPlugins: [require("remark-math")],
          rehypePlugins: [require("rehype-katex")],
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],
  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      crossorigin: "anonymous",
    },
  ],
  themeConfig: {
    image: "img/fun.jpg",
    navbar: {
      title: "Funpice",
      logo: {
        alt: "Funpice logo",
        src: "img/fun.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "panduan",
          position: "left",
          label: "Ringkasan SKD CPNS",
        },
        {
          href: "/ai-funpice",
          position: "left",
          label: "Funpice AI Generator",
        },
    
        {
          type: "html",
          position: "right",
          value: `
            <iframe
              src="https://ghbtns.com/github-btn.html?user=zanwaar&repo=ringkasan-skd-cpns&type=star&size=large"
              frameborder="0"
              scrolling="0"
              width="70"
              height="30"
              title="GitHub Star Button"
              style="
                display: inline-block;
                vertical-align: middle;
              "
            ></iframe>`,
        },
        {
          type: "html",
          position: "right",
          value: `
          <a href="/ringkasan-skd-cpns/docs/dukungan-sponsor" 
             style="
               padding: 5px 7px; 
               background-color: #E0E0E0; 
               color: black; 
               border: none; 
               border-radius: 5px; 
               cursor: pointer; 
               text-decoration: none;
             ">
            💖
          </a>
        `,
        },
     
      ],
    },
    footer: {
      style: "dark",
      copyright: `Copyright © ${new Date().getFullYear()} Ringkasan SKD CPNS | Batukel Development.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,

  // Plugin PWA tanpa konfigurasi remark/re-hype math
  plugins: [
    tailwindPlugin,
    [
      "docusaurus2-dotenv",
      {
        path: "./.env", // The path to your environment variables.
        safe: false, // If false ignore safe-mode, if true load './.env.example', if a string load that file as the sample
        systemvars: false, // Set to true if you would rather load all system variables as well (useful for CI purposes)
        silent: false, //  If true, all warnings will be suppressed
        expand: false, // Allows your variables to be "expanded" for reusability within your .env file
        defaults: false, //  Adds support for dotenv-defaults. If set to true, uses ./.env.defaults
        ignoreStub: true,
      },
    ],
    [
      "@docusaurus/plugin-pwa",
      {
        debug: true, // Gunakan true untuk development, ubah ke false untuk production
        offlineModeActivationStrategies: [
          "appInstalled", // Aktifkan saat aplikasi diinstall
          "standalone", // Aktifkan saat diakses dalam mode standalone
          "queryString", // Aktifkan saat ada query string di URL
        ],
        pwaHead: [
          {
            tagName: "link",
            rel: "icon",
            href: "/img/fun.ico", // Ganti dengan icon kamu
          },
          {
            tagName: "link",
            rel: "manifest",
            href: "/manifest.json", // Arahkan ke manifest.json untuk PWA
          },
          {
            tagName: "meta",
            name: "theme-color",
            content: "#8936FF", // Sesuaikan dengan tema situsmu
          },
        ],
      },
    ],
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
      },
    ],
  ],
};

export default config;
