import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Axios from "npm:axios";
import { CharactersIsland } from "../../../islands/CharactersIsland.tsx";
type hp = {
  id: string;
  name: string;
  house: string;
  image: string;
};
export const handler: Handlers = {
  GET: async(req: Request, ctx: FreshContext<unknown,hp[]>) => {
    const { casa } = ctx.params;
    const personajes = await Axios.get<hp[]>(`https://hp-api.onrender.com/api/characters/house/${casa}`)
        return ctx.render(personajes.data);
  }
}

export default function Home(props:PageProps<hp[]>) {
  const personajes = props.data;
  return (
    <CharactersIsland data={personajes} />
  );
}
