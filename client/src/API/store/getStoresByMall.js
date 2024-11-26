const BASE_URL = "https://backroomsbridge.onrender.com/api";

const LOCAL_HOST = 'http://localhost:5000/api'

export const fetchStoresByMall = async (mallId) => {
    try {
        const response = await fetch(`${BASE_URL}/stores/mall/${mallId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok) {
            throw new Error('Failed to fetch malls');
        }
        const malls = await response.json();
        return malls;
    } catch (error) {
        console.error('Error fetching malls by store:', error);
        throw error;
    }
};
