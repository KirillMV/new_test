import * as S from "./image_blog_style";

function ImageBlog(props) {
  return (
   <S.blog>
    <S.imag src="./img/image.svg" alt="" />
    <S.informImage>
<div>"id": {props.id},</div>
<div>"name": {props.name},</div>
<div>"year": {props.year},</div>
<div> "color": {props.color}, </div>
<div>"pantone_value": {props.pantone_value}</div>
    </S.informImage>
   </S.blog>
  );
}

export default ImageBlog;