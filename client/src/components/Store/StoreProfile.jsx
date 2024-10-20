import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FaArrowCircleDown } from "react-icons/fa";
import { fetchProductsByStore } from '../../API/product/getProductByStore';
import '../../CSS/StoreProfile.css';

import CustomModal from '../../dashboard/Admin/components/CustomModal';
import ProductInfo from '../Product/ProductInfo';

const StoreProfile = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState(null);
    
    const { id } = useParams();  // Get the id from the route

    useEffect(() => {
        fetchTheProducts();
    }, [id]);

    const fetchTheProducts = async () => {
        try {
            setLoading(true);
            const data = await fetchProductsByStore('66f94d5c48654bd84c29f72b');  // Use dynamic store id
            setProducts(data);
            setLoading(false);
        } catch (err) {
            setError('Failed to fetch products');
            setLoading(false);
        }
    };

    // Hardcoded store data for now
    const persoudo_stores = [
        { id: 1, name: "المحل الأول", description: "وصف المحل الأول", address: "الدور الاول", openingTime: "10:00 AM", closingTime: "9:00 PM", image: "https://media.timeout.com/images/103333354/750/562/image.jpg" },
        { id: 2, name: "المحل الثاني", description: "وصف المحل الثاني", address: "الدور الثاني", openingTime: "10:00 AM", closingTime: "9:00 PM", image: "https://media.timeout.com/images/103333357/750/422/image.jpg" },
        { id: 3, name: "المحل الثالث", description: "وصف المحل الثالث", address: "الدور الثالث", openingTime: "10:00 AM", closingTime: "9:00 PM", image: "https://media.timeout.com/images/103333357/750/422/image.jpg" },
        { id: 4, name: "المحل الرابع", description: "وصف المحل الرابع", address: "الدور الرابع", openingTime: "10:00 AM", closingTime: "9:00 PM", image: "https://media.timeout.com/images/103333357/750/422/image.jpg" },
        { id: 5, name: "المحل الخامس", description: "وصف المحل الخامس", address: "الدور الخامس", openingTime: "10:00 AM", closingTime: "9:00 PM", image: "https://media.timeout.com/images/103333357/750/422/image.jpg" },
        { id: 6, name: "المحل السادس", description: "وصف المحل السادس", address: "الدور السادس", openingTime: "10:00 AM", closingTime: "9:00 PM", image: "https://media.timeout.com/images/103333357/750/422/image.jpg" },
    ];

    // Find the store by id
    const store = persoudo_stores.find(store => store.id === parseInt(id));

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
                <img src={store.image} alt={store.name} />
                <p><strong>{store.description}</strong></p>
                <p><strong>{store.address}</strong></p>
                <p><strong>{store.openingTime}</strong></p>
                <p><FaArrowCircleDown /></p>
                <p><strong>{store.closingTime}</strong></p>
            </div> 
            <br /> <hr id='store-profile' /> <br />
            
            <div id='storeProducts'>
                <h2>الأثاث المتوفر</h2>
                <div className="product-grid">
                    {products.length > 0 ? (
                        products.map((product) => (
                            <div key={product._id} className="product-card" onClick={() => handleClick(product)}>
                                <img src={product.coverImage} alt={product.name} />
                                <h3>{product.name}</h3>
                                <p>{product.description}</p>
                            </div>
                        ))
                    ) : (
                        <p>No products available for this store.</p>
                    )}
                </div>
            </div>
            
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