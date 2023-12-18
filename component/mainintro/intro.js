import { useLangContext } from "@/context/langcontexthook";
import Code from "../code/code";
import styles from "./intro.module.css";
import MainTitle from "./../maintitle/title";

export default function MainIntro() {
  let { isHungarian } = useLangContext();

  return (
    <div className={styles.container}>
      {isHungarian
        ? <MainTitle text="Bevezető" />
        : <MainTitle text="Introduction" />}
      <div className={styles.mainWrapper}>
        <div className={styles.mainText}>
          <Code text="intro" size="25px" />
          {isHungarian ? <h1>Üdvözöllek! :)</h1> : <h1>Welcome! :)</h1>}
          {isHungarian
            ? <p>
                <span>Kristóf</span> vagyok, egy 20 éves{" "}
                <span style={{ fontSize: "30px", fontStyle: "italic" }}>
                  Web-Developer
                </span>. Érthetően fogalmazva,{" "}
                <span>weboldalakat készítek</span>. Ha érdekelt vagy ilyesmiben,
                akkor <span>nézz körül</span> ezen az oldalon.
              </p>
            : <p>
                I am <span>Kristóf</span>, a 20-year-old{" "}
                <span>web-developer</span>. Long story short{" "}
                <span>I create websites</span>. If you are interested in this
                kind of stuff, then <span>look around</span> in this page.
              </p>}
          {isHungarian
            ? <p style={{ marginTop: "3vmin" }}>
                Ha tetszettem, kattints <button>ide</button>!
              </p>
            : <p style={{ marginTop: "3vmin" }}>
                If you liked what you saw, click <button>here</button>!
              </p>}
          <Code text="intro" size="25px" isEnd={true} />
        </div>
        <div className={styles.imgWrapper}>
          <Code text="img" size="25px" />
          <div className={styles.img} />
          <Code text="img" size="25px" isEnd={true} />
        </div>
      </div>
    </div>
  );
}
