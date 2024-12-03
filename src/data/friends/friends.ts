export interface FriendItem {
  title: string;
  url: string;
  avatar?: string;
  description?: string;
  tags?: string[];
}

const friendList: FriendItem[] = [
  {
    title: "Castamere",
    avatar: "https://github.com/Casta-mere.png",
    url: "https://www.castamerego.com/",
    description: "代码美学",
    tags: ["全栈", "python"],
  },
  {
    title: '愧怍',
    description: '道阻且长，行则将至',
    url: 'https://kuizuo.cn',
    avatar: 'https://kuizuo.cn/img/logo.png',
    tags: ["全栈", "逆向", "AI"],
  }
];

export default friendList;
