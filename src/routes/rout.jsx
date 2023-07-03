import { Route, Routes } from "react-router-dom";
import MainPage from "../components/pages/main_page";
import BlogPage from "../components/pages/blog";
import Burger from "../components/burger_menu/burger";


function AppRoutes(){

    return(
        <Routes>
<Route path="/" element={<MainPage/>} />
<Route path="/blog" element={<BlogPage/>} />
<Route path="/menu" element={<Burger/>} />
        </Routes>
    )

}

export default AppRoutes;