import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { ProfileIsland } from "../../islands/ProfileIsland.tsx";
interface State {
  nombre: string;
  favoritos: string[];
}

export const handler: Handlers<string, State> = {
  GET: (_req: Request, ctx: FreshContext<State, string>) => {
    return ctx.render(ctx.state.nombre);
  },
};

export default function Home(props: PageProps<string>) {
  
    return (
        <div class = "Perfil">
            <ProfileIsland data={props.data} />
        </div>
    );
}
