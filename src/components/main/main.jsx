import * as S from "./main_style";
function Main() {
  return (
    <S.main>
      <S.mainTopElement>
      <S.mainTopElementTextTravaling>Путишествие в тысячу миль</S.mainTopElementTextTravaling>
      <S.mainTopElementTextClick>Начинается с первого клика</S.mainTopElementTextClick>
      <S.mainMenuButton>Хочу нырять...</S.mainMenuButton>
      </S.mainTopElement>
      <S.infoMenu>
        <S.calendar src="./img/calendar.svg" alt="" />
      <S.infoMenuTextYear>Работаем с 2009 года</S.infoMenuTextYear>
      <S.student src="./img/student.svg" alt="" />
      <S.infoMenuTextStudent>Более 2500 учеников</S.infoMenuTextStudent>
      </S.infoMenu>
      
      <S.menuBottom>
     <S.menuBottomElementOne>
        <S.menuBottomElementHeading>Доступный дайвинг</S.menuBottomElementHeading>
        <S.menuBottomElementfooting>Акции и горячие предложения на курсы обучения.</S.menuBottomElementfooting>
        <S.menuBottomButton>Узнать больше</S.menuBottomButton>
        </S.menuBottomElementOne>

      <S.menuBottomElementTwo>
        <S.menuBottomElementHeading>Онлайн запись</S.menuBottomElementHeading>
        <S.menuBottomElementfooting>Оставьте свой вопрос, мы перезвоним и проконсультируем вас.</S.menuBottomElementfooting>
        <S.menuBottomButton>Оставить вопрос</S.menuBottomButton>
      </S.menuBottomElementTwo>
      <S.menuBottomElementThree>
        <S.menuBottomElementHeading>Сертификаты</S.menuBottomElementHeading>
        <S.menuBottomElementfooting>Дайвинг в подарок для ваших друзей и знакомых.</S.menuBottomElementfooting>
        <S.menuBottomButton>Приобрести</S.menuBottomButton>
        </S.menuBottomElementThree>
      </S.menuBottom>
    </S.main>
  );
}

export default Main;
