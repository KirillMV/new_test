import * as S from "./header_blog_style";
import { Link, useNavigate } from "react-router-dom";
function HeaderBlog() {
  const navigate = useNavigate();
  return (
    <S.headerBlog>
      <S.headImage>
        <S.burger
          onClick={() => navigate("/menu")}
          alt="burger"
          src="/img/burger_black.svg"
        ></S.burger>

        <S.headerBlogButton>Обратный звонок</S.headerBlogButton>
        <S.headerBlogMenu>
          
          <S.headerBlogleft>
            <Link to={"/"}>Главная</Link>
            <a>Блог</a>
            <a>Обучение</a>
            <a>Снаряжение</a>
            <a>Туры</a>
            <a>Акции</a>
            <a>Отзовы</a>
            <a>Контакты</a>
          </S.headerBlogleft>
          <S.headerBlogSocial>
            <S.imgSocial src="./img/vk-dark.svg" alt="" />
            <S.imgSocialInst src="./img/inst-dark.svg" alt="" />
            <S.imgSocial src="./img/facebook-dark.svg" alt="" />
          </S.headerBlogSocial>
        </S.headerBlogMenu>
      </S.headImage>
    </S.headerBlog>
  );
}

export default HeaderBlog;
