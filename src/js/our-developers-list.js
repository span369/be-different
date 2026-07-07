console.log(
    '%c Рендеримо список розробників в секції "Наша команда" ',
    'color: white; background-color: #D33F49',
);

//todo: +++++++++++++++++++++++++ Розмітка з Handlebars +++++++++++++++++++++++++
//! 6️⃣-1️⃣ Створюємо та використовуємо шаблон 
import Handlebars from "handlebars";
import developerTemplate from "../templates/developer.hbs?raw";
//? Використання Intersection Observer для завантаження зображень в секції "Наша команда
// import developerTemplate from "../templates/developer-intersection-observer.hbs?raw";

//! Знаходимо елемент в якому рендерим список розробників
const developersList = document.querySelector(".our-developers-list");

//! Створюємо рядок запиту
const BASEURL = "http://localhost:3000/"
const EndPoint = "developers-team"
const url =`${BASEURL}${EndPoint}`
console.log("url:", url); //!

// ===============================================================================================
//! Працюємо з json-server:
function getDevelopers() {
    fetchDevelopers()
        .then((developers) => renderPosts(developers))
        .catch((error) => console.log(error));
};

function fetchDevelopers() {
    // return fetch("http://localhost:3000/developers-team") //todo: var.1 
    return fetch(url) //todo: var.2 
        .then(response => response.json());
};

function renderPosts(developers) {
    const template = Handlebars.compile(developerTemplate);
    console.log("template:", template); //!

    //! 6️⃣-2️⃣Генеруємо HTML-розмітку для списку всіх розробників
    const markup = developers.map(item => template(item)).join("");
    console.log("6️⃣markup:", markup); //!

    //! 7️⃣Додаємо у DOM
    developersList.innerHTML = markup;
    console.log("----------------------------------------------------------------------------------------------------------");
};

getDevelopers();
