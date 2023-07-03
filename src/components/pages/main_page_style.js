import styled from "styled-components";

export const fish = styled.div`
  background-image: url("/img/image 8-3.svg");
  width: 1440px;
  height: 900px;
  @media (max-width: 375px) {
    background-image: url("/img/375-main.svg");
    width: 375px;
    background-repeat: no-repeat;
  }
`;