import styles from "./code.module.css";

export default function Code(props) {
  let { isEnd, text, size } = props;

  if (isEnd) {
    return (
      <code className={styles.code} style={{ fontSize: size }}>
        <span>&lt;</span>/{text}
        <span>&gt;</span>
      </code>
    );
  } else {
    return (
      <code className={styles.code} style={{ fontSize: size }}>
        <span>&lt;</span>
        {text}
        <span>&gt;</span>
      </code>
    );
  }
}
