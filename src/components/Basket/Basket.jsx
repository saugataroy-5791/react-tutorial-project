import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { UserContext } from "../../utils/UserContext";

const Basket = () => {
  const { loggedInUser, setLoggedBodyUser } = useContext(UserContext);

  return (
    <div className="basket content">
      <Container>
        <h2>Basket</h2>
        <Form.Label htmlFor="userInfo">User Info</Form.Label>
        <Form.Control
          type="text"
          id="userInfo"
          value={loggedInUser}
          onChange={(e) => {
            setLoggedBodyUser(e.target.value);
          }}
        />
      </Container>
    </div>
  );
};

export default Basket;
