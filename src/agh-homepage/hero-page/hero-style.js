import styled from "styled-components";
export const HeroStyled = styled.div`
  padding: 50px;
  h1 {
    color: red;
  }
  h2 {
    color: black;
    // font-weight: 400;
    font-weight: 700;
  }
  .parent {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
  .parent__child {
    max-width: 1000px;
    font-size: 20px;
    color: rgb(86, 102, 131);
    line-height: 1.6;
    text-align: center;
  }
`;
export const HeroHeader = styled.h1``;
