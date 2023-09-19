// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
//const zhNavbar = require("./src/components/LocalizedNavbar/Navbar.zh");
//const enNavbar = require("./src/components/LocalizedNavbar/Navbar.en");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title:
    "Aibot(ChatGPT Shortcut)-Tag filtering, keyword search, and one-click copy prompts",
  // tagline: '方便中文使用 ChatGPT 快捷指令',
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://gpt-tools.chefkang.xyz/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "rockbenben", // Usually your GitHub org/user name.
  projectName: "ChatGPT-Shortcut", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "zh-Hans",
    locales: ["zh-Hans", "en", "ja", "ko", "es", "fr", "de", "it", "ru", "pt", "hi", "ar", "bn"],
    localeConfigs: {
      en: {
        htmlLang: "en-US",
      },
      ja: {
        htmlLang: "ja-JP",
      },
      ko: {
        htmlLang: "ko-KR",
      },
      es: {
        htmlLang: "es-ES",
      },
      fr: {
        htmlLang: "fr-FR",
      },
      de: {
        htmlLang: "de-DE",
      },
      it: {
        htmlLang: "it-IT",
      },
      ru: {
        htmlLang: "ru-RU",
      },
      pt: {
        htmlLang: "pt-PT",
      },
      hi: {
        htmlLang: "hi-IN",
      },
      ar: {
        htmlLang: "ar-SA",
      },
      bn: {
        htmlLang: "bn-BD",
      },
    },
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: "docs",
          sidebarPath: "sidebars.js",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        gtag: {
          trackingID: "G-YJY639H2J1",
          anonymizeIP: false,
        },
      }),
    ],
  ],
  plugins: [
    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: [
          // /docs/oldDoc -> /docs/newDoc
          {
            to: "/",
            from: "/cn",
          },
        ],
      },
    ],
    /* [
      "docusaurus2-plugin-google-adsense",
      {
        dataAdClient: "ca-pub-7585955822109216",
      },
    ], */
    "./plugins/piwik.js",
    "./plugins/instantpage.js",
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      // image: 'img/docusaurus-social-card.jpg',
      metadata: [
        {
          name: "keywords",
          content:
            "prompt,aibot,ChatGPT Shortcut,ChatGPT SC,ChatGPT,AI prompts，提示词",
        },
      ],
      navbar: {
        hideOnScroll: true,
        title: "AI小师傅助手",
        logo: {
          alt: "ChatGPT Shortcuts",
          src: "img/logo.svg",
        },
        items: [
          {
            to: "/community-prompts",
            label: "🏘️ 社区提示词",
            position: "left",
          },
          {
            type: "dropdown",
            label: "🛠️ 应用工具",
            position: "left",
            items: [
              {
                label: "图像提示词生成器",
                href: "https://mj-tools.chefkang.xyz/",
              },
            ],
          },
          {
            type: "dropdown",
            label: "反馈建议",
            position: "left",
            items: [
              {
                label: "📝 提交反馈",
                to: "/feedback",
              },
              {
                label: "📺 加入 Discord",
                href: "https://discord.gg/",
              },
            ],
          },
          { type: "localeDropdown", position: "right" },
          {
            href: "https://discord.gg/",
            position: "right",
            className: "header-discord-link",
          },
        ],
      },
      footer: {
        style: "dark",
        copyright: `Copyright © ${new Date().getFullYear()} Aibot (ChatGPT Shortcut)`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },

      /* announcementBar: {
        id: 'announcement_bar',
        content: getAnnouncement(),
        backgroundColor: '#fafbfc',
        textColor: '#091E42',
        isCloseable: false,
      }, */
    }),
};

module.exports = config;

/* process.env.DOCUSAURUS_CURRENT_LOCALE ??= "zh-Hans";
function getNavbar() {
  switch (process.env.DOCUSAURUS_CURRENT_LOCALE) {
    case "en":
      return enNavbar;
    default:
      return zhNavbar;
  }
} */
/* function getAnnouncement() {
  switch(process.env.DOCUSAURUS_CURRENT_LOCALE) {
    case "en": return 'Announcement_en';
    default: return 'Announcement_cn';
  }
} */
