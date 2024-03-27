import { apiUrl } from './config';

const getContacts = async () => {

  try {

    const response = await fetch(apiUrl+'/contacts', {
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

export { getContacts };