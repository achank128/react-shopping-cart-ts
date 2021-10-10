import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  border: 1px solid lightblue;
  border-radius: 10px;
  height: 100%;

  button {
    border-radius: 0 0 10px 10px;
  }

  img {
    max-height: 250px;
    object-fit: cover;
    border-radius: 10px 10px 0 0;
  }

  div {
    padding: 10px;
    height: 100%;
  }
  h3 {
    margin: 20px 0;
  }
`;
