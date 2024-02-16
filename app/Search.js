import React from 'react';

const Search = () => {
    return (
        <>
            <div class="row main-input-btn">
                <div className='input-btn'>
                    <img src='search-logo.png' className='search-icon' />
                    <input type="search" placeholder="Search" className='search-bar' />
                    <button type="button" className='go-btn'>Go</button>
                </div>
            </div>
        </>
    )
}
export default Search;


