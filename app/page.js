'use client'
import React, { useState } from 'react';
import Header from "./Header";
import Search from "./Search";
import Articles from "./Articles";
import Footer from "./Footer";
import { articles_datas } from "./data.js";
import Articles_grid from './Articles_grid';


const Page = () => {
    const [articles, setMovies] = useState(articles_datas)

    return (
        <>
            <Header />
            <div className='container'>
                <Search />
                {/* <Articles_grid/> */}
                <Articles/>
                
            </div>
            <Footer />
        </>
    );
}
export default Page;
