import styled from "styled-components";

export const PaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: ${({ theme }) => theme["base-card"]};
  border-radius: 6px;
  padding: 2.5rem;
`;

export const PaymentTitle = styled.div`
  display: flex;
  gap: 0.5rem;

  & svg {
    color: ${({ theme }) => theme["purple"]};
    margin-top: -0.15rem;
  }

  .texts {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;

    h4 {
      color: ${({ theme }) => theme["base-subtitle"]};
      font-size: 1rem;
      font-weight: 400;
    }

    span {
      color: ${({ theme }) => theme["base-text"]};
      font-size: 0.875rem;
    }
  }
`;

export const PaymentMethodsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  width: 100%;
`;

interface PaymentButtonProps {
  ispressed: boolean;
}

export const PaymentButtonContainer = styled.div<PaymentButtonProps>`
  flex: 1;
  background-color: ${({ theme, ispressed }) =>
    ispressed ? theme["purple-light"] : theme["base-button"]};
  justify-content: center;
  :hover {
    background-color: ${({ theme, ispressed }) =>
      !ispressed ? theme["base-hover"] : "rgb(225, 215, 248)"};
    transition: 0.2s;
  }
  border-radius: 6px;
`;

export const PaymentButton = styled.button<PaymentButtonProps>`
  flex: 1;
  display: flex;
  white-space: nowrap;
  align-items: center;
  justify-content: flex-start;
  line-height: 1;
  font-size: 0.75rem;
  color: ${({ theme }) => theme["base-text"]};
  gap: 0.5rem;
  padding: 1rem;
  border-radius: 6px;
  border: 1px solid
    ${({ theme, ispressed }) =>
      ispressed ? theme["purple"] : theme["base-button"]};
  background-color: ${({ theme, ispressed }) =>
    ispressed ? theme["purple-light"] : theme["base-button"]};
  cursor: pointer;
  box-shadow: none;
  width: 100%;

  svg {
    color: ${({ theme }) => theme["purple"]};
  }
`;
