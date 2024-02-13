import React, { useEffect } from 'react'

const Search = () => {
    
    return (
        <>
            <div class="row input-btn">
                <img src='search-logo.png' className='search-icon' />
                <input type="search" placeholder="Search" className='search-bar'/>
                <button type="button" className='go-btn'>Go</button>
            </div>
        </> 
    )
}
export default Search;


