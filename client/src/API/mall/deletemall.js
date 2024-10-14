const BASE_URL = "https://backroomsbridge.onrender.com/api";

// Delete a mall
export const deleteMall = async (id) => {
    try {
        const response = await fetch(`${BASE_URL}/malls/${id}`, {
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