import styled from "styled-components";

export const CheckoutContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 4rem;
`;

export const TitlesConteiner = styled.div`
  display: flex;
  margin: 2rem 0 1rem 0;
  align-items: center;
  width: 70rem;

  h3 {
    color: ${({ theme }) => theme["base-subtitle"]};
    font-size: 1.125rem;
  }

  .left {
    padding-right: 30.8rem;
    padding-left: 0.5rem;
  }
`;

export const CheckoutCard = styled.div`
  display: flex;
  width: 70rem;
  gap: 2rem;
`;

export const FormConteiner = styled.form`
  display: flex;
  flex-direction: column;
  width: 40rem;
  gap: 0.75rem;
`;

export const FormInputConteiner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: ${({ theme }) => theme["base-card"]};
  border-radius: 6px 36px 6px 36px;
  padding: 2.5rem;
`;

export const FormTitle = styled.div`
  display: flex;
  gap: 0.5rem;

  h4 {
    color: ${({ theme }) => theme["base-subtitle"]};
    font-size: 1rem;
    font-weight: 400;
  }

  span {
    color: ${({ theme }) => theme["base-text"]};
    font-size: 0.875rem;
  }

  svg {
    color: ${({ theme }) => theme["yellow-dark"]};
    margin-top: -0.15rem;
  }
`;

export const BaseInput = styled.input`
  background-color: ${({ theme }) => theme["base-input"]};
  border: 1px solid ${({ theme }) => theme["base-button"]};
  border-radius: 4px;
  padding: 0.75rem;
  border: 1px solid ${({ theme }) => theme["base-button"]};
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  box-shadow: none;
  outline: none;
`;

export const CepInput = styled(BaseInput)`
  width: 12.5rem;
`;

export const GrowInput = styled(BaseInput)`
  flex: 2;
`;

export const ShrinkInput = styled(BaseInput)`
  width: 4.5rem;
  flex-shrink: 1;
`;

export const InputContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;
