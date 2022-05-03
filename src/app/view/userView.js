import { submitForm } from "../controller/user.js";

const userProfile$$ = document.getElementById("user-profile");

const printUserPage = (user) => {
    const content = `
      <div class="profile__container">
        <div>
          <img src="${user.img}"/>
        </div>
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
        <div class="user__info no-active" id="user-edit">
            <form action="action" method="POST" enctype="multipart/form-data" name="image" id="edit-form">
              <label name="name">Name</label>
              <input type="text" name="name">
              <label name="surname">Surname</label>
              <input type="text" name="surname"> 
              <label name="age">Age</label>
              <input type="text" name="age">
              <label name="image">Image</label>
              <input type="file" name="image">
              <button type="submit" id="edit-info-btn" class="info__btn">Submit</button>
            </form>
        </div>
        <div class="user__recipes">
          <div class="user__recipes--nav">
            <h2>Recipes</h2>
            <button class="recipes__btn" id="recipes-btn">Add recipe</button>
          </div>
          <div class="user__recipes--list" id="user-recipes-list"></div>
        </div>
      </div>
    `;
    userProfile$$.innerHTML = content;

    const infoBtn$$ = document.getElementById("info-btn");
    const editBtn$$ = document.getElementById("edit-btn");
    const editForm$$ = document.getElementById("edit-form");

    infoBtn$$.addEventListener("click", () => {
        const infoContainer$$ = document.getElementById("user-info");
        infoContainer$$.classList.toggle("no-active");
    });

    editBtn$$.addEventListener("click", () => {
        const editContainer$$ = document.getElementById("user-edit");
        editContainer$$.classList.toggle("no-active");
    });

    submitForm(editForm$$, user._id);
};

export { printUserPage };
