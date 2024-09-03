import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 85vh;
  align-items: center;
  padding-top: 10%;

  @media (max-width: 769px) {
    flex-direction: column;

    width: 100vh;
    height: 100%;
  }
`;
