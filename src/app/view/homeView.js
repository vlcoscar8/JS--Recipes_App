const printHome = (listFood) => {
    const foodSection$$ = document.getElementById("food-list");
    foodSection$$.classList.remove("no-active");
    let content = "";

    listFood.forEach((food) => {
        const nameId = food.name.split(" ");
        content += `
        <div class="food__container" id="${nameId[0].toLowerCase()}-container">
          <img src="${food.img}" alt="${food.name}" class="food__image"/>
          <div class="title__container">
            <h3>${food.name}</h3>
            <div class="recipes_counter">
              <i class="fa-solid fa-utensils recipes"></i>
              <h4>${food.recipes.length}</h4>
            </div>
          </div>
        </div>
      `;
    });

    if (foodSection$$.innerHTML === "") {
        foodSection$$.innerHTML = content;
    } else {
        foodSection$$.insertAdjacentHTML("beforeend", content);
    }
};

export { printHome };
