import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import coverNotFound from '../../Images/cover_not_found.jpg';

const Bookdetials = () => {
  const {id} = useParams();
  const URL = "https://openlibrary.org/works/";
  const [data, setData] = useState(null);

  useEffect(() =>{
    async function fetchData() {
      const response = await fetch(`${URL}${id}.json`);
      const result = await response.json();
      setData(result);
      console.log(result)
    }
    fetchData();
  },[id]);

  
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <span className="block mt-4 text-blue-500 cursor-pointer">Go Back</span>
      <div className="flex flex-col md:flex-row m-5">

        <div className="md:w-1/3 md:flex-shrink-0">
          <img className="w-full h-auto mb-4 md:mb-0" src={`https://covers.openlibrary.org/b/id/${data?.covers[0]}-L.jpg`} alt="cover" />
        </div>

        <div className="flex-1">
          <div className="p-4 md:p-10">
            <p className="text-lg font-semibold">Book Title: {data?.title}</p>
            <p className="text-sm mt-4">Description: {data?.description.value} </p>
            <p className="text-sm mt-4">Subject people: {data?.subject_people.join(", ")} </p>
            <p className="text-sm mt-4">Subject Place: {data?.subject_places.join(", ")}</p>
            <p className="text-sm mt-4">Subjects: {data?.subjects.join(", ")} </p>
            
          </div>
        </div>

      </div>
    </div>
  );
};

export default Bookdetials;
