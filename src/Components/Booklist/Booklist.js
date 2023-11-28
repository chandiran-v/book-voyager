import React, { useContext } from 'react';
import searchContext from '../../context/SearchContext';
import coverNotFound from '../../Images/cover_not_found.jpg'

const Booklist = () => {
  const { data } = useContext(searchContext);
  const books = data?.slice(0, 24);

  return (
    <div className='flex flex-wrap justify-center'>
      {books?.map((book, index) => (
        <div key={index} className='bg-slate-100 w-72 p-2 m-5 mt-20 shadow-lg rounded-lg flex flex-col items-center transition-all hover:scale-105'>
          <img className='h-52 m-3 shadow-lg' src={book.cover_i?`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`: coverNotFound} alt="" />
          <div className='text-center'>
            <p className='font-bold text-lg'>{book.title}</p>
            <p className='font-semibold text-'>Author: {book.author_name}</p>
            <p className='font-medium'>First Published Year: {book.first_publish_year}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Booklist;
