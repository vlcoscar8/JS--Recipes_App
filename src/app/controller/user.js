import { editUserInfo } from "../model/userModel.js";

const submitForm = async (editForm$$, userId, token, imageInput$$) => {
    let image = "";
    imageInput$$.addEventListener("change", async (e) => {
        image = e.target.files[0];
    });

    editForm$$.addEventListener("submit", async (e) => {
        e.preventDefault();

        const infoData = Object.fromEntries(new FormData(e.target));

        let formData = new FormData();
        formData.append("name", infoData.name);
        formData.append("surname", infoData.surname);
        formData.append("age", infoData.age);
        formData.append("img", image);

        const data = await editUserInfo(formData, userId, token);
    });
};

export { submitForm };
