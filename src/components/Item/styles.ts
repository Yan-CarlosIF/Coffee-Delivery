import styled from "styled-components";

export const ItemConteiner = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  line-height: 1;

  div {
    display: flex;
    padding: 0.5rem;
    border-radius: 50%;
    background-color: ${({ color }) => color};
    color: ${({ theme }) => theme["white"]};
  }
`;
