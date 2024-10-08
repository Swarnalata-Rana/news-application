// import React from 'react';
// import News_Article from './News_Article';
// import { articles_data } from './data';

// const News_Articles = () => {
//     return (
//         <>
//             <div className='top-news'>TOP NEWS FROM INDIA</div>
//             <div className="row article-box">
//                 <News_Article props={articles_data[0]} />
//                 <News_Article props={articles_data[1]} />
//                 <News_Article props={articles_data[2]} />
//             </div>
//             <div className="row article-box">
//                 <News_Article props={articles_data[3]} />
//                 <News_Article props={articles_data[4]} />
//                 <News_Article props={articles_data[5]} />
//             </div>
//             <div className="row article-box">
//                 <News_Article props={articles_data[6]} />
//                 <News_Article props={articles_data[7]} />
//                 <News_Article props={articles_data[8]} />
//             </div>     
//         </>
//     );
// };
// export default News_Articles;
"use client"


"use client";
import React, { useState } from 'react';
import News_Article from './News_Article';
import { articles_data } from './data';  // Initial dummy data

const News_Articles = ({ searchResults }) => {
    const [articles, setArticles] = useState(articles_data);  // State for managing articles

    // If there are search results, replace the current articles with the new ones
    React.useEffect(() => {
        if (searchResults.length > 0) {
            setArticles(searchResults.slice(0, 9));  // Show only first 9 articles from search
        }
    }, [searchResults]);

    return (
        <>
            <div className='top-news'>TOP NEWS FROM INDIA</div>
            <div className="row article-box">
                <News_Article props={articles[0]} />
                <News_Article props={articles[1]} />
                <News_Article props={articles[2]} />
            </div>
            <div className="row article-box">
                <News_Article props={articles[3]} />
                <News_Article props={articles[4]} />
                <News_Article props={articles[5]} />
            </div>
            <div className="row article-box">
                <News_Article props={articles[6]} />
                <News_Article props={articles[7]} />
                <News_Article props={articles[8]} />
            </div>
        </>
    );
};

export default News_Articles;

