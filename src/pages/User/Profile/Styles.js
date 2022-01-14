import styled from "styled-components";

export const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;
export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: right;
  justify-content: center;

  span {
    font-size: 1.2em;
    font-weight: bold;
  }

  img {
    width: 19rem;
  }
`;

export const Auth = styled.div`
  display: flex;
  a {
    text-decoration: none;
  }
`;
