import axios from "axios";
import { LOCAL_SERVICE } from "./localService";

const BASE_URL = "https://jiranew.cybersoft.edu.vn";

const BASE_USER_URL = `${BASE_URL}/api/Users/`;

const TOKEN_CYBERSOFT =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA2NSIsIkhldEhhblN0cmluZyI6IjIwLzExLzIwMjQiLCJIZXRIYW5UaW1lIjoiMTczMjA2MDgwMDAwMCIsIm5iZiI6MTcwMjMxNDAwMCwiZXhwIjoxNzMyMjA4NDAwfQ.8jL30xUvuN74PYnFHxIjmfu65QEtLdvz_dWZnK6QxGk";

const AXIOS_INSTANCE_GENERATOR = (BASE_URL, accessToken = false) => {
    let config = {
        baseURL: BASE_URL,
        headers: {
            TokenCybersoft: TOKEN_CYBERSOFT,
            Authorization: `Bearer ${localStorage.getItem("TOKEN")}`,
        },
    };
    // LOCAL_SERVICE.user.get()?.accessToken
    return axios.create(config);
};

export { TOKEN_CYBERSOFT, AXIOS_INSTANCE_GENERATOR, BASE_USER_URL };
