import styled from "styled-components";
export const HeroStyled = styled.div`
  padding: 50px;
  h1 {
    color: red;
    // @media (max-width: 1000px) {
    //   color: green;
    // }
  }
  h2 {
    color: black;
    // font-weight: 400;
    font-weight: 700;
    @media (max-width: 412px) {
      font-size: 20px;
    }
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
  .button__container {
    display: flex;
    gap: 5px;
    @media (max-width: 618px) {
      flex-direction: column;
    }
  }
  .button__one {
    padding: 12px 16px;
    background-color: rgb(232, 232, 232);
    font-weight: 700;
    border: none;
    border-radius: 20px;
  }
  .button__two {
    padding: 12px 16px;
    font-weight: 700;
    background-color: red;
    color: white;
    border: none;
    border-radius: 20px;
  }
`;
export const HeroHeader = styled.h1``;
