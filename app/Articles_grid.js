import React from 'react'
import { articles_datas } from './data'
import EastIcon from '@mui/icons-material/East';


const Articles_grid = () => {
    return (
        <>
            <div className='check-main-box'>TOP NEWS FROM INDIA</div>
            <div className="row empty-box">
                <div className="col-sm">
                    <img src={articles_datas[0].url}/>
                    Name:-{articles_datas[0].name}<br></br>
                    Description:-{articles_datas[0].description}
                </div>
                <div className="col-sm">
                    <img src={articles_datas[1].url} />
                    Name:-{articles_datas[1].name}<br></br>
                    Description:-{articles_datas[1].description}
                </div>
                <div className="col-sm">
                    <img src={articles_datas[2].url} />
                    Name:-{articles_datas[2].name}<br></br>
                    Description:-{articles_datas[2].description}
                </div>
            </div>
            <div className="row empty-box">
                <div className="col-sm">
                    <img src={articles_datas[3].url} />
                    Name:-{articles_datas[3].name}<br></br>
                    Description:-{articles_datas[3].description}
                </div>
                <div className="col-sm">
                    <img src={articles_datas[4].url} />
                    Name:-{articles_datas[4].name}<br></br>
                    Description:-{articles_datas[4].description}
                </div>
                <div className="col-sm">
                    <img src={articles_datas[5].url} />
                    Name:-{articles_datas[5].name}<br></br>
                    Description:-{articles_datas[5].description}
                </div>
            </div>
            <div className="row empty-box">
                <div className="col-sm">
                    <img src={articles_datas[6].url} />
                    Name:-{articles_datas[6].name}<br></br>
                    Description:-{articles_datas[6].description}</div>
                <div className="col-sm">
                    <img src={articles_datas[7].url} />
                    Name:-{articles_datas[7].name}<br></br>
                    Description:-{articles_datas[7].description}
                </div>
                <div className="col-sm">
                    <img src={articles_datas[8].url} />
                    Name:-{articles_datas[8].name}<br></br>
                    Description:-{articles_datas[8].description}
                </div>
            </div>
        </>
    )
}

export default Articles_grid
