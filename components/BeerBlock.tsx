import Link from 'next/link';
import React from 'react';
import SearchBar from './SearchBar';

const BeerBlock = () => {
    const [value, setValue] = React.useState('');

    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value);
    };

    return (
        <>
            <SearchBar onChange={handleChange} value={value} />
            <Link href="/beer/1" >
                Beer #1
            </Link>
        </>
    );
};

export default BeerBlock;
