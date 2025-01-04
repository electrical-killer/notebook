import React from 'react';
import Image from '@theme/IdealImage';
import Link from '@docusaurus/Link';

export const Logo: React.FC = () => {
  return (
    <Link
      href="/"
      className="font-normal flex space-x-2 items-center text-sm mr-4 text-black px-2 py-1 relative z-20"
    >
      <Image
        src="https://assets.aceternity.com/logo-dark.png"
        alt="logo"
        width={30}
        height={30}
      />
      <span className="font-medium text-black dark:text-white">EK's Notebook</span>
    </Link>
  );
};
