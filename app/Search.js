import React, { useEffect } from 'react'

const Search = () => {
    const onclickhandler = ((event) => {
        console.log()
    })
    return (
        <>
            <div className='row gap-div-search'></div>
            <div class="row input-btn">
                {/* <img src='search.png' height="32px" width="32px" /> */}
                <input type="search" placeholder="Search" style={{ width: '267px', height: '60px', padding: '30px' }} />
                <button type="button" style={{ width: '61px', height: '64px', backgroundColor: '#E84848', color: 'white', fontSize: '20px' }} onChange={onclickhandler}>Go</button>
            </div>
            <div className='row gap-div-search'></div>
        </>
    )
}
export default Search;


