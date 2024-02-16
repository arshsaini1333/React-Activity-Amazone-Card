function Price({ oldPrice, newPrice }) {
  let oldStyles = {
    textDecorationLine: "line-through",
  };
  let newStyle = {
    fontWeight: "bold",
    marginLeft: "5px",
  };

  let styles = {
    backgroundColor: "#e0c367",
    height: "30px",
    width: "200px",
    borderBottomLeftRadius: "14px",
    borderBottomRightRadius: "14px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <div style={styles}>
      <div style={oldStyles}>&#8377;{oldPrice}</div>

      <div style={newStyle}>&#8377;{newPrice}</div>
    </div>
  );
}

export default Price;
