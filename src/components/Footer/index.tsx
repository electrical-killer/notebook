import React from "react";
// import { cn } from '@site/src/lib/utils';
import { pages, socials, func } from '@site/src/data/footer/footer';
import { FooterSection } from './_components/FooterSection';
import { Logo } from './_components/Logo';

export function SimpleFooterWithFourGrids() : JSX.Element {
  return (
    // <div className="border-t border-neutral-100 dark:border-white/[0.1] px-8 py-20 bg-white dark:bg-neutral-950 w-full relative overflow-hidden"> {/* 黑白背景 */}
    <div className="border-t border-neutral-100 dark:border-white/[0.1] px-8 py-20  bg-[#f5f5f5] dark:bg-[rgb(36,37,38)] w-full relative overflow-hidden"> {/* 双灰背景 */}
      <div className="max-w-7xl mx-auto text-sm text-neutral-500 flex sm:flex-row flex-col justify-between items-start md:px-8">
        <div>
          <div className="mr-0 md:mr-4 md:flex mb-4">
            <Logo />
          </div>
          <div className="mt-2 ml-2">
            <div className="mb-2">
              &copy; Copyright ©EK 2024 - {new Date().getFullYear()}. Built with Docusaurus.
            </div>
            <div>
              <a href="http://beian.miit.gov.cn/">蒙ICP备2024020206号</a>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 items-start mt-10 sm:mt-0 md:mt-0">
          <FooterSection title="Pages" items={pages} />
          <FooterSection title="Func" items={func} />
          <FooterSection title="Socials" items={socials} />
        </div>
      </div>
      {/* <p className="text-center mt-20 text-5xl md:text-9xl lg:text-[12rem] xl:text-[13rem] font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 dark:from-neutral-950 to-neutral-200 dark:to-neutral-800 inset-x-0">
        NoteBook
      </p> */}
    </div>
  );
}

