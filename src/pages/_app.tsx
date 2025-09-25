// _app.tsx allows you to "wrap" all pages in certain code, whether it's a header that's standard on every page or css styling.
// TLDR: don't touch this file unless you know what you're doing

import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
