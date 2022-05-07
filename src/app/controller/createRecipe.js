import { createNewRecipe, pushRecipeIntoFood } from "../model/recipesModel.js";
import { pushUserIntoRecipe, pushRecipeIntoUser } from "../model/userModel.js";
import { createIngredient } from "../model/ingredientModel.js";
import { createStep } from "../model/stepModel.js";
import { foodFamily } from "../model/homeModel.js";

const submitRecipe = async (formRecipe$$, recipeImage$$, token, userId) => {
    let image = "";

    recipeImage$$.addEventListener("change", async (e) => {
        image = e.target.files[0];
    });

    formRecipe$$.addEventListener("submit", async (e) => {
        e.preventDefault();

        let ingredientsObj = [];
        let stepsObj = [];

        const numberIng = document.querySelectorAll("#ing-number");
        const unitIng = document.querySelectorAll("#ing-unit");
        const nameIng = document.querySelectorAll("#ing-name");

        for (let i = 0; i < numberIng.length; i++) {
            let obj = {
                number: parseInt(numberIng[i].value),
                unit: unitIng[i].value,
                name: nameIng[i].value,
            };

            ingredientsObj.push(obj);
        }

        const orderStp = document.querySelectorAll("#stp-order");
        const descriptionStp = document.querySelectorAll("#stp-description");

        for (let i = 0; i < numberIng.length; i++) {
            let obj = {
                order: parseInt(orderStp[i].value),
                description: descriptionStp[i].value,
            };

            stepsObj.push(obj);
        }

        const infoData = Object.fromEntries(new FormData(e.target));

        let formData = new FormData();

        formData.append("title", infoData.title);
        formData.append("food", infoData.food.toLowerCase());
        formData.append("category", infoData.category);
        formData.append("description", infoData.description);
        formData.append("time", infoData.time);
        formData.append("people", infoData.people);
        formData.append("difficulty", infoData.difficulty);
        formData.append("img", image);

        const newRecipeData = await createNewRecipe(formData, token);

        await pushUserIntoRecipe(newRecipeData._id, userId, token);
        await pushRecipeIntoUser(newRecipeData._id, userId, token);

        ingredientsObj.forEach(
            async (ingredient) =>
                await createIngredient(newRecipeData._id, ingredient, token)
        );
        stepsObj.forEach(
            async (step) => await createStep(newRecipeData._id, step, token)
        );

        let start = 0;
        let limit = 10;
        const foodList = await foodFamily(start, limit);

        const foodSelected = foodList.filter((food) => {
            return food.name.toLowerCase().split(" ")[0] === newRecipeData.food;
        })[0];

        await pushRecipeIntoFood(newRecipeData._id, foodSelected._id, token);

        alert("Recipe create");

        const foodList$$ = document.getElementById("food-list");
        const userContainer$$ = document.getElementById("user-profile");
        foodList$$.classList.remove("no-active");
        userContainer$$.classList.add("no-active");
    });
};

const printOptionsFood = async () => {
    let start = 0;
    let limit = 10;
    const foodList = await foodFamily(start, limit);

    let content = "";

    foodList.forEach((food) => {
        content += `
            <option label="${food.name.split(" ")[0]}">${
            food.name.split(" ")[0]
        }</option>
        `;
    });

    return content;
};

export { submitRecipe, printOptionsFood };
