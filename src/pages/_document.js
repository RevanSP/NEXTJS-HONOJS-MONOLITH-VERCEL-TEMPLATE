import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
     <Head>
        <link
          rel="icon"
          type="image/png"
          href="https://raw.githubusercontent.com/andregans/code_logotype/refs/heads/main/Vercel%20Logotype.png"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Google+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="antialiased bg-[#101010] min-h-screen !text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
