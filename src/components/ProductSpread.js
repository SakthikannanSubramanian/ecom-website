import "./../index.css";

const ProductSpread = (props) => {
  const { image, productName, price } = props;
  console.log("sai");
  return (
    <article className="product">
      <img src={image} alt="" />
      <p style={{ textAlign: "left" }}>{productName}</p>
      <h4 style={{ textAlign: "left" }}>{price}</h4>
    </article>
  );
};
export default ProductSpread;
