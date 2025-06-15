import { useState } from "preact/hooks";
import { FunctionalComponent } from "preact";
type hp = {
  id: string;
  name: string;
  house: string;
  image: string;
  favoritos: boolean;
};
export type info = {
  data: hp[];
};
export const CharactersIsland: FunctionalComponent<info> = (props) => {
  const [fav, setFav] = useState<hp[]>(props.data);
  

  const Favoritos = (elem: hp) => {
    const favoritosCookie = document.cookie
      .split("; ")
      .find((row) => row.startsWith("Favoritos="));

    let favoritos = favoritosCookie
      ? favoritosCookie.split("=")[1].split(",")
      : [];
    
    if (favoritos.includes(elem.id)) {
      favoritos = favoritos.filter((id) => id !== elem.id);
    } else {
      favoritos.push(elem.id);
    }
    setFav(fav.map((e) => {
      if (e.id === elem.id) {
      return { ...e, favoritos: !e.favoritos };
      }
      return e;
    }));
    
    document.cookie = `Favoritos=${favoritos.join(",")}; path=/`;
    
    if (favoritos.length === 0) {
      
      document.cookie = `Favoritos=; Max-Age=0;path=/`;
      if (globalThis.location.pathname === "/Favoritos") {
        alert("No hay mas Favoritos")
        globalThis.location.href = "/Characters"
      }
    }
    
  };
  return(
    <div class="CharacterContainer">
      {fav && fav.map((elem) => {
        return (
          <div class="personaje">
            <a href={`/Character/${elem.id}`}>
              <img src={elem.image} alt={elem.name} />
              <p>Nombre: {elem.name}</p>
              <br />
              <p>
                <a href={`/House/${elem.house}`}>House: {elem.house}</a>
              </p>
              </a>
              <button type="button" onClick={() => Favoritos(elem)}>
                {elem.favoritos ? "❌ Quitar de favoritos" : "⭐️ Añadir a favoritos"}
              </button>
          </div>
        );
      })}
    </div>
  );
};
