import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Ringkasan SKD CPNS",
  tagline: "Dibuat dengan bantuan teknologi kecerdasan buatan (AI) untuk memastikan kualitas dan relevansi materi. Terima kasih atas dukungan Anda!",
  favicon: "img/fun.ico",

  // Set the production URL of your site here
  url: "https://zanwaar.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub Pages deployment, it is often '/<projectName>/'
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
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
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
          href: "https://github.com/zanwaar/ringkasan-skd-cpns",
          label: "GitHub",
          position: "right",
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
};

export default config;
