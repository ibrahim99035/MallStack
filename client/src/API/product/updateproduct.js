const BASE_URL = "https://backroomsbridge.onrender.com/api";

// Update an existing product
export const updateProduct = async (id, productData) => {
    try {
        const response = await fetch(`${BASE_URL}/products/${id}`, {
            method: 'PUT',
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