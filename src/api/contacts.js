import { apiUrl } from './config';

const getContacts = async () => {

    try {

        const response = await fetch(apiUrl + '/contacts', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
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

        console.log(contact);

        const response = await fetch(apiUrl + '/contacts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
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