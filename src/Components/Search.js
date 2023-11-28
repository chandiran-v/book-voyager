import React from 'react'
import searchIcon from '../Images/searchIcon.png'
import useSearch from '../useSearch';

const Search = () => {
    const {search,handleSearch, handleSubmit} = useSearch();
  return (
    <div className='items-center flex justify-center mt-20 w-screen h-auto'>
      <form onSubmit={handleSubmit} className='flex gap-5'>
        <input className='border-2 border-black px-8 p-2.5 h-12 rounded-full w-72 md:w-96' type="text" placeholder='The lost world...' value={search} onChange={(e) => handleSearch(e.target.value)}/>
        <button className='items-center py-2.5 px-3 text-sm font-medium rounded-full text-white bg-blue-500 border hover:bg-blue-800 focus:ring-2 border-none dark:bg-blue-500 dark:hover:bg-blue-700' type='submit'>
          <img className='h-6' src={searchIcon} alt="" />
        </button>
      </form>
    </div>
  )
}

export default Search;


