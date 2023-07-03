import * as S from "./footer_blog_style";

function FooterBlog() {
  return (
    <div>
      <S.wavesBlog></S.wavesBlog>

      <S.footerBlog>
        <S.footerBloginform>
          <S.footerTelefon>+7 (495) 545 67 02</S.footerTelefon>
          <S.footerEmail>emails@mail.ru</S.footerEmail>
        </S.footerBloginform>

        <S.footerBlogRight>
          <S.footerBlogList>
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
          </S.footerBlogList>
          <S.footerInfo>
            <S.social>
              <S.socialBlog src="./img/vk.svg"></S.socialBlog>
              <S.socialInstBlog src="./img/inst.svg"></S.socialInstBlog>
              <S.socialBlog src="./img/fb.svg"></S.socialBlog>
            </S.social>
            <S.protection>
              Все права защищены © 2010-2013 Обучение дайвингу в Москве
            </S.protection>
          </S.footerInfo>
        </S.footerBlogRight>
      </S.footerBlog>
    </div>
  );
}

export default FooterBlog;
