import Container from "react-bootstrap/Container";
import Products from "../Products/Products";
import "./body.scss";

const Body = () => {
  return (
    <div className="body">
      <Container>
        <Products />
      </Container>
    </div>
  );
};

export default Body;
