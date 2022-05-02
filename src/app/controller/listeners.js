import { getListOnScroll, loadPage } from "./homeList.js";
import { getRecipesList } from "./recipesList.js";

const listeners = () => {
    window.addEventListener("scroll", getListOnScroll);
    window.addEventListener("click", (e) => {
        getRecipesList(e);
    });
    loadPage();
};

export { listeners };
