import {
    registerUser,
    loginUser,
    logoutUser,
    getUserDetail,
} from "../model/userModel.js";
import {
    setUserId,
    setUserToken,
    removeUser,
    storageToken,
    storageId,
} from "../server/user.js";

import { printUserPage } from "../view/userView.js";

const userNav$$ = document.getElementById("user-nav");
const navBtn$$ = document.getElementById("nav");
const upperNav$$ = document.getElementById("upper-nav");
const downNav$$ = document.getElementById("down-nav");

const loginBtn$$ = document.getElementById("login-btn");
const signupBtn$$ = document.getElementById("signup-btn");
const logoutBtn$$ = document.getElementById("logout-btn");
const userBtn$$ = document.getElementById("user-btn");

const loginContainer$$ = document.getElementById("user-login");
const signupContainer$$ = document.getElementById("user-signup");

const formLogin$$ = document.getElementById("form-login");
const formSignup$$ = document.getElementById("form-signup");

const homeBtn$$ = document.getElementById("home-btn");
const foodList$$ = document.getElementById("food-list");
const recipesList$$ = document.getElementById("recipes-list");
const recipesDetail$$ = document.getElementById("recipe-detail");

const userContainer$$ = document.getElementById("user-profile");
const userRecipes$$ = document.getElementById("user-profile__recipes");

const headerController = async () => {
    userNav$$.classList.add("no-active");
    loginContainer$$.classList.add("no-active");
    signupContainer$$.classList.add("no-active");
    logoutBtn$$.classList.add("no-active");
    userBtn$$.classList.add("no-active");

    navBtn$$.addEventListener("click", () => {
        if (storageToken[0]) {
            logoutBtn$$.classList.remove("no-active");
            loginBtn$$.classList.add("no-active");
            signupBtn$$.classList.add("no-active");
            userBtn$$.classList.remove("no-active");
        } else {
            logoutBtn$$.classList.add("no-active");
            loginBtn$$.classList.remove("no-active");
            signupBtn$$.classList.remove("no-active");
        }

        userNav$$.classList.toggle("no-active");
        upperNav$$.classList.toggle("upper_nav");
        downNav$$.classList.toggle("down_nav");
        loginContainer$$.classList.add("no-active");
        signupContainer$$.classList.add("no-active");
    });

    loginBtn$$.addEventListener("click", () => {
        loginContainer$$.classList.remove("no-active");
        signupContainer$$.classList.add("no-active");
        userNav$$.classList.toggle("no-active");
        upperNav$$.classList.toggle("upper_nav");
        downNav$$.classList.toggle("down_nav");
    });

    signupBtn$$.addEventListener("click", () => {
        signupContainer$$.classList.remove("no-active");
        loginContainer$$.classList.add("no-active");
        userNav$$.classList.toggle("no-active");
        upperNav$$.classList.toggle("upper_nav");
        downNav$$.classList.toggle("down_nav");
    });

    homeBtn$$.addEventListener("click", () => {
        foodList$$.classList.remove("no-active");
        recipesList$$.classList.toggle("no-active");
        recipesList$$.innerHTML = "";
        recipesDetail$$.classList.toggle("no-active");
        recipesDetail$$.innerHTML = "";
        userContainer$$.classList.add("no-active");
        userRecipes$$.classList.add("no-active");
    });

    formSignup$$.addEventListener("submit", async (e) => {
        e.preventDefault();

        const formData = Object.fromEntries(new FormData(e.target));

        let regex =
            /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        if (regex.test(formData.email)) {
            await registerUser(formData);
        } else {
            alert("The email or the password are not correct");
        }
    });

    formLogin$$.addEventListener("submit", async (e) => {
        e.preventDefault();

        const formData = Object.fromEntries(new FormData(e.target));

        let regex =
            /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        if (regex.test(formData.email)) {
            const data = await loginUser(formData);

            setUserToken(data.data.token);
            setUserId(data.data.userId);

            loginContainer$$.classList.add("no-active");
        } else {
            alert("The email or the password are not correct");
        }
    });

    logoutBtn$$.addEventListener("click", async (e) => {
        e.preventDefault();

        await logoutUser(storageId);

        removeUser();

        userNav$$.classList.add("no-active");
        loginContainer$$.classList.add("no-active");
        signupContainer$$.classList.add("no-active");
        logoutBtn$$.classList.add("no-active");
        upperNav$$.classList.toggle("upper_nav");
        downNav$$.classList.toggle("down_nav");
    });

    userBtn$$.addEventListener("click", async () => {
        foodList$$.classList.add("no-active");
        recipesList$$.classList.add("no-active");
        recipesList$$.innerHTML = "";
        recipesDetail$$.classList.add("no-active");
        recipesDetail$$.innerHTML = "";
        userNav$$.classList.add("no-active");
        upperNav$$.classList.remove("upper_nav");
        downNav$$.classList.remove("down_nav");
        userContainer$$.classList.remove("no-active");

        const userData = await getUserDetail(storageId);

        printUserPage(userData, storageToken);
    });
};

export { headerController };
