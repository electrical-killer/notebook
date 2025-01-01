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
    title: '愧怍',
    description: '记录所学知识，领略编程之美',
    url: 'https://kuizuo.cn',
    avatar: 'https://kuizuo.cn/img/logo.png',
    tags: ["全栈开发", "AI", "逆向"],
  },
];

export default friendList;
