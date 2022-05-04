import { editUserInfo } from "../model/userModel.js";
import { printUserPage } from "../view/userView.js";

const submitForm = async (editForm$$, userId, token, imageInput$$, user) => {
    let image = "";
    imageInput$$.addEventListener("change", async (e) => {
        image = e.target.files[0];
    });

    editForm$$.addEventListener("submit", async (e) => {
        e.preventDefault();

        const infoData = Object.fromEntries(new FormData(e.target));

        let formData = new FormData();

        if (infoData.name != "") {
            formData.append("name", infoData.name);
        }
        if (infoData.surname != "") {
            formData.append("surname", infoData.surname);
        }
        if (infoData.age != "") {
            formData.append("age", infoData.age);
        }
        if (image != "") {
            formData.append("img", image);
        }

        const data = await editUserInfo(formData, userId, token);

        printUserPage(data, token);
    });
};

export { submitForm };
