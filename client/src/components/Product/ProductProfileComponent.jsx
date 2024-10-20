import React, { useState } from 'react';
import { fetchProductById } from '../../API/product/getproduct';

const ProductProfileComponent = (productId) =>{
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [failure, setFailure] = useState(false);
    
};

export default ProductProfileComponent;