import * as S from "./durger_style";
function Burger() {

    return(
        <S.Burger>
            <S.header>
                <img src="/img/cansle.svg" alt="" />
                <S.social>
                    <img src="/img/vk-dark.svg" alt="" />
                    <img src="/img/inst-dark.svg" alt="" />
                    <img src="/img/facebook-dark.svg" alt="" />
                </S.social>
            </S.header>
            <S.main>
            <a>Главная</a>
            <a>Блог</a>
            <a>Обучение</a>
            <a>Снаряжение</a>
            <a>Туры</a>
            <a>Акции</a>
            <a> Отзывы</a>
            <a>Контакты</a>
            </S.main>

        <S.wave></S.wave>
        <S.footer>
            <div></div>
        </S.footer>
        </S.Burger>
    )
}







export default Burger;

