"use client";

import TopNav from "./../component/topnav/topnav";
import MainIntro from "./../component/mainintro/intro";
import styles from "./page.module.css";
import AboutPage from "./../component/about/main/about";

export default function Home() {
  return (
    <div className={styles.container}>
      <TopNav />
      <MainIntro />
      <div className={styles.sep} />
      <AboutPage />
    </div>
  );
}
