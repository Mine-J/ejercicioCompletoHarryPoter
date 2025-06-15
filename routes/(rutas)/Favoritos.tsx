import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Axios from "npm:axios";
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
    const respuesta = await Axios.get<hp[]>(
      "https://hp-api.onrender.com/api/characters",
    );

    const cookie = req.headers.get("cookie");
    const cookies = cookie ? cookie.split("; ") : [];
    
    
    const favoritos = cookies.find((row) => row.startsWith("Favoritos="));
    
    const favoritosIds = favoritos
      ? decodeURIComponent(favoritos.split("=")[1]).split(",")
      : [];
    
    const respuestBuena = respuesta.data.filter((elem: hp) =>
      favoritosIds.includes(elem.id)
    );
    const resp = respuestBuena.map((e) => { 
      return {...e, favoritos:true}
    })
    return ctx.render(resp);
  },
};

export default function Home(props: PageProps<hp[]>) {
  const personajes: hp[] = props.data;
  return <CharactersIsland data={personajes} />;
}
