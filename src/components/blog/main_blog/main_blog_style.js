import { styled } from "styled-components";

export const mainContent = styled.div`
  width: 1440px;
  display: grid;
  grid-template-columns: 328px 372px 328px;
  grid-template-rows: 290px 290px;
  row-gap: 104px;
  column-gap: 88px;
  padding-top: 56px;
  padding-left: 128px;
  margin-bottom: 277px;
  padding-right: 108px;
  @media (max-width: 375px) {
    /* display: grid;
    grid-template-columns: 1px;
    grid-template-rows: 290px 290px; */
    display:flex;
    flex-direction:column;
    margin-top:65px;
    padding-left: 32px;
    padding-right: 30px;
  }
`;
