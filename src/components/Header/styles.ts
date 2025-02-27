import styled from "styled-components";

interface CartButtonProps {
  quantity: number;
}

export const HeaderConteiner = styled.header`
  display: flex;
  height: 6.5rem;
  width: 100%;
  align-items: center;
  justify-content: space-around;
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  width: 12.0625rem;
`;

export const BaseButton = styled.button`
  padding: 0.5rem;
  border: none;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LocationButton = styled(BaseButton)`
  flex: 1;
  background-color: ${({ theme }) => theme["purple-light"]};
  color: ${({ theme }) => theme["purple-dark"]};
  font-size: 0.875rem;
  gap: 0.25rem;

  svg {
    color: ${({ theme }) => theme["purple"]};
  }
`;

export const CartButton = styled(BaseButton)<CartButtonProps>`
  color: ${({ theme }) => theme["yellow-dark"]};
  background-color: ${({ theme }) => theme["yellow-light"]};
  cursor: ${({ quantity }) => (quantity > 0 ? "pointer" : "not-allowed")};
  opacity: ${({ quantity }) => (quantity > 0 ? 1 : 0.7)};
`;

export const CartQuantity = styled.div<CartButtonProps>`
  display: ${({ quantity }) => (quantity > 0 ? "inline" : "none")};
  background-color: ${({ theme }) => theme["yellow-dark"]};
  border-radius: 50%;
  width: 1.25rem;
  height: 1.25rem;
  font-size: 0.7rem;
  color: ${({ theme }) => theme["white"]};
  position: absolute;
  transform: translate(480%, -80%);

  & span {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
`;
