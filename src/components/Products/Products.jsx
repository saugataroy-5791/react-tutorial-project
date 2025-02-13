import Product from "../Product/Product";
import "./products.scss";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { products } from "../../utils/constants";

const Products = () => {
  const [productsList, setProductsList] = useState(products);

  return (
    <div className="prodcuts mt-3">
      <div className="button-container">
        <Button
          variant="success"
          className="me-2"
          onClick={() => {
            setProductsList(products);
          }}
        >
          Original items
        </Button>

        <Button
          variant="primary"
          onClick={() => {
            const filteredProductsList = productsList.filter((item) => {
              return item?.rating?.rate > 3;
            });

            setProductsList(filteredProductsList);
          }}
        >
          3 ***
        </Button>
      </div>
      <div className="products-list">
        {productsList.map((product) => {
          return <Product key={product.id} productData={product} />;
        })}
      </div>
    </div>
  );
};

export default Products;
