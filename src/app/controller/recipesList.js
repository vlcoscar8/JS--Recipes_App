import { recipesListByName } from "../model/recipesModel.js";
import { printRecipe } from "../view/recipesView.js";
import { ownerDetail } from "../model/ownerDetail.js";
import { recipeDetail } from "../model/recipesModel.js";

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

const getDetailRecipe = (recipeBtns$$) => {
    recipeBtns$$.forEach((btn) => {
        btn.onclick = async () => {
            const recipeId = btn.getAttribute("data-recipeId");
            const recipe = await recipeDetail(recipeId);
            console.log(recipe);
        };
    });
};

export { getRecipesList, getDetailRecipe };
