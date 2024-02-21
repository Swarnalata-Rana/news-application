import React, { useState } from 'react';
import Articles_grid from './Articles_grid.js';
import { articles_datas } from "./data.js";


const Articles = () => {
    const [articles, setMovies] = useState(articles_datas)

    return (
        <>
            <div className='check-main-box'>TOP NEWS FROM INDIA</div>
            <div className='row'>
                {articles.map((articles) => (
                    <div key={articles} className='col-sm-4'>
                        <Articles_grid
                            title={articles.name}
                            desc={articles.description}
                            image={articles.url}
                            language={articles.language}
                            country={articles.country}
                        />
                    </div>
                ))}
            </div>
        </>
    )
}
export default Articles;

