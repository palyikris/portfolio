import MainTitle from "@/component/maintitle/title";
import styles from "./about.module.css";
import { useLangContext } from "@/context/langcontexthook";

export default function AboutPage() {
  let { isHungarian } = useLangContext();

  return (
    <div className={styles.container} id="about">
      {isHungarian ? <MainTitle text="Rólam" /> : <MainTitle text="About" />}
    </div>
  );
}
