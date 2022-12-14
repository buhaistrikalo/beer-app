import { useState } from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { Beer } from 'src/types';

import styles from 'src/styles/Beer.module.scss';

type BeerPageProps = {
    item: Beer;
};

const BeerPage = ({ item }: BeerPageProps) => {
    const [isLoading, setIsLoading] = useState(false);
    const onLoadingComplete = () => setIsLoading(true);

    return (
        <div className={styles.container}>
              <Head>
                <title>{item.name}</title>
                <meta name="description" content={item.description} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <div className={styles.tagline}>{item.tagline}</div>
                <div className={styles.product}>
                    <div className={styles.image}>
                        {!isLoading && <div className={styles.loading}>Loading...</div>}
                        <Image
                            onLoadingComplete={onLoadingComplete}
                            src={item.image_url}
                            alt={item.name}
                            width={120}
                            height={350}
                        />
                    </div>
                    <div className={styles.content}>
                        <h1 className={styles.title}>
                            {item.name} <span className={styles.abv}>{item.abv}</span>
                        </h1>

                        <div className={styles.description}>{item.description}</div>
                        <div className={styles.pairing}>
                            <span>Food pairing: </span>
                            <ul>
                                {item.food_pairing.map((food) => (
                                    <li key={food}>{food}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={styles.buttons}>
                    <Link href="/">
                        <button type="button">Home page</button>
                    </Link>
                </div>
            </main>
        </div>
    );
};

export default BeerPage;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    if (!params) return { props: {} };
    const resBeer = await fetch(`https://api.punkapi.com/v2/beers/${params.id}`);
    const item = await resBeer.json();

    return { props: { item: item[0] } };
};
