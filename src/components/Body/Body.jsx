import Container from "react-bootstrap/Container";
import ProductList from "../ProductList/ProductList";
import "./body.scss";

const Body = () => {
  return (
    <div className="body content">
      <Container>
        <ProductList />
      </Container>
    </div>
  );
};

export default Body;
