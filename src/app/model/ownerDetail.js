import { URL } from "../utils/variables.JS";

const ownerDetail = async (ownerId) => {
    const response = await fetch(`${URL}/user/${ownerId}`);
    const data = await response.json();

    return data;
};

export { ownerDetail };
