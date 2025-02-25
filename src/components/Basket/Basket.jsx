import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { UserContext } from "../../utils/context/UserContext";
import Product, { BasketProduct } from "../Product/Product";
import "./basket.scss";
import Button from "react-bootstrap/Button";
import { clearBasket } from "../../utils/slices/basketSlice";

const Basket = () => {
  const { loggedInUser, setLoggedBodyUser } = useContext(UserContext);
  const BasketProductItem = BasketProduct(Product);
  const dispatch = useDispatch();

  const basketItems = useSelector((store) => {
    return store.basket.items;
  });

  const handleClearCartBtnClick = () => {
    dispatch(clearBasket());
  };

  return (
    <div className="basket content">
      <Container>
        <div className="header">
          <h2>Basket</h2>
          {basketItems.length > 0 && (
            <Button variant="outline-dark" onClick={handleClearCartBtnClick}>
              Clear cart
            </Button>
          )}
        </div>
        <Form.Label htmlFor="userInfo">User Info</Form.Label>
        <Form.Control
          type="text"
          id="userInfo"
          value={loggedInUser}
          onChange={(e) => {
            setLoggedBodyUser(e.target.value);
          }}
        />
        <div className="basket-items mt-3">
          {basketItems.length === 0 ? (
            <h3>Your cart is empty !!!</h3>
          ) : (
            basketItems.map((product) => {
              return (
                <BasketProductItem key={product.id} productData={product} />
              );
            })
          )}
        </div>
      </Container>
    </div>
  );
};

export default Basket;
