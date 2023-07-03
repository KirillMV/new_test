import styled from "styled-components";

export const main = styled.div`
  height: 750px;
  width: 1440px;
  @media (max-width: 375px) {
    width: 374;
  }
`;

export const mainTopElement = styled.div`
  display: flex;
  flex-direction: column;
`;
export const mainMenuButton = styled.button`
  width: 404px;
  height: 60px;
  border-radius: 13px;
  border: 3px solid #fff;
  color: #fff;
  text-align: center;
  font-size: 24px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  background: url("/img/image 8-3.svg"),
    lightgray 0px -280.833px / 149.861% 159.852% no-repeat;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  margin-left: 180px;
  margin-top: 12px;
  @media (max-width: 375px) {
    margin-left: 20px;
    width: 323px;
  height: 54px;
  }
`;
export const mainTopElementTextTravaling = styled.a`
  color: #fff;
  font-size: 32px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-left: 180px;
  margin-top: 209px;
  @media (max-width: 375px) {
    margin-left: 20px;
    font-size: 24px;
  }
`;
export const mainTopElementTextClick = styled.a`
  color: #fff;
  font-size: 32px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  margin-left: 180px;
  @media (max-width: 375px) {
    margin-left: 20px;
    font-weight: 500;
    font-size: 24px;
  }
`;

export const menuBottom = styled.div`
  display: flex;
  margin-top: 125px;
  margin-bottom: 52px;
  margin-left: 101px;
  margin-right: 132px;
  gap: 71px;
   @media (max-width: 375px) {
    margin-left: 20px;
  }
`;

export const infoMenu = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 31px;
  margin-left: 121px;
`;
export const infoMenuTextYear = styled.a`
  color: #fff;
  font-size: 24px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  @media (max-width: 375px) {
    display: none;
  }
`;
export const calendar = styled.img`
  width: 18px;
  height: 20px;
  margin-right: 14px;
  margin-left: 89px;
  @media (max-width: 375px) {
    display: none;
  }
`;
export const student = styled.img`
  width: 18px;
  height: 20px;
  margin-right: 14px;
  margin-left: 89px;
  @media (max-width: 375px) {
    display: none;
  }
`;

export const infoMenuTextStudent = styled.a`
  color: #fff;
  font-size: 24px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  @media (max-width: 375px) {
    display: none;
  }
`;

export const menuBottomButton = styled.button`
  width: 365px;
  height: 38px;
  flex-shrink: 0;
  border-radius: 7px;
  background: var(--grad, linear-gradient(180deg, #5fc9f3 0%, #55abf5 100%));
  color: #fff;
  text-align: center;
  font-size: 18px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
    @media (max-width: 375px) {
    width: 323px;
  
  }
`;
export const menuBottomElementOne = styled.div`
  border-radius: 0px 0px 13px 13px;
  background: linear-gradient(0deg, #1e549f 0%, rgba(20, 116, 184, 0) 100%);
  width: 365px;
  height: 157px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 375px) {
    width: 323px;
    height: 140px;
    
  
  }
`;
export const menuBottomElementTwo = styled.div`
  border-radius: 0px 0px 13px 13px;
  background: linear-gradient(0deg, #1e549f 0%, rgba(20, 116, 184, 0) 100%);
  width: 365px;
  height: 157px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 375px) {
    display:none;
  
  }
  `;
  export const menuBottomElementThree = styled.div`
  border-radius: 0px 0px 13px 13px;
  background: linear-gradient(0deg, #1e549f 0%, rgba(20, 116, 184, 0) 100%);
  width: 365px;
  height: 157px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 375px) {
    display:none;
  
  }
  `;


export const menuBottomElementHeading = styled.a`
  color: #fff;
  font-size: 24px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
export const menuBottomElementfooting = styled.a`
  color: #fff;
  font-size: 16px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-left: 33px;
`;
