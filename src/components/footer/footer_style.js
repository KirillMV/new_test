import { styled } from "styled-components";

export const footer = styled.div`
  width: 1440px;
  height: 170px;
  background-color: #1e549f;
  
  display: flex;
  flex-direction: row;
  @media (max-width: 375px) {
    width: 374px;
    height: 360px;
    margin-left: 0px;

     flex-direction: column;
  }
`;
export const footerInform = styled.div`
  color: #fff;
  display: flex;
  gap: 5px;
  flex-direction: column;
  margin-left: 43px;
  margin-right: 310px;
  margin-top: 66px;
  @media (max-width: 375px) {
    display: flex;
    flex-direction: column;
    margin-left: 0px;
    width: 222px;
    height: 54px;
    /* text-align: center; */
  }
`;
export const footerTelefon = styled.div`
  color: #fff;
  /* text-align: center; */
  font-size: 22px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  width: 222px;
  height: 30px;
  @media (max-width: 375px) {
    margin-left:94px;
  }
`;
export const footerEmail = styled.div`
  color: #fff;
  /* text-align: center; */
  font-size: 18px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  @media (max-width: 375px) {
    margin-left:130px;
  }
`;
export const footerRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
export const footerList = styled.div`
  color: #fff;
  text-align: center;
  font-size: 18px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
  margin-left: 95px;
  @media (max-width: 375px) {
    display: none;
  }
`;

export const waves = styled.div`
  background-image: url("./img/waves.svg");
  background-repeat: no-repeat;
  width: 1440px;
  height: 100px;
  
  @media (max-width: 375px) {
    width: 374px;
    margin-left: 0px;
  }
`;
export const socialBlok = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  padding-left: 128px;
  @media (max-width: 375px) {
    display: none;
  }
`;
export const social = styled.img`
  width: 25.642px;
  height: 25.5px;
`;
export const socialInst = styled.img`
  width: 35.613px;
  height: 34px;
`;

export const footerInfo = styled.div`
  padding-left: 571px;
  @media (max-width: 375px) {
    padding-left: 0px;
  }
`;
export const protection = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-left: 65px;
  color: #fff;
  font-size: 12px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 199px;
  @media (max-width: 375px) {
   
    margin-top:52px;
    margin-left:89px;
    height:32px;
  }
`;
 export const back = styled.a`
display:none;
@media (max-width: 375px) {
  display:flex;
  width: 168px;
height: 26.653px;
color: #FFF;
text-align: center;
font-size: 20px;
font-family: Roboto;
font-style: normal;
font-weight: 400;
line-height: normal;
text-decoration-line: underline;
margin-left:104px;
margin-top:52px;
 }
 `
 export const wight = styled.div`
   width: 1440px;
  height: 318px;
 `