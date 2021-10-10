import styled from "styled-components";

export const Wrapper = styled.aside`
  width: 500px;
  padding: 20px;
  @media only screen and (max-width: 500px) {
    width: 300px;
  }
  span {
    cursor: pointer;
    color: #fd2c33;
  }
`;
export const TotalContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  button {
    background-color: lightblue;
    color: #333;
  }
`;
