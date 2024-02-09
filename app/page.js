'use client'
// import 'bootstrap/dist/css/bootstrap.min.css';

import Image from "next/image";
import Articles from "./Articles";
import Footer from "./Footer";
import Header from "./Header";
import styles from "./page.module.css";
import Search from "./Search";
import { articles_datas } from "./data.js";
import React, { useState } from 'react';
import Check from './Check';
import Media from "./Media";

const Page = () => {
    const [articles, setarticles] = useState(articles_datas)
    const articlesdata = () => {
        setarticles(articlesdata)
    }

    return (
        <>
            <Header />
            <div className='container'>  
                {/* <Header /> */}
                <Search />
                <Check/>
            </div>
            <Footer/>

        </>
    );
}
export default Page;
