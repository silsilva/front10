import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20vh;
  align-items: center;

  @media (max-width: 769px) {
    width: 100vh;
    display: flex;
    font-size: 38px;
    background-color: #36393c;
    height: 200vh;
  }
`;

export const StyledButton = styled.button`
  cursor: pointer;
  display: flex;
  color: white;
  padding: 10px 20px;
  border: none;
  @media (max-width: 789px) {
    display: none;
  }
`;
export const HeaderC = styled.div`
  width: 100%;
  @media (max-width: 769px) {
    width: 100vh;
  }
`;
export const ButtonMenu = styled.button`
  display: none;
  @media (max-width: 769px) {
    border: none;
    display: flex;
    background-color: #36393c;
    padding-right: 10vh;
    padding-top: 2vh;
  }
`;
