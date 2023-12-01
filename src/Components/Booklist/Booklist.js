import React, { useContext } from "react";
import SearchContext from "../../context/SearchContext";
import coverNotFound from "../../Images/cover_not_found.jpg";
import { Link } from "react-router-dom";
const Booklist = () => {
  const { data, isLoading, resultTitle } = useContext(SearchContext);
  const books = data?.slice(0, 24);
  console.log(data);

  const renderSkeleton = () => {
    return (
      <div className="flex flex-wrap justify-center">
        {[...Array(12)].map((_, index) => (
          <div
            key={index}
            className="bg-slate-100 w-72 h-80 p-2 m-5 mt-20 shadow-lg rounded-lg flex flex-col items-center animate-pulse"
          >
            <div className="h-52 w-32 m-3 shadow-lg bg-slate-300"> </div>
            <div className="text-center">
              <p className="h-5 w-48 m-2 rounded-full bg-slate-300"></p>
              <p className="h-4 w-48 m-2 rounded-full bg-slate-200"></p>
              <p className="h-4 w-48 m-2 rounded-full bg-slate-200"></p>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div>
      <div className="flex flex-wrap justify-center">
        {isLoading ? (
          renderSkeleton()
        ) : (
          <>
            <p className="text-2xl font-medium mx-5 mt-5 w-full">
              {resultTitle}
            </p>
            {books?.map((book, index) => (
              <Link to={"/home/"+book.key.replace('/works/','')}>
              <div
                key={index}
                className="bg-slate-100 w-72 p-2 m-5 mt-20 shadow-lg rounded-lg flex flex-col items-center cursor-pointer transition-all hover:scale-105"
              >
                <img
                  className="h-52 m-3 shadow-lg"
                  src={
                    book.cover_i
                      ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
                      : coverNotFound
                  }
                  alt="book cover"
                />
                <div className="text-center">
                  <p className="font-bold text-lg">{book.title}</p>
                  <p className="font-semibold text-">
                    Author: {book.author_name}
                  </p>
                  <p className="font-medium">
                    First Published Year: {book.first_publish_year}
                  </p>
                </div>
              </div>
              </Link>
              
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Booklist;
