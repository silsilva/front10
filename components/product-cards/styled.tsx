import styled from "styled-components";
export const Contaneiner = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  @media (max-width: 769px) {
    width: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
export const Form = styled.div`
  width: 30vh;

  background-color: #b57c00;
  @media (max-width: 769px) {
    width: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-bottom: 15px;
  }
`;
