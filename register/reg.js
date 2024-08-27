const sign_in_btn = document.querySelector("#sign_in_btn");
const sign_up_btn = document.querySelector("#sign_up_btn");
const container = document.querySelector(".container");

const signin2 = document.querySelector("#signin2");
const signup2 = document.querySelector("#signup2");

sign_up_btn.addEventListener("click", () => {
    container.classList.add("sign_up_mode");
});

sign_in_btn.addEventListener("click", () => {
    container.classList.remove("sign_up_mode");
});

signup2.addEventListener("click", () => {
    container.classList.add("sign_up_mode2");
});

signin2.addEventListener("click", () => {
    container.classList.remove("sign_up_mode2");
});