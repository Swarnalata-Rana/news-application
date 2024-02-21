import React from 'react'

const Articles_grid = (props) => {
    return (
        <>
            {/* <div className='check-main-box'>TOP NEWS FROM INDIA</div> */}
            {/* <div class="row empty-box">
                <div class="col-sm">One</div>
                <div class="col-sm">Two</div>
                <div class="col-sm">Three</div>
            </div>
            <div class="row empty-box">
                <div class="col-sm">Four</div>
                <div class="col-sm">Five</div>
                <div class="col-sm">Six</div>
            </div>
            <div class="row empty-box">
                <div class="col-sm">Seven</div>
                <div class="col-sm">Eight</div>
                <div class="col-sm">Nine</div>
            </div> */}

            <div className=" paddingall" >
                <div className='img-row'>
                    <img src={props.image}  />
                </div>
                <div className='details-data '>
                    <h5>Title:</h5>
                    <h3>{props.title}</h3>
                    <h5>Description:</h5>
                    <p>{props.desc}</p>
                    <h5>Language: {props.language}</h5>
                    <h5>Country: {props.country}</h5>
                </div>
                {/* <a href='read-data'>Read full article <EastIcon /> </a> */}
            </div>
        </>
    )
}

export default Articles_grid