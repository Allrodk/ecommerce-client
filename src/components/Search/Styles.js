import styled from "styled-components";

export const Container = styled.div`
  background-color: #f8f8f8;
  padding: 4rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  span {
    font-size: 1.5rem;
    font-weight: 600;
    padding: 0 1rem;
  }
  input[type=text] {
    margin: 0 0.5rem;
    width: 32rem;
    padding: 0.5rem;
    font-size: 1.1rem;
    border: none;
  }
  input[type=submit] {
    margin: 0 0.5rem;
    width: 10rem;
    padding: 1rem;
    font-size: 1.1rem;
    border: none;
    &:hover {
      cursor: pointer;
      background-color: #a5abb65b;
      transition: all 200ms ease;
    }
  }
`;