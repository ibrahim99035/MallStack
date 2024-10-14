const BASE_URL = "https://backroomsbridge.onrender.com/api";

// Log in a user
export const loginUser = async (credentials) => {
    try {
        const response = await fetch(`${BASE_URL}/auth/login`, {
            method: 'POST',
            body: JSON.stringify(credentials),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message || 'Login failed');
        }
        const data = await response.json();
        // Store token in local storage
        localStorage.setItem('token', data.token);
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
};