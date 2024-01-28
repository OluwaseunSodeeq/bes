import styles from "./Project.module.css";

function Project({ card }) {
  return (
    <div className={styles.projCard}>
      <div className={styles.cardImg}>
        <img src={card.img} alt={`${card.heading} image`} />
      </div>
      <h3>{card.heading}</h3>
      <p>
        {card.text} <span>{card.address}</span>
      </p>
    </div>
  );
}

export default Project;
