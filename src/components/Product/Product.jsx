import { Card } from "react-bootstrap";
import "./product.scss";
import STAR_URL from "./../../assets/star.svg";
import { Link } from "react-router-dom";

const Product = (props) => {
  const { productData } = props;
  return (
    <Link to={"/products/" + productData.id}>
      <Card className="product">
        <div className="d-flex justify-content-center image-container">
          <Card.Img className="image" variant="top" src={productData.image} />
        </div>
        <Card.Body>
          <Card.Title className="title">{productData.title}</Card.Title>
          <div className="category">{productData.category}</div>
          <div className="rating">
            <div className="rate">
              <div className="rate-text">{productData.rating.rate}</div>
              <div className="rate-star">
                <img alt="logo" src={STAR_URL} width="10" height="10" />
              </div>
            </div>
            <div className="count">&nbsp;({productData.rating.count})</div>
          </div>
          <div className="price">CA${productData.price}</div>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default Product;
