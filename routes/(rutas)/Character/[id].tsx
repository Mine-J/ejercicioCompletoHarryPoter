import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Axios from "npm:axios";
import { Personaje } from "../../../components/Personaje.tsx";
type hp = {
  id: string;
  name: string;
  house: string;
  image: string;
  species: string;
  gender: string;
  dateOfBirth: string;
  wizard: boolean;
  actor: string;
};
export const handler: Handlers = {
  GET: async(_req: Request, ctx: FreshContext<unknown,hp>) => {
    const id = ctx.params.id;
    const personaje = await Axios.get(`https://hp-api.onrender.com/api/character/${id}`)
    
    return ctx.render(personaje.data[0]);
  }
}

export default function Home(props:PageProps<hp>) {
  const personaje = props.data;
  return (
    <>
      <Personaje data={personaje} />
    </>
  );
}
