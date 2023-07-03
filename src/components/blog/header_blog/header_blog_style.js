import styled from "styled-components";

export const headerBlog = styled.div`
  width: 1440px;
  height: 371px;
  @media (max-width: 375px) {
    width: 374px;
    height: 178px;
  }
`;

export const headImage = styled.div`
  background-image: url("./img/header_pic.svg");
  width: 1440px;
  height: 303px;
  padding-top: 36px;
  background-repeat: no-repeat;
  background-size: contain;
  @media (max-width: 375px) {
    background-image: url("./img/375.svg");
    width: 374px;
    height: 178px;
    background-repeat: no-repeat;
    background-size: cover;
    background-size: contain;
    display:flex;
    flex-direction:row;
  }
`;

export const burger = styled.img`
  display: none;
  @media (max-width: 375px) {
    display:flex;
    width: 40px;
    height: 32px;
    margin-left:25px;
    margin-top:170px;
  }
`;

export const headerBlogButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 189px;
  height: 45px;
  border-radius: 13px;
  background: #fff;
  box-shadow: 0px 10px 16px 0px rgba(0, 0, 0, 0.1),
    0px 4px 6px 0px rgba(0, 0, 0, 0.06);
  color: #103a58;
  font-size: 18px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 222px;
  margin-left: 1162px;
  @media (max-width: 375px) {
    width: 190px;
    height: 45px;
    margin-left: 132px;
    margin-top: 155px;
    background: #103a58;
    box-shadow: 0px 10px 16px 0px rgba(0, 0, 0, 0.1),
      0px 4px 6px 0px rgba(0, 0, 0, 0.06);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    
  }
`;

export const headerBlogMenu = styled.div`
  display: flex;
`;
export const headerBlogleft = styled.div`
  display: flex;
  gap: 47px;
  color: #103a58;
  font-size: 18px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding-top: 24px;
  padding-left: 90px;
  @media (max-width: 375px) {
    display: none;
  }
`;
export const headerBlogSocial = styled.div`
  display: flex;
  padding-left: 240px;
  padding-top: 22px;
  gap: 19.5px;
  padding-right: 89.5px;
  align-items: center;
  @media (max-width: 375px) {
    display: none;
  }
`;

export const imgSocial = styled.img`
  width: 25.5px;
  height: 25.5px;
`;
export const imgSocialInst = styled.img`
  width: 35.417px;
  height: 34px;
`;
