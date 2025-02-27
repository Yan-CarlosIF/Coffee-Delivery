import styled from "styled-components";

export const CoffeesCard = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  gap: 2rem;
  background-color: ${({ theme }) => theme["base-card"]};
  border-radius: 6px 36px 6px 36px;
  padding: 2.5rem;
`;

export const SummaryConteiner = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: auto;
  gap: 0.75rem;
  background-color: ${({ theme }) => theme["base-card"]};
  border-radius: 6px 36px 6px 36px;
`;

export const InformationConteiner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    color: ${({ theme }) => theme["base-text"]};
    font-size: 0.875rem;
  }

  .price {
    font-size: 1rem;
  }

  h4 {
    color: ${({ theme }) => theme["base-subtitle"]};
    font-size: 1.25rem;
  }
`;

export const ConfirmationButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.75rem;
  border-radius: 6px;
  padding: 0.75rem 0.5rem;
  background-color: ${({ theme }) => theme["yellow"]};
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme["white"]};
  font-weight: bold;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }

  &:not(:disabled):hover {
    background-color: ${({ theme }) => theme["yellow-dark"]};
    transition: 0.2s ease-in-out;
  }
`;
