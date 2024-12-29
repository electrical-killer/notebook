import React from "react";
import { motion } from "framer-motion";
import { AuroraBackground } from "../../../components/ui/aurora-background";
import styles from './styles.module.css';

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
          </motion.div>
      </AuroraBackground>
    </div>
  );
}

