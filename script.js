const openMenuBtn = document.querySelector("#open-menu-button");
const closeMenuBtn = document.querySelector("#close-menu-button");
const header = document.querySelector("header");

// openMenuBtn.onclick = function () {
//     alert("button was clicked");
// };

openMenuBtn.addEventListener("click", () => {
    header.classList.toggle("show-mobile-menu")
});

closeMenuBtn.addEventListener("click", () => openMenuBtn.click())