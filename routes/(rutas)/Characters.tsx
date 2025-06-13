import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Axios from "npm:axios"
import { CharactersIsland } from "../../islands/CharactersIsland.tsx";
type hp = {
    id: string;
    name: string;
    house: string;
    image: string;
};


export const handler: Handlers = {
  GET: async (_req: Request, ctx: FreshContext<unknown,hp[]>) => {
        const respuesta = await Axios.get<hp[]>("https://hp-api.onrender.com/api/characters");

    return ctx.render(respuesta.data)
  }
}

export default function Home(props:PageProps<hp[]>) {
  const personajes:hp[] = props.data
  return (
      <CharactersIsland data={personajes} />
  );
}
