const BASE_URL = "https://backroomsbridge.onrender.com/api";

// Update an existing store
export const updateStore = async (id, storeData) => {
    try {
        const response = await fetch(`${BASE_URL}/stores/${id}`, {
            method: 'PUT',
            body: JSON.stringify(storeData),
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