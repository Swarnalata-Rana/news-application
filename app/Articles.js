import React from 'react'
import EastIcon from '@mui/icons-material/East';

const Articles = (props) => {

    return (
        <>
            <div class="col-4 ">
                <div className='img-row '  >
                    <img src={props.image} alt="" style={{ height: 170, width:376 }} />
                </div>
                <div className='deatails-data f-3'>
                    <h5>Title:</h5>
                    <h3>{props.title}</h3>
                    <h5>Description:</h5>
                    <p> {props.desc} </p>
                    <h5>Language:{props.language}</h5>
                    <h5>Country:{props.country}</h5>
                </div>
                <a href='read-data'>Read full article <EastIcon/> </a>
            </div>
        </>
    )
}
export default Articles;

