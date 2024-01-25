import styles from "./Button.module.css";
function Button({
  background = "#FAFBFC",
  color = "#333437",
  children,
  handler,
  eventType = "Click",
  btnType = "btn",
}) {
  // const event = {eventType ? onClick={handlerClick} :  onSubmit={handlerSubmit}}

  return (
    <button
      style={{
        background,
        color,
        fontFamily: "Quicksand",
        fontSize: "15px",
        fontStyle: "normal",
        fontWeight: "500",
      }}
      className={btnType === "header" ? styles.headerBtn : styles.btn}
      onClick={eventType === "Click" ? handler : undefined}
      onSubmit={eventType === "Submit" ? handler : undefined}
    >
      {children}
    </button>
  );
}

export default Button;
