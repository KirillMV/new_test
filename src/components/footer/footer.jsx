import * as S from "./footer_style";

function Footer() {
  return (
    <div> <S.wight></S.wight>
      <S.waves></S.waves>

      <S.footer>
       
        <S.footerInform>
          <S.footerTelefon>+7 (495) 545 67 02</S.footerTelefon>
          <S.footerEmail>emails@mail.ru</S.footerEmail>
        </S.footerInform>

        <S.footerRight>
          <S.footerList>
            <p>О клубе</p>
            <div>•</div>
            <p>Блог</p>
            <div>•</div>
            <p>Снаряжение</p>
            <div>•</div>
            <p>Туры</p>
            <div>•</div>
            <p>Акции</p>
            <div>•</div>
            <p>Отзовы</p>
            <div>•</div>
            <p>Контакты</p>
          </S.footerList>

          <S.footerInfo>
            <S.socialBlok>
              <S.social src="./img/vk.svg"></S.social>
              <S.socialInst src="./img/inst.svg"></S.socialInst>
              <S.social src="./img/fb.svg"></S.social>
            </S.socialBlok>

            <S.protection>
              Все права защищены © 2010-2013 Обучение дайвингу в Москве
            </S.protection>
            <S.back>Вернуться назад</S.back>
          </S.footerInfo>
        </S.footerRight>
       
      </S.footer>
    </div>
  );
}

export default Footer;

