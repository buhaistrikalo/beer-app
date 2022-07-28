import { FC } from 'react';

type SearchBarProps = {
    onChange: (e: React.FormEvent<HTMLInputElement>) => void;
    value: string;
};

const SearchBar: FC<SearchBarProps> = ({ onChange, value }) => {
    return <input type="text" id="first" name="first" value={value} onChange={onChange} />;
};

export default SearchBar;
