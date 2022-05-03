import { URL } from "../utils/variables.JS";

const registerUser = async (formData) => {
    const response = await fetch(`${URL}/user/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    });

    const data = await response.json();

    return data;
};

const loginUser = async (formData) => {
    const response = await fetch(`${URL}/user/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    });

    const data = await response.json();

    return data;
};

const logoutUser = async (userId) => {
    const response = await fetch(`${URL}/user/logout/${userId}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
    });

    const data = await response.json();

    return data;
};

const getUserDetail = async (userId) => {
    const response = await fetch(`${URL}/user/${userId}`);

    const data = await response.json();

    return data;
};

const editUserInfo = async (formData, userId) => {
    const response = await fetch(`${URL}/user/${userId}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    });

    const data = await response.json();

    return data;
};

export { registerUser, loginUser, logoutUser, getUserDetail, editUserInfo };
