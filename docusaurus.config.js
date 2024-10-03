/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'User Guides',
  tagline: 'All you need to know about how to use Sevi',
  url: 'https://sevi.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/seviS.svg',
  organizationName: 'Sevi', // Usually your GitHub org/user name.
  projectName: 'Sevi', // Usually your repo name.
  plugins: [
    require.resolve('docusaurus-plugin-image-zoom'),
    "@chatwoot/docusaurus-plugin"
  ],
  themeConfig: {
    chatwoot: {
      websiteToken: "Y9FefHJwed7PcDVbzZDzy1nD",
      baseURL: "https://chat.sevi.io",  // optional
      enableInDevelopment: true,  // optional
      chatwootSettings: {
        hideMessageBubble: false,
        position: "right", // This can be left or right
        locale: "en", // Language to be set
        useBrowserLanguage: false, // Set widget language from user's browser
        darkMode: "auto", // [light, auto]
        type: "expanded_bubble",
        launcherTitle: "Chat with us",
      }
    },
    algolia: {
      // The application ID provided by Algolia
      appId: 'RF4RB6DWFR',

      // Public API key: it is safe to commit it
      apiKey: '0fc78e089071ee0a340ca971163db62e',

      indexName: 'sevi',

      // Optional: see doc section below
      contextualSearch: true,

      // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
      // externalUrlRegex: 'external\\.com|domain\\.com',

      // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
      // replaceSearchResultPathname: {
      //   from: '/docs/', // or as RegExp: /\/docs\//
      //   to: '/',
      // },

      // Optional: Algolia search parameters
      // searchParameters: {},

      // // Optional: path for search page that enabled by default (`false` to disable it)
      // searchPagePath: 'search',

      // // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
      // insights: false,

      //... other Algolia params
    },
    zoom: {
      selector: '.markdown :not(em) > img',
      background: {
        light: 'rgb(255, 255, 255)',
        dark: 'rgb(50, 50, 50)'
      },
      config: {
        // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
      }
    },
    navbar: {
      title: 'Sevi',
      logo: {
        alt: 'Sevi Logo',
        src: 'img/seviS.svg',
        href: '/docs/intro',

        
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'About',
        },
        {
          to: "docs/buyer/introbuyer",
          position: 'left',
          label: 'Buyer',
        },
        {
          to: "docs/seller/start",
          position: 'left',
          label: 'Seller',
        },
        {
          to: "docs/developer/intro",
          position: 'left',
          label: 'Developer',
        },
        {
          to: "/privacy",
          label: 'Privacy',
          position: 'right',
        },
        {
          to: "/termsConditions",
          label: 'Terms & Conditions (Buyers)',
          position: 'right',
        },
        {
          to: "/termsConditionsSellers",
          label: 'Terms of Service (Sellers)',
          position: 'right',
        },        
      ],
    },
    // footer: {
    //   style: 'dark',
    //   links: [
    //     {
    //       title: 'Docs',
    //       items: [
    //         {
    //           label: 'Tutorial',
    //           to: '/docs/intro',
    //         },
    //       ],
    //     },
    //     {
    //       title: 'Community',
    //       items: [
    //         {
    //           label: 'Stack Overflow',
    //           href: 'https://stackoverflow.com/questions/tagged/docusaurus',
    //         },
    //         {
    //           label: 'Discord',
    //           href: 'https://discordapp.com/invite/docusaurus',
    //         },
    //         {
    //           label: 'Twitter',
    //           href: 'https://twitter.com/docusaurus',
    //         },
    //       ],
    //     },
    //     {
    //       title: 'More',
    //       items: [
    //         {
    //           label: 'Blog',
    //           to: '/blog',
    //         },
    //         {
    //           label: 'GitHub',
    //           href: 'https://github.com/facebook/docusaurus',
    //         },
    //       ],
    //     },
    //   ],
    //   copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    // },
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
            googleAnalytics: {
            trackingID: 'G-ZM57SQP4ZY',
            anonymizeIP: false,
    },
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/sevifinance/Sevi-Docs/blob/main',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ]
};
