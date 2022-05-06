import { recipesListByName } from "../model/recipesModel.js";
import { printRecipe } from "../view/recipesView.js";
import { ownerDetail } from "../model/ownerDetail.js";
import { recipeDetail } from "../model/recipesModel.js";
import { printRecipeDetail } from "../view/recipeDetailView.js";

const getRecipesList = async (e) => {
    const parentNode = e.target.parentNode;

    window.scrollTo(0, 0);

    if (parentNode.getAttribute("class") === "food__container") {
        parentNode.parentNode.classList.toggle("no-active");

        const foodName = parentNode.getAttribute("id").split("-")[0];

        const recipesList = await recipesListByName(foodName);
        console.log(recipesList);

        if (recipesList === "The recipe doesn't exist") {
            let recipe = "";
            printRecipe(recipe);
            return;
        }

        recipesList.forEach(async (recipe) => {
            const owner = await ownerDetail(recipe.owner[0]);
            printRecipe(recipe, owner);
        });
    }
};

const getDetailRecipe = (recipeBtns$$) => {
    recipeBtns$$.forEach((btn) => {
        btn.onclick = async (e) => {
            const recipeId = btn.getAttribute("data-recipeId");
            const recipe = await recipeDetail(recipeId);
            const owner = await ownerDetail(recipe.owner[0]);

            const recipeContainerList =
                e.target.parentNode.parentNode.parentNode;
            recipeContainerList.classList.toggle("no-active");

            printRecipeDetail(recipe, owner);
        };
    });
};

export { getRecipesList, getDetailRecipe };
