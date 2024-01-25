import styles from "./Container.module.css";

function Container({
  children,
  paddingType = "sidePaddings",
  background = "#fff",
  shadow = false,
  //   background = "#FAFBFC",
}) {
  //   const paddingType = paddingType;
  return (
    <div
      style={{ background }}
      className={`${styles.container} ${styles[paddingType]} ${
        shadow ? styles.shadow : ""
      } `}
    >
      {children}
    </div>
  );
}

export default Container;
