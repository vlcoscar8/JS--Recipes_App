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
    console.log(formData);
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

const editUserInfo = async (formData, userId, token) => {
    const response = await fetch(`${URL}/user/${userId}`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token[0]}`,
        },
        body: formData,
    });

    const data = await response.json();

    return data;
};

const pushUserIntoRecipe = async (recipeId, userId, token) => {
    const body = {
        userId: userId,
        recipeId: recipeId,
    };

    const response = await fetch(`${URL}/user/recipe`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token[0]}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    });

    const data = await response.json();

    return data;
};

const pushRecipeIntoUser = async (recipeId, userId, token) => {
    const body = {
        userId: userId.toString(),
        recipeId: recipeId.toString(),
    };

    const response = await fetch(`${URL}/user/recipe/owner`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token[0]}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    });

    const data = await response.json();

    return data;
};

export {
    registerUser,
    loginUser,
    logoutUser,
    getUserDetail,
    editUserInfo,
    pushUserIntoRecipe,
    pushRecipeIntoUser,
};
