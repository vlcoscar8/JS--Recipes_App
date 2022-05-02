import { getRecipeContent } from "../controller/recipeDetail.js";

const printRecipeDetail = async (recipe, owner) => {
    const recipeDetail$$ = document.getElementById("recipe-detail");

    let content = `
          <div class="recipe__title">
            <img src="${recipe.img}" alt="${recipe.title}"/>
            <div class="recipe__info">
                <h2>${recipe.title}</h2>
                <h3>${owner.username}</h3>
              </div>
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
        let HTML;
        content.forEach((el) => {
            HTML += `
      <div class="recipe__content--extra">
          <h2>Step ${content.indexOf(el) + 1}</h2>
          <h3>${el.name}</h3>
          <div class="content__info">
            <h4>${el.number}</h4>
            <h5>${el.unit}</h5>
          </div>
      </div>
    `;
        });

        recipeContent$$.innerHTML = HTML;
    }
};

export { printRecipeDetail, printContent };
