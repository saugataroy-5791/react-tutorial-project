import Product from "../Product/Product";
import "./productList.scss";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
// import { productList } from "../../utils/constants";
import { PRODUCTS_URL } from "../../utils/constants";
import Loader from "../Loader/Loader";

const ProductList = () => {
  const [productsList, setProductsList] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const data = await fetch(PRODUCTS_URL);
    const productList = await data.json();
    setProductsList(productList);
  };

  return productsList === null ? (
    <Loader />
  ) : (
    <div className="product-list">
      <h2>Product List</h2>
      <div className="button-container mt-3">
        <Button variant="success" className="me-2" onClick={fetchProducts}>
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
      <div className="list">
        {productsList.map((product) => {
          return <Product key={product.id} productData={product} />;
        })}
      </div>
    </div>
  );
};

export default ProductList;
