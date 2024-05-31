import Axios from 'axios';
const baseUrl = window.location.origin;
const http = Axios.create({
    // baseURL: "https://server-kappa-nine-47.vercel.app/api",
    baseURL: baseUrl.split(':')[0]+':'+baseUrl.split(':')[1]+":8000/api",
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
});

export default http;