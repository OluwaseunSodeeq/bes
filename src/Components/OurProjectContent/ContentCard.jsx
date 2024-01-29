import styles from "./Content.module.css";

function ContentCard({ underline = "", data, cardType = "" }) {
  return (
    <div className={styles[cardType]}>
      <h4 className={underline !== "" ? styles.underline : ""}>
        {data.heading} <span className={styles.icons}>{data.icon}</span>
      </h4>
      <p>{data.text}</p>
    </div>
  );
}

export default ContentCard;
