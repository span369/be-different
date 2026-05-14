console.log(
    '%c Додаємо/Редагуємо/Видаляємо розробників в секції "Наша команда" ',
    'color: white; background-color: #D33F49',
);

//todo: OLD
// Зчитуємо дані з Локального сховища (localStorage) та Парсимо (конвертуємо) їх в Масив Об'єктів: dataDevelopersList
// const dataDevelopersList = JSON.parse(localStorage.getItem("dataDevelopers")); //todo: var. 2
// console.log("dataDevelopersList (після парсингу з localStorage):", dataDevelopersList); //!

//*: NEW
//! Зчитуємо дані з json-server та зберігаємо їх в Масив Об'єктів: dataDevelopersList
let dataDevelopersList = null;
function fetchDevelopers() {
    fetch("http://localhost:3002/developers") //todo: var.1 
        // return fetch(url) //todo: var.2 
        .then(response => response.json())
        // .then(data => console.log("data:", data))
        .then(data => dataDevelopersList = data);
};
fetchDevelopers();



//! Знаходимо необхідні елементи
const addDeveloperButton = document.querySelector(".our-developers__add-button");
const developersList = document.querySelector(".our-developers-list");
//todo: Модальне вікно та Форма: form-add-edit-developer
const modalAddEditDeveloper = document.querySelector("[data-modal-add-edit-developer]");
const formAddEditDeveloper = document.querySelector(".form-add-edit-developer");
const formTitle = document.querySelector(".form-add-edit-developer__title");
const imageDeveloper = document.querySelector(".form-add-edit-developer__image-developer");
//todo: Кнопки модальних вікон: form-add-edit-developer
const btnAddEditDeveloper = document.querySelector(".form-add-edit-developer__btn-add-edit-developer");
const btnDeleteDeveloper = document.querySelector("[data-btn-delete-developer]");
const btnCancelDeveloper = document.querySelector("[data-btn-cancel-developer]");
//todo: Модальне вікно ПІДТВЕРДЖЕННЯ або СКАСУВАННЯ ВИДАЛЕННЯ картки розробника: modal-confirm-for-delete
const modalConfirmForRemoval = document.querySelector("[data-modal-confirm-for-removal]");
const developerNameDeleted = document.querySelector('.modal-confirm-for-removal__developer-name-deleted');
//todo: Кнопки модального вікна: modal-confirm-for-delete
const btnDeleteModalConfirmForRemoval = document.querySelector("[data-modal-confirm-for-removal-delete]");
const btnCancelModalConfirmForRemoval = document.querySelector("[data-modal-confirm-for-removal-cancel]");

//! Початкові дані 
let editableCard = {}; //todo: Картка розробника, що редагується
let index = null; //todo: index картки в масиві для РЕДАГУВАННЯ/ВИДАЛЕННЯ


//! ++++++++++++=+++++++++++ Додаємо слухачів до знайдених елементів ++++++++++++++=+++++++++
addDeveloperButton.addEventListener("click", addDeveloper); //todo: кнопка <Додати розробника>
developersList.addEventListener("click", editDeveloper); //todo: РЕДАГУЭ КАРТКУ РОЗРОБНИКА та може Видалити її

formAddEditDeveloper.addEventListener("submit", submitModalAddEditDeveloper); //todo: ПІДТВЕРДЖЕННЯ форми <Додати> або <Редагувати>

btnDeleteDeveloper.addEventListener("click", deleteDeveloper); //todo: кнопка <Видалити>
btnCancelDeveloper.addEventListener("click", closeModalAddEditDeveloper); //todo: кнопка <Скасувати>
//! =========================================================================================


//! 🅿️1️⃣ Функція ДОДАЄ нову картку розробника
function addDeveloper() {
    console.log("ДОДАЄМО нового розробника");
    
    //todo: Зміна контенту заголовка модального вікна
    formTitle.textContent = "Додати розробника";

    //todo: ОЧИЩАЄМО дані зображення розробника
    imageDeveloper.src = "";
    imageDeveloper.alt = "";

    //todo: Зміна контенту кнопки "submit"
    btnAddEditDeveloper.textContent = "Додати";

    //todo: Приховуємо непотрібні елементи
    btnDeleteDeveloper.style.display = "none";

    ///todo: ВІДКРИВАЄМО модальне вікно з формою для ДОДАВАННЯ/РЕДАГУВАННЯ/+ВИДАЛЕННЯ
    toggleModalAddEditDeveloper();
};


