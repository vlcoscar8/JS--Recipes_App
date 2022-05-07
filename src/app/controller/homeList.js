import { printHome } from "../view/homeView.js";
import { foodFamily } from "../model/homeModel.js";

const getList = async () => {
    const listFood = await foodFamily();

    printHome(listFood);
};

const getListOnScroll = async () => {
    const foodList$$ = document.getElementById("food-list");

    if (foodList$$.className === "food__list") {
        const listFood = await foodFamily();

        printHome(listFood);
    }
};

export { getList, getListOnScroll };
