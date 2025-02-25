import Product, { MensProduct } from "../Product/Product";
import "./productList.scss";
import Button from "react-bootstrap/Button";
import { useContext, useEffect, useState } from "react";
// import { productList } from "../../utils/constants";
import { PRODUCTS_URL } from "../../utils/constants";
import Loader from "../Loader/Loader";
import { SearchContext } from "../../utils/context/SearchContext";

const ProductList = () => {
  const [productsList, setProductsList] = useState(null);
  const { searchText } = useContext(SearchContext);
  const MensProductCategory = MensProduct(Product);

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    searchProducts(searchText);
  }, [searchText]);

  const fetchProducts = async () => {
    const data = await fetch(PRODUCTS_URL);
    const productList = await data.json();
    setProductsList(productList);
  };

  const handleThreeStarClick = () => {
    const filteredProductsList = productsList.filter((item) => {
      return item?.rating?.rate > 3;
    });
    setProductsList(filteredProductsList);
  };

  const searchProducts = (searchText) => {
    if (searchText) {
      const filteredProductsList = productsList.filter((item) => {
        return item?.title.toLowerCase().includes(searchText);
      });
      setProductsList(filteredProductsList);
    }
  };

  return productsList === null ? (
    <Loader />
  ) : (
    <div className="product-list">
      <h2>
        {searchText !== "" && searchText !== null && searchText !== undefined
          ? "Searching for: " + searchText
          : "Product List"}
      </h2>
      <div className="button-container mt-3">
        <Button variant="success" className="me-2" onClick={fetchProducts}>
          Original items
        </Button>

        <Button variant="primary" onClick={handleThreeStarClick}>
          3 ***
        </Button>
      </div>
      <div className="list mt-4">
        {productsList.map((product) => {
          return product.category === "men's clothing" ? (
            <MensProductCategory key={product.id} productData={product} />
          ) : (
            <Product key={product.id} productData={product} />
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
