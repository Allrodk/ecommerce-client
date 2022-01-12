import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px black solid;
`;

export const Logo = styled.a`
  list-style: none;
  text-decoration: none;
  padding: 0.8rem;
  background-color: black;
  border-radius: 0 10px 10px 0;

  &:hover {
    cursor: pointer;
    transition: 400ms;
    transform: scale(1.1);
  }

  span {
    color: white;
    background-color: black;
    border: solid white;
    border-radius: 10px;
    font-size: 1.8rem;
  }
`;

export const Links = styled.div`
  margin-right: 1rem;
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  @media (max-width: 768px) {
    position: fixed;
    top: 4.4rem;
    flex-direction: column;
    gap: 1rem;
    background-color: white;
    width: 98%;
    margin-left: 1%;
    padding: 1.2rem 0;
    font-weight: bold;
    border-radius: 10px;
    text-align: center;
    transition: 0.3s;
    box-shadow: 1px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    left: ${(props) => (props.activation ? "0" : "-100%")};
    z-index: 10;
  }
`;

export const ListItem = styled.li`
  list-style: none;
  font-size: 1.5rem;

  &:hover {
    cursor: pointer;
    transition: 400ms;
    font-weight: bold;
    transform: scale(1.1);
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.1rem;
    color: black;
    text-decoration: none;
  }
  img {
    width: 1.3rem;
  }
`;

export const Hamburger = styled.div`
  display: none;
  background-color: transparent;

  &:hover {
    cursor: pointer;
    transition: 400ms;
    transform: scale(1.5);
  }

  span {
    display: block;
    width: 25px;
    height: 3px;
    margin: 3px auto;
    background-color: black;
  }

  @media (max-width: 768px) {
    display: block;
  }
`;
