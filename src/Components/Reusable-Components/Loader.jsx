import styles from "./Loader.module.css";

function Loader() {
  return (
    <div className={styles.loaderContainer}>
      <img className={styles.loader} src="../BESLOGO.svg" alt="Loader" />
    </div>
  );
}

export default Loader;
