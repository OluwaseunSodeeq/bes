import Loader from "./Loader";
import styles from "./FullPageLoader.module.css";
function FullPageLoader() {
  return (
    <div className={styles.LoaderFullpage}>
      <Loader />
    </div>
  );
}

export default FullPageLoader;
