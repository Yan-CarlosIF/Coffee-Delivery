import styled from "styled-components";

export const Conteiner = styled.div`
  margin: 7rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  .title {
    color: ${({ theme }) => theme["base-title"]};
    justify-self: flex-start;
    padding-right: 57.8rem;
  }
`;

export const CoffeeListConteiner = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2.5rem 2rem;

  margin-top: 3.375rem;
`;
