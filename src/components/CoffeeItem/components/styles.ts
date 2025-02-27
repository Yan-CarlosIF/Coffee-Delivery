import styled from "styled-components";

export const InputNumberConteiner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  border-radius: 6px;
  background-color: ${({ theme }) => theme["base-button"]};
  line-height: 0;
`;

export const BaseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border: none;
  background-color: transparent;
  cursor: pointer;

  svg {
    color: ${({ theme }) => theme["purple"]};
  }

  &:hover {
    svg {
      color: ${({ theme }) => theme["purple-dark"]};
      transition: color 0.5s ease;
    }
  }
`;
