import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navigation from '../../components/Navigation'
import "./product.css";

const Products = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("/data.json")
            .then((res) => res.json())
            .then((item) => setData(item))
            .catch((err) => console.error("Error fetching data:", err));
    }, []);

    console.log(data);


    return (
        <div className='product-page'>
            <Navigation />
            <div className='product-container'>
                <h1>Products</h1>
                <div className='products-list'>
                    {data.map((product) => (
                        <div className="product-card" key={product.productId}>
                            <img className="product-card-img" src={product.image}
                                alt={product.productName} />
                            <div className="product-card-body">
                                <h5 className="product-card-title">{product.productName}</h5>
                                <p className="product-card-price">₹ {product.price}</p>
                                <div className="product-card-btns">
                                    <button className='btn1'>Add to Cart</button>
                                    <button className='btn2'>Buy Now</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Outlet />
        </div>
    )
}

export default Products