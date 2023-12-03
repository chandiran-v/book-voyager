import React from 'react'
import searchIcon from '../Images/searchIcon.png'
import useSearch from '../useSearch.js';

const Search = () => {
    const {search,handleSearch, handleSubmit} = useSearch();
  return (
    <div>
      <p className='flex justify-center mt-10 mb-5 text-2xl font-bold'>Discover Your Book of Choice...</p>
    <div className='items-center flex justify-center w-screen h-auto'>
      <form onSubmit={handleSubmit} className='flex gap-5'>
        <input className='border-2 border-black px-8 p-2.5 h-12 rounded-full w-72 md:w-96' type="text" placeholder='The lost world...' value={search} onChange={(e) => handleSearch(e.target.value)}/>
        <button className='items-center py-2.5 px-3 rounded-full  border-none dark:bg-blue-400 dark:hover:bg-blue-500' type='submit'>
          <img className='h-6' src={searchIcon} alt="" />
        </button>
      </form>
    </div>
    </div>
  )
}

export default Search;


