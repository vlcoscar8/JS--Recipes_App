import { getListOnScroll } from "./homeList.js";

const listeners = () => {
    window.addEventListener("scroll", getListOnScroll);
};

export { listeners };
