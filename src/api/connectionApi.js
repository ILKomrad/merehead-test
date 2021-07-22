import axios from 'axios';

export default class ConnectionApi {
    static options = {
        headers: {"content-type": "application/json"}
    }

    static async get(url) {
        try {
            const res = await axios.get(url); 

            if (res.statusText === "OK") {
                return res.data;
            }

            throw new Error(res.statusText);
        } catch (err) {
            if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
                console.error(err);
            }

            return Promise.reject("Connection error");
        }
    }

    static post(url, data) {
        axios.post(url, data, ConnectionApi.options);
    }
}