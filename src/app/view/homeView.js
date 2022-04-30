import { foodFamily } from "../model/homeModel.js";

const foodSection$$ = document.getElementById("food-list");

const printHome = async () => {
    const foodList = await foodFamily();

    let content = "";

    foodList.forEach((food) => {
        content += `
        <div class="food__container">
          <img src="${food.img}" alt="${food.name}" class="food__image"/>
          <div class="title__container">
            <h3>${food.name}</h3>
          </div>
        </div>
      `;
    });

    foodSection$$.innerHTML = content;
};

export { printHome };
