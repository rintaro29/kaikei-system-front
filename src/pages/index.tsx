import { Inter } from "next/font/google";
import Head from "next/head";
import HomePage from "@/components/HomePage";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <div>
        <HomePage />
      </div>
    </>
  );
}
