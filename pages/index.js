import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Topics.dev</title>
        <meta name="description" content="Topics for education" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://topics.dev">Topics.dev!</a>
        </h1>

        <p className={styles.description}>
          The site is under construction!
        </p>

       </main>

      <footer className={styles.footer}>
        <a
          href="https://topics.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by us
         
        </a>
      </footer>
    </div>
  )
}
