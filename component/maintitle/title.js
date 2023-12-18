import Code from "../code/code";
import styles from "./title.module.css";

export default function MainTitle(props) {
  let { text } = props;

  return (
    <div className={styles.titleWrapper}>
      <Code text="h1" size="25px" />
      <h1 className={styles.title}>
        {props.text}
      </h1>
      <Code text="h1" size="25px" isEnd={true} />
    </div>
  );
}
