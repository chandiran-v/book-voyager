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
      <Link to='/'>
        <span className="block mt-4 text-blue-500 cursor-pointer">Go Back</span>
      </Link>
      <div className="flex flex-col md:flex-row m-5">

        <div className="md:w-1/3 md:flex-shrink-0">
          <img className="w-full h-auto mb-4 md:mb-0" src={data?.covers?`https://covers.openlibrary.org/b/id/${data?.covers[0]}-L.jpg`: coverNotFound} alt="cover" />
        </div>


        <div className=''>
          <div className="p-4 md:px-8">
            <table className="">
              <tbody>
                <tr>
                  <td className="text-md font-semibold align-top">Book Title:</td>
                  <td>{data?.title ? data?.title: "Not found" }</td>
                </tr>
                <tr>
                  <td className="text-md font-semibold align-top">Description:</td>
                  <td>{data?.description? data?.description.value || data?.description : "Not found"}</td>
                </tr>
                <tr>
                  <td className="text-md font-semibold pr-4 whitespace-nowrap align-top">Subject People:</td>
                  <td>{data?.subject_people? data?.subject_people.join(', ') : "Not found"}</td>
                </tr>
                <tr>
                  <td className="text-md font-semibold align-top">Subject Place:</td>
                  <td>{data?.subject_places? data?.subject_places.join(', ')  : "Not found"}</td>
                </tr>
                <tr>
                  <td className="text-md font-semibold align-top">Subjects:</td>
                  <td>{data?.subjects ? data?.subjects.join(', ') : "Not found"}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        

      </div>
    </div>
  );
};

export default Bookdetials;
