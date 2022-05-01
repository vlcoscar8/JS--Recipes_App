const printRecipeDetail = (recipe, owner) => {
    const recipeDetail$$ = document.getElementById("recipe-detail");

    let content = `
    <div class="recipe__title">
      <img src="${recipe.img}" alt="${recipe.title}"/>
      <div class="recipe__info">
        <div class="recipe__title">
          <h2>${recipe.title}</h2>
          <h3>${owner.username}</h3>
          <div class="recipe__tags">
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
        </div>
      </div>
    </div>
    <article class="recipe__content">
      <div class="recipe__category">
        <h4>${recipe.food}</h4>
        <i class="fa-solid fa-angles-right"></i>
        <h4>${recipe.category}</h4>
      </div>
      <div class="recipe__description">
        <h3>Description:</h3>
        <p>${recipe.description}</p>    
      </div>
      <div class="recipe__options">
        <h3>Ingredients</h3>
        <i class="fa-solid fa-caret-right arrow"></i>
      </div>
      <div class="recipe__options">
        <h3>Steps</h3>
        <i class="fa-solid fa-caret-right arrow"></i>
      </div>
    </article> 
    `;

    recipeDetail$$.innerHTML = content;
};

export { printRecipeDetail };
