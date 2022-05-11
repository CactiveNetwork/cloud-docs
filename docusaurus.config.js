// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '☁️ Cloud Docs',
  tagline: 'Documentation for cactive.cloud',
  url: 'https://docs.cactive.cloud',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/CactiveNetwork/cloud-docs/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/CactiveNetwork/cloud-docs/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '☁️ Home',
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: '📖 Docs',
          },
          {
            href: 'https://github.com/CactiveNetwork/cloud-docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Welcome',
                to: '/docs/intro',
              },
              {
                label: 'ccloud CLI',
                to: '/docs/cli/ccloud',
              },
              {
                label: 'ccloud-setup',
                to: '/docs/cli/ccloud-setup',
              }
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/NeqVuSy',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/CactiveNetwork',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: '☁️ Cloud',
                href: 'https://cactive.cloud',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/CactiveNetwork/cloud-docs',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} CactiveCloud, CactiveNetwork.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
