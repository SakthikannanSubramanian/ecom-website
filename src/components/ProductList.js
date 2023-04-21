import Products from "./Products";
import ProductSpread from "./ProductSpread";
import { InputField } from "./fields/InputField";

import "./../index.css";

const ProductList = () => {
  return (
    <>
      <article style={{ margin: "1rem" }}>
        <InputField placeholder="search product..." styleEffect="searchInput" />
      </article>
      <section className="productList">
        {Products.map((product) => {
          console.log(product);
          return <ProductSpread {...product} />;
        })}
      </section>
    </>
  );
};
export default ProductList;
