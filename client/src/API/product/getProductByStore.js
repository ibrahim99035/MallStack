const BASE_URL = "https://backroomsbridge.onrender.com/api";

const Local_URL = 'http://localhost:5000/api'

export const fetchProductsByStore = async (storeId) => {
    try {
        const response = await fetch(`${BASE_URL}/products/store/${storeId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok) {
            throw new Error('Failed to fetch products');
        }
        const products = await response.json();
        return products;
    } catch (error) {
        console.error('Error fetching products by store:', error);
        throw error;
    }
};
