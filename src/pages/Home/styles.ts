import styled from "styled-components";

interface HomeContainerProps {
  background: string;
}

export const HomeContainer = styled.div<HomeContainerProps>`
  display: flex;
  justify-content: center;
  gap: 3.5rem;
  margin-top: 1rem;
  height: 34rem;
  background-image: ${({ background }) => `url(${background})`};

  img {
    width: 29.75rem;
  }
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  width: 36.75rem;
  gap: 4.125rem;
`;

export const Texts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;
  flex: 1;

  width: 100%;

  h1 {
    font-size: 3rem;
    color: ${({ theme }) => theme["base-title"]};
  }

  p {
    font-size: 1.25rem;
    color: ${({ theme }) => theme["base-subtitle"]};
  }
`;

export const Itens = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem 2.5rem;
`;

