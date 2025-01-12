import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import type { GiscusConfig } from './src/components/Discuss'

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "ek's notebook",
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  headTags: [
    {
      tagName: 'script',
      attributes: {
        defer: "true",
        src: "https://cloud.umami.is/script.js",
        "data-website-id": "d976bbc0-80fa-4e13-b7dc-343543d2437a",
      },
    },
  ],
  
  // Set the production url of your site here
  url: 'https://eksnotebook.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'electrical-killer', // Usually your GitHub org/user name.
  projectName: 'https://github.com/electrical-killer/notebook', // Usually your repo name.

  /* 遇到断开的链接, 选择抛出错误警告, 不会报错无法编译 */
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  onBrokenAnchors: 'log',

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
          customCss: ['./src/css/custom.css', './src/css/tweet-theme.css'],
        },
        sitemap: {
          priority: 0.5,
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    ["docusaurus-plugin-image-zoom", {}],
    ["@docusaurus/plugin-ideal-image", {}],
    // async function myPlugin(context, options) {
    //   return {
    //     name: 'docusaurus-tailwindcss',
    //     configurePostCss(postcssOptions) {
    //       // Appends TailwindCSS and AutoPrefixer.
    //       postcssOptions.plugins.push(require('tailwindcss'));
    //       postcssOptions.plugins.push(require('autoprefixer'));
    //       return postcssOptions;
    //     },
    //   };
    // },
    async function tailwindcssPlugin() {
      return {
        name: 'docusaurus-tailwindcss',
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require('tailwindcss'))
          postcssOptions.plugins.push(require('autoprefixer'))
          return postcssOptions
        },
      }
    },
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg', //! 注意替换
    /* 默认主题色 */
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
    },
    docs: {
      sidebar: {
        hideable: true, // 允许隐藏整个侧边栏
        autoCollapseCategories: true, // 展开一个类别时自动折叠其他类别
      },
    },
    navbar: {
      title: 'NoteBook',
      style: 'dark',
      hideOnScroll: true, // 自动隐藏导航栏
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        // {to: 'https://eksnotebook.com', label: 'Home', position: 'left'},
        // {to: '/blog', label: 'Blog', position: 'left'},
        {
          label: 'Baisc',
          position: 'left',
          items: [
            { label: 'Code', to: '/docs/basic_code',},
            // { label: 'Data Structure', to: '/docs/basic_data',},
            // { label: 'Algorithm', to: '/docs/basic_algorithm',},
            // { label: 'Design Mode', to: '/docs/basic_design_mode',},
            // { label: 'Computer', to: '/docs/basic_computer',},
          ],
        },
        {
          label: 'Subject',
          position: 'left',
          items: [
            { label: 'Embedded', to: '/docs/subject_embedded',},
            { label: 'Linux', to: '/docs/subject_linux',},
            // { label: 'Tcpip', to: '/docs/subject_tcpip',},
            { label: 'Web', to: '/docs/subject_web',},
          ],
        },
        {
          label: 'Project.Docx',
          position: 'left',
          to: '/docs/project.docx',
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
        {
          label: 'About',
          position: 'right',
          items: [
            { label: 'Friends', to: '/friends',},
            { label: 'Me', to: '/me',},
            { label: 'Website', to: '/website',},
          ],
        },
        {
          label: 'Warehouse',
          position: 'right',
          items: [
            { label: 'GitHub', to: 'https://github.com/electrical-killer',},
            { label: 'Gitee', to: 'https://gitee.com/electrical-killer',},
          ],
        },
      ],
    },
/*     footer: {
      style: 'dark',
      links: [
        {
          title: 'Link',
          items: [
            {
              label: '最美主页',
              to: 'https://page.eksnotebook.com',
            },
            {
              label: '翻译计划',
              to: '.',
            },
            {
              label: '项目展柜',
              to: '/projects',
            },
            {
              label: '有趣导航',
              to: '/navigation',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'E-mail',
              href: 'mailto:1670210410@qq.com',
            },
            {
              label: 'WeChat',
              href: 'https://img.eksnotebook.com/images/202411161854161.png',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: '访问统计',
              to: 'https://cloud.umami.is/share/B14wXOsk9mZbLznR/eksnotebook.com',
            },
            {
              label: '站点监控',
              to: '.',
            },
            {
              label: '博客归档',
              to: '/blog/archive',
            },
          ],
        },
      ],
      // copyright: `<p style="margin-bottom: 0;">
      //               <a href="http://beian.miit.gov.cn/">
      //                 蒙ICP备2024020206号
      //               </a>
      //             </p>
      //             <p style="display: inline-flex; align-items: center;">
      //               <img style="height:20px;margin-right: 0.5rem;" src="/img/police.png" alt="police" height="20"/>
      //               <a href="https://beian.mps.gov.cn/#/query/webSearch" >
      //                 ...
      //               </a>
      //             </p>
      //             <p>Copyright © 2024 - ${new Date().getFullYear()} Electrical Killer, Inc. Built with Docusaurus.</p>
      //             <p>Great things are done by a series of small things brought together. -- Vincent Van Gogh</p>`,
      copyright: `<p style="margin-bottom: 0;">
                    <a href="http://beian.miit.gov.cn/">
                      蒙ICP备2024020206号
                    </a>
                  </p>
                  <p>Copyright © 2024 - ${new Date().getFullYear()} Electrical Killer, Inc. Built with Docusaurus.</p>`,
    }, */
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
    // 图片放大插件
    zoom: {
      selector: '.markdown img',
      config: {
        margin:0,
        background: {
            light: 'rgb(255, 255, 255)',
            dark: 'rgb(50, 50, 50)'
        }
      }
    },
  } satisfies Preset.ThemeConfig,
  clientModules: [require.resolve('./src/clientModules/routeModules.ts')]
};

export default config;
