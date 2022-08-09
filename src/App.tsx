import { useState } from "react";
import { useQuery } from "react-query";
//styles
import {
  Container,
  Wrapper,
  StyledButton,
  Navbar,
  RightNavbar,
} from "./App.styles";
//components
import Cart from "./components/Cart/Cart";
import Item from "./components/Item/Item";
//mui
import { Badge, Grid, LinearProgress, Drawer } from "@mui/material";
import { AddShoppingCart } from "@mui/icons-material";

export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
};

const url = "https://fakestoreapi.com/products";
const getProducts = async (): Promise<CartItemType[]> => {
  return await (await fetch(url)).json();
};

const App = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as CartItemType[]);

  const { data, isLoading, error } = useQuery<CartItemType[]>(
    "products",
    getProducts
  );

  const getTotalItems = (items: CartItemType[]) => {
    return items.reduce((ack: number, item) => ack + item.amount, 0);
  };

  const handleAddToCart = (clickedItem: CartItemType) => {
    setCartItems((prev) => {
      const isItemInCart = prev.find((item) => item.id === clickedItem.id);
      if (isItemInCart) {
        return prev.map((item) =>
          item.id === clickedItem.id
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      }
      return [...prev, { ...clickedItem, amount: 1 }];
    });
  };

  const handleRemoveFromCart = (id: number) => {
    setCartItems((prev) =>
      prev.reduce((ack, item) => {
        if (item.id === id) {
          if (item.amount === 1) return ack;
          return [...ack, { ...item, amount: item.amount - 1 }];
        } else {
          return [...ack, item];
        }
      }, [] as CartItemType[])
    );
  };

  const checkout = () => {
    alert("Checkout your cart!");
    setCartItems([]);
  };

  const closeCart = () => setCartOpen(false);

  if (isLoading) return <LinearProgress />;
  if (error) return <h1>!Error...</h1>;

  return (
    <Wrapper>
      <Navbar>
        <RightNavbar>Shopping Cart TS</RightNavbar>

        <StyledButton onClick={() => setCartOpen(true)}>
          <Badge badgeContent={getTotalItems(cartItems)} color="error">
            <AddShoppingCart />
          </Badge>
        </StyledButton>
      </Navbar>
      <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>
        <Cart
          cartItems={cartItems}
          addToCart={handleAddToCart}
          removeFromCart={handleRemoveFromCart}
          closeCart={closeCart}
          checkout={checkout}
        />
      </Drawer>
      <Container>
        <Grid container spacing={3}>
          {data?.map((item) => (
            <Grid item key={item.id} xs={12} sm={6} md={4}>
              <Item item={item} handleAddToCart={handleAddToCart} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Wrapper>
  );
};

export default App;
