export interface Navigation {
  name: string;
  logo: string;
  desc: string;
  href: string;
  tags?: string[];
}

export interface NavigationCategory {
  name: string;
  navigations: Navigation[];
}


export const navigationData: NavigationCategory[] = [
  {
    name: 'Navigation',
    navigations:[],
  },
  {
    name: '------------',
    navigations:[],
  },
  {
    name: 'TopSite',
    navigations:[
      {
        name: 'Fomalhaut🥝',
        desc: '嵌入式大牛个人博客',
        logo: 'https://www.fomal.cn/favicon.ico',
        href: 'https://www.fomal.cn/',
      },
      {
        name: '太空编程',
        desc: '分享硬核且有趣的前端编程知识',
        logo: 'https://spacexcode.com/img/favicon.ico',
        href: 'https://spacexcode.com/',
      },
      {
        name: 'OpenLinker',
        desc: '专注物联网与人工智能',
        logo: 'https://open-linker2.vercel.app/img/favicon.ico',
        href: 'https://open-linker2.vercel.app/',
      },
      {
        name: '朝八晚八',
        desc: '一个懂生活的行政人员',
        logo: 'https://from8to8.com/img/favicon.ico',
        href: 'https://from8to8.com/',
      },
      {
        name: '大扑棱蛾子',
        desc: '高级软件架构师',
        logo: 'https://jdocs.wiki/img/favicon2.png',
        href: 'https://jdocs.wiki/',
      },
      {
        name: 'INDIE TOOLS',
        desc: '独立开发者出海工具收集站',
        logo: 'https://www.indietools.work/favicon.svg',
        href: 'https://www.indietools.work/',
      },
      {
        name: '少数派',
        desc: '高效工作, 品质生活',
        logo: 'https://cdn-static.sspai.com/favicon/sspai.ico',
        href: 'https://sspai.com/',
      },
      {
        name: 'CWorld',
        desc: 'Stay hungry, Stay foolish.',
        logo: 'https://cworld0.com/_image?href=%2F_astro%2Favatar.CKYBHtS3.png&f=webp',
        href: 'https://cworld0.com/',
      },
      {
        name: '峰华前端工程师',
        desc: '致力于以最直观、最快速的前端开发教学',
        logo: 'https://zxuqian.cn/img/favicon.ico',
        href: 'https://zxuqian.cn/',
      },
      {
        name: 'oryoy',
        desc: '极简风格的大佬博客',
        logo: 'https://www.oryoy.com/favicon.ico',
        href: 'https://www.oryoy.com/',
      },
      {
        name: 'Alan',
        desc: '此刻想举重若轻，之前必要负重前行',
        logo: 'https://avatars.githubusercontent.com/u/49978973?v=4',
        href: 'https://www.alanwang.site/',
      },
      {
        name: '狄云',
        desc: '产品、技术相关，想到哪写到哪',
        logo: 'https://files.diyun.site/blog/2024/07/7fae6d19f5561324c078bebcfe19cbff.webp',
        href: 'https://www.diyun.site',
      },
      {
        name: 'One',
        desc: '明心静性，爱自己',
        logo: 'https://wiki.onedayxyy.cn/img/favicon.ico',
        href: 'https://onedayxyy.cn/',
      },
    ],
  },
  {
    name: 'WebTools',
    navigations:[
      {
        name: 'NGINX 配置',
        desc: '配置高性能、安全、稳定的NGINX服务器的最简单方法',
        logo: 'https://www.digitalocean.com/_next/static/media/apple-touch-icon.d7edaa01.png',
        href: 'https://www.digitalocean.com/community/tools/nginx',
      },
      {
        name: 'vuepress-theme-vdoing',
        desc: '一款简洁高效的VuePress 知识管理&博客 主题',
        logo: 'https://doc.xugaoyi.com/img/favicon.ico',
        href: 'https://doc.xugaoyi.com',
      },
      {
        name: 'framer',
        desc: '基于PS原型设计图的低代码博客设计',
        logo: 'https://framerusercontent.com/images/p0xWJXje0Ix6GxLa9iOrfxr7g.svg',
        href: 'https://www.framer.com/',
      },
      {
        name: 'Webflow',
        desc: '优质的无代码建站工具',
        logo: 'https://cdn.prod.website-files.com/64f794cdbc8227dafd183278/64f8a6d532452784f72a75d1_favicon.png',
        href: 'https://webflow.com/',
      },
      // {
      //   name: 'BootCDN',
      //   desc: '稳定、快速、免费的前端开源项目 CDN 加速服务',
      //   logo: 'https://www.bootcdn.cn/assets/ico/favicon.ico',
      //   href: 'https://www.bootcdn.cn/',
      // },
      // {
      //   name: 'JS delivr',
      //   desc: '一个免费的CDN开源项目',
      //   logo: 'https://www.jsdelivr.com/favicon.ico',
      //   href: 'https://www.jsdelivr.com/',
      // },
      // {
      //   name: 'Can I use',
      //   desc: '对浏览器支持的 API 兼容性查询',
      //   logo: 'https://caniuse.com/img/favicon-128.png',
      //   href: 'https://caniuse.com',
      // },
      // {
      //   name: 'wordpress',
      //   desc: '计划用作笔记的博客系统',
      //   logo: 'https://s.w.org/favicon.ico?2',
      //   href: 'https://wordpress.org/',
      // },
    ],
  },
  {
    name: 'AI',
    navigations:[
      {
        name: 'V0',
        desc: '可生成前端组件的AI工具',
        logo: 'https://v0.dev/assets/icon.svg',
        href: 'https://v0.dev/',
      },
      {
        name: 'Cursor',
        desc: '助力Al编程',
        logo: 'https://www.cursor.com/favicon.ico',
        href: 'https://www.cursor.com/',
      },
      {
        name: 'kimi',
        desc: '会推理解析,能深度思考的AI助手',
        logo: 'https://statics.moonshot.cn/kimi-chat/favicon.ico',
        href: 'https://kimi.moonshot.cn/',
      },
      {
        name: '豆包',
        desc: '字节跳动旗下AI 智能助手',
        logo: 'https://lf-flow-web-cdn.doubao.com/obj/flow-doubao/doubao/web/logo-icon.png',
        href: 'https://www.doubao.com/chat/',
      },
      // {
      //   name: '',
      //   desc: '',
      //   logo: '',
      //   href: '',
      // },
    ],
  },
  {
    name: 'Word',
    navigations:[
      // {
      //   name: 'namae',
      //   desc: 'namae可让您给您的应用程序、Web服务或组织起一个好名字',
      //   logo: 'https://namae.dev/favicon.ico',
      //   href: 'https://namae.dev/',
      // },
      // {
      //   name: '正则大全',
      //   desc: '🦕 常用正则大全, 支持web / vscode / idea / Alfred Workflow多平台',
      //   logo: 'https://any-rule.vercel.app/favicon.ico',
      //   href: 'https://any-rule.vercel.app/',
      // },
      // {
      //   name: '今日诗句',
      //   desc: '每次返回一句诗词',
      //   logo: 'https://www.jinrishici.com/img/icon-small.png',
      //   href: 'https://www.jinrishici.com/',
      // },
      // {
      //   name: '谷歌字体',
      //   desc: '各种各样的字体, 总有一个被你喜欢',
      //   logo: 'https://googlefonts.cn/Public/fonts/zh-cn/gstatic/google_fonts_lodp.ico',
      //   href: 'https://googlefonts.cn/',
      // },
      {
        name: 'Typing SVG',
        desc: '一个动态生成的可自定义 SVG 打字效果',
        logo: 'https://readme-typing-svg.herokuapp.com/demo/favicon.png',
        href: 'https://readme-typing-svg.herokuapp.com/demo/',
      },
    ],
  },
  {
    name: 'Picture',
    navigations:[
      {
        name: 'Fontwesome',
        desc: '可以获得优质的website图标(ico), 减少网站的麻烦, 包括亮暗主题',
        logo: 'https://fontawesome.com/favicon.ico',
        href: 'https://fontawesome.com/',
      },
      {
        name: 'iconfont',
        desc: '阿里巴巴矢量图标库',
        logo: 'https://img.alicdn.com/imgextra/i4/O1CN01XZe8pH1USpiUNT1QN_!!6000000002517-2-tps-114-114.png',
        href: 'https://www.iconfont.cn/',
      },
      {
        name: 'Octodex',
        desc: '你还在苦恼用什么头像合适吗?',
        logo: 'https://github.githubassets.com/favicons/favicon.svg',
        href: 'https://octodex.github.com/',
      },
      {
        name: 'robohash',
        desc: '独特的图像',
        logo: 'https://robohash.org/favicon.ico',
        href: 'https://robohash.org/',
      },
      {
        name: 'Wallhaven',
        desc: '首推优质壁纸网站',
        logo: 'https://wallhaven.cc/favicon.ico',
        href: 'https://wallhaven.cc/',
      },
      {
        name: 'pinterest',
        desc: '给出灵感的图片',
        logo: 'https://s.pinimg.com/webapp/favicon_48x48-7470a30d.png',
        href: 'https://www.pinterest.com/',
      },
      // {
      //   name: 'feathericons',
      //   desc: '简单美丽的开源图标',
      //   logo: 'https://feathericons.com/favicon.ico',
      //   href: 'https://feathericons.com/',
      // },
      // {
      //   name: 'undraw',
      //   desc: '一个不断更新的设计项目与美丽的SVG图像，使用完全免费',
      //   logo: 'https://undraw.co/apple-touch-icon.png',
      //   href: 'https://undraw.co/',
      // },
      // {
      //   name: 'Terminal Gif Maker',
      //   desc: '在线生成 Terminal GIF',
      //   logo: 'https://www.terminalgif.com/favicon.ico',
      //   href: 'https://www.terminalgif.com',
      // },
    ],
  },
  {
    name: '3D',
    navigations:[
      {
        name: "Awwwards",
        desc: "优质的3D网页设计平台",
        logo: "https://assets.awwwards.com/assets/images/favicon.svg",
        href: "https://www.awwwards.com/",
      },
      {
        name: "React Three Fiber",
        desc: "ThreeJS的React渲染库",
        logo: "",
        href: "https://github.com/pmndrs/react-three-fiber",
      },
    ],
  },
  {
    name: 'UI',
    navigations:[
      {
        name: "Aceternity",
        desc: "视觉冲击力十足的组件库",
        logo: "https://ui.aceternity.com/favicon.ico",
        href: "https://ui.aceternity.com/",
      },
      {
        name: "Magic",
        desc: "免费开源动画组件",
        logo: "https://magicui.design/icon.png",
        href: "https://magicui.design/",
      },
      {
        name: "Cult",
        desc: "React的即用型组件库",
        logo: "https://www.cult-ui.com/favicon.ico",
        href: "https://www.cult-ui.com/",
      },
    ],
  },
  // {
  //   name: 'WebStudy',
  //   navigations:[
  //     {
  //       name: "Developer Roadmap",
  //       desc: "Roadmap to becoming a web developer.",
  //       logo: "https://roadmap.sh/manifest/favicon.ico",
  //       href: "https://roadmap.sh/",
  //     },
  //     {
  //       name: '程序员盒子',
  //       desc: '程序员一站式编程站点，专注于程序员学习编程提效，官网',
  //       logo: 'https://www.coderutil.com/favicon.ico',
  //       href: 'https://www.coderutil.com/',
  //     },
  //     {
  //       name: 'MDN',
  //       desc: '从2005年开始记录网络技术，包括 CSS、 HTML 和 JavaScript。',
  //       logo: 'https://developer.mozilla.org/favicon-192x192.png',
  //       href: 'https://developer.mozilla.org/zh-CN/',
  //     },
  //     {
  //       name: 'ES6 入门教程',
  //       desc: '《ECMAScript 6 入门教程》是一本开源的 JavaScript 语言教程，全面介绍 ECMAScript 6 新引入的语法特性',
  //       logo: 'https://es6.ruanyifeng.com/favicon.ico',
  //       href: 'https://es6.ruanyifeng.com/',
  //     },
  //     {
  //       name: '深入理解 TypeScript',
  //       desc: '《TypeScript Deep Dive》 是一本很好的开源书，从基础到深入，很全面的阐述了 TypeScript 的各种魔法，不管你是新手，还是老鸟，它都将适应你',
  //       logo: 'https://jkchao.github.io//typescript-book-chinese/logo.png',
  //       href: 'https://jkchao.github.io/typescript-book-chinese/',
  //     },
  //     {
  //       name: 'w3schools Css 教程',
  //       desc: 'w3schools 从基础到高级的CSS教程',
  //       logo: 'https://www.w3schools.com/favicon.ico',
  //       href: 'https://www.w3schools.com/css',
  //     },
  //     {
  //       name: 'Quick Reference',
  //       desc: '为开发人员分享快速参考备忘清单【速查表】',
  //       logo: 'https://wangchujiang.com/reference/icons/favicon.svg',
  //       href: 'https://jaywcjlove.github.io/reference',
  //     },
  //   ],
  // },
  // {
  //   name: 'OnlineDev',
  //   navigations:[
  //     {
  //       name: 'CodePen',
  //       desc: '是构建、测试和发现前端代码的最佳场所',
  //       logo: 'https://cpwebassets.codepen.io/assets/favicon/favicon-aec34940fbc1a6e787974dcd360f2c6b63348d4b1f4e06c77743096d55480f33.ico',
  //       href: 'https://codepen.io/',
  //     },
  //     {
  //       name: 'Stackblitz',
  //       desc: 'Stackblitz在流程中保持即时的开发体验。没有更多的小时储存/拉/安装本地-只需点击，并开始编码',
  //       logo: '/img/website/stackblitz.png',
  //       href: 'https://stackblitz.com/',
  //     },
  //     {
  //       name: '菜鸟工具',
  //       desc: '支持前端的常用在线工具集合',
  //       logo: 'https://636f-codenav-8grj8px727565176-1256524210.tcb.qcloud.la/img/FD715D45-8A4B-4B77-BDA1-D75D7226AACB.jpeg-1609660318596',
  //       href: 'https://c.runoob.com/',
  //     },
  //   ],
  // },
  {
    name: 'ReactEcology',
    navigations: [
      {
        name: 'React',
        desc: '用于构建用户界面的 JavaScript 库',
        logo: 'https://react.dev/favicon.ico',
        href: 'hhttps://react.dev/',
      },
      // {
      //   name: 'Next.js',
      //   desc: 'Next.js 为您提供生产环境所需的所有功能以及最佳的开发体验：包括静态及服务器端融合渲染、 支持 TypeScript、智能化打包、 路由预取等功能 无需任何配置',
      //   logo: 'https://nextjs.org/static/favicon/favicon.ico',
      //   href: 'https://nextjs.org/',
      // },
      // {
      //   name: 'zustand',
      //   desc: '一种小型、快速且可扩展的 Bearbones 状态管理解决方案，使用简化的通量原理。拥有基于钩子的舒适 API，不是样板文件或固执己见。',
      //   logo: 'https://raw.githubusercontent.com/pmndrs/zustand/main/docs/favicon.ico',
      //   href: 'https://docs.pmnd.rs/zustand/',
      // },
      // {
      //   name: 'react-use',
      //   desc: '一个强大的 React Hooks 库',
      //   logo: 'https://reactjs.org/favicon.ico',
      //   href: 'https://github.com/streamich/react-use',
      // },
      // {
      //   name: 'SWR',
      //   desc: '用于数据请求的 React Hooks 库',
      //   logo: 'https://swr.vercel.app/favicon/favicon.svg',
      //   href: 'https://swr.vercel.app/',
      // },
      // {
      //   name: 'TanStack Query',
      //   desc: '适用于 TS/JS、React、Solid、Vue 和 Svelte 的强大异步状态管理',
      //   logo: 'https://tanstack.com/favicons/apple-touch-icon.png',
      //   href: 'https://tanstack.com/query/latest/',
      // },
      {
        name: 'Framer Motion',
        desc: '一个用于React的开源动画库，提供简单易用的API来创建流畅、高性能的动画效果，使Web应用程序和界面变得更加生动和吸引人。',
        logo: 'https://www.framer.com/images/favicons/favicon.png',
        href: 'https://www.framer.com/motion',
      },
      // {
      //   name: 'UmiJS',
      //   desc: '用 Umi 构建你的下一个应用，带给你简单而愉悦的 Web 开发体验',
      //   logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
      //   href: 'https://umijs.org',
      // },
    ],
  },
  // {
  //   name: 'Component',
  //   navigations: [
  //     {
  //       name: 'Ant Design',
  //       desc: '一套企业级 UI设计语言和 React 组件库',
  //       logo: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
  //       href: 'https://ant.design',
  //     },
  //     {
  //       name: 'shadcn/ui',
  //       desc: '设计精美的组件，您可以将其复制并粘贴到您的应用程序中。无障碍。可定制。开源。',
  //       logo: 'https://ui.shadcn.com/favicon.ico',
  //       href: 'https://ui.shadcn.com/',
  //     },
  //     {
  //       name: 'TDesign',
  //       desc: 'TDesign 是腾讯各业务团队在服务业务过程中沉淀的一套企业级设计体系',
  //       logo: 'https://tdesign.tencent.com/favicon.ico',
  //       href: 'https://tdesign.tencent.com/',
  //     },
  //     {
  //       name: 'Arco Design',
  //       desc: '字节跳动出品的企业级设计系统',
  //       logo: 'https://unpkg.byted-static.com/latest/byted/arco-config/assets/favicon.ico',
  //       href: 'https://arco.design/',
  //     },
  //     {
  //       name: 'Vuetify',
  //       desc: 'Vuetify 是一个 Vue UI 库，包含手工制作的精美材料组件。不需要设计技能 - 创建令人惊叹的应用程序所需的一切都触手可及',
  //       logo: 'https://vuetify.cn/favicon.ico',
  //       href: 'https://vuetify.cn/',
  //     },
  //     {
  //       name: 'MUI',
  //       desc: '当下流行的 React UI 框架',
  //       logo: 'https://mui.com/static/favicon.ico',
  //       href: 'https://mui.com',
  //     },
  //   ],
  // },
  {
    name: 'CSS',
    navigations:[
  //    {
  //       name: 'Bootstrap',
  //       desc: 'Bootstrap 是全球最受欢迎的前端开源工具库，它支持 Sass 变量和 mixin、响应式栅格系统、自带大量组件和众多强大的 JavaScript 插件。基于 Bootstrap 提供的强大功能，能够让你快速设计并定制你的网站',
  //       logo: 'https://img.kuizuo.cn/20210907055816.png',
  //       href: 'https://v5.bootcss.com/',
  //     },
  //     {
  //       name: 'CSS常用样式',
  //       desc: 'CSS常用样式',
  //       logo: 'https://tse1-mm.cn.bing.net/th?id=OIP-C.EgSPriuEnAtlIWJV8R_E1QHaGs&w=107&h=100&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2',
  //       href: 'https://github.com/QiShaoXuan/css_tricks',
  //     },
      {
        name: 'TailwindCSS',
        desc: 'Tailwind CSS 是一个功能类优先的 CSS 框架，它集成了诸如 flex, pt-4, text-center 和 rotate-90 这样的的类，它们能直接在脚本标记语言中组合起来，构建出任何设计',
        logo: 'https://www.tailwindcss.cn/favicon-32x32.png',
        href: 'https://www.tailwindcss.cn',
      },
  //     {
  //       name: 'loading.io',
  //       desc: 'Animation Made Easy',
  //       logo: 'https://loading.io/favicon.png',
  //       href: 'https://loading.io/',
  //     },
  //     {
  //       name: '神奇UI样式',
  //       desc: '我们赋予任何人创建、分享和使用用 CSS 和 HTML 制作的漂亮自定义元素的权力。',
  //       logo: 'https://uiverse.io/favicon-32x32.png',
  //       href: 'https://uiverse.io',
  //     },
  //     {
  //       name: 'CSS BUD',
  //       desc: '一些CSS文本样式',
  //       logo: 'https://cssbud.com/wp-content/uploads/2020/04/cssbud-logo.png',
  //       href: 'http://cssbud.com/',
  //     },
    ],
  },
  {
    name: 'Handbook',
    navigations:[
      {
        name: 'CMake 中文文档',
        desc: '热心网友根据官方教程翻译的文档',
        logo: 'https://sfumecjf.github.io/favicon.ico',
        href: 'https://sfumecjf.github.io/cmake-examples-Chinese/',
      },
      {
        name: '半导小芯',
        desc: '都在用的芯片查询工具',
        logo: 'https://www.semiee.com/static/favicon.ico',
        href: 'http://www.semiee.com/',
      },
      {
        name: '印记中文',
        desc: '深入挖掘国外前端新领域，为国内 Web 前端开发人员提供优质文档！',
        logo: 'https://docschina.org/favicon.svg',
        href: 'https://docschina.org/',
      },
      {
        name: 'Docusaurus',
        desc: 'Docusaurus的中文文档',
        logo: 'https://docusaurus.org.cn/img/docusaurus.ico',
        href: 'https://docusaurus.org.cn',
      },
      {
        name: 'MDN Web Docs',
        desc: '关于Web 最全面、最新和最专业的文档',
        logo: 'https://developer.mozilla.org/favicon-192x192.png',
        href: 'https://developer.mozilla.org/',
      },
    ],
  },
  {
    name: 'Github',
    navigations: [
      {
        name: 'Gitstar Ranking',
        desc: '针对用户、组织和存储库的非官方 GitHub 星级排名',
        logo: 'https://gitstar-ranking.com/favicon.ico',
        href: 'https://gitstar-ranking.com/',
      },
      // {
      //   name: 'Metrics',
      //   desc: 'Create your own metrics',
      //   logo: 'https://metrics.lecoq.io/.favicon.png',
      //   href: 'https://metrics.lecoq.io/',
      // },
      {
        name: 'Github主页 README 生成器',
        desc: '一个Github 个人主页 README 生成器',
        logo: 'https://rahuldkjain.github.io/gh-profile-readme-generator/icons/icon-144x144.png?v=040f54e2f6c858e0a3dcf568c3f2b6f1',
        href: 'https://rahuldkjain.github.io/gh-profile-readme-generator/',
      },
      // {
      //   name: 'Github 统计生成器',
      //   desc: 'Github 在你的 README 中获取动态生成的 GitHub 统计信息！',
      //   logo: '',
      //   href: 'https://github.com/anuraghazra/github-readme-stats',
      // },
    ],
  },
  {
    name: 'Interesting',
    navigations:[
      // {
      //   name: 'removebg',
      //   desc: '在线抠图软件，可以去除图片背景',
      //   logo: 'https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://www.remove.bg/zh&size=50',
      //   href: 'https://www.remove.bg/zh/',
      // },
      // {
      //   name: 'Unscreen',
      //   desc: '移除任何视频的背景 — — 100% 自动，在线且免费',
      //   logo: 'https://www.unscreen.com/favicon.ico',
      //   href: 'https://www.unscreen.com/',
      // },
      // {
      //   name: '音乐解锁',
      //   desc: '移除已购音乐的加密保护',
      //   logo: 'https://demo.unlock-music.dev/favicon.ico',
      //   href: 'https://demo.unlock-music.dev/',
      // },
      // {
      //   name: 'DeepL 翻译',
      //   desc: '号称全世界最准的翻译',
      //   logo: 'https://static.deepl.com/img/logo/DeepL_Logo_darkBlue_v2.svg',
      //   href: 'https://www.deepl.com/translator/',
      // },
      {
        name: 'Qwerty Learner',
        desc: '英文单词记忆与输入的肌肉记忆练习, 有vscode插件版呦~',
        logo: 'https://qwerty.kaiyi.cool/favicon.ico',
        href: 'https://qwerty.kaiyi.cool/',
      },
      {
        name: 'Typelit',
        desc: '可以边看古典小说边练习打字速度',
        logo: 'https://www.typelit.io/favicon.ico',
        href: 'https://www.typelit.io/',
      },
      {
        name: '在线工具箱',
        desc: '在线工具,开发人员工具,代码格式化、压缩、加密、解密,下载链接转换,ico图标制作,字帖生成',
        logo: 'https://tool.lu/favicon.ico',
        href: 'https://tool.lu/',
      },
      {
        name: '依奇',
        desc: '在线超级转换工具',
        logo: 'https://www.wdku.net/static/ico/favicon.ico',
        href: 'https://www.wdku.net/',
      },
      {
        name: '菜鸟工具',
        desc: '不至于工具',
        logo: 'https://static.jyshare.com/images/c-runoob-logo.ico',
        href: 'https://www.jyshare.com/',
      },
    ],
  },
  // {
  //   name: '',
  //   navigations:[],
  // },
];
