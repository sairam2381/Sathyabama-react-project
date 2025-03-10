import styled from "styled-components";
export const OurServiceStyled = styled.div`
  display: flex;
  flex-direction: column;
  //   justify-content: space-between;
  align-items: center;
  gap: 20px;
  h2 {
    color: rgb(119, 119, 119);
    font-weight: 600;
    font-size: 28px;
  }
  .sentence {
    color: rgb(91, 109, 147);
    font-size: 18px;
    max-width: 600px;
  }
  .parent {
    display: flex;
    gap: 50px;
    @media (max-width: 1298px) {
      flex-direction: column;
    }
  }
  .child {
    width: 400px;
    height: 300px;
    background-color: green;
  }
`;
