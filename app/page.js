"use client"
import React, { useState } from 'react';
import Header from "./Header";
import Search from "./Search";
import Footer from "./Footer";
import News_Articles from './News_Articles';

const Page = () => {
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = (articles) => {
        setSearchResults(articles);  // Update the search results
    };
    return (
        <>
            <Header />
            <div className='container'>
                <Search onSearch={handleSearch} />
                <News_Articles searchResults={searchResults} />
            </div>
            <Footer />
        </>
    );
}
export default Page;
