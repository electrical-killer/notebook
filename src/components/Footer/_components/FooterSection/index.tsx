import React from 'react';
import Link from '@docusaurus/Link';

interface FooterSectionProps {
  title: string;
  items: Array<{ title: string; href: string }>;
}

export const FooterSection: React.FC<FooterSectionProps> = ({ title, items }) => {
  return (
    <div className="flex justify-center space-y-4 flex-col">
      <ul className="transition-colors hover:text-text-neutral-800 text-neutral-600 dark:text-neutral-300 font-bold text-center">
        {title}
      </ul>
      <ul className="transition-colors hover:text-text-neutral-800 text-neutral-600 dark:text-neutral-300 list-none space-y-4 text-center">
        {items.map((item, idx) => (
          <li key={`${title}-${idx}`} className="list-none">
            <Link
              className="transition-colors hover:text-text-neutral-800"
              href={item.href}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
