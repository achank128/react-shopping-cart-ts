import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid lightblue;
  padding-bottom: 20px;

  div {
    flex: 1;
    margin-top: 20px;
  }
  img {
    width: 100px;
    object-fit: cover;
    margin: 40px 0 0 40px;
  }
  .infomation {
    display: flex;
    justify-content: space-between;
    @media only screen and (max-width: 500px) {
      font-size: 0.8rem;
    }
  }
  .buttons {
    display: flex;
    justify-content: center;
    p {
      margin: 10px 20px;
    }
    button {
      background-color: lightblue;
      color: #333;
    }
  }
`;
