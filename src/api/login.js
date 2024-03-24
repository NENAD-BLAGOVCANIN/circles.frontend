import { apiUrl } from './config';

const login = async (email, password) => {
    const query = `
        mutation TokenAuth($email: String!, $password: String!) {
            tokenAuth(email: $email, password: $password) {
            success
            errors
            token
            refreshToken
            }
        }
    `;

    const variables = {
        email: email,
        password: password
    };

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                query,
                variables
            })
        });

        const responseData = await response.json();

        if (response.ok && responseData.data.tokenAuth.token) {
            localStorage.setItem('accessToken', responseData.data.tokenAuth.token);
            return { success: true, message: "Login successful" };
        } else {
            throw new Error(responseData.errors);
        }
    } catch (error) {
        throw new Error(error);
    }
};

export { login };