//! 🅿️2️⃣ Функція РЕДАГУЄ картку розробника
function editDeveloper(event) {
    if (event.target.nodeName !== "IMG") {
        return;
    };
    console.log("РЕДАГУЄМО/+ВИДАЛЯЄМО розробників");
    // console.log("event.target", event.target);
    // console.log("event.currentTarget:", event.currentTarget);
    // console.log("event.target.nodeName", event.target.nodeName);

    //todo: Зміна контенту заголовка модального вікна
    formTitle.textContent = "Редагувати дані розробника"

    //todo: Зміна контенту кнопки "submit"
    btnAddEditDeveloper.textContent = "Редагувати";

    //todo: Повертаємо елементи:
    btnDeleteDeveloper.style.display = "block";

    //todo: Пошук КАРТКИ РОЗРОБНИКА, що редагується та її ИНДЕКСА в dataDevelopersList
    console.log("event.target.alt", event.target.alt); //!
    //todo: OLD
    // for (let i = 0; i < dataDevelopersList.length; i++) {
    //     if (dataDevelopersList[i].nameId === event.target.alt) {
    //         editableCard = dataDevelopersList[i];
    //         console.log("editableCard:", editableCard);  //todo: Картка розробника, що редагується
    //         index = i;
    //         console.log("index:", index); //!
    //     };
    // };

    //* NEW
    //? Пошук посту, що редагується Масив Об'єктів: dataDevelopersList після fetch("http://localhost:3002/developers")
    console.log("dataDevelopersList --> РЕДАГУЄМО/+ВИДАЛЯЄМО розробників:", dataDevelopersList);  //!
    for (let i = 0; i < dataDevelopersList.length; i++) {
        if (dataDevelopersList[i].nameId === event.target.alt) {
            editableCard = dataDevelopersList[i];
            console.log("editableCard:", editableCard);  //todo: Картка розробника, що редагується
            index = editableCard.id;
            console.log("index:", index); //!
        };
    };

    //todo: Підставляємо ПОПЕРЕДНІ дані картки розробника editableCard у форму для РЕДАГУВАННЯ
    formAddEditDeveloper.developerName.value = editableCard.name;
    formAddEditDeveloper.developerPosition.value = editableCard.position;
    imageDeveloper.src = editableCard.images.default;
    imageDeveloper.alt = editableCard.nameId;

    console.log("dataDevelopersList (клік на зображенні):", dataDevelopersList); //!

    //todo: ВІДКРИВАЄМО модальне вікно з формою для РЕДАГУВАННЯ/ВИДАЛЕННЯ
    toggleModalAddEditDeveloper();
};


