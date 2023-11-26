import React,{useState,useEffect} from 'react';
import img from '../../Images/0012009823-M.jpg';

const Booklist = () => {

  async function apicall() {
    const response = await fetch(`https://openlibrary.org/search.json?q=+${search}`);
    const data = await response.json();
    //console.log(data);
  }
  
  useEffect(()=>{
    apicall();
  },[search])

  return (
    <div className='bg-slate-100 w-72 h-80 m-5 mt-20 shadow-lg rounded-lg flex flex-col items-center'>
      <img className='h-52 m-3 shadow-lg' src={img} alt="" />
      <div className='text-start'>
        <p>Book Name</p>
        <p>Author author</p>
        <p>First Published Year: 1990</p>
      </div>
    </div>
  );
};

export default Booklist;
