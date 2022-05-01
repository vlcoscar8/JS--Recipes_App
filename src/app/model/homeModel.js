import { URL } from "../utils/variables.JS";

const foodFamily = async (start = 0, limit = 4) => {
    const response = await fetch(`${URL}/food?start=${start}&limit=${limit}`);
    const data = await response.json();

    return data;
};

export { foodFamily };
