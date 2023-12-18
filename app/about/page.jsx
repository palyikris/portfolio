"use client";

import styles from "./page.module.css";
import TopNav from "./../../component/topnav/topnav";
import { useLangContext } from "@/context/langcontexthook";
import Footer from "./../../component/footer/footer";
import AboutPageComp from "./../../component/about/main/about";
import Preload from "@/component/preload/preload";
import { useEffect, useState } from "react";

export default function AboutPage() {
  let { isHungarian } = useLangContext();

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
      <AboutPageComp />
      <Footer />
    </div>
  );
}
