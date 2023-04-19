import React, {  } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../pages/Cart/Cart';

const News = () => {
    const newsData=useLoaderData()
    return (
       <div>
        {
                newsData.map(news =><Cart key={news._id} news={news}></Cart>)
        }
       </div>
    );
};

export default News;

