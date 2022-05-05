import { URL } from "../utils/variables.JS";

const createIngredient = async (recipeId, ingredient, token) => {
    const response = await fetch(`${URL}/ingredient/${recipeId}`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token[0]}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(ingredient),
    });

    const data = await response.json();

    return data;
};

export { createIngredient };
