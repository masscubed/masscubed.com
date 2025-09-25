// This file is used to customize the HTML document structure in a Next.js application. It allows you to augment the <html> and <body> tags used to render a page.
// TL:DR don't touch this file unless you know what you're doing

import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
