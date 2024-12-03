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
    name: '🖥️建站工具',
    navigations:[
      {
        name: "Developer Roadmap",
        desc: "Roadmap to becoming a web developer.",
        logo: "https://roadmap.sh/manifest/favicon.ico",
        href: "https://roadmap.sh/",
      },
      {
        name: 'Shields.io',
        desc: '为你的开源项目生成高质量小徽章图标',
        logo: 'https://shields.io/img/logo.png',
        href: 'https://shields.io/',
      },
      {
        name: 'NGINX 配置',
        desc: '配置高性能、安全、稳定的NGINX服务器的最简单方法',
        logo: '',
        href: 'https://www.digitalocean.com/community/tools/nginx',
        tags: ['nginx'],
      },
      {
        name: 'BootCDN',
        desc: '稳定、快速、免费的前端开源项目 CDN 加速服务',
        logo: 'https://www.bootcdn.cn/assets/ico/favicon.ico',
        href: 'https://www.bootcdn.cn/',
        tags: ['cdn'],
      },
      {
        name: '那些免费的砖',
        desc: '发现免费可商用的资源',
        logo: 'https://img.thosefree.com/static/logo.png',
        href: 'https://www.thosefree.com/',
      },
      {
        name: '正则大全',
        desc: '🦕 常用正则大全, 支持web / vscode / idea / Alfred Workflow多平台',
        logo: 'https://any-rule.vercel.app/favicon.ico',
        href: 'https://any-rule.vercel.app/',
      },
    ],
  },
];
