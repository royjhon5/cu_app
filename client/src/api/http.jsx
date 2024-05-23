import Axios from 'axios';

const http = Axios.create({
    baseURL: "https://cu-app-sample-server.vercel.app/api",
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
});

export default http;