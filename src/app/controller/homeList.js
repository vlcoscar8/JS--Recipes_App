import { printHome } from "../view/homeView.js";
import { foodFamily } from "../model/homeModel.js";

const getList = async () => {
    const listFood = await foodFamily();

    printHome(listFood);
};

export { getList };
