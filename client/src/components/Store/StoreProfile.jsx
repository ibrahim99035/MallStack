import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';

import { FaArrowCircleDown } from "react-icons/fa";

import { fetchProducts } from '../../API/product/getproducts';
import { fetchProductById } from '../../API/product/getproduct';

import '../../CSS/StoreProfile.css';

import Products from '../Product/CardGrid';
import CustomModal from '../../dashboard/Admin/components/CustomModal';

const StoreProfile = () => {

    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        fetchTheProducts();
    }, []);

    const fetchTheProducts = async () => {
        const data = await fetchProducts();
        setProducts(data);
    };
    
    const { id } = useParams();  // Get the id from the route

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
            </div> <br /> <hr id='store-profile' /> <br />
            <Products />
        </>
    );
};

export default StoreProfile;