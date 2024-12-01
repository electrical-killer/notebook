import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import type { GiscusConfig } from './src/components/Discuss'

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "ek's notebook",
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://wiki.eksnotebook.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'electrical-killer', // Usually your GitHub org/user name.
  projectName: 'https://github.com/electrical-killer/notebook', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: 'https://github.com/electrical-killer/notebook.docs/tree/master',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: 'https://github.com/electrical-killer/notebook.blog/tree/master',

          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg', //! 注意替换
    navbar: {
      title: 'NoteBook',
      hideOnScroll: true, // 自动隐藏导航栏
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {to: 'https://eksnotebook.com', label: 'Home', position: 'left'},
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
              to: 'https://eksnotebook.com',
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
      copyright: `<p style="margin-bottom: 0;">
                    <a href="http://beian.miit.gov.cn/">
                      蒙ICP备2024020206号
                    </a>
                  </p>
                  <p style="display: inline-flex; align-items: center;">
                    <img style="height:20px;margin-right: 0.5rem;" src="/img/police.png" alt="police" height="20"/>
                    <a href="https://beian.mps.gov.cn/#/query/webSearch" >
                      ...
                    </a>
                  </p>
                  <p>Copyright © ${new Date().getFullYear()} Electrical Killer, Inc. Built with Docusaurus.</p>
                  <p>Great things are done by a series of small things brought together. -- Vincent Van Gogh</p>`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    // 配置giscus
    giscus: {
      repo:'electrical-killer/notebook.discus',
      repoId:'R_kgDONXMPYA',
      category:'Announcements',
      categoryId:'DIC_kwDONXMPYM4CkxZM',
      theme: 'light',
      darkTheme: 'dark_dimmed',
    } satisfies Partial<GiscusConfig>,
    //
  } satisfies Preset.ThemeConfig,
  clientModules: [require.resolve('./src/clientModules/routeModules.ts')]
};

export default config;
