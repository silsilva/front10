import { BurgerContainer, BurgerPiece } from "./styled";

export function Menu({ handleClick }: any) {
  return (
    <BurgerContainer onClick={handleClick}>
      <BurgerPiece />
      <BurgerPiece />
      <BurgerPiece />
    </BurgerContainer>
  );
}
