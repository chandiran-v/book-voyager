import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import coverNotFound from '../../Images/cover_not_found.jpg';




const Bookdetials = () => {
  const { id } = useParams();
  const URL = "https://openlibrary.org/works/";
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`${URL}${id}.json`);
      const result = await response.json();
      //console.log(result)
    
    if(result) setData(result);
    else setData(null);
  }
  fetchData();
  }, [id]);


  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <Link to='..'>
        <span className="block mt-4 text-blue-500 cursor-pointer">Go Back</span>
      </Link>
      <div className="container mx-auto my-5">
  <h2 className="text-xl font-semibold mb-4">Book Details</h2>
  <div className="flex flex-col md:flex-row gap-4">
    <div className="md:w-1/3">
      <img
        className="w-full h-auto rounded-lg shadow-md"
        src={
          data?.covers
            ? `https://covers.openlibrary.org/b/id/${data?.covers[0]}-L.jpg`
            : coverNotFound
        }
        alt="cover"
      />
    </div>
    <div className="md:w-2/3 md:h-[80vh] md:overflow-y-scroll break-words text-justify p-1">
      <h3 className="text-lg font-semibold mb-2">Book Title:</h3>
      <p className="mb-4">
        {data?.title ? data?.title : "Not found"}
      </p>
      <h3 className="text-lg font-semibold mb-2">Description:</h3>
      <p className="mb-4">
        {data?.description
          ? data?.description.value || data?.description
          : "Not found"}
      </p>
      <h3 className="text-lg font-semibold mb-2">Subject People:</h3>
      <p className="mb-4">
        {data?.subject_people
          ? data?.subject_people.join(", ")
          : "Not found"}
      </p>
      <h3 className="text-lg font-semibold mb-2">Subject Place:</h3>
      <p className="mb-4">
        {data?.subject_places
          ? data?.subject_places.join(", ")
          : "Not found"}
      </p>
      <h3 className="text-lg font-semibold mb-2">Subjects:</h3>
      <p className="mb-4">
        {data?.subjects ? data?.subjects.join(", ") : "Not found"}
      </p>
    </div>
  </div>
</div>

    </div>
  );
};

export default Bookdetials;
