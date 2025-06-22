import { Hono } from "hono";
import { corsConfig } from './config/cors';
import { configureRoutes } from './config/route';

export const config = {
  api: {
    bodyParser: false,
  },
};

const app = new Hono().basePath("/api");

app.use('*', async (c, next) => {
  const origin = c.req.header('Origin');

  if (corsConfig.origin.includes(origin)) {
    c.header('Access-Control-Allow-Origin', origin);
    c.header('Access-Control-Allow-Methods', corsConfig.methods.join(', '));
    c.header('Access-Control-Allow-Headers', corsConfig.allowedHeaders.join(', '));
    c.header('Access-Control-Allow-Credentials', corsConfig.credentials.toString());
  }

  if (c.req.method === 'OPTIONS') {
    return new Response(null, { status: 204 });
  }

  await next();
});

configureRoutes(app);

export default async function handler(req, res) {
  if (!req || !res) return app;

  const response = await app.request(req.url, {
    method: req.method,
    headers: req.headers,
    body: req.body,
  });

  response.headers.forEach((value, key) => res.setHeader(key, value));
  res.status(response.status).send(await response.text());
}