import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  align-items: center;

  @media (max-width: 769px) {
    flex-direction: column;
    height: 150vh;
    width: 100vh;
    padding-top: 50vh;
  }
`;
export const Img = styled.img`
  width: 30%;
  height: 40%;
  margin: 0 20%;

  @media (max-width: 769px) {
    margin: 10% 0;
  }
`;
export const Text = styled.div`
  width: 100%;
  @media (max-width: 769px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 20%;
    height: 50vh;
  }
`;
