import { URL } from "../utils/variables.JS";

const recipesListByName = async (food) => {
    const response = await fetch(`${URL}/recipes?food=${food}`);
    const data = await response.json();

    return data;
};

const recipeDetail = async (recipeId) => {
    const response = await fetch(`${URL}/recipes/${recipeId}`);
    const data = await response.json();

    return data;
};

export { recipesListByName, recipeDetail };
