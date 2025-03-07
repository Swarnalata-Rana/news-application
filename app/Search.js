// "use client"
// import React, { useState } from 'react';

// const Search = () => {
//     const [searchInput, setSearchInput] = useState('');

//     const handleSearchInputChange = (event) => {
//         setSearchInput(event.target.value);
//     };
//     const handleSearch = () => {
//         fetch(`https://newsapi.org/v2/everything?q=${searchInput}&apiKey=4ec780570c234ab1a4bf02f7fec5516a`)
//             .then(response => response.json())
//             .then((data) => {
//                 console.log(data)            

//             })
//             .catch(error => console.log(error));
//     };

//     return (
//         <>
//             <div className="row main-input-btn">
//                 <div className='input-btn'>
//                     <img src='search-logo.png' className='search-icon' alt="Search icon" />
//                     <input
//                         type="search"
//                         placeholder="Search"
//                         value={searchInput}
//                         className='search-bar'
//                         onChange={handleSearchInputChange}
//                     />
//                     <button type="button" onClick={handleSearch} className='go-btn'>Go</button>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Search;


"use client";
import React, { useState } from 'react';

const Search = ({ onSearch }) => {
    const [searchInput, setSearchInput] = useState('');

    const handleSearchInputChange = (event) => {
        setSearchInput(event.target.value);
    };

    const handleSearch = () => {
        fetch(`https://newsapi.org/v2/everything?q=${searchInput}&apiKey=4ec780570c234ab1a4bf02f7fec5516a`)
            .then(response => response.json())
            .then((data) => {
                const articlesFromApi = data.articles.map((article, index) => ({
                    id: index.toString(),
                    name: article.title,
                    description: article.description,
                    url: article.urlToImage || 'default_image.png',
                    // new_page: "Read full article",
                }));
                onSearch(articlesFromApi);  // Pass the fetched articles to the parent component
            })
            .catch(error => console.log(error));
    };

    return (
        <>
            <div className="row main-input-btn">
                <div className='input-btn'>
                    <img src='search-logo.png' className='search-icon' alt="Search icon" />
                    <input
                        type="search"
                        placeholder="Search"
                        value={searchInput}
                        className='search-bar'
                        onChange={handleSearchInputChange}
                    />
                    <button type="button" onClick={handleSearch} className='go-btn'>Go</button>
                </div>
            </div>
        </>
    );
};

export default Search;
