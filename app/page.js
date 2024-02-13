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
                
                <Search />
                {/* <div className='main-article-box'>
                    <div className='flex-container box row '>
                        <div className="tops-news" style={{marginLeft:'',color:'red'}}>TOPS NEWS FROM INDIA</div>
                        {articles.map(news=> (
                            <div key={news.id} className='col-sm-12 col-md-4 '>
                                <Articles
                                    title={news.name}
                                    desc={news.description}
                                    image={news.url}
                                    language={news.language}
                                    country={news.country}
                                />
                            </div>
                        ))}
                    </div>
                </div> */}
                <Check/>
            </div>
           

          

            {/* <div className='main-article-box'>
                    <div className='flex-container box row '>
                        <div className="tops-news" style={{marginLeft:'',color:'red'}}>TOPS NEWS FROM INDIA</div>
                        {articles.map(news=> (
                            <div key={news.id} className='col-sm-12 col-md-4 '>
                                <Articles
                                    title={news.name}
                                    desc={news.description}
                                    image={news.url}
                                    language={news.language}
                                    country={news.country}
                                />
                            </div>
                        ))}
                    </div>
                </div> */}
                <Footer/>

        </>
    );
}
export default Page;
