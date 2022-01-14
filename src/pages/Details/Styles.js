import styled from "styled-components";

export const Items = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: 2rem;
  font-size: 1.2em;
  p {
    text-align: justify;
  }
  span {
    margin-top: 1rem;
    text-align: center;
    font-weight: bold;
  }
`;
export const AddCart = styled.a`
  display: flex;
  align-items: center;
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
