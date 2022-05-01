import { getDetailRecipe } from "../controller/recipesList.js";

const printRecipe = async (recipe, owner) => {
    const recipesSection$$ = document.getElementById("recipes-list");

    let content;

    if (recipe === "") {
        content = "There is not any recipe yet";
    } else {
        content = `
      <div class="recipe__container" id="recipe-container">
        <div class="recipe__container--title">
          <img src="${owner.img}"alt="${owner.username}" class="user__image"/>
          <div class="recipe__title">
            <h2>${recipe.title}</h2>
            <h3>${owner.username}</h3>
          </div>
        </div>
        <img src="${recipe.img}" alt="${recipe.title}" class="recipe__image"/>
        <div class="info__container">
          <div class="recipe__info">
            <div class="recipe__tag">
              <i class="fa-solid fa-person tag"></i>
              <h4>${recipe.people}</h4>
            </div>
            <div class="recipe__tag">
              <i class="fa-solid fa-fire-flame-simple tag"></i>
              <h4>${recipe.difficulty}</h4>
            </div>
            <div class="recipe__tag">
              <i class="fa-solid fa-stopwatch tag"></i>
              <h4>${recipe.time}'</h4>
            </div>
          </div>
          <button class="recipe__btn btn" id="recipe-detail-btn" data-recipeId="${recipe._id}">See details</button>
          <button class="delete-recipe__btn btn" id="recipe-delete-btn" data-recipeId="${recipe._id}">Delete</button>
        </div>
      </div>
    `;
    }

    recipesSection$$.insertAdjacentHTML("beforeend", content);

    const recipeBtns$$ = document.querySelectorAll("#recipe-detail-btn");
    getDetailRecipe(recipeBtns$$);
};

export { printRecipe };
