import Header from "../header/header";
import Main from "../main/main";
import Footer from "../footer/footer";
import * as S from "./main_page_style";


function MainPage(){
    return(
        <div>
        <S.fish>
        <Header/>
        <Main/>
        </S.fish>
        <Footer/>
        </div>
    )
}



export default MainPage;