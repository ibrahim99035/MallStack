import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FaArrowCircleDown } from "react-icons/fa";

import { fetchProductsByStore } from '../../API/product/getProductByStore';
import { fetchStoreById } from '../../API/store/getstore';

import '../../CSS/StoreProfile.css';

import CustomModal from '../../dashboard/Admin/components/CustomModal';
import ProductInfo from '../Product/ProductInfo';
import StyledVideoComponent from './vidcomp';
import ZipanVid from './zipan';

const StoreProfile = () => {
    const [products, setProducts] = useState([]);
    const [store, setStore] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState(null);
    
    const { id } = useParams();  // Get the id from the route

    useEffect(() => {
        fetchTheProducts();
        fetchTheStore();
    }, [id]);

    const fetchTheProducts = async () => {
        try {
            setLoading(true);
            const data = await fetchProductsByStore(id);  // Use dynamic store id
            setProducts(data);
            setLoading(false);
        } catch (err) {
            setError('Failed to fetch products');
            setLoading(false);
        }
    };

    const fetchTheStore = async () => {
        try {
            setLoading(true);
            const data = await fetchStoreById(id);  // Use dynamic store id
            setStore(data);
            setLoading(false);
        } catch (err) {
            setError('Failed to fetch products');
            setLoading(false);
        }
    };

    if (!store) {
        return <h2>Store not found</h2>;  // Handle case when store is not found
    }

    if (loading) return <p>Loading products...</p>;
    if (error) return <p>{error}</p>;

    const handleClick = (product) => {
        setSelectedProduct(product); // Set selected user for status change
        setIsModalOpen(true); // Open the status confirmation modal
    };

    return (
        <>
            <div className="store-profile">
                <h1>{store.name}</h1>
                <img src={store.coverImage} alt={store.name} />
                <p><strong>{store.description}</strong></p>
                <p><strong>{store.address}</strong></p>
                <p><strong>{store.openingDate}</strong></p>
                <p><FaArrowCircleDown /></p>
                <p><strong>{store.closingDate}</strong></p>
            </div> 
            <br /> <hr id='store-profile' /> <br />
            
            <div id='storeProducts'>
                <h2>الأثاث المتوفر</h2>
                <div className="product-grid">
                    {products.length > 0 ? (
                        products.map((product) => (
                            <div key={product._id} className="product-card" onClick={() => handleClick(product)}>
                                <img src={product.coverImage} alt={product.name} loading="lazy" />
                                <h3>{product.name}</h3>
                                <p>{product.description}</p>
                            </div>
                        ))
                    ) : (
                        <p>No products available for this store.</p>
                    )}
                </div>
            </div>
            
            {store.name === 'معرض الكوخ الخشبي' && <StyledVideoComponent />}
            {store.name === 'ديوان ذيبان غنام الحميداني' && <ZipanVid />}
            
            <CustomModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)} // Close the edit modal
                content={
                    <ProductInfo product= {selectedProduct}/>
                }
            />
        </>
    );
};

export default StoreProfile;