import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>NEXT.JS | HONO.JS</title>
      </Head>
      <div className="container max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        <div className="shadow-md bg-[#131313] mt-4 p-4 w-full rounded-lg">
          <header className="p-6 flex flex-col justify-center items-center">
            <Image
              unoptimized
              src="https://raw.githubusercontent.com/andregans/code_logotype/refs/heads/main/Hono%20Logotype.png"
              alt="Next.js + Hono.js API (Monolith) on Vercel"
              width={0}
              sizes="100vw"
              height={0}
              className="w-56"
            />
            <h1 className="text-3xl font-bold text-center text-secondary mt-4">
              Next.js + Hono.js API (Monolith) on Vercel
            </h1>
          </header>
        </div>
        <section className="shadow-md bg-[#131313] mt-4 p-4 w-full rounded-lg">
          <Image unoptimized src="/Example.avif" alt="Proof" width={0} height={0} sizes="100vw" className="w-full rounded-lg" />
        </section>
        <section className="shadow-md bg-[#131313] mt-4 p-4 w-full rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-secondary">
            CLONE REPOSITORY
          </h2>
          <ol className="list-decimal pl-6 text-white mb-4">
            <li>
              <code className="bg-[#222] px-1 rounded">
                git clone
                https://github.com/RevanSP/NEXTJS-HONOJS-MONOLITH-VERCEL-TEMPLATE.git
              </code>
            </li>
            <li>
              <code className="bg-[#222] px-1 rounded">
                cd NEXTJS-HONOJS-MONOLITH-VERCEL-TEMPLATE
              </code>
            </li>
            <li>
              <code className="bg-[#222] px-1 rounded">bun install</code>
            </li>
          </ol>
        </section>
        <section className="shadow-md bg-[#131313] mt-4 p-4 w-full rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-secondary">
            TESTING YOUR API
          </h2>
          <p className="mb-4">
            To test your newly created REST API, visit the{" "}
            <code className="bg-[#222] px-1 rounded">/api/hello</code> route on
            Cloudflare Workers.
          </p>
          <p className="mb-4">
            Example URL:{" "}
            <code className="bg-[#222] px-1 rounded">
              https://nextjs-honojs-monolith-vercel-template.vercel.app/api/hello
            </code>
          </p>
          <p className="mb-4">Expected JSON response:</p>
          <pre className="p-4 rounded-lg text-xs bg-[#222] overflow-x-auto">
            {`{
  "message":"Hello from Hono modular route!"
}`}
          </pre>
        </section>
        <section className="shadow-md bg-[#131313] mt-4 p-4 w-full rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-secondary">
            ROUTE IMPLEMENTATION
          </h2>
          <p className="mb-4">Example of a route handler implementation:</p>
          <pre className="p-4 rounded-lg text-xs bg-[#222] overflow-x-auto">
            {`// src/pages/api/_routes/hello.js
import { Hono } from 'hono'

const hello = new Hono()

hello.get('/', (c) => {
  return c.json({ message: 'Hello from Hono modular route!' })
})

export default hello`}
          </pre>
        </section>
        <section className="shadow-md bg-[#131313] mt-4 p-4 w-full rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-secondary">
            ROUTE INTEGRATION
          </h2>
          <p className="mb-4">
            To integrate your API routes, follow these steps:
          </p>
          <ol className="list-decimal pl-6 text-white mb-4">
            <li className="mb-2">
              Import your route handler in <code className="bg-[#222] px-1 rounded">src/pages/api/config/route.js</code>
            </li>
            <li className="mb-2">
              Add your route to the <code className="bg-[#222] px-1 rounded">configureRoutes</code> function
            </li>
          </ol>
          <p className="mb-4">Example route integration:</p>
          <pre className="p-4 rounded-lg text-xs bg-[#222] overflow-x-auto">
            {`// src/pages/api/config/route.js
import hello from '../_routes/hello';

export const configureRoutes = (app) => {
  app.route('/hello', hello);
  // Add more routes here as needed
};`}
          </pre>
        </section>
        <footer className="mt-12 text-center text-gray-600">
          <p>ReiiV. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}