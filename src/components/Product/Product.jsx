import { Card } from "react-bootstrap";
import "./product.scss";
import STAR_URL from "./../../assets/star.svg";

const Product = () => {
  const product = {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  };
  return (
    <Card className="product">
      <div className="d-flex justify-content-center image-container">
        <Card.Img className="image" variant="top" src={product.image} />
      </div>
      <Card.Body>
        <Card.Title className="title">{product.title}</Card.Title>
        <div className="category">{product.category}</div>
        <div className="rating">
          <div className="rate">
            <div className="rate-text">{product.rating.rate}</div>
            <div className="rate-star">
              <img alt="logo" src={STAR_URL} width="10" height="10" />
            </div>
          </div>
          <div className="count">&nbsp;({product.rating.count})</div>
        </div>
        <div className="price">CA${product.price}</div>
      </Card.Body>
    </Card>
  );
};

export default Product;
