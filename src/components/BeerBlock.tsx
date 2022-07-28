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
        </>
    );
};

export default BeerBlock;
