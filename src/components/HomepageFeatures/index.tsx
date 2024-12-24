import React, { ReactNode } from "react";
import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

import styles from './styles.module.css';

// 用于合并和处理 CSS 类名, 通过其参数可以动态生成背景样式
function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
  }

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}) => {
  return (
    (<main>
      <div
        className={cn(
          "relative flex flex-col  h-[100vh] items-center justify-center dark:bg-zinc-950 text-slate-850 transition-bg",
          className
        )}
        {...props}>
        <div className="absolute inset-0 overflow-hidden">
          <div
            //   I'm sorry but this is what peak developer performance looks like // trigger warning
            className={cn(`
          [--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)]
          [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)]
          [--aurora:repeating-linear-gradient(100deg,var(--blue-500)_10%,var(--indigo-300)_15%,var(--blue-300)_20%,var(--violet-200)_25%,var(--blue-400)_30%)]
          [background-image:var(--white-gradient),var(--aurora)]
          dark:[background-image:var(--dark-gradient),var(--aurora)]
          [background-size:300%,_200%]
          [background-position:50%_50%,50%_50%]
          filter blur-[10px] invert dark:invert-0
          after:content-[""] after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)] 
          after:dark:[background-image:var(--dark-gradient),var(--aurora)]
          after:[background-size:200%,_100%] 
          after:animate-aurora after:[background-attachment:fixed] after:mix-blend-difference
          pointer-events-none
          absolute -inset-[10px] opacity-50 will-change-transform`, showRadialGradient &&
              `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]`)}></div>
        </div>
        {children}
      </div>
    </main>)
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <div className="tailwind">
      <AuroraBackground className={styles.features}>
        <motion.div
            initial={{ opacity: 0.3, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0,
              duration: 1,
              ease: "easeInOut",
            }}
            className="relative flex flex-col gap-4 items-center justify-center px-4"
          >
            <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
              Background lights are cool you know.
            </div>
            {/* <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
              And this, is chemical burn.
            </div>
            <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
              Debug now
            </button> */}
          </motion.div>
      </AuroraBackground>
    </div>
  );
}

