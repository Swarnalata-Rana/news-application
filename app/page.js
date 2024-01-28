'use client'
import 'bootstrap/dist/css/bootstrap.min.css';

import Image from "next/image";
import Articles from "./Articles";
import Footer from "./Footer";
import Header from "./Header";
import styles from "./page.module.css";
import Search from "./Search";
import { articles_datas } from "./data.js";
import React, { useState } from 'react';

const Page = () => {
    const [articles, setMovies] = useState(articles_datas)
    const articlesdata = () => {
        setMovies(articlesdata)
    }

    return (
        <>
            <div>
                <Header />
                <Search />
                <div className='main-article-box'>
                    <div className=' flex-container box'>
                        {articles.map(movie => (
                            <Articles
                                title={movie.name}
                                desc={movie.description}
                                image={movie.url}
                                language={movie.language}
                                country={movie.country}
                            />
                        ))}
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}
export default Page;
