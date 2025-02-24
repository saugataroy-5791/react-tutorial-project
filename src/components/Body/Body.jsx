import Container from "react-bootstrap/Container";
import useOnlineStatus from "../../utils/hooks/useOnlineStatus";
import ProductList from "../ProductList/ProductList";
import "./body.scss";

const Body = () => {
  const isOnline = useOnlineStatus();
  if (!isOnline) {
    return (
      <div className="offline-content content">
        <Container>
          <h1 className="content">
            Looks like you are offline!!! Please check your internet.
          </h1>
        </Container>
      </div>
    );
  } else {
    return (
      <div className="body content">
        <Container>
          <ProductList />
        </Container>
      </div>
    );
  }
};

export default Body;
