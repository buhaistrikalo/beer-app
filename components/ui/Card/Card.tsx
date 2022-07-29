import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Beer } from 'types';
import styles from './Card.module.scss';

const MAX_LENGTH_DESCRIPTION = 140;

type CardProps = {
    item: Beer;
};

const Card: FC<CardProps> = ({ item }) => {
    return (
        <Link href={`/beer/${item.id}`}>
            <div className={styles.container}>
                {item.image_url && (
                    <Image src={item.image_url} alt={item.name} width={80} height={200} />
                )}
                <div className={styles.content}>
                    <h2 className={styles.title}> {item.name}</h2>
                    <span className={styles.description}>
                        {item.description.length > MAX_LENGTH_DESCRIPTION
                            ? `${item.description.substring(0, MAX_LENGTH_DESCRIPTION)}...`
                            : `${item.description}`}
                    </span>
                </div>
            </div>
        </Link>
    );
};

export default Card;
