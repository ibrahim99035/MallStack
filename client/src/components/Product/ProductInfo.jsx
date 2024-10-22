import React from 'react';
import '../../CSS/ProductInfo.css';

const ProductInfo = ({ product }) => {
    if (!product) {
        return <p>No product information available</p>;
    }

    return (
        <div className="product-profile-main-container">
            <div className="product-details">
                <h1>{product.name}</h1>
                <p>{product.description}</p>
                <img src={product.coverImage} alt={product.name} />
            </div>
            <div className="product-profile-side-container">
                <div>
                    <h1>{product.name}</h1>
                    <p>{product.description}</p>
                </div>
                <div>
                    <h1>{product.name}</h1>
                    <p>{product.description}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductInfo;