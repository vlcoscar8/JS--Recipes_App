import { printHome } from "../view/homeView.js";
import { foodFamily } from "../model/homeModel.js";

const getList = async () => {
    const listFood = await foodFamily();

    printHome(listFood);
};

let start = 0;
let limit = 0;
let oldValue = 0;

const getListOnScroll = async () => {
    let newValue = window.pageYOffset;

    if (newValue - oldValue >= 480) {
        oldValue = newValue;
        start = start + 4;
        limit = limit + 8;

        const listFood = await foodFamily(start, limit);

        printHome(listFood);
    }
};

const loadPage = () => {
    const homeBtn$$ = document.getElementById("home-btn");
    homeBtn$$.addEventListener("click", () => {
        window.location.href = window.location.href;
    });
};

export { getList, getListOnScroll, loadPage };
