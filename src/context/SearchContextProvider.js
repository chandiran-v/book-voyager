import React, { useState, useEffect } from "react";
import SearchContext from "./SearchContext";

const SearchContextProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState("the lost world");
  const [resultTitle, setresultTitle] = useState("");
  const [data, setData] = useState(null);
  const URL = "http://openlibrary.org/search.json?title=";
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const response = await fetch(`${URL}${searchValue}`);
        const result = await response.json();
        setData(result?.docs);

        setresultTitle(
          result?.docs.length > 1 ? "Your search Result" : "No result found"
        );

      } catch (error) {
        console.error("Error fetching data:", error);
        setData(null);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [searchValue]);

  return (
    <SearchContext.Provider value={{ searchValue, setSearchValue, data, isLoading, resultTitle}}>
      {children}
    </SearchContext.Provider>
  );
};
export default SearchContextProvider;
