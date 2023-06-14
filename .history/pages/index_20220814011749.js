import Head from "next/head";
import Image from "next/image";
import Feed from "../components/Feed";
import Header from "../components/Header";
import Modal from "../components/Modal";
import styles from "../styles/Home.module.css";
import { Helmet } from "react-helmet";

export default function Home() {
  return (
    <div className=" bg-gray-50 h-screen overflow-y-scroll ">
      <Head>
        <title>Instagram</title>
        <meta name="description" content="Generated by create next app" />
        <link
          rel="icon"
          href="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/600px-Instagram_icon.png"
        />
      </Head>
      <Helmet>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Helmet>
      <Modal />
      <Header />

      <Feed />
    </div>
  );
}