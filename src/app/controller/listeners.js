import { getListOnScroll } from "./homeList.js";
import { getRecipesList } from "./recipesList.js";

const listeners = () => {
    window.addEventListener("scroll", getListOnScroll);
    window.addEventListener("click", (e) => {
        getRecipesList(e);
    });
};

export { listeners };
