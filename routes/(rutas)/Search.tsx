import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Axios from "npm:axios";
import { Buscador } from "../../components/Buscador.tsx";
import { CharactersIsland } from "../../islands/CharactersIsland.tsx";
type hp = {
  id: string;
  name: string;
  house: string;
  image: string;
};

interface State {
  nombre: string;
  favoritos: string[];
}
export const handler: Handlers<hp[],State> = {
  GET: async (req: Request, ctx: FreshContext<State, hp[]>) => {
    const url = new URL(req.url);
    const name = url.searchParams.get("name");
    if (name) {
      const respuesta = await Axios.get<hp[]>(
        "https://hp-api.onrender.com/api/characters",
      );
      const personaje = respuesta.data.filter((e) => e.name.toLowerCase().includes(name.toLowerCase()));
      return ctx.render(personaje);
    } else {
      return ctx.render();
    }
  },
};

export default function Home(props: PageProps<hp[]>) {
  const personaje = props.data;
  return (
    <div class="paginaBuscador">
      <br />
      <Buscador />
      <br />
      {personaje && <CharactersIsland data={personaje} />}
    </div>
  );
}
