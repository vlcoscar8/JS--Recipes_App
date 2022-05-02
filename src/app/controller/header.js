const userNav$$ = document.getElementById("user-nav");
const navBtn$$ = document.getElementById("nav");
const upperNav$$ = document.getElementById("upper-nav");
const downNav$$ = document.getElementById("down-nav");

const loginBtn$$ = document.getElementById("login-btn");
const signupBtn$$ = document.getElementById("signup-btn");
const loginContainer$$ = document.getElementById("user-login");
const signupContainer$$ = document.getElementById("user-signup");

const headerController = () => {
    userNav$$.classList.add("no-active");
    loginContainer$$.classList.add("no-active");
    signupContainer$$.classList.add("no-active");

    navBtn$$.addEventListener("click", () => {
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
};

export { headerController };
