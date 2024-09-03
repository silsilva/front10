import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  padding-top: 10%;

  @media (max-width: 769px) {
    width: 100vh;
    padding: 10vh 0;
    margin-top: 30vh;
  }
`;
