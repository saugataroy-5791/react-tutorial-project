import { useEffect } from "react";
import Container from "react-bootstrap/Container";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import "./productDetails.scss";
import Button from "react-bootstrap/Button";
import useProductDetails from "../../utils/hooks/useProductDetails";

const ProductDetails = () => {
  const { id } = useParams();
  const productInfo = useProductDetails(id);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleBackBtnClick = () => {
    navigate("/");
  };

  return (
    <div className="product-details content">
      <Container>
        <h2>Product Details</h2>
        {productInfo === null ? (
          <Loader />
        ) : (
          <div className="details">
            <div className="image mt-4">
              <img src={productInfo.image} width="300" height="auto" />
            </div>
            <h3 className="title mt-3">{productInfo.title}</h3>
            <p className="description">{productInfo.description}</p>
            <h5 className="price bold">CA${productInfo.price}</h5>
            <div className="button-container mt-3">
              <Button variant="outline-dark" onClick={handleBackBtnClick}>
                Back to home
              </Button>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
};

export default ProductDetails;
