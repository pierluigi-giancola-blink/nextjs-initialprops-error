import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { axiosInstance } from "../utils/axios";

const Home: NextPage = ({ types, pkmn, host }: any) => {
  console.log("PAGE3", host);
  return (
    <div className={styles.container}>
      <Head>
        <title>Page 1</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        PAGE 3<div>{JSON.stringify(types)}</div>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/page1">
          <a>Page 1</a>
        </Link>
        <Link href="/page2">
          <a>Page 2</a>
        </Link>
        <div>PKMN: {pkmn?.name}</div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {},
  };
};

export default Home;
