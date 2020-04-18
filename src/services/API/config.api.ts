import axios from 'axios';

export const API_URL = "https://plm-mai.herokuapp.com";

export default () => {
    if (localStorage.getItem('token')) {
        return axios.create({
            baseURL: API_URL,
            headers: {
                Authorization: `Bearer ${JSON.parse(localStorage.getItem("token") as string)}`
            },
        });
    }
    return axios.create({
        baseURL: API_URL,
    });
};
