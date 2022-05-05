import { URL } from "../utils/variables.JS";

const createStep = async (recipeId, step, token) => {
    const response = await fetch(`${URL}/step/${recipeId}`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token[0]}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(step),
    });

    const data = await response.json();

    return data;
};

export { createStep };
