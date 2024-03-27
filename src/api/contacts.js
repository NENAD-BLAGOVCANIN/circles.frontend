import { apiUrl } from './config';

const getContacts = async () => {

    try {

        const token = localStorage.getItem('accessToken'); 

        const response = await fetch(apiUrl + '/contacts', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
        });

        const responseData = await response.json();

        if (response.ok) {
            return responseData;
        } else {
            throw new Error(responseData.errors);
        }
    } catch (error) {
        throw new Error(error);
    }

}

const saveContact = async (contact) => {

    try {

        const token = localStorage.getItem('accessToken'); 

        const response = await fetch(apiUrl + '/contacts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify(contact)
        });

        const responseData = await response.json();

        return responseData;

    } catch (error) {
        return error;
    }

}

export { getContacts, saveContact };