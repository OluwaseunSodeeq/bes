import styles from "./Content.module.css";

function ContentCard({ data, cardType = "" }) {
  return (
    <div className={styles[cardType]}>
      <h4>
        {data.heading} <span className={styles.icons}>{data.icon}</span>
      </h4>
      <p>{data.text}</p>
    </div>
  );
}

export default ContentCard;
