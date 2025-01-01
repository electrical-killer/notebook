import React from "react";
import { motion } from "framer-motion";
import { AuroraBackground } from "@site/components/ui/aurora-background";
import ProjectSection from './_components/ProjectSection'
import styles from './styles.module.css';

export default function HomepageFeatures(): JSX.Element {
  return (
    <div>
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
            {/* <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
              Background lights are cool you know.
            </div> */}


            <div className="relative">
              <div className="mx-auto max-w-7xl lg:px-8">
                {/* <BlogSection /> */}
                <ProjectSection />
                {/* <FeaturesSection /> */}
              </div>
              <div
                className="-z-50 absolute inset-0 bg-grid-slate-50 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.3))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"
                style={{ backgroundPosition: '10px 10px;' }}
              />
            </div>


          </motion.div>
      </AuroraBackground>
    </div>
  );
}

