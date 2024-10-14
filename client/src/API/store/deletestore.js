const BASE_URL = "https://backroomsbridge.onrender.com/api";

// Delete a store
export const deleteStore = async (id) => {
    try {
        const response = await fetch(`${BASE_URL}/stores/${id}`, {
            method: 'DELETE',
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