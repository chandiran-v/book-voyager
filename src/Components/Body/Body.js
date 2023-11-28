import React from 'react'
import Search from '../Search'
import Booklist from '../Booklist/Booklist'
import SearchContextProvider from '../../context/SearchContextProvider';
const Body = () => {

  return (
    <div>
      <SearchContextProvider>
        <Search/>
        <Booklist/>
      </SearchContextProvider>
    </div>
  )
}

export default Body