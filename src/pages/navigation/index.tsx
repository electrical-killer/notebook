import React from 'react';
import clsx from 'clsx';
import { RoughNotation } from "react-rough-notation";
import Link from '@docusaurus/Link';
import { PageMetadata } from '@docusaurus/theme-common';
import Layout from '@theme/Layout';
import NgLinkCard from './_components/NgLinkCard';
import BackToTopButton from '@theme/BackToTopButton';
import { navigationData } from '@site/src/data/navigation/navigation';
import styles from './navigation.module.css';

// import style from '@site/src/pages/navigation/navigation.module.scss';

function CategoryNav() {
  const sidebar = {
    title: '',
    items: navigationData.map((w) => ({ title: w.name, permalink: `#${w.name}` })),
  };

  return (
    <nav className={clsx(styles.sidebar, 'thin-scrollbar')}>
      <div className={clsx(styles.sidebarItemTitle, 'margin-bottom--md')}>
        {sidebar.title}
      </div>
      <ul className={clsx(styles.sidebarItemList, 'clean-list')}>
        {sidebar.items.map((item) => (
          <li key={item.permalink} className={styles.sidebarItem}>
            <Link
              isNavLink
              to={item.permalink}
              className={styles.sidebarItemLink}
              activeClassName={styles.sidebarItemLinkActive}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function CategoryList() {
  return (
    <div className={styles.category}>
      {navigationData.map((cate) => (
        <div key={cate.name}>
          <div className={styles.cateHeader}>
            <h2 id={cate.name} className="anchor">
              {cate.name}
              <a
                className="hash-link"
                href={`#${cate.name}`}
                title={cate.name}
              ></a>
            </h2>
          </div>
          <section>
            <ul className={styles.navigationList}>
              {cate.navigations.map((navigation) => (
                <NgLinkCard key={navigation.name} navigation={navigation} />
              ))}
            </ul>
          </section>
        </div>
      ))}
    </div>
  );
}

export default function Navigations() {
  return (
    <>
      <Layout>
        <div className="container margin-top--md">
          <div className="row">
            <aside className="col col--1">
              <CategoryNav />
            </aside>
            <main className="col col--11">
              <div className={styles.typingslider}>
                {/* <p>Here's my favorites.</p>
                <p>Feel free to browse through them.</p> */}
                <p className="">
                  <RoughNotation
                    type="underline"
                    show={true}
                    color="purple"
                    strokeWidth={3}
                    animationDelay={2000}
                  >
                    <h1>整理日常开发，一些优质的网站链接</h1>
                  </RoughNotation>
                </p>
              </div>
              <CategoryList />
              <BackToTopButton />
            </main>
          </div>
        </div>
      </Layout>
    </>
  );
}
