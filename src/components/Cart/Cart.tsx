import React from "react";
import { Wrapper, TotalContainer } from "./Cart.styles";
import CartItem from "../CartItem/CartItem";
import { Close } from "@mui/icons-material";
import { Button } from "@mui/material";
import { CartItemType } from "../../App";

type Props = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
  closeCart: () => void;
  checkout: () => void;
};

const Cart: React.FC<Props> = ({
  cartItems,
  addToCart,
  removeFromCart,
  closeCart,
  checkout,
}) => {
  const calculateTotal = (items: CartItemType[]) =>
    items.reduce((ack: number, item) => ack + item.amount * item.price, 0);
  return (
    <Wrapper>
      <span onClick={closeCart}>
        <Close />
      </span>
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? <p>No items in cart.</p> : null}
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
      <TotalContainer>
        <h3>Total: ${calculateTotal(cartItems).toFixed(2)}</h3>
        <Button
          size="small"
          disableElevation
          variant="contained"
          onClick={checkout}
        >
          Checkout Now
        </Button>
      </TotalContainer>
    </Wrapper>
  );
};

export default Cart;
