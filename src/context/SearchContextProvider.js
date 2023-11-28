import React, { useState, useEffect } from "react";
import SearchContext from "./SearchContext";

const SearchContextProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState("the lost world");
  const [data, setData] = useState(null);
  const URL = "http://openlibrary.org/search.json?title=";
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`${URL}${searchValue}`);
      const data = await response.json();
      setData(data?.docs);
      setIsLoading(false);
    }

    fetchData();
  }, [searchValue]);

  return (
    <SearchContext.Provider value={{ searchValue, setSearchValue, data }}>
      {children}
    </SearchContext.Provider>
  );
};
export default SearchContextProvider;
