import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Axios from "npm:axios"
import { CharactersIsland } from "../../islands/CharactersIsland.tsx";
type hp = {
    id: string;
    name: string;
    house: string;
  image: string;
  favoritos: boolean;
};


export const handler: Handlers = {
  GET: async (req: Request, ctx: FreshContext<unknown, hp[]>) => {
    const cookie = req.headers.get("cookie")
    const cookies = cookie ? cookie.split(";") : [];
    
    const fav = cookies.find((row) => row.startsWith(" Favoritos="));
    
    const valueFav = fav ? fav.split("=")[1] : "";
    let resp;
    const respuesta = (await Axios.get<hp[]>("https://hp-api.onrender.com/api/characters"));
    
    if (valueFav[0] !== "" && valueFav) {
      resp = respuesta.data.map((elem) => {
        if (valueFav.includes(elem.id)) {
          
          return { ...elem, favoritos: true }

        } else {
          
          return { ...elem, favoritos: false }
        }
      })
    } else {
      resp = respuesta.data.map((elem) => {
        
        return { ...elem, favoritos: false }
      })
    }

    return ctx.render(resp)
  }
}

export default function Home(props:PageProps<hp[]>) {
  const personajes:hp[] = props.data
  return (
      <CharactersIsland data={personajes} />
  );
}
