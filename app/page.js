"use client";

import TopNav from "./../component/topnav/topnav";
import MainIntro from "./../component/mainintro/intro";
import styles from "./page.module.css";
import AboutPage from "./../component/about/main/about";
import Footer from "./../component/footer/footer";
import { useEffect, useState } from "react";
import Preload from "@/component/preload/preload";

export default function Home() {
  let [preload, setPreload] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setPreload(false);
    }, 1500);
  }, []);

  if (preload) {
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
