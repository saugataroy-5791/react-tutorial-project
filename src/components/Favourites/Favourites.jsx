import { useContext } from "react";
import Container from "react-bootstrap/Container";
import { UserContext } from "../../utils/UserContext";

const Favourites = () => {
  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="favourites content">
      <Container>
        <h2>Favourites</h2>
        <p>Logged user: {loggedInUser}</p>
      </Container>
    </div>
  );
};

export default Favourites;
