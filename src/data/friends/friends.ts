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
    description: '道阻且长，行则将至',
    url: 'https://kuizuo.cn',
    avatar: 'https://kuizuo.cn/img/logo.png',
    tags: ["全栈开发", "AI", "逆向"],
  },
];

export default friendList;
