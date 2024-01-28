import styles from "./RenderBtn.module.css";

function RenderBtn({ each, index, i, setIndex, type = "" }) {
  const handler = function () {
    if (type === "companyBtns") setIndex(i);
    if (type === "projBtn") setIndex(i);
  };
  return (
    <button
      key={i}
      className={`${styles[type]} ${
        index !== i ? "" : styles[`${type}--active`]
      }`}
      onClick={handler}
    >
      {each}
    </button>
  );
}

export default RenderBtn;
