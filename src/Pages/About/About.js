import React from 'react';
import background from '../../Images/background.jpg';

const AboutPage = () => {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 md:pr-4">
                    <img
                        src={background}
                        alt="Author"
                        className="object-cover rounded-lg w-4/5 m-5 opacity-90 shadow-lg"
                    />
                </div>
                <div className="w-full md:w-1/2 mt-4 md:mt-0">
                    <h2 className="text-2xl font-semibold my-4">About</h2>
                    <p className="text-gray-700 mb-4">
                        I believe that everyone should have access to the world's knowledge. That's why I've created this website using the Open Library API, a free and open-source resource that provides access to millions of books and their data.

                        I want to thank the Open Library team for their hard work and dedication to making this resource possible. Without them, this website would not be possible.
                    </p>

                    <h2 className="text-2xl font-semibold mb-4">What this do</h2>
                    <p>
                        My website allows you to:
                        <ul className='list-disc pl-10'>
                            <li>Search for books by title, author, or subject.</li>
                            <li>Read book descriptions, subject detials and more.</li>
                            <li>Browse collection of books by genre, language, or publication date</li>
                            <li>Create your own bookshelf to keep track of the books you've read or want to read(yet to add)</li>
                            <li>We are constantly adding new features and content to our website, so be sure to check back often.</li>
                        </ul>
                    </p>

                </div>
            </div>
        </div>
    );
};

export default AboutPage;
