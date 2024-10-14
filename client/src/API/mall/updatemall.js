const BASE_URL = "https://backroomsbridge.onrender.com/api";

// Update an existing mall
export const updateMall = async (id, mallData) => {
    try {
        const response = await fetch(`${BASE_URL}/malls/${id}`, {
            method: 'PUT',
            body: JSON.stringify(mallData),
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