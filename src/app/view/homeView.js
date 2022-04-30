const printHome = (listFood) => {
    const foodSection$$ = document.getElementById("food-list");
    let content = "";

    listFood.forEach((food) => {
        content += `
        <div class="food__container">
          <img src="${food.img}" alt="${food.name}" class="food__image"/>
          <div class="title__container">
            <h3>${food.name}</h3>
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
