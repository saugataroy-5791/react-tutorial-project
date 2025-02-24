import { useEffect, useState } from "react";
import { PRODUCTS_URL } from "../constants";

const useProductDetails = (id) => {
  const [productInfo, setProductInfo] = useState(null);

  useEffect(() => {
    fetchProductInfo();
  }, []);

  const fetchProductInfo = async () => {
    const data = await fetch(PRODUCTS_URL + id);
    const productInfo = await data.json();
    setProductInfo(productInfo);
  };
  return productInfo;
};

export default useProductDetails;
