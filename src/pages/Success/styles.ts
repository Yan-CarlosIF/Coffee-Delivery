import styled from "styled-components";

export const SuccessConteiner = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5rem;
  gap: 6rem;
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  gap: 2.5rem;
`;

export const Titles = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.5rem;

  h1 {
    font-size: 2rem;
    color: ${({ theme }) => theme["yellow-dark"]};
  }

  span {
    font-size: 1.25rem;
    color: ${({ theme }) => theme["base-subtitle"]};
  }
`;

export const InfosConteiner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 2.5rem;
  border-radius: 6px 36px 6px 36px;
  padding: 2.5rem;
  width: 100%;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    padding: 1px;
    border-radius: inherit;
    background: linear-gradient(
      to right,
      ${({ theme }) => theme["yellow"]},
      ${({ theme }) => theme["purple"]}
    );
    -webkit-mask: linear-gradient(white 0 0) content-box,
      linear-gradient(white 0 0);
    mask: linear-gradient(white 0 0) content-box, linear-gradient(white 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    z-index: -1;
  }
`;

export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;
