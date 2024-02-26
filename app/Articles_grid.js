
import React from 'react'
import Article from './Article'

const Articles_grid = () => {
    return (
        <>
            <div className='check-main-box'>TOP NEWS FROM INDIA</div>
            <div className="row empty-box">
                {Article (0)}
                {Article (1)}
                {Article (2)}
            </div>
            <div className="row empty-box">
                {Article (3)}
                {Article (4)}
                {Article (5)}
            </div>
            <div className="row empty-box">
                {Article (6)}
                {Article (7)}
                {Article (8)}
            </div>
        </>
    )
}

export default Articles_grid;
