import styled from "styled-components";

export const CoffeeConteiner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  width: 16rem;
  height: 18.5rem;
  background-color: ${({ theme }) => theme["base-card"]};
  border-radius: 6px 36px 6px 36px;
  padding: 0 1.25rem;

  img {
    margin-top: -1.25rem;
  }

  h1 {
    font-size: 1.25rem;
    line-height: 130%;
    color: ${({ theme }) => theme["base-subtitle"]};
  }

  .description {
    font-size: 0.875rem;
    line-height: 130%;
    text-align: center;
    color: ${({ theme }) => theme["base-label"]};
  }
`;

export const TypeConteiner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  span {
    font-size: 0.75rem;
    line-height: 130%;
    font-weight: bold;

    background-color: ${({ theme }) => theme["yellow-light"]};
    color: ${({ theme }) => theme["yellow-dark"]};
    border-radius: 16px;
    padding: 0.25rem 0.5rem;
  }
`;

export const PriceConteiner = styled.div`
  margin-top: 1.8rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  .price {
    display: flex;
    align-items: flex-end;
    gap: 0.25rem;
    justify-content: center;

    span {
      display: flex;
      align-items: center;
      color: ${({ theme }) => theme["base-text"]};
      font-size: 0.875rem;
      gap: 0.25rem;

      h1 {
        font-size: 1.5rem;
      }
    }
  }
`;

interface ButtonProps {
  hasItems: boolean;
}

export const CartButton = styled.div<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 6px;
  background-color: ${({ theme }) => theme["purple"]};

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    border: none;
    background-color: transparent;
    cursor: ${({ hasItems }) => (hasItems ? "pointer" : "not-allowed")};
  }
`;
