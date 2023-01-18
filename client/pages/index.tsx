import Head from "next/head";
import { Inter } from "@next/font/google";
import HomeLayout from "../components/HomeLayout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - Stunning Food App | Tolgahan Tolu</title>
        <meta name="description" content="Food App Created by Tolgahan Tolu" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="/logo.png" />
      </Head>

      <HomeLayout />
    </>
  );
}
