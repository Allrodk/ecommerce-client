import styled from "styled-components";

export const Container = styled.div`
  top: 3.8rem;
  position: relative;
  z-index: 1;
  width: 100vw;
  img {
    width: 100vw;
    height: 30rem;
  }
 
`;

export const InfoBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;
  span {
    font-size: 1.6rem;
    font-weight: 700;
    color: #1a1a1a;
  }
  
  
`;

export const AgeBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    padding: 0 1rem;
    width: 10rem;
    color: #484848;
    font-size: 0.8rem;
  }
`;

export const Square = styled.div`
  background-color: #2193d1;
  height: 3rem;
  border-radius: 0.8rem;
  padding: 2rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: 700;
  font-size: 2em;
`;
