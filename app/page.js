"use client";

import TopNav from "./../component/topnav/topnav";
import MainIntro from "./../component/mainintro/intro";
import styles from "./page.module.css";
import Footer from "./../component/footer/footer";
import Preload from "@/component/preload/preload";
import { useLangContext } from "@/context/langcontexthook";

export default function Home() {
  let { isPreloader } = useLangContext();

  if (isPreloader) {
    return <Preload />;
  }

  return (
    <div className={styles.container}>
      <TopNav />
      <MainIntro />
      <Footer />
    </div>
  );
}