//! 🅿️3️⃣ Функція ВИДАЛЯЄ картку розробника - подія на кнопку <Видалити>
function deleteDeveloper() {
    console.log("Режим ВИДАЛЕННЯ");

    //! ВІДКРИВАЄМО модальне вікно для ПІДТВЕРДЖЕННЯ або СКАСУВАННЯ ВИДАЛЕННЯ картки розробника
    toggleModalConfirmForRemoval();

    //! Додємо слухачів на кнопки [Так](delete) та [Ні](cancel!):
    btnDeleteModalConfirmForRemoval.addEventListener("click", confirmDeletion);
    btnCancelModalConfirmForRemoval.addEventListener("click", confirmCancelDeletion);

    //! Пошук імені розробника
    console.log("index:", index); //!
    // console.log("dataDevelopersList[index].name:", dataDevelopersList[index].name); //todo: OLD
    // developerNameDeleted.textContent = dataDevelopersList[index].name; //todo: OLD
    //* NEW
    const nameToBeDeleted = (dataDevelopersList.filter((developer) => developer.id === index))[0].name
    console.log("nameToBeDeleted:", nameToBeDeleted); //!
    developerNameDeleted.textContent = nameToBeDeleted; 

    //! Функція ВИДАЛЯЄ картку розробника
    function confirmDeletion(){
        //todo: ЗАКРИВАЄМО модальне вікно для ПІДТВЕРДЖЕННЯ або СКАСУВАННЯ ВИДАЛЕННЯ картки розробника
        toggleModalConfirmForRemoval();

        //todo: Видаляємо слухачів з кнопок [Так](delete) та [Ні](cancel!):
        btnDeleteModalConfirmForRemoval.removeEventListener("click", confirmDeletion);
        btnCancelModalConfirmForRemoval.removeEventListener("click", confirmCancelDeletion);

        //todo: ВИДАЛЯЄМО картку розробника
        //todo: OLD
        // dataDevelopersList.splice(index, 1);
        // console.log("dataDevelopersList (після ВИДАЛЕННЯ):", dataDevelopersList); //!
        //*: NEW
        const options = {
            method: "DELETE", //! операція DELETE, видалення
        };
        fetch(`http://localhost:3002/developers/${index}`, options)
            .then(response => console.log("Відповідь сервера на DELETE:", response))
            .catch(error => console.log(error))
            .finally(() => console.log("операція DELETE завершена"));


        //todo: ПЕРЕЗАПИСУЄМО змінений dataDevelopersList в Локальне сховище (localStorage)
        //todo: OLD
        // localStorage.setItem("dataDevelopers", JSON.stringify(dataDevelopersList));

        //todo: ОЧИЩАЄМО поля форми для РЕДАГУВАННЯ/ВИДАЛЕННЯ
        formAddEditDeveloper.reset();

        //todo: ЗАКРИВАЄМО модальне вікно з формою для РЕДАГУВАННЯ/ВИДАЛЕННЯ
        toggleModalAddEditDeveloper();

        //todo: Перезавантаження сторінки:
        window.location.href = window.location.href; //todo: скидає всю програму - начебто користувач натиснув F5
        // window.location.reload(); //todo: перезавантажує сторінку за допомогою кешу браузера.
        // window.location.reload(true); //todo: жорстке перезавантаження з обходом кешу (не підтримується у всіх браузерах.)
    };

    //! Функція СКАСОВУЄ видалення картки розробника
    function confirmCancelDeletion() {
        //todo: ЗАКРИВАЄМО модальне вікно для ПІДТВЕРДЖЕННЯ або СКАСУВАННЯ ВИДАЛЕННЯ картки розробника
        toggleModalConfirmForRemoval();

        //todo: Видаляємо слухачів з кнопок [Так](delete) та [Ні](cancel!):
        btnDeleteModalConfirmForRemoval.removeEventListener("click", confirmDeletion);
        btnCancelModalConfirmForRemoval.removeEventListener("click", confirmCancelDeletion);
    };
};


//! Ⓜ️1️⃣ Функція ВІДКРИТТЯ/ЗАКРИТТЯ модального вікна з формою для ДОДАВАННЯ або РЕДАГУВАННЯ(+ВИДАЛЕННЯ)
function toggleModalAddEditDeveloper() {
    console.log("ВІДКРИТТЯ/ЗАКРИТТЯ модального вікна з формою для ДОДАВАННЯ/РЕДАГУВАННЯ/ВИДАЛЕННЯ");
    modalAddEditDeveloper.classList.toggle("is-hidden");
    document.body.classList.toggle("no-scroll");
};


