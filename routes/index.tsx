import { FreshContext, Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  GET: (_req: Request, _ctx: FreshContext) => {
    const headers = new Headers();
    headers.set("location", "/login");
    return new Response(null, {
      status: 302,
      headers,
    });
    
  }
}


