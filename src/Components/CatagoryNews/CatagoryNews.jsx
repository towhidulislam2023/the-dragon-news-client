import React from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import Cart from '../../pages/Cart/Cart';

const CatagoryNews = () => {
    const CategoryData = useLoaderData()
    return (
        <div>
            {
                CategoryData.length === 0 ? <h1>"No News Found"</h1>:CategoryData.map(news => <Cart key={news._id} news={news}></Cart>)
            }
        </div>
    );
};

export default CatagoryNews;