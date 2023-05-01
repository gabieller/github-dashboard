/* eslint-disable @next/next/no-page-custom-font */
import "@/styles/globals.css";
import { Montserrat } from "next/font/google";
import type { AppProps } from "next/app";
import Head from "next/head";
import Layout from "@/components/Layout";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={montserrat.className}>
      <Head>
        <title>Code Challange</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400;500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Layout>
        <Component className={montserrat.className} {...pageProps} />
      </Layout>
    </main>
  );
}
