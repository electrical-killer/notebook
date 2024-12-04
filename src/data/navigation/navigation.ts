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
    name: '🔗导航栏',
    navigations:[],
  },
  {
    name: '------------',
    navigations:[],
  },
  {
    name: '优质网站',
    navigations:[
      {
        name: 'Fomalhaut🥝',
        desc: '嵌入式大牛个人博客',
        logo: 'https://www.fomal.cn/favicon.ico',
        href: 'https://www.fomal.cn/',
      },
    ],
  },
  {
    name: '建站工具',
    navigations:[
      {
        name: 'NGINX 配置',
        desc: '配置高性能、安全、稳定的NGINX服务器的最简单方法',
        logo: 'https://www.digitalocean.com/_next/static/media/apple-touch-icon.d7edaa01.png',
        href: 'https://www.digitalocean.com/community/tools/nginx',
      },
      {
        name: 'BootCDN',
        desc: '稳定、快速、免费的前端开源项目 CDN 加速服务',
        logo: 'https://www.bootcdn.cn/assets/ico/favicon.ico',
        href: 'https://www.bootcdn.cn/',
      },
    ],
  },
  {
    name: '建站文字',
    navigations:[
      {
        name: '正则大全',
        desc: '🦕 常用正则大全, 支持web / vscode / idea / Alfred Workflow多平台',
        logo: 'https://any-rule.vercel.app/favicon.ico',
        href: 'https://any-rule.vercel.app/',
      },
      {
        name: 'Hitokoto - 一言',
        desc: '随机分享一句话',
        logo: 'https://hitokoto.cn/favicon.ico',
        href: 'https://hitokoto.cn/',
      },
      {
        name: '一句',
        desc: '汇聚有料文字',
        logo: 'http://yijuzhan.com/favicon.ico',
        href: 'http://yijuzhan.com/',
      },
      {
        name: '今日诗句',
        desc: '每次返回一句诗词',
        logo: 'https://www.jinrishici.com/img/icon-small.png',
        href: 'https://www.jinrishici.com/',
      },
    ],
  },
  {
    name: '建站图源',
    navigations:[
      {
        name: 'Fontwesome',
        desc: '可以获得优质的website图标(ico), 减少网站的麻烦, 包括亮暗主题',
        logo: 'https://fontawesome.com/favicon.ico',
        href: 'https://fontawesome.com/',
      },
      {
        name: 'Svgsilh',
        desc: '优质的小型svg格式插图',
        logo: 'https://svgsilh.com/favicon.ico',
        href: 'https://svgsilh.com/',
      },
      {
        name: '那些免费的砖',
        desc: '发现免费可商用的资源',
        logo: 'https://img.thosefree.com/static/logo.png',
        href: 'https://www.thosefree.com/',
      },
      {
        name: 'Shields.io',
        desc: '为你的开源项目生成高质量小徽章图标',
        logo: 'https://shields.io/img/logo.png',
        href: 'https://shields.io/',
      },
      {
        name: 'Favicon.io',
        desc: '可以生成带有调整的网站图标 SVG 代码、生成基于文本的网站图标或生成基于表情符号的网站图标',
        logo: 'https://favicon.io/assets/static/favicon.b9532cc.ed88c65f76fa003989a0c683d668c765.png',
        href: 'https://favicon.io/',
      },
      {
        name: 'feathericons',
        desc: '简单美丽的开源图标',
        logo: 'https://feathericons.com/favicon.ico',
        href: 'https://feathericons.com/',
      },
      {
        name: 'undraw',
        desc: '一个不断更新的设计项目与美丽的SVG图像，使用完全免费',
        logo: 'https://undraw.co/apple-touch-icon.png',
        href: 'https://undraw.co/',
      },
      {
        name: 'igoutu',
        desc: '图标、插图、照片、音乐和设计工具',
        logo: 'https://igoutu.cn/vue-static/landings/primary-landings/favs/icons8_fav_32%C3%9732.png',
        href: 'https://igoutu.cn/',
      },
      {
        name: 'Emojiall',
        desc: 'Emoji表情大全',
        logo: 'https://www.emojiall.com/apple-touch-icon.png',
        href: 'https://www.emojiall.com/zh-hans',
      },
      {
        name: '渐变色网站',
        desc: '数百万个自动生成的渐变的网站',
        logo: 'https://gradihunt.com/favicon.ico',
        href: 'https://gradihunt.com/',
      },
      {
        name: '谷歌字体',
        desc: '一个生成渐变色背景的网站',
        logo: 'https://googlefonts.cn/Public/fonts/zh-cn/gstatic/google_fonts_lodp.ico',
        href: 'https://googlefonts.cn/',
      },
      {
        name: 'Typing SVG',
        desc: '一个动态生成的可自定义 SVG 打字效果',
        logo: 'https://readme-typing-svg.herokuapp.com/demo/favicon.png',
        href: 'https://readme-typing-svg.herokuapp.com/demo/',
      },
      {
        name: 'DrawKit',
        desc: '免费的矢量 SVG 插图，供您在下一个项目中使用，不需要署名',
        logo: 'https://www.drawkit.io/favicon.ico',
        href: 'https://www.drawkit.io/',
      },
    ],
  },
  {
    name: 'web学习',
    navigations:[
      {
        name: "Developer Roadmap",
        desc: "Roadmap to becoming a web developer.",
        logo: "https://roadmap.sh/manifest/favicon.ico",
        href: "https://roadmap.sh/",
      },
      {
        name: '程序员盒子',
        desc: '程序员一站式编程站点，专注于程序员学习编程提效，官网',
        logo: 'https://www.coderutil.com/favicon.ico',
        href: 'https://www.coderutil.com/',
      },
      {
        name: 'MDN',
        desc: '从2005年开始记录网络技术，包括 CSS、 HTML 和 JavaScript。',
        logo: 'https://developer.mozilla.org/favicon-192x192.png',
        href: 'https://developer.mozilla.org/zh-CN/',
      },
      {
        name: 'ES6 入门教程',
        desc: '《ECMAScript 6 入门教程》是一本开源的 JavaScript 语言教程，全面介绍 ECMAScript 6 新引入的语法特性',
        logo: 'https://es6.ruanyifeng.com/favicon.ico',
        href: 'https://es6.ruanyifeng.com/',
      },
      {
        name: '深入理解 TypeScript',
        desc: '《TypeScript Deep Dive》 是一本很好的开源书，从基础到深入，很全面的阐述了 TypeScript 的各种魔法，不管你是新手，还是老鸟，它都将适应你',
        logo: 'https://jkchao.github.io//typescript-book-chinese/logo.png',
        href: 'https://jkchao.github.io/typescript-book-chinese/',
      },
      {
        name: 'w3schools Css 教程',
        desc: 'w3schools 从基础到高级的CSS教程',
        logo: 'https://www.w3schools.com/favicon.ico',
        href: 'https://www.w3schools.com/css',
      },
    ],
  },
  {
    name: 'online dev',
    navigations:[
      {
        name: 'CodePen',
        desc: '是构建、测试和发现前端代码的最佳场所',
        logo: 'https://cpwebassets.codepen.io/assets/favicon/favicon-aec34940fbc1a6e787974dcd360f2c6b63348d4b1f4e06c77743096d55480f33.ico',
        href: 'https://codepen.io/',
      },
      {
        name: 'Stackblitz',
        desc: 'Stackblitz在流程中保持即时的开发体验。没有更多的小时储存/拉/安装本地-只需点击，并开始编码',
        logo: '/img/website/stackblitz.png',
        href: 'https://stackblitz.com/',
      },
      {
        name: '菜鸟工具',
        desc: '支持前端的常用在线工具集合',
        logo: 'https://636f-codenav-8grj8px727565176-1256524210.tcb.qcloud.la/img/FD715D45-8A4B-4B77-BDA1-D75D7226AACB.jpeg-1609660318596',
        href: 'https://c.runoob.com/',
      },
    ],
  },
  {
    name: 'CSS',
    navigations:[
      {
        name: 'Bootstrap',
        desc: 'Bootstrap 是全球最受欢迎的前端开源工具库，它支持 Sass 变量和 mixin、响应式栅格系统、自带大量组件和众多强大的 JavaScript 插件。基于 Bootstrap 提供的强大功能，能够让你快速设计并定制你的网站',
        logo: 'https://img.kuizuo.cn/20210907055816.png',
        href: 'https://v5.bootcss.com/',
      },
      {
        name: 'CSS常用样式',
        desc: 'CSS常用样式',
        logo: 'https://tse1-mm.cn.bing.net/th?id=OIP-C.EgSPriuEnAtlIWJV8R_E1QHaGs&w=107&h=100&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2',
        href: 'https://github.com/QiShaoXuan/css_tricks',
      },
      {
        name: 'TailwindCSS',
        desc: 'Tailwind CSS 是一个功能类优先的 CSS 框架，它集成了诸如 flex, pt-4, text-center 和 rotate-90 这样的的类，它们能直接在脚本标记语言中组合起来，构建出任何设计',
        logo: 'https://www.tailwindcss.cn/favicon-32x32.png',
        href: 'https://www.tailwindcss.cn',
      },
      {
        name: 'UnoCSS',
        desc: '即时按需原子 CSS 引擎',
        logo: 'https://uno.antfu.me//favicon.svg',
        href: 'https://uno.antfu.me/',
      },
      {
        name: 'NES.css',
        desc: '一个像素风格的CSS框架',
        logo: 'https://nostalgic-css.github.io/NES.css/favicon.png',
        href: 'https://nostalgic-css.github.io/NES.css/',
      },
      {
        name: 'clay.css',
        desc: 'claymorphism 泥陶态风格CSS',
        logo: 'https://codeadrian.github.io/clay.css/apple-touch-icon.png',
        href: 'https://codeadrian.github.io/clay.css/',
      },
      {
        name: 'loading.io',
        desc: 'Animation Made Easy',
        logo: 'https://loading.io/favicon.png',
        href: 'https://loading.io/',
      },
      {
        name: '神奇UI样式',
        desc: '我们赋予任何人创建、分享和使用用 CSS 和 HTML 制作的漂亮自定义元素的权力。',
        logo: 'https://uiverse.io/favicon-32x32.png',
        href: 'https://uiverse.io',
      },,
      {
        name: 'HYPE4',
        desc: '透明玻璃态生成器',
        logo: 'https://hype4.academy/_next/static/media/logorwd@2x.b40bc92c.png',
        href: 'https://hype4.academy/tools/glassmorphism-generator',
      },
      {
        name: 'wweb.dev',
        desc: 'CSS 动画背景生成器',
        logo: 'https://ik.imagekit.io/wwebdev/tr:w-180/logo-text_51kQarOOiD-.png',
        href: 'https://wweb.dev/resources/animated-css-background-generator/',
      },
      {
        name: 'smooth shadow',
        desc: '快速轻松地实现基于 CSS 阴影的绝佳工具。您只需要指定一些阴影设置，代码就在您的路上。',
        logo: 'https://shadows.brumm.af/favicon.svg',
        href: 'https://shadows.brumm.af/',
      },
      {
        name: 'FANCY-BORDER-RADIUS',
        desc: '花式边界半径,有助于创建 CSS 花式边框。',
        logo: 'https://9elements.github.io/fancy-border-radius/favicon-32x32.png',
        href: 'https://9elements.github.io/fancy-border-radius/',
      },
      {
        name: 'Coolors',
        desc: '创建调色板',
        logo: 'https://coolors.co/assets/img/ios_icon.png',
        href: 'https://coolors.co/',
      },
      {
        name: 'Get Waves',
        desc: '选择一些设置后，应用程序会为您的波形设计创建正确的 CSS 代码',
        logo: 'https://getwaves.io/favicon-32x32.png?v=f13a1a2e88a9720e746d5561039d3f5f',
        href: 'https://getwaves.io/',
      },
      {
        name: 'CSS BUD',
        desc: '一些CSS文本样式',
        logo: 'https://cssbud.com/wp-content/uploads/2020/04/cssbud-logo.png',
        href: 'http://cssbud.com/',
      },
    ],
  },
  {
    name: 'IoT',
    navigations:[
      {
        name: 'CMake 中文文档',
        desc: '热心网友根据官方教程翻译的文档',
        logo: 'https://sfumecjf.github.io/favicon.ico',
        href: 'https://sfumecjf.github.io/cmake-examples-Chinese/',
      },
      {
        name: '深入浅出讲解LoRa通信技术',
        desc: '甘泉老师结合自身经验, 详细的讲解了LoRa相关技术',
        logo: 'https://assets.eefcdn.com/app/themes/eefocus/dist/images/favicon.ico',
        href: 'https://www.moore8.com/courses/3028',
      },
      {
        name: '半导小芯',
        desc: '都在用的芯片查询工具',
        logo: 'https://www.semiee.com/static/favicon.ico',
        href: 'http://www.semiee.com/',
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
      {
        name: 'Metrics',
        desc: 'Create your own metrics',
        logo: 'https://metrics.lecoq.io/.favicon.png',
        href: 'https://metrics.lecoq.io/',
      },
      {
        name: 'Github主页 README 生成器',
        desc: '一个Github 个人主页 README 生成器',
        logo: 'https://rahuldkjain.github.io/gh-profile-readme-generator/icons/icon-144x144.png?v=040f54e2f6c858e0a3dcf568c3f2b6f1',
        href: 'https://rahuldkjain.github.io/gh-profile-readme-generator/',
      },
      {
        name: 'Github 统计生成器',
        desc: 'Github 在你的 README 中获取动态生成的 GitHub 统计信息！',
        logo: '',
        href: 'https://github.com/anuraghazra/github-readme-stats',
      },
    ],
  },
  {
    name: '有点意思~',
    navigations:[
      {
        name: 'removebg',
        desc: '在线抠图软件，可以去除图片背景',
        logo: 'https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://www.remove.bg/zh&size=50',
        href: 'https://www.remove.bg/zh/',
      },
      {
        name: 'Unscreen',
        desc: '移除任何视频的背景 — — 100% 自动，在线且免费',
        logo: 'https://www.unscreen.com/favicon.ico',
        href: 'https://www.unscreen.com/',
      },
      {
        name: '音乐解锁',
        desc: '移除已购音乐的加密保护',
        logo: 'https://demo.unlock-music.dev/favicon.ico',
        href: 'https://demo.unlock-music.dev/',
      },
      {
        name: '迅捷PDF转换器',
        desc: '在线电子书格式转换PDF',
        logo: 'https://app.xunjiepdf.com/favicon.ico',
        href: 'https://app.xunjiepdf.com/eb2pdf/?zhljj01/',
      },
      {
        name: 'DeepL 翻译',
        desc: '号称全世界最准的翻译',
        logo: 'https://static.deepl.com/img/logo/DeepL_Logo_darkBlue_v2.svg',
        href: 'https://www.deepl.com/translator/',
      },
      {
        name: 'Octodex',
        desc: '你还在苦恼用什么头像合适吗?',
        logo: 'https://github.githubassets.com/favicons/favicon.svg',
        href: 'https://octodex.github.com/',
      },
      {
        name: 'Wallhaven',
        desc: '首推优质壁纸网站',
        logo: 'https://wallhaven.cc/favicon.ico',
        href: 'https://wallhaven.cc/',
      },
      {
        name: '在线工具箱',
        desc: '在线工具,开发人员工具,代码格式化、压缩、加密、解密,下载链接转换,ico图标制作,字帖生成',
        logo: 'https://tool.lu/favicon.ico',
        href: 'https://tool.lu/',
      },
    ],
  },
  // {
  //   name: '',
  //   navigations:[],
  // },
];
