import { recipeContent } from "../model/recipesModel.js";
import { printContent } from "../view/recipeDetailView.js";

const getRecipeContent = async (recipeId, recipeOptions$$, recipeContent$$) => {
    recipeOptions$$.forEach(async (option) => {
        let recipeOption;

        if (option.getAttribute("class") === "recipe__option choosen") {
            recipeOption = option.childNodes[1].innerHTML.toLowerCase();
        }

        const contentDefault = await recipeContent(recipeId, recipeOption);

        printContent(contentDefault.data, recipeContent$$);

        option.addEventListener("click", async () => {
            recipeOptions$$.forEach((el) => {
                el.classList.remove("choosen");
            });
            option.classList.toggle("choosen");

            if (option.getAttribute("class") === "recipe__option choosen") {
                recipeOption = option.childNodes[1].innerHTML.toLowerCase();
            }

            const contentUpdated = await recipeContent(recipeId, recipeOption);

            printContent(contentUpdated.data, recipeContent$$);
        });
    });
};

export { getRecipeContent };
