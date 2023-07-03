import { Link, useNavigate } from "react-router-dom";
import * as S from "./header_style";

function Header() {
  const navigate = useNavigate();
  return (
    <S.header>
     
      <S.leftHeaderMenu>
        <a>О клубе</a>
        <Link to={"/blog"}>Блог</Link>
        <a>Снаряжение</a>
        <a>Туры</a>
        <a>Акции</a>
        <a>Отзовы</a>
        <a>Контакты</a>
      </S.leftHeaderMenu>

      <S.rightHeaderMenu>
      <S.menuBurger
        onClick={() => {
          console.log('text');
          navigate("/menu");
        }}
        alt="burger"
        src="/img/burger_wite.svg"
      />
        <S.button>Обратный звонок</S.button>
        <S.socialImage>
          <S.social src="./img/vk.svg"></S.social>
          <S.socialInst src="./img/inst.svg"></S.socialInst>
          <S.social src="./img/fb.svg"></S.social>
        </S.socialImage>

      </S.rightHeaderMenu>
    </S.header>
  );
}

export default Header;
