import * as S from "./main_blog_style";
import ImageBlog from "../image_blog/image_blog";
import axios from "axios";
import { useEffect, useState } from "react";

function MainBlog() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    axios.get("https://reqres.in/api/products").then((result) => {
      console.log(result.data.data);

      setBlogs(
        result.data.data.map((el) => (
          <ImageBlog
            key={el.id}
            id={el.id}
            name={el.name}
            year={el.year}
            color={el.color}
            pantone={el.pantone_value}
          />
        ))
      );
    });
  }, []);

  return <S.mainContent>
    {blogs}
  </S.mainContent>;
}

export default MainBlog;
