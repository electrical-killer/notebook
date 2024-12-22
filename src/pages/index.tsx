import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import { motion } from "framer-motion";
import React from "react";
import {AuroraBackground} from '@site/src/components/ui/aurora-background';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      // title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      {/* <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main> */}
      <AuroraBackground>
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
              <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
                And this, is chemical burn.
              </div>
              <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
                Debug now
              </button>
            </motion.div>
          </AuroraBackground>
    </Layout>
  );
}
