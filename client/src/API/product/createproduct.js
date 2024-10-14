const BASE_URL = "https://backroomsbridge.onrender.com/api";

// Create a new product
export const createProduct = async (productData) => {
    try {
        const response = await fetch(`${BASE_URL}/products`, {
            method: 'POST',
            body: JSON.stringify(productData),
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        });
        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message || 'An error occurred');
        }
        return response.json();
    } catch (error) {
        throw new Error(error.message);
    }
};