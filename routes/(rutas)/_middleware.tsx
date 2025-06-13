import { FreshContext } from "$fresh/server.ts";

interface State {
  nombre: string;
  favoritos: string[];
}

export async function handler(req: Request, ctx: FreshContext<State>) {
  const cookie = req.headers.get("cookie");
  const cookies = cookie ? cookie.split("; ") : [];
  const name = cookies.find((row) => row.startsWith("name="));
  const favoritos = cookies.find((row) => row.startsWith("Favoritos="));
    
  if (name) {
    const value = decodeURIComponent(name.split("=")[1]);
    const valueFavoritos = favoritos
      ? decodeURIComponent(favoritos.split("=")[1]).split(",")
      : [];
    ctx.state.nombre = value;
    ctx.state.favoritos = valueFavoritos;

    
    const path = new URL(req.url).pathname;
    if (path === "/Favoritos" && (valueFavoritos.length === 0 || valueFavoritos[0] === "")) {
      const headers = new Headers();
      headers.set("location", "/Characters");
      return new Response(null, {
        status: 302,
        headers,
      });
    }

  } else {
    const headers = new Headers();
    headers.set("location", "/login");
    return new Response(null, {
      status: 302,
      headers,
    });
  }

  const resp = await ctx.next();
  return resp;
}
