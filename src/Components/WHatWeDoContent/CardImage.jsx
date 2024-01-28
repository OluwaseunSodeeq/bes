import styles from "./WhatBottomCards.module.css";

function CardImage({ image, currentImg }) {
  return (
    <div
      className={
        currentImg !== undefined ? styles.imgHeightleft : styles.imgHeight
      }
    >
      <img src={image} alt="site image" />
    </div>
  );
}
export default CardImage;
