import axios from "axios";
import { LOCAL_SERVICE } from "./localService";

const BASE_URL = "https://jiranew.cybersoft.edu.vn";

const BASE_USER_URL = `${BASE_URL}/api/Users/`;

const TOKEN_CYBERSOFT =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJOb2RlanMgMjgiLCJIZXRIYW5TdHJpbmciOiIwNi8wOC8yMDIzIiwiSGV0SGFuVGltZSI6IjE2OTEyODAwMDAwMDAiLCJuYmYiOjE2NzI5MzgwMDAsImV4cCI6MTY5MTQyNzYwMH0.1IXShq-PS4U5xC7QUMQLQcPPHNDmZrXfqvEBkJOEvEw";

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

export {
    TOKEN_CYBERSOFT,
    AXIOS_INSTANCE_GENERATOR,
    BASE_USER_URL,
};
