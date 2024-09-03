import styled from "styled-components";

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
