const userNav$$ = document.getElementById("user-nav");
const navBtn$$ = document.getElementById("nav");
const upperNav$$ = document.getElementById("upper-nav");
const downNav$$ = document.getElementById("down-nav");

const headerController = () => {
    userNav$$.classList.add("no-active");

    navBtn$$.addEventListener("click", () => {
        userNav$$.classList.toggle("no-active");
        upperNav$$.classList.toggle("upper_nav");
        downNav$$.classList.toggle("down_nav");
    });
};

export { headerController };
