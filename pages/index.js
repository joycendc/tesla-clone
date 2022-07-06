import Head from "next/head";
import Header from "../components/Header";
import HomePage from "../components/HomePage";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <HomePage />
    </>
  );
}
