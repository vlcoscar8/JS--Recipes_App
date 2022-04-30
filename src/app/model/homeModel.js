import { URL } from "../utils/variables.JS";

const foodFamily = async () => {
    const response = await fetch(`${URL}/food`);
    const data = await response.json();

    return data;
};

export { foodFamily };
