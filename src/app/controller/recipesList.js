import { recipesListByName } from "../model/recipesModel.js";
import { printRecipe } from "../view/recipesView.js";
import { ownerDetail } from "../model/ownerDetail.js";

const getRecipesList = async (e) => {
    const parentNode = e.target.parentNode;

    if (parentNode.getAttribute("class") === "food__container") {
        parentNode.parentNode.classList.toggle("no-active");

        const foodName = parentNode.getAttribute("id").split("-")[0];
        console.log(foodName);

        const recipesList = await recipesListByName(foodName);

        recipesList.forEach(async (recipe) => {
            const owner = await ownerDetail(recipe.owner[0]);
            printRecipe(recipe, owner);
        });
    }
};

export { getRecipesList };
