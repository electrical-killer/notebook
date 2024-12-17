export interface FriendItem {
  title: string;
  url: string;
  avatar?: string;
  description?: string;
  tags?: string[];
}

const friendList: FriendItem[] = [
  {
    title: 'Castamere',
    description: '代码美学',
    url: 'https://www.castamerego.com/',
    avatar: 'https://github.com/Casta-mere.png',
    tags: ["全栈开发", "python开发"],
  },
  {
    title: 'One',
    description: '明心静性，爱自己。',
    url: 'https://onedayxyy.cn/',
    avatar: 'https://wiki.onedayxyy.cn/img/favicon.ico',
    tags: ["运维", "攻防"],
  },
  {
    title: '愧怍',
    description: '记录所学知识，领略编程之美',
    url: 'https://kuizuo.cn',
    avatar: 'https://kuizuo.cn/img/logo.png',
    tags: ["全栈开发", "AI", "逆向"],
  },
  {
    title: 'Alan',
    avatar: 'https://avatars.githubusercontent.com/u/49978973?v=4',
    url: 'https://www.alanwang.site/',
    description: '此刻想举重若轻，之前必要负重前行',
    tags: ['前端开发']
  },
];

export default friendList;
