import React from 'react';
import News_Article from './News_Article';
import { articles_data } from './data';

const News_Articles = () => {
    return (
        <>
            <div className='top-news'>TOP NEWS FROM INDIA</div>
            <div className="row article-box">
                <News_Article props={articles_data[0]} />
                <News_Article props={articles_data[1]} />
                <News_Article props={articles_data[2]} />
            </div>
            <div className="row article-box">
                <News_Article props={articles_data[3]} />
                <News_Article props={articles_data[4]} />
                <News_Article props={articles_data[5]} />
            </div>
            <div className="row article-box">
                <News_Article props={articles_data[6]} />
                <News_Article props={articles_data[7]} />
                <News_Article props={articles_data[8]} />
            </div>     
        </>
    );
};
export default News_Articles;

