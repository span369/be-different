console.log(
    '%c Використання Intersection Observer для завантаження зображень в секції "Наша команда" ',
    'color: white; background-color: #D33F49',
);

//? 📌 Як це працює:
//?    🔸 Всі <picture> мають атрибути data-srcset та data-src, які містять шлях до зображеннь.
//?    🔸 Зображення спочатку не завантажуються, оскільки srcset та src не встановлено або є зображення-заглушка.
//?    🔸 Коли зображення вперше потрапляє в зону видимості, спрацьовує IntersectionObserver
//?     і скрипт підставляє: srcset = data-srcset та src = data-src, завантажуючи картинку.
//? ✳️ Такий підхід економить ресурси та покращує продуктивність сайту.

document.addEventListener("DOMContentLoaded", () => {
    const lazyPictures = document.querySelectorAll(".our-developers-list__lazy-picture");
    const scrollContainer = document.querySelector(".our-developers-list");
    console.log("scrollContainer:", scrollContainer); //!

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const picture = entry.target;

                //! 1️⃣ Для всіх <source>
                picture.querySelectorAll("source").forEach((source) => {
                    if (source.dataset.srcset) {
                        source.srcset = source.dataset.srcset;
                    }
                });

                //! 2️⃣ Для <img>
                const img = picture.querySelector("img");
                if (img && img.dataset.src) {
                    img.src = img.dataset.src;
                }

                //! 3️⃣ Прибираємо зі спостереження
                observer.unobserve(picture);
            }
        });
    }, {
        // root: null,
        root: scrollContainer,
        threshold: 0.9, //todo: Викликається, коли 90% об'єкта видно
        // rootMargin: "100px 0px", //! todo: Знизу та зверху зменшили зону в'юпорту на 100px
        rootMargin: '0px 0px -15% 0px'  //todo: Знизу зменшили зону на 15% висоти в'юпорту
    });

    lazyPictures.forEach((picture) => observer.observe(picture));
});



//todo: Відстежування зображеннь
// const images = document.querySelectorAll('img[data-src]');
// const images = document.querySelectorAll('.image-observer');

// const loadImage = (img) => {
//     img.src = img.dataset.src;
// };

// const observerImg = new IntersectionObserver(
//     entries => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 loadImage(entry.target);
//                 observerImg.unobserve(entry.target); //todo: Видаляє елемент зі списку відслідковуваних елементів
//                 console.log(`Елемент ${entry.target.alt} видно!`);
//             }
//         });
//     },
//     {
//         threshold: 0.9, //todo: Викликається, коли 90% об'єкта видно
//     }
// );

// images.forEach(img => observerImg.observe(img));
// console.log("-----------------------------------------------------------------");


//todo: Відстежування текстів
// const texts = document.querySelectorAll('.text-observer');

// const observerTxt = new IntersectionObserver(
//     (entries) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 console.log("ТЕКСТ видно!");
//                 entry.target.style.color = "red";
//                 entry.target.style.background = "lightgreen";
//             } else {
//                 console.log("ТЕКСТ пішов із зони видимості...");
//                 entry.target.style.color = "lightgrey";
//             }
//         }
//         );
//     },
//     {
//         threshold: 0.6, //todo: Викликається, коли 60% об'єкта видно
//     }
// );

// texts.forEach(text => observerTxt.observe(text));
// console.log("-----------------------------------------------------------------");
