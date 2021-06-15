const baseUrl = process.env.REACT_APP_API_URL_DNS;

const fetchNotToken = (endpoint, data, method = 'GET') => {

    const url = `${baseUrl}/${endpoint}`;

    if (method === 'GET') {

        return fetch(url);

    } else {

        return fetch(url, {
            method,
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
    }
}

const fetchWithToken = (endpoint, data, method = 'GET') => {

    const url = `${baseUrl}/${endpoint}`;
    const token = localStorage.getItem('token') || '';

    if (method === 'GET') {

        return fetch(url,{
            method,
            headers: {
                'xtoken': token
            }
        });

    } else {

        return fetch(url, {
            method,
            headers: {
                'Content-type': 'application/json',
                'xtoken': token
            },
            body: JSON.stringify(data)
        });
    }
}

export {
    fetchNotToken,
    fetchWithToken
}