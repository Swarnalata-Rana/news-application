import React from 'react';
import EastIcon from '@mui/icons-material/East';

const Article = ({ props }) => {
    return (
        <div key={props.id} className="col-sm">
            <img className='image' src={props.url} alt={props.name} />
            <h4 className='title'>{props.name}</h4>
            <p className='paragrap'>{props.description}</p>
            <span className='read-article'>{props.new_page}</span>
            <a className='arrow' href='read_full_article'><EastIcon/></a>
        </div>
    );
};
export default Article;
