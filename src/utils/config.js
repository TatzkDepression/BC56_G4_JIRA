export const BASE_URL = "https://jiranew.cybersoft.edu.vn/api/";

export const TOKEN_CYBERSOFT =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA2NSIsIkhldEhhblN0cmluZyI6IjIwLzExLzIwMjQiLCJIZXRIYW5UaW1lIjoiMTczMjA2MDgwMDAwMCIsIm5iZiI6MTcwMjMxNDAwMCwiZXhwIjoxNzMyMjA4NDAwfQ.8jL30xUvuN74PYnFHxIjmfu65QEtLdvz_dWZnK6QxGk";

export const USER_LOGIN = "USER_LOGIN";

export const colorPriority = [
    { id: 1, color: "red" },
    { id: 2, color: "yellow" },
    { id: 3, color: "green" },
    { id: 4, color: "gray" },
];

export const STATUS_CODE = {
    SUCCESS: 200,
    CREATED: 201,
    UNAUTHORIZED: 401,
    NOTFOUND: 404,
    SERVER: 500,
};

export const userLocalStorage = {
    set: (userData) => {
        let userJson = JSON.stringify(userData);
        localStorage.setItem(USER_LOGIN, userJson);
    },
    get: () => {
        let userJson = localStorage.getItem(USER_LOGIN);
        if (userJson !== null) {
            return JSON.parse(userJson);
        } else {
            return null;
        }
    },
    remove: () => {
        localStorage.removeItem(USER_LOGIN);
    },
};
