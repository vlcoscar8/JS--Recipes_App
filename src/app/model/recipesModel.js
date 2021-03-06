import { URL } from "../utils/variables.JS";

const loader = document.getElementById("loader");

const recipesListByName = async (food) => {
    loader.classList.remove("no-active");

    const response = await fetch(`${URL}/recipes?food=${food}`);
    const data = await response.json();

    loader.classList.add("no-active");

    return data;
};

const recipeDetail = async (recipeId) => {
    loader.classList.remove("no-active");

    const response = await fetch(`${URL}/recipes/${recipeId}`);
    const data = await response.json();

    loader.classList.add("no-active");

    return data;
};

const recipeContent = async (recipeId, recipeOption) => {
    const response = await fetch(
        `${URL}/recipes/${recipeId}?value=${recipeOption}`
    );
    const data = await response.json();

    return data;
};

const createNewRecipe = async (formData, token) => {
    try {
        const response = await fetch(`${URL}/recipes`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token[0]}`,
            },
            body: formData,
        });

        const data = await response.json();

        return data;
    } catch (error) {
        console.log(error);
    }
};

const pushRecipeIntoFood = async (recipeId, foodId, token) => {
    const body = {
        recipeId: recipeId,
        foodId: foodId,
    };

    const response = await fetch(`${URL}/recipes/food`, {
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
    recipesListByName,
    recipeDetail,
    recipeContent,
    createNewRecipe,
    pushRecipeIntoFood,
};
