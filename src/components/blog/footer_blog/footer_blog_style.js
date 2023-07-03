import { styled } from "styled-components";

export const footerBlog = styled.div`
  width: 1440px;
  height: 170px;
  background-color: #1e549f;
  margin-left: 20px;
  display: flex;
  flex-direction: row;
  @media (max-width: 375px) {
    width: 374px;
    height: 360px;
  }
`;
export const footerBloginform = styled.div`

  color: #fff;
  display: flex;
  gap:5px;
  flex-direction: column;
  margin-left: 43px;
  margin-right: 310px;
  margin-top:66px;
    @media (max-width: 375px) {
    display: flex;
    flex-direction: column;
    margin-left: 94px;
    width: 222px;
height:54px
    /* text-align: center; */
  }
`;
export const footerTelefon =styled.div`
 color: #fff;
  /* text-align: center; */
  font-size: 22px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
 width: 222px;
height:30px
`
export const footerEmail =styled.div`
 color: #fff;
  /* text-align: center; */
  font-size: 18px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

`
export const footerBlogRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
export const footerBlogList = styled.div`
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
  margin-left:95px;
  @media (max-width: 375px) {
    display:none;
  }
`;

export const wavesBlog = styled.div`
  background-image: url("./img/waves.svg");
  background-repeat: no-repeat;
  width: 1440px;
  height: 100px;
  margin-left: 20px;
    @media (max-width: 375px) {
    width: 374px;
  }
`;
export const social = styled.div`
  display:flex;
  gap:20px;
  align-items: center;
 padding-left:128px;
 @media (max-width: 375px) {
    display:none;
  }
`;
export const socialBlog = styled.img`
  width: 25.642px;
  height: 25.5px;
`;
export const socialInstBlog = styled.img`
  width: 35.613px;
  height: 34px;
`;

export const footerInfo = styled.div`
padding-left: 571px;

`
export const protection = styled.div`
display: flex;
flex-direction: column;
margin-top:20px;
margin-left:65px;
color: #FFF;
font-size: 12px;
font-family: Roboto;
font-style: normal;
font-weight: 400;
line-height: normal;
width: 199px;
@media (max-width: 375px) {
   display:flex;
   justify-content:center;
   flex-direction: column;
   margin-top:20px;
margin-left:5px;
  }

`

