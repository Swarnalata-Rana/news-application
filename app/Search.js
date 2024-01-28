import React from 'react'

const Search = () => {
    return (
        <div>
            <div class="d-flex justify-content-center"  >
                <input type="search" class="form-control rounded"  placeholder="Search" aria-label="Search" aria-describedby="search-addon" style={{ width: '267px', height: '60px', marginTop:'89px'}} />
                <button type="button" className="btn btn-outline-primary" data-mdb-ripple-init style={{ width: '61px', height: '60px', backgroundColor: '#E84848',color:'white', marginTop:'89px'}}>Go</button>
            </div>
        </div>
    )
}

export default Search;