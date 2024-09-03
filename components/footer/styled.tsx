import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  background-color: #36393c;
  justify-content: space-between;

  @media (max-width: 769px) {
    width: 100vh;
    padding: 10vh 20vh;
    margin-top: 100vh;
    align-items: flex-start;
  }
`;
