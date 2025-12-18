/** @type {import('@docusaurus/types').DocusaurusConfig} */
import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";

const config: Config = {
  title: "User Guides",
  tagline: "All you need to know about how to use Sevi",
  url: "https://sevi.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/seviS.svg",
  organizationName: "Sevi", // Usually your GitHub org/user name.
  projectName: "Sevi", // Usually your repo name.
  plugins: [
    require.resolve("docusaurus-plugin-image-zoom"),
    // "@chatwoot/docusaurus-plugin",
  ],
  themeConfig: {
    // chatwoot: {
    //   websiteToken: "Y9FefHJwed7PcDVbzZDzy1nD",
    //   baseURL: "https://chat.sevi.io", // optional
    //   enableInDevelopment: true, // optional
    //   chatwootSettings: {
    //     hideMessageBubble: false,
    //     position: "right", // This can be left or right
    //     locale: "en", // Language to be set
    //     useBrowserLanguage: false, // Set widget language from user's browser
    //     darkMode: "auto", // [light, auto]
    //     type: "expanded_bubble",
    //     launcherTitle: "Chat with us",
    //   },
    // },
    algolia: {
      appId: "RF4RB6DWFR",
      apiKey: "f6f6acda78f9440ad0b6cd1dea6a0c31",
      indexName: "sevi",
      contextualSearch: true,
    },
    zoom: {
      selector: ".markdown :not(em) > img",
      background: {
        light: "rgb(255, 255, 255)",
        dark: "rgb(50, 50, 50)",
      },
      config: {
        // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
      },
    },
    navbar: {
      title: "Sevi",
      logo: {
        alt: "Sevi Logo",
        src: "img/seviS.svg",
        href: "/docs/about/intro",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "aboutSidebar",
          position: "left",
          label: "About",
        },
        {
          type: "docSidebar",
          sidebarId: "buyerSidebar",
          position: "left",
          label: "Buyer",
        },
        {
          type: "docSidebar",
          sidebarId: "agentSidebar",
          position: "left",
          label: "Agent",
        },
        {
          type: "docSidebar",
          sidebarId: "sellerSidebar",
          position: "left",
          label: "Seller",
        },
        
        {
          type: "docSidebar",
          sidebarId: "developerSidebar",
          position: "left",
          label: "Developer",
        },
        {
          type: "docSidebar",
          sidebarId: "releaseSidebar",
          position: "left",
          label: "Release",
        },
        // {
        //   type: "docSidebar",
        //   sidebarId: "vacanciesSidebar",
        //   position: "left",
        //   label: "Vacancies",
        // },
        
        {
          type: "dropdown",
          label: "Legal",
          position: "right",
          items: [
            {
              to: "/privacy",
              label: "Privacy",
            },
            {
              to: "/termsConditions",
              label: "Terms & Conditions (Buyers)",
            },
            {
              to: "/termsConditionsSellers",
              label: "Terms of Service (Sellers)",
            },
          ],
        },
      ],
    },
  } satisfies Preset.ThemeConfig,

  presets: [
    [
      "classic",
      {
        googleAnalytics: {
          trackingID: "G-ZM57SQP4ZY",
          anonymizeIP: false,
        },
        docs: {
          path: "docs",
          routeBasePath: "docs",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/sevifinance/Sevi-Docs/blob/main",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/sevifinance/Sevi-Docs/blob/main",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      } satisfies Preset.Options,
    ],
  ],
};

export default config;
