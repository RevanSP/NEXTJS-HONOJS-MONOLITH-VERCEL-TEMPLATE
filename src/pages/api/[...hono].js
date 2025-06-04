import { Hono } from "hono";
import { handle } from "@hono/node-server/vercel";
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

export default handle(app);