//! Ⓜ️2️⃣ Функція підтвердження форми: реагує на кнопку <ДОДАТИ> або <Редагувати> - змінює/додає картку розробника в формі для ДОДАВАННЯ/РЕДАГУВАННЯ/+ВИДАЛЕННЯ
function submitModalAddEditDeveloper(event) {
    // event.preventDefault(); //todo: ❗️❗️❗️ Блокуємо перезавантаження сторінки

    console.log("Створюємо новий об'єкт КАРТКИ РОЗРОБНИКА");
    //todo: var.1 Створюємо новий об'єкт КАРТКИ РОЗРОБНИКА
    // const createNewDeveloper = {
    //     developerName: formAddEditDeveloper.developerName.value.trim(),
    //     developerPosition: formAddEditDeveloper.developerPosition.value.trim(),
    // };

    //todo: var.2 Створюємо новий об'єкт КАРТКИ РОЗРОБНИКА
    const formData = new FormData(formAddEditDeveloper);
    const newDeveloperData = Object.fromEntries(formData.entries());

    console.log("newDeveloperData:", newDeveloperData); //!

    //todo: Пошук индекса картки розробника, що РЕДАГУЄТЬСЯ/ВИДАЛЯЄТЬСЯ (НЕ ТУТ)
    // for (let i = 0; i < dataDevelopersList.length; i++) {
    //     if (editableCard.nameId === dataDevelopersList[i].nameId) {
    //         // console.log("editableCard_ДО:", dataDevelopersList[i]);  //todo: Картка розробника, що редагується - ДО
    //         index = i;
    //         // console.log("index:", index); //!
    //     };
    // };


    //todo: ДОДАВАННЯ
    if (btnAddEditDeveloper.textContent === "Додати") {
        console.log("Режим ДОДАВАННЯ");

        //todo: Створюємо новий об'єкт КАРТКИ РОЗРОБНИКА
        //todo: OLD
        const newDeveloperCard = {
            name: newDeveloperData.developerName,
            nameId: newDeveloperData.developerName,
            position: newDeveloperData.developerPosition,
            images: {
                desktop: [
                    new URL("../images/sample-desktop-1x.jpg", import.meta.url).href + " 1x,",
                    new URL("../images/sample-desktop-2x.jpg", import.meta.url).href + " 2x,",
                    new URL("../images/sample-desktop-3x.jpg", import.meta.url).href + " 3x"
                ],
                tablet: [
                    new URL("../images/sample-tablet-1x.jpg", import.meta.url).href + " 1x,",
                    new URL("../images/sample-tablet-2x.jpg", import.meta.url).href + " 2x,",
                    new URL("../images/sample-tablet-3x.jpg", import.meta.url).href + " 3x"
                ],
                mobile: [
                    new URL("../images/sample-mobile-1x.jpg", import.meta.url).href + " 1x,",
                    new URL("../images/sample-mobile-2x.jpg", import.meta.url).href + " 2x,",
                    new URL("../images/sample-mobile-3x.jpg", import.meta.url).href + " 3x"
                ],
                default: new URL("../images/sample-mobile-1x.jpg", import.meta.url).href
            },
            icons: [
                new URL("../images/symboldefs.svg#instagram", import.meta.url).href,
                new URL("../images/symboldefs.svg#twitter", import.meta.url).href,
                new URL("../images/symboldefs.svg#facebook", import.meta.url).href,
                new URL("../images/symboldefs.svg#linkedin", import.meta.url).href
            ]
        };

        //todo: Додаємо новий об'єкт КАРТКИ РОЗРОБНИКА в Масив Об'єктів: dataDevelopersList
        // dataDevelopersList.push(newDeveloperCard); //todo: OLD
        // console.log("dataDevelopersList (після ДОДАВАННЯ нової КАРТКИ РОЗРОБНИКА):", dataDevelopersList); //!
        //! Meтод POST. Операція CREATE. Створення
        const requestBody = {
            name: newDeveloperData.developerName,
            nameId: newDeveloperData.developerName,
            position: newDeveloperData.developerPosition,
            images: {
                desktop: [
                    "/be-different/images/sample-desktop-1x.jpg" + " 1x,",
                    "/be-different/images/sample-desktop-2x.jpg" + " 2x,",
                    "/be-different/images/sample-desktop-3x.jpg" + " 3x"
                ],
                tablet: [
                    "/be-different/images/sample-tablet-1x.jpg" + " 1x,",
                    "/be-different/images/sample-tablet-2x.jpg" + " 2x,",
                    "/be-different/images/sample-tablet-3x.jpg" + " 3x"
                ],
                mobile: [
                    "/be-different/images/sample-mobile-1x.jpg" + " 1x,",
                    "/be-different/images/sample-mobile-2x.jpg" + " 2x,",
                    "/be-different/images/sample-mobile-3x.jpg" + " 3x"
                ],
                default: "/be-different/images/sample-mobile-1x.jpg"
            },
            icons: [
                "/be-different/images/symboldefs.svg#instagram",
                "/be-different/images/symboldefs.svg#twitter",
                "/be-different/images/symboldefs.svg#facebook",
                "/be-different/images/symboldefs.svg#linkedin"
            ]
        };
        const options = {
            method: "POST", //! операція CREATE, створення
            body: JSON.stringify(requestBody), //! конвертація даних у JSON-формат
            headers: {
                "Content-Type": "application/json; charset=UTF-8",
            },
        };
        fetch("http://localhost:3002/developers", options)
            .then(response => response.json())
            .then(post => console.log("Відповідь сервера на POST:", post))
            .catch(error => console.log(error))
            .finally(() => console.log("✏️Meтод POST. Операція CREATE. Створення - завершено"));
    };

    //todo: РЕДАГУВАННЯ
    if (btnAddEditDeveloper.textContent === "Редагувати") {
        console.log("Режим РЕДАГУВАННЯ");

        //todo: OLD
        // //todo: Заміна властивостей
        // dataDevelopersList[index].name = newDeveloperData.developerName;
        // dataDevelopersList[index].position = newDeveloperData.developerPosition;
        // // console.log("editableCard_ПІСЛЯ:", dataDevelopersList[index]);  //todo: Картка розробника, що відредагована - ПІСЛЯ
        // // console.log("dataDevelopersList (після РЕДАГУВАННЯ):", dataDevelopersList); //!
    
        //* NEW: Заміна властивостей
        //? PATCH  або PUT:
        const requestBody = {
            id: index,
            name: newDeveloperData.developerName,
            position: newDeveloperData.developerPosition
        };

        const options = {
            method: "PATCH", //! операція UPDATE, оновлення
            // method: "PUT", //! операція UPDATE, оновлення
            body: JSON.stringify(requestBody), //! конвертація даних у JSON-формат
            headers: {
                "Content-Type": "application/json; charset=UTF-8",
            },
        };

        fetch(`http://localhost:3002/developers/${requestBody.id}`, options)
            .then(response => response.json())
            .then(developer => console.log(`Відповідь сервера на ${options.method}:`, developer))
            .catch(error => console.log(error))
            .finally(() => console.log("PATCH  або PUT завершено"));
    };

    //todo: ПЕРЕЗАПИСУЄМО змінений dataDevelopersList в Локальне сховище (localStorage)
    // todo: OLD
    // localStorage.setItem("dataDevelopers", JSON.stringify(dataDevelopersList));

    //todo: ОЧИЩАЄМО поля форми для РЕДАГУВАННЯ/ВИДАЛЕННЯ
    formAddEditDeveloper.reset();

    //todo: ЗАКРИВАЄМО модальне вікно з формою для РЕДАГУВАННЯ/ВИДАЛЕННЯ
    toggleModalAddEditDeveloper();
};


//! Ⓜ️3️⃣ Функція реагує на кнопку <Скасувати> - очищує поля форми та закривє модальне вікно з формою для ДОДАВАННЯ/РЕДАГУВАННЯ/+ВИДАЛЕННЯ
function closeModalAddEditDeveloper() {
    imageDeveloper.src = "";
    imageDeveloper.alt = "";
    formAddEditDeveloper.reset();
    toggleModalAddEditDeveloper();
};


//! Ⓜ️4️⃣ Функція ВІДКРИТТЯ/ЗАКРИТТЯ модального вікна для ПІДТВЕРДЖЕННЯ або СКАСУВАННЯ ВИДАЛЕННЯ картки розробника
function toggleModalConfirmForRemoval() {
    console.log("ПІДТВЕРДЖЕННЯ ВИДАЛЕННЯ/СКАСУВАННЯ картки розробника");
    modalConfirmForRemoval.classList.toggle("is-hidden");
};
