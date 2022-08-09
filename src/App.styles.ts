import { IconButton } from "@mui/material";
import styled from "styled-components";

export const Wrapper = styled.div``;

export const Container = styled.div`
  margin: 80px 40px;
`;

export const StyledButton = styled(IconButton)`
  font-size: 1.2rem;
  margin-right: 20px;
  width: 50px;
  height: 50px;
`;

export const Navbar = styled.div`
  z-index: 1000;
  position: fixed;
  top: 0;
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: lightblue;
`;
export const RightNavbar = styled.ul`
  display: flex;
  align-items: center;
  margin-left: 20px;
  font-weight: 700;
`;
