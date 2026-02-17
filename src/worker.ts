import { Hono } from "hono";

type WorkerEnv = { ASSETS: Fetcher };

const app = new Hono<{ Bindings: WorkerEnv }>();

app.post("/api/mailing-list", async (c) => {
  const body = await c.req.json<{ email: string }>();

  if (!body.email) {
    return c.json({ error: "Email is required." }, 400);
  }

  const res = await fetch("https://formsubmit.co/ajax/jim@sciencevoyager.com", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      email: body.email,
      _subject: "Mailing List Signup",
      message: `New mailing list signup: ${body.email}`,
      _replyto: body.email,
    }),
  });

  const result = ((await res.json()) as { success: string; message?: string });
  if (result.success !== "true") {
    return c.json({ error: "Failed to process signup." }, 500);
  }

  return c.json({ success: true });
});

app.post("/api/contact", async (c) => {
  const body = await c.req.json<{
    name: string;
    email: string;
    message: string;
  }>();

  if (!body.name || !body.email || !body.message) {
    return c.json({ error: "All fields are required." }, 400);
  }

  const res = await fetch("https://formsubmit.co/ajax/jim@sciencevoyager.com", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      name: body.name,
      email: body.email,
      message: body.message,
      _subject: `Contact form: ${body.name}`,
      _replyto: body.email,
    }),
  });

  const result = ((await res.json()) as { success: string; message?: string });
  if (result.success !== "true") {
    return c.json({ error: "Failed to send message." }, 500);
  }

  return c.json({ success: true });
});

export default {
  async fetch(
    request: Request,
    env: WorkerEnv,
    ctx: ExecutionContext
  ): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname.startsWith("/api/")) {
      return app.fetch(request, env, ctx);
    }

    const assetResponse = await env.ASSETS.fetch(request);
    if (assetResponse.status === 404) {
      return env.ASSETS.fetch(new Request(new URL("/index.html", request.url), request));
    }
    return assetResponse;
  },
};
