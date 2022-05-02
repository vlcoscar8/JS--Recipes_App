import { URL } from "../utils/variables.JS";

const loader = document.getElementById("loader");

const foodFamily = async (start = 0, limit = 4) => {
    loader.classList.remove("no-active");

    const response = await fetch(`${URL}/food?start=${start}&limit=${limit}`);
    const data = await response.json();

    loader.classList.add("no-active");

    return data;
};

export { foodFamily };
