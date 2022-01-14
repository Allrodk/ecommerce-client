import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #414040;
  margin-top: 2rem;
  padding: 0.5rem 0;
  color: #fff;
  bottom: 0;
  /* position: relative; */
  width: 100vw;
  top: 3.8rem;
  position: relative;
  z-index: 1;
`;

export const Social = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
`;

export const Item = styled.div`
  &:hover {
    cursor: pointer;
    transition: 400ms;
    transform: scale(1.2);
  }

  a {
    text-decoration: none;
    font-size: 1.5rem;
    color: #fff;
  }
`;
