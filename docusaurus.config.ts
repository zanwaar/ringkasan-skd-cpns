import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Ringkasan SKD CPNS",
  tagline: "Mengunkan teknologi kecerdasan buatan (AI) untuk memastikan kualitas dan relevansi materi",
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

  // Tambahkan plugin PWA di bawah ini
  plugins: [
    [
      '@docusaurus/plugin-pwa',
      {
        debug: true, // Gunakan true untuk development, ubah ke false untuk production
        offlineModeActivationStrategies: [
          'appInstalled', // Aktifkan saat aplikasi diinstall
          'standalone', // Aktifkan saat diakses dalam mode standalone
          'queryString', // Aktifkan saat ada query string di URL
        ],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/fun.ico', // Ganti dengan icon kamu
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json', // Arahkan ke manifest.json untuk PWA
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: '#8936FF', // Sesuaikan dengan tema situsmu
          },
        ],
      },
    ],
  ],
};

export default config;
