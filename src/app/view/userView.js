import { submitForm } from "../controller/user.js";

const userProfile$$ = document.getElementById("user-profile");

const printUserPage = (user, token) => {
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
          <div class="recipe__add no-active" id="user-edit">
            <form action="action" method="POST" enctype="multipart/form-data" name="recipe" id="recipe-form" class="form__recipe">
              <label name="title">Recipe title</label>
              <input type="text" name="title" required>
              <label name="food">Category food</label>
              <input type="text" name="food" placeholder="Italian, Mexican..." required>
              <label name="category">Category</label>
              <input type="text" name="category" placeholder="pizza, shushi, pasta, fish" required> 
              <label name="description">Description</label>
              <textarea name="description" placeholder="Description recipe" required></textarea>
              <label name="time">Time</label>
              <input type="number" name="time" min="5" max="120" required>
              <label name="people">People</label>
              <input type="number" name="people" min="1" max="12" required>
              <label for="difficulty">Difficulty</label>
              <select id="difficulty" required>
                <option label="Easy">Easy</option>
                <option label="Medium">Medium</option>
                <option label="Hard">Hard</option>
              </select>
              <button type="submit" id="edit-info-btn" class="info__btn btn">Submit</button>
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

    infoBtn$$.addEventListener("click", () => {
        const infoContainer$$ = document.getElementById("user-info");
        infoContainer$$.classList.toggle("no-active");
        editContainer$$.classList.add("no-active");
    });

    editBtn$$.addEventListener("click", () => {
        const editContainer$$ = document.getElementById("user-edit");
        editContainer$$.classList.toggle("no-active");
        infoContainer$$.classList.add("no-active");
    });

    submitForm(editForm$$, user._id, token, imageInput$$, user);
};

export { printUserPage };
