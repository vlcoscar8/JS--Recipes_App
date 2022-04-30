import "./styles/styles.scss";
import { headerController } from "./controller/header.js";
import { printHome } from "./view/homeView.js";

window.onload = () => {
    headerController();
    printHome();
};
