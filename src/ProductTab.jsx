import Product from "./Product.jsx";
function ProductTab() {
  let styles = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItmes: "center",
  };
  return (
    <div style={styles}>
      <Product title="Logitech MX Master" idx={0} />
      <Product title="Apple Pencil (2nd Gen)" idx={1} />
      <Product title="Zebronics Zeb-transformer" idx={2} />
      <Product title="Vivo T2 5G" idx={3} />
    </div>
  );
}

export default ProductTab;
