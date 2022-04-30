import "./styles/styles.scss";
import { headerController } from "./controller/header.js";
import { getList } from "./controller/homeList.js";
import { listeners } from "./controller/listeners.js";

window.onload = () => {
    headerController();
    getList();
    listeners();
};
