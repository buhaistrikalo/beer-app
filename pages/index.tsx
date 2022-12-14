import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import BeerBlock from 'src/components/BeerBlock';

import styles from 'src/styles/Home.module.scss';

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Beer app</title>
                <meta name="description" content="Search beer..." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <a href="https://github.com/buhaistrikalo/beer-app">
                    <h1 className={styles.title}>
                        <span>Beer app</span>
                        <Image src="/github.svg" alt="Vercel Logo" width={46} height={46} />
                    </h1>
                </a>

                <BeerBlock />
            </main>

            <footer className={styles.footer}>
                <a
                    href="https://github.com/buhaistrikalo"
                    target="_blank"
                    rel="noopener noreferrer">
                        BuhaiStrikalo
                        <Image src="/github.svg" alt="Vercel Logo" width={32} height={32} />
               
                </a>
            </footer>
        </div>
    );
};

export default Home;
