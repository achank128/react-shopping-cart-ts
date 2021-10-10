import React from "react";
import { Wrapper, TotalContainer } from "./Cart.styles";
import { CartItemType } from "../../App";
import CartItem from "../CartItem/CartItem";
import { Close } from "@mui/icons-material";
import { Button } from "@mui/material";

type Props = {
  cartItem: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
  closeCart: () => void;
};

const Cart: React.FC<Props> = ({
  cartItem,
  addToCart,
  removeFromCart,
  closeCart,
}) => {
  const calculateTotal = (items: CartItemType[]) =>
    items.reduce((ack: number, item) => ack + item.amount * item.price, 0);
  return (
    <Wrapper>
      <span onClick={closeCart}>
        <Close />
      </span>
      <h2>Your Shopping Cart</h2>
      {cartItem.length === 0 ? <p>No items in cart.</p> : null}
      {cartItem.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
      <TotalContainer>
        <h3>Total: ${calculateTotal(cartItem).toFixed(2)}</h3>
        <Button size="small" disableElevation variant="contained">
          Checkout Now
        </Button>
      </TotalContainer>
    </Wrapper>
  );
};

export default Cart;
