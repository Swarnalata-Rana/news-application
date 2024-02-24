// import React from 'react'
// // import { articles_datas } from './data'
// // import EastIcon from '@mui/icons-material/East';


// const Articles_grid = () => {

//     return (
//         <>
//             <div className='check-main-box'>TOP NEWS FROM INDIA</div>
//             <div className="row empty-box">
//                 <div className="col-sm"></div>
//                 <div className="col-sm"></div>
//                 <div className="col-sm"></div>
//             </div>
//             <div className="row empty-box">
//                 <div className="col-sm"></div>
//                 <div className="col-sm"></div>
//                 <div className="col-sm"></div>
//             </div>
//             <div className="row empty-box">
//                 <div className="col-sm"></div>
//                 <div className="col-sm"></div>
//                 <div className="col-sm"></div>
//             </div>
//         </>
//     )
// }

// export default Articles_grid;


import React from 'react'
import Articles_news from './Articles_news'

const Articles_grid = () => {
    return (
        <>
            <div className='check-main-box'>TOP NEWS FROM INDIA</div>
            <div className="row empty-box">
                {Articles_news(0)}
                {Articles_news(1)}
                {Articles_news(2)}
            </div>
            <div className="row empty-box">
                {Articles_news(3)}
                {Articles_news(4)}
                {Articles_news(5)}
            </div>
            <div className="row empty-box">
                {Articles_news(6)}
                {Articles_news(7)}
                {Articles_news(8)}
            </div>
        </>
    )
}

export default Articles_grid;
