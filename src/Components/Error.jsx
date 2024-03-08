function Error({ children }) {
  const style = {
    color: "red",
    fontSize: "16px",
  };

  return <p style={style}>{children}</p>;
}

export default Error;
