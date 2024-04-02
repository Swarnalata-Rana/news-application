import React from 'react'
import { articles_data } from './data'

const Article = (index) => {
  const article = articles_data[index];

  return (
      <div key={article.id} className="col-sm">
          <div>
              <img src={article.url} />
          </div>
          <div>
              <h3>{article.name}</h3>
              <p>{article.description}</p>
              {/* <p>Language: {article.language}</p>
              <p>Country: {article.country}</p> */}
          </div>
      </div>
  );
};
export default Article ;
