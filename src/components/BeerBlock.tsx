import React from 'react';
import { Beer } from 'src/types';
import SearchBar from './SearchBar';
import Card from 'src/components/ui/Card';
import Pagination from 'src/components/ui/Pagination';

import styles from 'src/styles/Home.module.scss';

const BEER_PER_PAGE = 25;
const BEER_LENGTH = 325; // Не нашел способ получить количество напитков из базы данных, поэтому взял константу

const BeerBlock = () => {
    const [value, setValue] = React.useState('');
    const [data, setData] = React.useState([] as Beer[]);
    const [currentPage, setCurrentPage] = React.useState(1);
    const [isLoading, setLoading] = React.useState(false);

    React.useEffect(() => {
        let url = 'https://api.punkapi.com/v2/beers';
        url = url.concat(`?page=${currentPage}&per_page=${BEER_PER_PAGE}`);
        if (value) url = url.concat(`&beer_name=${value}`);
        setLoading(true);
        fetch(url)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setData(data);
                setLoading(false);
            });
    }, [value, currentPage]);

    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value);
    };

    const handleCurrentPage = (page: number) => {
        if (page < 1) return;
        setCurrentPage(page);
    };

    return (
        <>
            <SearchBar onChange={handleChange} value={value} />
            <div className={styles.beers__container}>
                {!isLoading ? (
                    data?.map((beer) => <Card key={beer.name} item={beer} />)
                ) : (
                    <div>Loading...</div>
                )}
            </div>
            <Pagination currentPage={currentPage} setCurrentPage={handleCurrentPage} lastPage={BEER_LENGTH/BEER_PER_PAGE}/>
        </>
    );
};

export default BeerBlock;
