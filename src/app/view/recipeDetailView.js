import { getRecipeContent } from "../controller/recipeDetail.js";
import { getUserDetail } from "../model/userModel.js";
import { recipeDetail } from "../model/recipesModel.js";

const printRecipeDetail = async (recipe, owner) => {
    const recipeDetail$$ = document.getElementById("recipe-detail");
    recipeDetail$$.classList.remove("no-active");

    let content = `
          <div class="recipe__title">
            <img src="${recipe.img}" alt="${recipe.title}"/>
            <div class="recipe__info">
              <h2>${recipe.title}</h2>
              <h3 id="user__profile">${owner.username}</h3>
            </div>
          </div>
          </div>
          <article class="recipe__options">
            <div class="recipe__option choosen">
              <h3>Description</h3>    
            </div>
            <div class="recipe__option">
              <h3>Ingredients</h3>
            </div>
            <div class="recipe__option">
              <h3>Steps</h3>
            </div>
          </article> 
          <article class="recipe__tags">
            <div class="recipe__tag">
              <i class="fa-solid fa-person tag"></i>
              <h4>${recipe.people}</h4>
              <h5>People</h5>
            </div>
            <div class="recipe__tag">
              <i class="fa-solid fa-fire-flame-simple tag"></i>
              <h4>${recipe.difficulty}</h4>
              <h5>Difficulty</h5>
            </div>
            <div class="recipe__tag">
              <i class="fa-solid fa-stopwatch tag"></i>
              <h4>${recipe.time}'</h4>
              <h5>Time spent</h5>
            </div>
          </article>
          <article class="recipe__content" id="recipe-content">
          </article>
    `;

    recipeDetail$$.innerHTML = content;

    const recipeOptions$$ = document.querySelectorAll(".recipe__option");
    const recipeContent$$ = document.getElementById("recipe-content");

    const userSurname$$ = document.getElementById("user__profile");
    const userProfile$$ = document.getElementById("user-profile");

    userSurname$$.addEventListener("click", () => {
        recipeDetail$$.classList.add("no-active");
        userProfile$$.classList.add("no-active");
        printUserRecipes(owner._id);
    });

    await getRecipeContent(recipe._id, recipeOptions$$, recipeContent$$);
};

const printContent = (content, recipeContent$$) => {
    if (typeof content === "string") {
        const HTML = `
          <div class="recipe__content--description">
            <p>${content}</p>
          </div>
        `;
        recipeContent$$.innerHTML = HTML;
    }

    if (typeof content === "object") {
        let ingredientsHtml = `
            <div class="recipe__ingredients">
              <h3>Name</h3>
              <h3>Quantity</h3>
              <h3>Unit</h3>
            </div>
          `;

        let stepsHtml = "";
        content.forEach((el) => {
            if (Object.keys(el).length > 4) {
                ingredientsHtml += `
            <div class="recipe__ingredients--info">
                <h3>${el.name}</h3>
                <h4>${el.number}</h4>
                <h5>${el.unit}</h5>
            </div>
          `;
            } else {
                stepsHtml += `
            <div class="recipe__step">
                <h2>Step ${content.indexOf(el) + 1}</h2>
                <div class="recipe__step--content">
                  <p>${el.description}</p>
                </div>
            </div>
          `;
            }
        });

        if (stepsHtml === "") {
            recipeContent$$.innerHTML = ingredientsHtml;
        } else {
            recipeContent$$.innerHTML = stepsHtml;
        }
    }
};

const printUserRecipes = async (userId) => {
    const userData = await getUserDetail(userId);
    const recipes = userData.recipes;
    const userRecipes$$ = document.getElementById("user-profile__recipes");
    userRecipes$$.classList.remove("no-active");

    userRecipes$$.innerHTML = `
    <div class="user__info">
      <img src="${userData.img}"/>
      <h2>${userData.username}</h2>
    </div>
    <div class="user-recipes__container" id="recipes-container">
    </div>
  `;

    const recipesContainer = document.getElementById("recipes-container");

    recipes.forEach(async (recipe) => {
        const recipeDetails = await recipeDetail(recipe);
        let content = `
        <div class="recipe__container">
          <img src="${recipeDetails.img}"/>
          <h2>${recipeDetails.title}</h2>
        </div>
      `;
        recipesContainer.insertAdjacentHTML("beforeend", content);
    });
};

export { printRecipeDetail, printContent, printUserRecipes };
