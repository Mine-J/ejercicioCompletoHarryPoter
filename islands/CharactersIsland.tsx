import { FunctionalComponent } from "preact";
type hp = {
  id: string;
  name: string;
  house: string;
  image: string;
};
export type info = {
  data: hp[];
};
export const CharactersIsland: FunctionalComponent<info> = (props) => {
  const info: hp[] = props.data;

  const Favoritos = (elem: hp) => {
    const favoritosCookie = document.cookie
      .split("; ")
      .find((row) => row.startsWith("Favoritos="));

    let favoritos = favoritosCookie
      ? favoritosCookie.split("=")[1].split(",")
      : [];
    console.log(favoritos);
    if (favoritos.includes(elem.id)) {
      favoritos = favoritos.filter((id) => id !== elem.id);
    } else {
      favoritos.push(elem.id);
    }

    document.cookie = `Favoritos=${favoritos.join(",")}; path=/`;
  };

  return (
    <div class="CharacterContainer">
      {info && info.map((elem) => {
        return (
          <div class="personaje">
            <a href={`/Character/${elem.id}`}>
              <img src={elem.image} alt={elem.name} />
              <p>Nombre: {elem.name}</p>
              <br />
                    <p><a href={`/House/${elem.house}`}>House: {elem.house}</a></p>
              <button type="button" onClick={() => Favoritos(elem)}>
                Favoritos
              </button>
            </a>
          </div>
        );
      })}
    </div>
  );
};
