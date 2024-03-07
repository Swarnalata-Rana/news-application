"use client"
import React from 'react';
import EastIcon from '@mui/icons-material/East';


const Article = ({ props }) => {
  return (
    <div key={props.id} className="col-sm">
      <div className='h4-tag'>
        <img src={props.url} alt={props.name} />
      </div>
      <div>
        <h3 className='h4-tag'>{props.name}</h3>
        <p className='paragrap'>{props.description}</p>
      </div>
      <span className='read-article'>Read full article </span>
      <a className='arrow'><EastIcon/></a>

    </div>
  );
};

export default Article;
