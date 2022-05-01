const printRecipeDetail = (recipe, owner) => {
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
    <article class="recipe__content">
    
    </article>
    `;

    recipeDetail$$.innerHTML = content;
};

export { printRecipeDetail };
