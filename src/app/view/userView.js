import { submitForm } from "../controller/user.js";
import { submitRecipe, printOptionsFood } from "../controller/createRecipe.js";

const userProfile$$ = document.getElementById("user-profile");

const printUserPage = async (user, token) => {
    const content = `
        <img src="${user.img}"/>
        <h2>${user.username}</h2>
        <div class="user__btn" id="user-btn">
          <button class="info__btn" id="info-btn">User info</button>
          <button class="edit__btn" id="edit-btn">Edit info</button>
        </div>
        <div class="user__info no-active" id="user-info">
            <h3>Name: ${user.name}</h3>
            <h3>Surname: ${user.surname}</h3>
            <h3>Age: ${user.age}</h3>
        </div>
        <div class="user__edit no-active" id="user-edit">
            <form action="action" method="POST" enctype="multipart/form-data" name="image" id="edit-form" class="form__user">
              <label name="username">Username</label>
              <input type="text" name="username">
              <label name="name">Name</label>
              <input type="text" name="name">
              <label name="surname">Surname</label>
              <input type="text" name="surname"> 
              <label name="age">Age</label>
              <input type="text" name="age">
              <label name="image">Image</label>
              <input type="file" name="image" id="image">
              <button type="submit" id="edit-info-btn" class="info__btn btn">Submit</button>
            </form>
        </div>
        <div class="user__recipes">
          <div class="user__recipes--nav">
            <h2>Recipes</h2>
            <button class="recipes__btn btn" id="recipes-btn">Add recipe</button>
          </div>
          <div class="recipe__add no-active" id="recipe-add">
            <form action="action" method="POST" enctype="multipart/form-data" name="recipe" id="recipe-form" class="form__recipe">
              <label name="title">Recipe title</label>
              <input type="text" name="title" required>
              <label name="food">Category food</label>
              <select id="food-options" name="food" required>
                ${await printOptionsFood()}
              </select>
              <label name="category">Category</label>
              <input type="text" name="category" placeholder="pizza, shushi, pasta, fish" required> 
              <label name="description">Description</label>
              <textarea name="description" placeholder="Description recipe" required></textarea>
              <label name="time">Time</label>
              <input type="number" name="time" min="5" max="120" required>
              <label name="people">People</label>
              <input type="number" name="people" min="1" max="12" required>
              <label name="difficulty">Difficulty</label>
              <select id="difficulty" name="difficulty" required>
                <option label="Easy">Easy</option>
                <option label="Medium">Medium</option>
                <option label="Hard">Hard</option>
              </select>
              <label name="image">Recipe Image</label>
              <input type="file" name="image" id="recipe-image" required>
              <div class="recipe__maininfo" id="recipe-ing">
                <div class="recipe__maininfo--header">
                  <h2>Ingredients</h2>
                  <button class="maininfo__btn" id="ing-btn">Add</button>
                </div>
                <h4 id="ing-comentary">O ingredients added</h4>
              </div>
              <div class="recipe__maininfo" id="recipe-steps">
                <div class="recipe__maininfo--header">
                  <h2>Steps</h2>
                  <button class="maininfo__btn" id="stp-btn">Add</button>
                </div>
                <h4 id="stp-comentary">O steps added</h4>
              </div>
              <button type="submit" id="recipe-des-btn" class="recipe-description__btn btn">Submit</button>
            </form>
        </div>
          <div class="user__recipes--list" id="user-recipes-list"></div>
        </div>
    `;

    userProfile$$.innerHTML = content;

    const infoBtn$$ = document.getElementById("info-btn");
    const editBtn$$ = document.getElementById("edit-btn");
    const editForm$$ = document.getElementById("edit-form");
    const imageInput$$ = document.getElementById("image");

    const editContainer$$ = document.getElementById("user-edit");
    const infoContainer$$ = document.getElementById("user-info");

    const addRecipeBtn$$ = document.getElementById("recipes-btn");
    const addRecipeCont$$ = document.getElementById("recipe-add");
    const formRecipe$$ = document.getElementById("recipe-form");
    const recipeImage$$ = document.getElementById("recipe-image");

    const addIngBnt$$ = document.getElementById("ing-btn");
    const ingContainer$$ = document.getElementById("recipe-ing");
    const addStpBtn$$ = document.getElementById("stp-btn");
    const stepsContainer$$ = document.getElementById("recipe-steps");

    const comentaryIng$$ = document.getElementById("ing-comentary");
    const comentaryStp$$ = document.getElementById("stp-comentary");

    infoBtn$$.addEventListener("click", () => {
        infoContainer$$.classList.toggle("no-active");
        editContainer$$.classList.add("no-active");
    });

    editBtn$$.addEventListener("click", () => {
        editContainer$$.classList.toggle("no-active");
        infoContainer$$.classList.add("no-active");
    });

    addRecipeBtn$$.addEventListener("click", () => {
        addRecipeCont$$.classList.toggle("no-active");
    });

    addIngBnt$$.addEventListener("click", () => {
        comentaryIng$$.classList.add("no-active");
        printIngredientForm(ingContainer$$);
    });

    addStpBtn$$.addEventListener("click", () => {
        comentaryStp$$.classList.add("no-active");
        printStepsForm(stepsContainer$$);
    });

    submitForm(editForm$$, user._id, token, imageInput$$, user);

    submitRecipe(formRecipe$$, recipeImage$$, token, user._id);
};

const printIngredientForm = (ingContainer$$) => {
    const ingContainer = document.createElement("div");

    let content = `
    <label name="ing-number">Quantity</label>
    <input type="number" id="ing-number" min="1" max="1500" required>
    <label name="ing-unit">Unit</label>
    <input type="text" id="ing-unit" placeholder="grams, liters, pounds ..." required>
    <label name="ing-name">Ingredient's name</label>
    <input type="text" id="ing-name" placeholder="rice, water, onion ..." required>
    `;

    ingContainer.innerHTML = content;

    ingContainer$$.appendChild(ingContainer);
};

const printStepsForm = (stepsContainer$$) => {
    const stpContainer = document.createElement("div");

    let content = `
    <label name="stp-order">Order step</label>
    <input type="number" id="stp-order" min="1" max="20" required>
    <label name="stp-description">Step description</label>
    <textarea id="stp-description" placeholder="Description step" required></textarea>
    `;

    stpContainer.innerHTML = content;

    stepsContainer$$.appendChild(stpContainer);
};

export { printUserPage };
