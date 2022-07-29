import Link from 'next/link';
import React from 'react';
import { Beer } from 'types';
import SearchBar from './SearchBar';
import Card from 'components/ui/Card';
import styles from 'styles/Home.module.scss'

const BeerBlock = () => {
    const [value, setValue] = React.useState('');
    const [data, setData] = React.useState([] as Beer[]);
    const [isLoading, setLoading] = React.useState(false);

    React.useEffect(() => {
        const backend = 'https://api.punkapi.com/v2/beers';
        setLoading(true);
        fetch(value ? `${backend}?beer_name=${value}` : `${backend}`)
            .then((res) => res.json())
            .then((data) => {
                setData(data);
                setLoading(false);
            });
    }, [value]);

    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value);
    };

    return (
        <>
            <SearchBar onChange={handleChange} value={value} />
<div className={styles.beers__container}>
            {!isLoading ? (
                data?.map((beer) => (
                    <Card key={beer.name} item={beer}/>
                ))
            ) : (
                <div>Loading...</div>
            )}
            </div>
        </>
    );
};

export default BeerBlock;
