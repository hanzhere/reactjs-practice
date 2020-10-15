import React from 'react'
import './Product.css'
import StarIcon from '@material-ui/icons/Star';

function Product({ title, price, image, rating }) {
    return (
        <div className='product'>
            <div className='product__info'>
                <p>{title}</p>
                <p className='product__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='product__rating'>
                    {Array(rating).fill().map(() => (<StarIcon className="product__starIcon" />))}
                </div>
            </div>
            <img src={image} alt="" />
            <button>Add to cart</button>
        </div>
    )
}

export default Product
