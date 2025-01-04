import React from "react";
import { cn } from '@site/src/lib/utils';
import { pages, socials, legals, signups } from '@site/src/data/footer/footer';
import { FooterSection } from './_components/FooterSection';
import { Logo } from './_components/Logo';

export function SimpleFooterWithFourGrids() : JSX.Element {
  return (
    <div className="border-t border-neutral-100 dark:border-white/[0.1] px-8 py-20 bg-white dark:bg-neutral-950 w-full relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-sm text-neutral-500 flex sm:flex-row flex-col justify-between items-start md:px-8">
        <div>
          <div className="mr-0 md:mr-4 md:flex mb-4">
            <Logo />
          </div>
          <div className="mt-2 ml-2">
            &copy; copyright DevStudios 2024. All rights reserved.
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 items-start mt-10 sm:mt-0 md:mt-0">
          <FooterSection title="Pages" items={pages} />
          <FooterSection title="Socials" items={socials} />
          <FooterSection title="Legal" items={legals} />
          <FooterSection title="Register" items={signups} />
        </div>
      </div>
      <p className="text-center mt-20 text-5xl md:text-9xl lg:text-[12rem] xl:text-[13rem] font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 dark:from-neutral-950 to-neutral-200 dark:to-neutral-800 inset-x-0">
        DevStudio
      </p>
    </div>
  );
}

