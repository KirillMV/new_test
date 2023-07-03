import styled from "styled-components";

export const menuBurger =styled.img`
display:none;
@media (max-width: 375px) {
  display:flex;
width: 40px;
height: 40px;
margin-left:20px;
margin-top:23px;

  }
`

export const header = styled.div`
  display: flex;

  width: 1440px;
  height: 150px;
  margin-left: 90px;
  margin-right: 90px;
  @media (max-width: 375px) {
  display:flex;
  width: 375px;
  height: 50px;
  margin-left:0px;
  margin-right:0px;
  }

`;
export const social = styled.img`
  width: 25.5px;
  height: 25.5px;
`;
export const socialInst = styled.img`
  width: 35.417px;
  height: 34px;
`;
export const socialImage = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 27px;
  margin-right: 89px;
  margin-top: 38px;
  margin-bottom: 86px;
  gap: 20px;
  @media (max-width: 375px) {
  display:none;
  }
`;

export const leftHeaderMenu = styled.div`
  display: flex;
  gap: 30px;
  margin-top: 41px;
  margin-left: 90px;
  color: #fff;
  font-size: 18px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  @media (max-width: 375px) {
  display:none;
  }

`;

export const rightHeaderMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-left: 172px;
  @media (max-width: 375px) {
    margin-left: 0px;
  }
`;

export const button = styled.button`
  width: 189px;
  height: 45px;
  border-radius: 13px;
  background: #fff;
  border: none;
  padding: 12px 19px;
  color: #000;
  font-size: 18px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: 29px;
  @media (max-width: 375px) {
    margin-left:106px;
    margin-top:20px;
    margin-right:20px;
  }
`;
