import MainTitle from "@/component/maintitle/title";
import styles from "./about.module.css";
import { useLangContext } from "@/context/langcontexthook";

export default function AboutPageComp() {
  let { isHungarian } = useLangContext();

  return (
    <div className={styles.container}>
      <MainTitle text={isHungarian ? "Rólam" : "About me"} />
    </div>
  );
}
