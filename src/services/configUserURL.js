import axios from "axios";
import { LOCAL_SERVICE } from "./localService";

const BASE_URL = "https://jiranew.cybersoft.edu.vn";

const BASE_USER_URL = `${BASE_URL}/api/Users/`;

const TOKEN_CYBERSOFT =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA1NiIsIkhldEhhblN0cmluZyI6IjE4LzA0LzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcxMzM5ODQwMDAwMCIsIm5iZiI6MTY4MzMwNjAwMCwiZXhwIjoxNzEzNTQ2MDAwfQ.4A7jJib1YUkmnIr-QDcjs_3j1YY0Ft1wPZDfe8qFrqE";

const AXIOS_INSTANCE_GENERATOR = (BASE_URL, accessToken = false) => {
    let config = {
        baseURL: BASE_URL,
        headers: {
            TokenCybersoft: TOKEN_CYBERSOFT,
            Authorization: "Bearer " + LOCAL_SERVICE.user.get()?.accessToken,
        },
    };
    return axios.create(config);
};

export {
    TOKEN_CYBERSOFT,
    AXIOS_INSTANCE_GENERATOR,
    BASE_USER_URL,
};
