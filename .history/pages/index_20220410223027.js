import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Instagram</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/600px-Instagram_icon.png" />
        
      </Head>

     <h1 className='text-3xl flex-1' >Lets build insta</h1>
    </div>
  )
}
