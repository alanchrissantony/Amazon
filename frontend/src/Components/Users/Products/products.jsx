import React, { useState, useEffect } from 'react';
import './products.css'
import axios from 'axios';
import LoadingBox from '../LoadingBox/loadingBox';
import MessageBox from '../MessageBox/messageBox';

function Products() {

    const [product, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);


    useEffect(() => {
        const fetchData = async () => {

            try {
                setLoading(true)
                const { data } = await axios.get('/api/products')
                setLoading(false)
                setProducts(data)
            } catch (err) {
                setError(err.message)
                setLoading(false)
            }
        };
        fetchData();
    }, [])

    return (
        <div className='productsSectionContainer'>
            {loading ? (
                <LoadingBox></LoadingBox>
            ) : error ? (
                <MessageBox>{error}</MessageBox>
            ) : (
                <div className="productsContainer">
                    {product.map(product => (
                        <div key={product._id} className="productBox">
                            <div className="productsImageDiv">
                                <a className='productsImageLink'><img className='productsImage' src={product.image} alt="" /></a>
                            </div>
                            <div className='productsTitleDiv'>
                                <a className='productsTitleLink'><p className='productsTitle'>{product.title}</p></a>
                            </div>

                            <div className="productsRatingDiv">
                                <span> <i className={product.rating >= 1 ? "fa fa-star" : product.rating >= 0.5 ? "fa fa-star-half" : "fa fa-star-o"}></i> </span>
                                <span> <i className={product.rating >= 2 ? "fa fa-star" : product.rating >= 1.5 ? "fa fa-star-half" : "fa fa-star-o"}></i> </span>
                                <span> <i className={product.rating >= 3 ? "fa fa-star" : product.rating >= 2.5 ? "fa fa-star-half" : "fa fa-star-o"}></i> </span>
                                <span> <i className={product.rating >= 4 ? "fa fa-star" : product.rating >= 3.5 ? "fa fa-star-half" : "fa fa-star-o"}></i> </span>
                                <span> <i className={product.rating >= 5 ? "fa fa-star" : product.rating >= 4.5 ? "fa fa-star-half" : "fa fa-star-o"}></i> </span>
                            </div>
                            <div className='productsReviewDiv'><span className='productsReviewText'>{product.review}</span></div>
                            <br />
                            <div className='productsPriceDiv'>
                                <p className='productsPrice'><span className='productsPriceDollar'>$</span><span className='productsPriceText'>{product.price}</span><span className='productsPriceDecimal'>{product.decimal}</span></p>
                            </div>
                            <hr />
                        </div>
                    ))}

                </div>
            )}

        </div>
    )
}

export default Products;
