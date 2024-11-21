const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: "ek's notebook",
  url: 'https://wiki.eksnotebook.com',
  baseUrl: '/',
  // onBrokenLinks: 'throw',
  // onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'electrical-killer', // Usually your GitHub org/user name.
  projectName: 'https://github.com/electrical-killer/notebook', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/electrical-killer/notebook/tree/master',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/electrical-killer/notebook/tree/master',
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
        title: 'NoteBook',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          // {to: '/blog', label: 'Blog', position: 'left'},
          // {to: 'http://127.0.0.1:5500/', label: 'Home', position: 'left'},
          {to: 'https://www.eksnotebook.com', label: 'Home', position: 'left'},
          {
            label: 'Baisc',
            position: 'left',
            items: [
              { label: 'Code', to: '/docs/basic_code',},
              { label: 'Data Structure', to: '/docs/basic_data',},
              { label: 'Algorithm', to: '/docs/basic_algorithm',},
              { label: 'Design Mode', to: '/docs/basic_design_mode',},
              { label: 'Computer', to: '/docs/basic_computer',},
            ],
          },
          {
            label: 'Subject',
            position: 'left',
            items: [
              { label: 'Embedded', to: '/docs/subject_embedded',},
              { label: 'Linux', to: '/docs/subject_linux',},
              { label: 'Tcpip', to: '/docs/subject_tcpip',},
              { label: 'Web', to: '/docs/subject_web',},
            ],
          },
          {
            label: 'Project',
            position: 'left',
            items: [
              { label: 'P-WEB', to: '/docs/project_web',},
              { label: 'P-IOT', to: '/docs/project_iot',},
            ],
          },
          // {
          //   label: 'Other',
          //   position: 'left',
          //   items: [
          //   ],
          // },
          {
            label: 'Tools',
            position: 'left',
            to: '/docs/subject_tools',
          },
          // {
          //   to: '/friends',
          //   label: 'Friends',
          //   position: 'right',
          // },
          {
            href: 'https://github.com/electrical-killer',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Link',
            items: [
              {
                label: '起始页',
                // to: 'http://127.0.0.1:5500/',
                to: 'https://www.eksnotebook.com',
              },
              {
                label: '博客',
                to: '/blog',
              },
              // {
              //   label: '导航',
              //   to: '/website',
              // },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              // {
              //   label: 'Friends',
              //   to: '/friends',
              // },
              // {
              //   label: 'About Me',
              //   to: '/about',
              // },
              {
                label: 'GitHub',
                href: 'https://github.com/electrical-killer',
              },
              {
                html: `
                  <a href="https://docusaurus.io" target="_blank" rel="noreferrer noopener">
                    <img src="/img/buildwith.png" alt="build with docusaurus" width="120" height="50"/>
                  <a/>
                  `,
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      // i18n: {
      //   defaultLocale: 'zh-CN',
      //   locales: ['en', 'zh-CN'],
      //   localeConfigs: {
      //     en: {
      //       htmlLang: 'en-GB',
      //     },
      //   },
      // },
    }),
});
