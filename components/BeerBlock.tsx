import Link from 'next/link';
import React from 'react';
import { Beer } from 'types';
import SearchBar from './SearchBar';

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

            {!isLoading ? (
                data?.map((beer) => (
                    <Link key={beer.id} href={`/beer/${beer.id}`}>
                        <div> {beer.name}</div>
                    </Link>
                ))
            ) : (
                <div>Loading...</div>
            )}
        </>
    );
};

export default BeerBlock;
