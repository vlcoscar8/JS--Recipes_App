import { editUserInfo } from "../model/userModel.js";

const submitForm = async (editForm$$, userId) => {
    editForm$$.addEventListener("submit", async (e) => {
        e.preventDefault();

        const formData = Object.fromEntries(new FormData(e.target));

        const data = await editUserInfo(formData, userId);

        console.log(data);
    });
};

export { submitForm };
