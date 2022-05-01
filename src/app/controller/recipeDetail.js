import { recipeContent } from "../model/recipesModel.js";

const getRecipeContent = async (recipeId, recipeOptions$$, recipeContent$$) => {
    recipeOptions$$.forEach(async (option) => {
        if (option.getAttribute("class") === "recipe__option choosen") {
            const recipeOption = option.childNodes[1].innerHTML.toLowerCase();

            console.log(recipeId);

            const content = await recipeContent(recipeId, recipeOption);

            console.log(content.data);
        }
    });
};

export { getRecipeContent };
