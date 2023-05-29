import Carousel from "nuka-carousel";
import styled,{createGlobalStyle} from "styled-components";
import img_avatar from "./Assets/backgroundavatar.png"

export const Carrosel = styled(Carousel)`
  display: flex;
  justify-content: space-between;
`;
export const Filmes = styled.img`
  margin-left: 2vw;
`;
export const Header = styled.header`
  border: solid;
  height: 62vh;
  background-image:url(${img_avatar});
  background-size: 100%;
  background-repeat: no-repeat;
`;
export const global_styled = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

`;

export const nave = styled.nav `
background: #000000 0% 0% no-repeat padding-box;
opacity: 0.5;
backdrop-filter: blur(9px);
-webkit-backdrop-filter: blur(9px);
display:flex;
justify-content: space-between;
`