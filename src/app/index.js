import "./styles/styles.scss";
import { headerController } from "./controller/header.js";
import { getList, getListOnScroll } from "./controller/homeList.js";

window.addEventListener("scroll", () => {
    getListOnScroll();
});

window.onload = () => {
    headerController();
    getList();
};
