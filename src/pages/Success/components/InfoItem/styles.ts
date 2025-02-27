import styled from "styled-components";

interface InfoItemProps {
  type: "location" | "time" | "payment";
}

const colors = {
  location: "purple",
  time: "yellow",
  payment: "yellow-dark",
};

export const Info = styled.div<InfoItemProps>`
  display: flex;
  gap: 0.75rem;
  align-items: center;
  font-size: 0.875rem;

  & .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme, type }) => theme[colors[type]]};
    border-radius: 50%;
    width: 2rem;
    height: 2rem;
  }

  & .infos {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    font-size: 1rem;
  }
`;
