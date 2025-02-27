import styled from "styled-components";

export const CoffeeCartItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid ${({ theme }) => theme["base-button"]};

  & img {
    width: 4rem;
  }

  & .price {
    margin-bottom: 2.5rem;
    margin-left: auto;

    & span {
      color: ${({ theme }) => theme["base-text"]};
      line-height: 130%;
      font-weight: bold;
    }
  }
`;

export const InputNumberConteiner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  border-radius: 6px;
  background-color: ${({ theme }) => theme["base-button"]};
  line-height: 0;
  padding: 0.25rem 0.5rem;
`;

export const InfosConteiner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  p {
    color: ${({ theme }) => theme["base-subtitle"]};
    font-size: 1rem;
    line-height: 160%;
  }
`;

export const BaseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.3125rem;
  height: 1.3125rem;
  border: none;
  background-color: transparent;
  cursor: pointer;
  box-shadow: none;

  svg {
    color: ${({ theme }) => theme["purple"]};
  }

  &:hover {
    svg {
      transition: color 0.4s ease;
      color: ${({ theme }) => theme["purple-dark"]};
    }
  }
`;

export const RemoveButton = styled.button`
  display: flex;
  background-color: ${({ theme }) => theme["base-button"]};
  border-radius: 6px;
  border: none;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  gap: 0.25rem;
  color: ${({ theme }) => theme["base-text"]};

  svg {
    color: ${({ theme }) => theme["purple"]};
  }

  &:hover {
    transition: 0.2s ease;
    background-color: ${({ theme }) => theme["base-hover"]};
    svg {
      transition: color 0.2s ease;
      color: ${({ theme }) => theme["purple-dark"]};
    }
  }
`;

export const ActionsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  max-width: 171px;
`;
