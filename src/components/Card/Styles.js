import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;  
  gap: 1rem;
  margin: 0 0.8rem 1rem;
  padding-left: 3.2rem ;
  width: 15rem;
  height: 15rem;
  border: 1px solid;
`;

export const Item = styled.div`
  cursor: pointer;
  text-decoration: none;
  color: #000;
  img {
    width: 15rem;
    height: 10rem;
    border-radius: 0.4rem;
  }
  h2 {
    padding: 0.5rem 0;
    font-size: 1.2em;
    inline-size: 15rem;
    overflow-wrap: break-word;
  }
  &:hover {
    cursor: pointer;
    transition: 200ms;
    transform: scale(1.1);
  }
`;

export const AddCart = styled.a`
  display: flex;
  align-items: center;  
  padding-left: 1rem;;
  gap: 0.5rem;
  
  &:hover {
    cursor: pointer;
    transition: 200ms;
    transform: scale(1.1);
  }

`;

export const Cart = styled.div`
  color: #e60013;
  font-size: 1.4em;
  padding: 0.5rem 0;
  display: flex;
  border: none;
  background-color: #fff;
`;
export const Square = styled.div`
  background-color: #2193d1;
  height: 3rem;
  width: 8.2rem;
  border-radius: 0.8rem;
  padding: 2rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
  color: #fff;
  font-weight: 700;
  font-size: 1.8em;
`;
