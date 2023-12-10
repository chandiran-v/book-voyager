import React from 'react';
import email from '../Images/email.png'
import call from '../Images/phone-call.png'
import linkedIn from '../Images/linkedin.png'

const Footer = () => {
  return (
    <footer className="bg-gray-500 text-white p-6 text-center">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center">
          <i className="fas fa-envelope mr-2 text-gray-400" />
          <h3 className="text-lg font-semibold">Contact Me</h3>
          <ul className="md:ml-4 ml-5">
            <li>
                <a href="mailto:chandiranvc2001@gmail.com" className="text-gray-500">
                    <img className='h-5 mb-5' src={email} alt="" /> 
                </a>
            </li>
            <li>
                <a href="tel:+91-8870210886" className="text-gray-500">
                    <img className='h-5' src={call} alt="" />
                </a>
            </li>
          </ul>
        </div>

        <div className="flex items-center">
          <h3 className="text-lg font-semibold p-4">Social Media</h3>
          <ul className="ml-4">
            <li><a href="https://www.linkedin.com/in/chandiranv" className="text-gray-500">
                <img className='h-5' src={linkedIn} alt="" /></a></li>
          </ul>
        </div>

        <div className="flex items-center">
          <h3 className="text-lg font-semibold">Courtesy</h3>
          <p className="ml-2 text-black">Powered by <a href="https://openlibrary.org/" className="text-gray-700">Open Library API</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
