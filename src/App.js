import { useState } from "react";
import filme1 from "./Assets/1.png";
import filme2 from "./Assets/2.png";
import filme3 from "./Assets/3.png";
import filme4 from "./Assets/4.png";
import filme5 from "./Assets/5.png";
import filme7 from "./Assets/7.png";
import filme8 from "./Assets/8.png";
import filme9 from "./Assets/9.png";
import filme10 from "./Assets/10.png";
import filme11 from "./Assets/11.png";
import filme12 from "./Assets/12.png";
import avatar from "./Assets/backgroundavatar.png";
import * as S from "./Style.js";
import dell from "./Assets/Grupo 569.svg";
import lupa from "./Assets/buscar.svg";
export default function App() {
  const [primeirosFilmes, setPrimeirosFilmes] = useState([
    filme1,
    filme2,
    filme3,
    filme4,
    filme5,
    filme12
  ]);
  const [segundosFilmes, setSegundosFilmes] = useState([
    filme7,
    filme8,
    filme9,
    filme10,
    filme11
  ]);

  const [terceirosFilmes, seSegundosFilmes] = useState([
    filme7,
    filme8,
    filme9,
    filme10,
    filme11
  ]);

  return (
    <div>
      <S.global_styled />

      <S.Header>
        <S.nave>
          <img src={dell} alt="" />

          <section>
            <p> Series</p>
            <p> Filmes</p>
          </section>

          <section>
            <img src={lupa} alt="" />
            <p> Filtro</p>
            <p> Login </p>
          </section>
        </S.nave>
      </S.Header>

      <S.Main>
        <S.Carrosel slidesToShow={2} wrapAround={true}>
          {primeirosFilmes.map((item) => (
            <S.Filmes src={item} alt="" />
          ))}
        </S.Carrosel>

        {segundosFilmes.map((item) => (
          <S.Filmes src={item} alt="" />
        ))}
      </S.Main>
    </div>
  );
}
