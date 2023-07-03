import { styled } from "styled-components";
export const Burger = styled.div`
  width: 375px;
  height: 682px;
`;
export const header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const social = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const wave = styled.div`
  background-image: url("./img/waves.svg");
  background-repeat: no-repeat;
  width: 375px;
  height: 100px;
  margin-top: 29px;
`;

export const main = styled.div`
  color: #c4c4c4;
  text-align: center;
  font-size: 30px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 65px;
`;
export const footer = styled.div`
  background-color: #1e549f;
  width: 375px;
  height: 100px;
`;
