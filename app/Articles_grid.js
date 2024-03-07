"use client"
import React from 'react';
import Article from './Article';
import { articles_data } from './data';

const Articles_grid = () => {
    return (
        <>
            <div className='check-main-box'>TOP NEWS FROM INDIA</div>
            <div className="row empty-box">
                <Article props={articles_data[0]} />
                <Article props={articles_data[1]} />
                <Article props={articles_data[2]} />
            </div>
            <div className="row empty-box">
                <Article props={articles_data[3]} />
                <Article props={articles_data[4]} />
                <Article props={articles_data[5]} />
            </div>
            <div className="row empty-box">
                <Article props={articles_data[6]} />
                <Article props={articles_data[7]} />
                <Article props={articles_data[8]} />
            </div>
        </>
    );
};

export default Articles_grid;

