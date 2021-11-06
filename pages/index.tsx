import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>mariocxyz</title>
        <meta name="description" content="mariocxyz" />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🌱</text></svg>"
        />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          🌱 Welcome to <a href="https://marioc.xyz">mariocxyz</a>
        </h1>
      </main>
    </div>
  )
}

export default Home
