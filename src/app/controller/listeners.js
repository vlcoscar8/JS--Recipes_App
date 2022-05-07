import { getListOnScroll } from "./homeList.js";
import { getRecipesList } from "./recipesList.js";

const listeners = () => {
    window.addEventListener("click", (e) => {
        getRecipesList(e);
    });
};

export { listeners };
