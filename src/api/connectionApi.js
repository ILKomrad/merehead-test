import axios from 'axios';

export default class ConnectionApi {
    static async send({method, url, body}) {
        const conf = { method, url, headers: {"content-type": "application/json"} }

        if (body) {
            conf.data = body;
        }

        try {
            const res = await axios(conf);

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
}