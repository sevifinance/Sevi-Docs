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
  plugins: ['@docusaurus/plugin-google-analytics'],
  themeConfig: {
    googleAnalytics: {     
       trackingID: 'UA-208502643-1', 
       anonymizeIP: false, 
  },
    navbar: {
      title: 'Sevi', 
      logo: {
        alt: 'Sevi Logo',
        src: 'img/seviS.svg',
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
          to: "docs/developer/APItoken",
          position: 'left',
          label: 'Developer',
        },     
        // { to: '/blog', label: 'Blog', position: 'left' },
        {
          to: "/privacy",
          label: 'Privacy',
          position: 'right',
        },
        {
          to: "/termsConditions",
          label: 'Terms & Conditions',
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
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/sevifinance/Sevi-Docs/blob/main',
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
