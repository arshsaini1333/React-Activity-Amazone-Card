import Price from "./Price.jsx";
import "./Product.css";
function Product({ title, idx }) {
  let oldPrice = ["33400", "58900", "4450", "18000"];
  let newPrice = ["30000", "51500", "4050", "16500"];
  let description = [
    ["8000-dpi", "5 Programmable Buttons"],
    ["Design for Apple Products", "Compatible with iPad"],
    ["Intutive Surface", "Fast Speed"],
    ["Better Design and Camara", "8 GB Ram"],
  ];
  return (
    <>
      <div className="Product">
        <h4>{title}</h4>
        <p>{description[idx][0]}</p>
        <p>{description[idx][1]}</p>
        <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]} />
      </div>
    </>
  );
}

export default Product;
