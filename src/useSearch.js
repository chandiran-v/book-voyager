import { useState, useContext } from 'react';
import searchContext from './context/SearchContext';

const useSearch = () => {
  const [search, setSearch] = useState('');

  const {setSearchValue} = useContext(searchContext);

  const handleSearch = (value) => {
    setSearch(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search.trim() !== '') {
    setSearchValue(search);
    setSearch('');
    }
  };


  return { search, handleSearch, handleSubmit };
};

export default useSearch;
