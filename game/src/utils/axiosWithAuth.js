import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        baseURL: 'URL ENDPOINT GO HERE',   
        headers: {
            Authorization: token
        }
    });
};