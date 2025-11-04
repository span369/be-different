console.log(
    '%c Рендеримо список розробників в секції "Наша команда" ',
    'color: white; background-color: #D33F49',
);

//! Знаходимо елемент в якому рендерим список розробників
const developersList = document.querySelector(".our-developers-list");


//! ❌ ---------------------------------- Рішення-1: ----------------------------------
//!❌ Рішення-1: з створенням функції з new URL(...)(динамічний шлях без явного import):
const imgUrl = (relPath) => new URL(relPath, import.meta.url).href;
// function imgUrl(relPath) {
//     return new URL(relPath, import.meta.url).href;
// };
//!❌ Рішення-1: Один з об'єктів для прикладу синтаксису:
const images = {
    desktop: [
        imgUrl("../images/igor-desktop-1x.jpg"), //!❌ Рішення-1:
        imgUrl("../images/igor-desktop-2x.jpg"), //!❌ Рішення-1:
        imgUrl("../images/igor-desktop-3x.jpg") //!❌ Рішення-1:
    ],
    tablet: [
        imgUrl("../images/igor-tablet-1x.jpg"), //!❌ Рішення-1:
        imgUrl("../images/igor-tablet-2x.jpg"), //!❌ Рішення-1:
        imgUrl("../images/igor-tablet-3x.jpg") //!❌ Рішення-1:
    ],
    mobile: [
        imgUrl("../images/igor-mobile-1x.jpg"), //!❌ Рішення-1:
        imgUrl("../images/igor-mobile-2x.jpg"), //!❌ Рішення-1:
        imgUrl("../images/igor-mobile-3x.jpg") //!❌ Рішення-1:
    ],
    default: imgUrl("../images/igor-mobile-1x.jpg") //!❌ Рішення-1:
};
console.log("images:", images); //!
//! ❌ __________________________________ Рішення-1: __________________________________


//!✅ Рішення-2:
import igorDesktop1x from "../images/igor-desktop-1x.jpg";
import igorDesktop2x from "../images/igor-desktop-2x.jpg";
import igorDesktop3x from "../images/igor-desktop-3x.jpg"

import igorTablet1x from "../images/igor-tablet-1x.jpg";
import igorTablet2x from "../images/igor-tablet-2x.jpg";
import igorTablet3x from "../images/igor-tablet-3x.jpg"

import igorMobile1x from "../images/igor-mobile-1x.jpg";
import igorMobile2x from "../images/igor-mobile-2x.jpg";
import igorMobile3x from "../images/igor-mobile-3x.jpg"


//!✅ Рішення-3: з new URL(...)(динамічний шлях без явного import)
new URL("../images/symboldefs.svg#instagram", import.meta.url).href;

//! Дані для списку з масиву об'єктів (ПРИКЛАД з різними Рішеннями):
let dataDevelopersList = [
    {
        name: "Ігор Дем'яненко", 
        position: "Product Designer",
        images: {
            desktop: [
                igorDesktop1x + " 1x,", //!✅ Рішення-2:
                igorDesktop2x + " 2x,", //!✅ Рішення-2:
                igorDesktop3x + " 3x" //!✅ Рішення-2:
            ],
            tablet: [
                igorTablet1x + " 1x,", //!✅ Рішення-2:
                igorTablet2x + " 2x,", //!✅ Рішення-2:
                igorTablet3x + " 3x" //!✅ Рішення-2:
            ],
            mobile: [
                igorMobile1x + " 1x,", //!✅ Рішення-2:
                igorMobile2x + " 2x,", //!✅ Рішення-2:
                igorMobile3x + " 3x" //!✅ Рішення-2:
            ],
            default: igorMobile1x //!✅ Рішення-2:
        },
        icons: [
            //!✅ Рішення-3:
            new URL("../images/symboldefs.svg#instagram", import.meta.url).href,
            new URL("../images/symboldefs.svg#twitter", import.meta.url).href,
            new URL("../images/symboldefs.svg#facebook", import.meta.url).href,
            new URL("../images/symboldefs.svg#linkedin", import.meta.url).href
        ]
    },
    {
        //!✅ Рішення-3:
        name: "Ольга Рєпіна",
        position: "Frontend Developer",
        images: {
            desktop: [
                new URL("../images/olga-desktop-1x.jpg", import.meta.url).href + " 1x,",
                new URL("../images/olga-desktop-2x.jpg", import.meta.url).href + " 2x,",
                new URL("../images/olga-desktop-3x.jpg", import.meta.url).href + " 3x"
            ],
            tablet: [
                new URL("../images/olga-tablet-1x.jpg", import.meta.url).href + " 1x,",
                new URL("../images/olga-tablet-2x.jpg", import.meta.url).href + " 2x,",
                new URL("../images/olga-tablet-3x.jpg", import.meta.url).href + " 3x"
            ],
            mobile: [
                new URL("../images/olga-mobile-1x.jpg", import.meta.url).href + " 1x,",
                new URL("../images/olga-mobile-2x.jpg", import.meta.url).href + " 2x,",
                new URL("../images/olga-mobile-3x.jpg", import.meta.url).href + " 3x"
            ],
            default: new URL("../images/olga-mobile-1x.jpg", import.meta.url).href
        },
        icons: [
            new URL("../images/symboldefs.svg#instagram", import.meta.url).href,
            new URL("../images/symboldefs.svg#twitter", import.meta.url).href,
            new URL("../images/symboldefs.svg#facebook", import.meta.url).href,
            new URL("../images/symboldefs.svg#linkedin", import.meta.url).href
        ]
    },
    {
        //!✅ Рішення-3:
        name: "Микола Тарасов",
        position: "Marketing",
        images: {
            desktop: [
                new URL("../images/mykola-desktop-1x.jpg", import.meta.url).href + " 1x,",
                new URL("../images/mykola-desktop-2x.jpg", import.meta.url).href + " 2x,",
                new URL("../images/mykola-desktop-3x.jpg", import.meta.url).href + " 3x"
            ],
            tablet: [
                new URL("../images/mykola-tablet-1x.jpg", import.meta.url).href + " 1x,",
                new URL("../images/mykola-tablet-2x.jpg", import.meta.url).href + " 2x,",
                new URL("../images/mykola-tablet-3x.jpg", import.meta.url).href + " 3x"
            ],
            mobile: [
                new URL("../images/mykola-mobile-1x.jpg", import.meta.url).href + " 1x,",
                new URL("../images/mykola-mobile-2x.jpg", import.meta.url).href + " 2x,",
                new URL("../images/mykola-mobile-3x.jpg", import.meta.url).href + " 3x"
            ],
            default: new URL("../images/mykola-mobile-1x.jpg", import.meta.url).href
        },
        icons: [
            new URL("../images/symboldefs.svg#instagram", import.meta.url).href,
            new URL("../images/symboldefs.svg#twitter", import.meta.url).href,
            new URL("../images/symboldefs.svg#facebook", import.meta.url).href,
            new URL("../images/symboldefs.svg#linkedin", import.meta.url).href
        ]
    },
    {
        //!✅ Рішення-3:
        name: "Михайло Єрмаков",
        position: "UI Designer",
        images: {
            desktop: [
                new URL("../images/muhailo-desktop-1x.jpg", import.meta.url).href + " 1x,",
                new URL("../images/muhailo-desktop-2x.jpg", import.meta.url).href + " 2x,",
                new URL("../images/muhailo-desktop-3x.jpg", import.meta.url).href + " 3x"
            ],
            tablet: [
                new URL("../images/muhailo-tablet-1x.jpg", import.meta.url).href + " 1x,",
                new URL("../images/muhailo-tablet-2x.jpg", import.meta.url).href + " 2x,",
                new URL("../images/muhailo-tablet-3x.jpg", import.meta.url).href + " 3x"
            ],
            mobile: [
                new URL("../images/muhailo-mobile-1x.jpg", import.meta.url).href + " 1x,",
                new URL("../images/muhailo-mobile-2x.jpg", import.meta.url).href + " 2x,",
                new URL("../images/muhailo-mobile-3x.jpg", import.meta.url).href + " 3x"
            ],
            default: new URL("../images/muhailo-mobile-1x.jpg", import.meta.url).href
        },
        icons: [
            new URL("../images/symboldefs.svg#instagram", import.meta.url).href,
            new URL("../images/symboldefs.svg#twitter", import.meta.url).href,
            new URL("../images/symboldefs.svg#facebook", import.meta.url).href,
            new URL("../images/symboldefs.svg#linkedin", import.meta.url).href
        ]
    },
];
console.log("dataDevelopersList (ПРИКЛАД з різними Рішеннями):", dataDevelopersList); //!


//! ✅1️⃣-1️⃣Робимо фінальний варіант dataDevelopersList з урахуванням найкращого варіанта: Рішення-3
dataDevelopersList = [
    {
        name: "Ігор Дем'яненко",
        nameId: "IgorDemyanenko",
        position: "Product Designer",
        images: {
            desktop: [
                new URL("../images/igor-desktop-1x.jpg", import.meta.url).href + " 1x,",
                new URL("../images/igor-desktop-2x.jpg", import.meta.url).href + " 2x,",
                new URL("../images/igor-desktop-3x.jpg", import.meta.url).href + " 3x"
            ],
            tablet: [
                new URL("../images/igor-tablet-1x.jpg", import.meta.url).href + " 1x,",
                new URL("../images/igor-tablet-2x.jpg", import.meta.url).href + " 2x,",
                new URL("../images/igor-tablet-3x.jpg", import.meta.url).href + " 3x"
            ],
            mobile: [
                new URL("../images/igor-mobile-1x.jpg", import.meta.url).href + " 1x,",
                new URL("../images/igor-mobile-2x.jpg", import.meta.url).href + " 2x,",
                new URL("../images/igor-mobile-3x.jpg", import.meta.url).href + " 3x"
            ],
            default: new URL("../images/igor-mobile-1x.jpg", import.meta.url).href
        },
        icons: [
            new URL("../images/symboldefs.svg#instagram", import.meta.url).href,
            new URL("../images/symboldefs.svg#twitter", import.meta.url).href,
            new URL("../images/symboldefs.svg#facebook", import.meta.url).href,
            new URL("../images/symboldefs.svg#linkedin", import.meta.url).href
        ]
    },
    {
        name: "Ольга Рєпіна",
        nameId: "OlgaRepina",
        position: "Frontend Developer",
        images: {
            desktop: [
                new URL("../images/olga-desktop-1x.jpg", import.meta.url).href + " 1x,",
                new URL("../images/olga-desktop-2x.jpg", import.meta.url).href + " 2x,",
                new URL("../images/olga-desktop-3x.jpg", import.meta.url).href + " 3x"
            ],
            tablet: [
                new URL("../images/olga-tablet-1x.jpg", import.meta.url).href + " 1x,",
                new URL("../images/olga-tablet-2x.jpg", import.meta.url).href + " 2x,",
                new URL("../images/olga-tablet-3x.jpg", import.meta.url).href + " 3x"
            ],
            mobile: [
                new URL("../images/olga-mobile-1x.jpg", import.meta.url).href + " 1x,",
                new URL("../images/olga-mobile-2x.jpg", import.meta.url).href + " 2x,",
                new URL("../images/olga-mobile-3x.jpg", import.meta.url).href + " 3x"
            ],
            default: new URL("../images/olga-mobile-1x.jpg", import.meta.url).href
        },
        icons: [
            new URL("../images/symboldefs.svg#instagram", import.meta.url).href,
            new URL("../images/symboldefs.svg#twitter", import.meta.url).href,
            new URL("../images/symboldefs.svg#facebook", import.meta.url).href,
            new URL("../images/symboldefs.svg#linkedin", import.meta.url).href
        ]
    },
    {
        name: "Микола Тарасов",
        nameId: "MykolaTarasov",
        position: "Marketing",
        images: {
            desktop: [
                new URL("../images/mykola-desktop-1x.jpg", import.meta.url).href + " 1x,",
                new URL("../images/mykola-desktop-2x.jpg", import.meta.url).href + " 2x,",
                new URL("../images/mykola-desktop-3x.jpg", import.meta.url).href + " 3x"
            ],
            tablet: [
                new URL("../images/mykola-tablet-1x.jpg", import.meta.url).href + " 1x,",
                new URL("../images/mykola-tablet-2x.jpg", import.meta.url).href + " 2x,",
                new URL("../images/mykola-tablet-3x.jpg", import.meta.url).href + " 3x"
            ],
            mobile: [
                new URL("../images/mykola-mobile-1x.jpg", import.meta.url).href + " 1x,",
                new URL("../images/mykola-mobile-2x.jpg", import.meta.url).href + " 2x,",
                new URL("../images/mykola-mobile-3x.jpg", import.meta.url).href + " 3x"
            ],
            default: new URL("../images/mykola-mobile-1x.jpg", import.meta.url).href
        },
        icons: [
            new URL("../images/symboldefs.svg#instagram", import.meta.url).href,
            new URL("../images/symboldefs.svg#twitter", import.meta.url).href,
            new URL("../images/symboldefs.svg#facebook", import.meta.url).href,
            new URL("../images/symboldefs.svg#linkedin", import.meta.url).href
        ]
    },
    {
        name: "Михайло Єрмаков",
        nameId: "MykhailoErmakov",
        position: "UI Designer",
        images: {
            desktop: [
                new URL("../images/muhailo-desktop-1x.jpg", import.meta.url).href + " 1x,",
                new URL("../images/muhailo-desktop-2x.jpg", import.meta.url).href + " 2x,",
                new URL("../images/muhailo-desktop-3x.jpg", import.meta.url).href + " 3x"
            ],
            tablet: [
                new URL("../images/muhailo-tablet-1x.jpg", import.meta.url).href + " 1x,",
                new URL("../images/muhailo-tablet-2x.jpg", import.meta.url).href + " 2x,",
                new URL("../images/muhailo-tablet-3x.jpg", import.meta.url).href + " 3x"
            ],
            mobile: [
                new URL("../images/muhailo-mobile-1x.jpg", import.meta.url).href + " 1x,",
                new URL("../images/muhailo-mobile-2x.jpg", import.meta.url).href + " 2x,",
                new URL("../images/muhailo-mobile-3x.jpg", import.meta.url).href + " 3x"
            ],
            default: new URL("../images/muhailo-mobile-1x.jpg", import.meta.url).href
        },
        icons: [
            new URL("../images/symboldefs.svg#instagram", import.meta.url).href,
            new URL("../images/symboldefs.svg#twitter", import.meta.url).href,
            new URL("../images/symboldefs.svg#facebook", import.meta.url).href,
            new URL("../images/symboldefs.svg#linkedin", import.meta.url).href
        ]
    },
];

//! ✅1️⃣-2️⃣Робимо фінальний варіант dataDevelopersList з урахуванням використання Intersection Observer
//! 2️⃣0️⃣ розробників 👤
dataDevelopersList = [
    {
        name: "Ігор Дем'яненко",
        nameId: "IgorDemyanenko",
        position: "Product Designer",
        images: {
            desktop: [
                new URL("../images/igor-desktop-1x.jpg", import.meta.url).href + " 1x,",
                new URL("../images/igor-desktop-2x.jpg", import.meta.url).href + " 2x,",
                new URL("../images/igor-desktop-3x.jpg", import.meta.url).href + " 3x"
            ],
            tablet: [
                new URL("../images/igor-tablet-1x.jpg", import.meta.url).href + " 1x,",
                new URL("../images/igor-tablet-2x.jpg", import.meta.url).href + " 2x,",
                new URL("../images/igor-tablet-3x.jpg", import.meta.url).href + " 3x"
            ],
            mobile: [
                new URL("../images/igor-mobile-1x.jpg", import.meta.url).href + " 1x,",
                new URL("../images/igor-mobile-2x.jpg", import.meta.url).href + " 2x,",
                new URL("../images/igor-mobile-3x.jpg", import.meta.url).href + " 3x"
            ],
            default: new URL("../images/igor-mobile-1x.jpg", import.meta.url).href
        },
        icons: [
            new URL("../images/symboldefs.svg#instagram", import.meta.url).href,
            new URL("../images/symboldefs.svg#twitter", import.meta.url).href,
            new URL("../images/symboldefs.svg#facebook", import.meta.url).href,
            new URL("../images/symboldefs.svg#linkedin", import.meta.url).href
        ]
    },
    {
        name: "Ольга Рєпіна",
        nameId: "OlgaRepina",
        position: "Frontend Developer",
        images: {
            desktop: [
                new URL("../images/olga-desktop-1x.jpg", import.meta.url).href + " 1x,",
                new URL("../images/olga-desktop-2x.jpg", import.meta.url).href + " 2x,",
                new URL("../images/olga-desktop-3x.jpg", import.meta.url).href + " 3x"
            ],
            tablet: [
                new URL("../images/olga-tablet-1x.jpg", import.meta.url).href + " 1x,",
                new URL("../images/olga-tablet-2x.jpg", import.meta.url).href + " 2x,",
                new URL("../images/olga-tablet-3x.jpg", import.meta.url).href + " 3x"
            ],
            mobile: [
                new URL("../images/olga-mobile-1x.jpg", import.meta.url).href + " 1x,",
                new URL("../images/olga-mobile-2x.jpg", import.meta.url).href + " 2x,",
                new URL("../images/olga-mobile-3x.jpg", import.meta.url).href + " 3x"
            ],
            default: new URL("../images/olga-mobile-1x.jpg", import.meta.url).href
        },
        icons: [
            new URL("../images/symboldefs.svg#instagram", import.meta.url).href,
            new URL("../images/symboldefs.svg#twitter", import.meta.url).href,
            new URL("../images/symboldefs.svg#facebook", import.meta.url).href,
            new URL("../images/symboldefs.svg#linkedin", import.meta.url).href
        ]
    },
    {
        name: "Микола Тарасов",
        nameId: "MykolaTarasov",
        position: "Marketing",
        images: {
            desktop: [
                new URL("../images/mykola-desktop-1x.jpg", import.meta.url).href + " 1x,",
                new URL("../images/mykola-desktop-2x.jpg", import.meta.url).href + " 2x,",
                new URL("../images/mykola-desktop-3x.jpg", import.meta.url).href + " 3x"
            ],
            tablet: [
                new URL("../images/mykola-tablet-1x.jpg", import.meta.url).href + " 1x,",
                new URL("../images/mykola-tablet-2x.jpg", import.meta.url).href + " 2x,",
                new URL("../images/mykola-tablet-3x.jpg", import.meta.url).href + " 3x"
            ],
            mobile: [
                new URL("../images/mykola-mobile-1x.jpg", import.meta.url).href + " 1x,",
                new URL("../images/mykola-mobile-2x.jpg", import.meta.url).href + " 2x,",
                new URL("../images/mykola-mobile-3x.jpg", import.meta.url).href + " 3x"
            ],
            default: new URL("../images/mykola-mobile-1x.jpg", import.meta.url).href
        },
        icons: [
            new URL("../images/symboldefs.svg#instagram", import.meta.url).href,
            new URL("../images/symboldefs.svg#twitter", import.meta.url).href,
            new URL("../images/symboldefs.svg#facebook", import.meta.url).href,
            new URL("../images/symboldefs.svg#linkedin", import.meta.url).href
        ]
    },
    {
        name: "Михайло Єрмаков",
        nameId: "MykhailoErmakov",
        position: "UI Designer",
        images: {
            desktop: [
                new URL("../images/muhailo-desktop-1x.jpg", import.meta.url).href + " 1x,",
                new URL("../images/muhailo-desktop-2x.jpg", import.meta.url).href + " 2x,",
                new URL("../images/muhailo-desktop-3x.jpg", import.meta.url).href + " 3x"
            ],
            tablet: [
                new URL("../images/muhailo-tablet-1x.jpg", import.meta.url).href + " 1x,",
                new URL("../images/muhailo-tablet-2x.jpg", import.meta.url).href + " 2x,",
                new URL("../images/muhailo-tablet-3x.jpg", import.meta.url).href + " 3x"
            ],
            mobile: [
                new URL("../images/muhailo-mobile-1x.jpg", import.meta.url).href + " 1x,",
                new URL("../images/muhailo-mobile-2x.jpg", import.meta.url).href + " 2x,",
                new URL("../images/muhailo-mobile-3x.jpg", import.meta.url).href + " 3x"
            ],
            default: new URL("../images/muhailo-mobile-1x.jpg", import.meta.url).href
        },
        icons: [
            new URL("../images/symboldefs.svg#instagram", import.meta.url).href,
            new URL("../images/symboldefs.svg#twitter", import.meta.url).href,
            new URL("../images/symboldefs.svg#facebook", import.meta.url).href,
            new URL("../images/symboldefs.svg#linkedin", import.meta.url).href
        ]
    },
    {
        name: "Ігор Дем'яненко",
        nameId: "IgorDemyanenko",
        position: "Product Designer",
        images: {
            desktop: [
                new URL("../images/igor-desktop-1x.jpg", import.meta.url).href + " 1x,",
                new URL("../images/igor-desktop-2x.jpg", import.meta.url).href + " 2x,",
                new URL("../images/igor-desktop-3x.jpg", import.meta.url).href + " 3x"
            ],
            tablet: [
                new URL("../images/igor-tablet-1x.jpg", import.meta.url).href + " 1x,",
                new URL("../images/igor-tablet-2x.jpg", import.meta.url).href + " 2x,",
                new URL("../images/igor-tablet-3x.jpg", import.meta.url).href + " 3x"
            ],
            mobile: [
                new URL("../images/igor-mobile-1x.jpg", import.meta.url).href + " 1x,",
                new URL("../images/igor-mobile-2x.jpg", import.meta.url).href + " 2x,",
                new URL("../images/igor-mobile-3x.jpg", import.meta.url).href + " 3x"
            ],
            default: new URL("../images/igor-mobile-1x.jpg", import.meta.url).href
        },
        icons: [
            new URL("../images/symboldefs.svg#instagram", import.meta.url).href,
            new URL("../images/symboldefs.svg#twitter", import.meta.url).href,
            new URL("../images/symboldefs.svg#facebook", import.meta.url).href,
            new URL("../images/symboldefs.svg#linkedin", import.meta.url).href
        ]
    },
    {
        name: "Ольга Рєпіна",
        nameId: "OlgaRepina",
        position: "Frontend Developer",
        images: {
            desktop: [
                new URL("../images/olga-desktop-1x.jpg", import.meta.url).href + " 1x,",
                new URL("../images/olga-desktop-2x.jpg", import.meta.url).href + " 2x,",
                new URL("../images/olga-desktop-3x.jpg", import.meta.url).href + " 3x"
            ],
            tablet: [
                new URL("../images/olga-tablet-1x.jpg", import.meta.url).href + " 1x,",
                new URL("../images/olga-tablet-2x.jpg", import.meta.url).href + " 2x,",
                new URL("../images/olga-tablet-3x.jpg", import.meta.url).href + " 3x"
            ],
            mobile: [
                new URL("../images/olga-mobile-1x.jpg", import.meta.url).href + " 1x,",
                new URL("../images/olga-mobile-2x.jpg", import.meta.url).href + " 2x,",
                new URL("../images/olga-mobile-3x.jpg", import.meta.url).href + " 3x"
            ],
            default: new URL("../images/olga-mobile-1x.jpg", import.meta.url).href
        },
        icons: [
            new URL("../images/symboldefs.svg#instagram", import.meta.url).href,
            new URL("../images/symboldefs.svg#twitter", import.meta.url).href,
            new URL("../images/symboldefs.svg#facebook", import.meta.url).href,
            new URL("../images/symboldefs.svg#linkedin", import.meta.url).href
        ]
    },
    {
        name: "Микола Тарасов",
        nameId: "MykolaTarasov",
        position: "Marketing",
        images: {
            desktop: [
                new URL("../images/mykola-desktop-1x.jpg", import.meta.url).href + " 1x,",
                new URL("../images/mykola-desktop-2x.jpg", import.meta.url).href + " 2x,",
                new URL("../images/mykola-desktop-3x.jpg", import.meta.url).href + " 3x"
            ],
            tablet: [
                new URL("../images/mykola-tablet-1x.jpg", import.meta.url).href + " 1x,",
                new URL("../images/mykola-tablet-2x.jpg", import.meta.url).href + " 2x,",
                new URL("../images/mykola-tablet-3x.jpg", import.meta.url).href + " 3x"
            ],
            mobile: [
                new URL("../images/mykola-mobile-1x.jpg", import.meta.url).href + " 1x,",
                new URL("../images/mykola-mobile-2x.jpg", import.meta.url).href + " 2x,",
                new URL("../images/mykola-mobile-3x.jpg", import.meta.url).href + " 3x"
            ],
            default: new URL("../images/mykola-mobile-1x.jpg", import.meta.url).href
        },
        icons: [
            new URL("../images/symboldefs.svg#instagram", import.meta.url).href,
            new URL("../images/symboldefs.svg#twitter", import.meta.url).href,
            new URL("../images/symboldefs.svg#facebook", import.meta.url).href,
            new URL("../images/symboldefs.svg#linkedin", import.meta.url).href
        ]
    },
    {
        name: "Михайло Єрмаков",
        nameId: "MykhailoErmakov",
        position: "UI Designer",
        images: {
            desktop: [
                new URL("../images/muhailo-desktop-1x.jpg", import.meta.url).href + " 1x,",
                new URL("../images/muhailo-desktop-2x.jpg", import.meta.url).href + " 2x,",
                new URL("../images/muhailo-desktop-3x.jpg", import.meta.url).href + " 3x"
            ],
            tablet: [
                new URL("../images/muhailo-tablet-1x.jpg", import.meta.url).href + " 1x,",
                new URL("../images/muhailo-tablet-2x.jpg", import.meta.url).href + " 2x,",
                new URL("../images/muhailo-tablet-3x.jpg", import.meta.url).href + " 3x"
            ],
            mobile: [
                new URL("../images/muhailo-mobile-1x.jpg", import.meta.url).href + " 1x,",
                new URL("../images/muhailo-mobile-2x.jpg", import.meta.url).href + " 2x,",
                new URL("../images/muhailo-mobile-3x.jpg", import.meta.url).href + " 3x"
            ],
            default: new URL("../images/muhailo-mobile-1x.jpg", import.meta.url).href
        },
        icons: [
            new URL("../images/symboldefs.svg#instagram", import.meta.url).href,
            new URL("../images/symboldefs.svg#twitter", import.meta.url).href,
            new URL("../images/symboldefs.svg#facebook", import.meta.url).href,
            new URL("../images/symboldefs.svg#linkedin", import.meta.url).href
        ]
    },
    {
        name: "Ігор Дем'яненко",
        nameId: "IgorDemyanenko",
        position: "Product Designer",
        images: {
            desktop: [
                new URL("../images/igor-desktop-1x.jpg", import.meta.url).href + " 1x,",
                new URL("../images/igor-desktop-2x.jpg", import.meta.url).href + " 2x,",
                new URL("../images/igor-desktop-3x.jpg", import.meta.url).href + " 3x"
            ],
            tablet: [
                new URL("../images/igor-tablet-1x.jpg", import.meta.url).href + " 1x,",
                new URL("../images/igor-tablet-2x.jpg", import.meta.url).href + " 2x,",
                new URL("../images/igor-tablet-3x.jpg", import.meta.url).href + " 3x"
            ],
            mobile: [
                new URL("../images/igor-mobile-1x.jpg", import.meta.url).href + " 1x,",
                new URL("../images/igor-mobile-2x.jpg", import.meta.url).href + " 2x,",
                new URL("../images/igor-mobile-3x.jpg", import.meta.url).href + " 3x"
            ],
            default: new URL("../images/igor-mobile-1x.jpg", import.meta.url).href
        },
        icons: [
            new URL("../images/symboldefs.svg#instagram", import.meta.url).href,
            new URL("../images/symboldefs.svg#twitter", import.meta.url).href,
            new URL("../images/symboldefs.svg#facebook", import.meta.url).href,
            new URL("../images/symboldefs.svg#linkedin", import.meta.url).href
        ]
    },
    {
        name: "Ольга Рєпіна",
        nameId: "OlgaRepina",
        position: "Frontend Developer",
        images: {
            desktop: [
                new URL("../images/olga-desktop-1x.jpg", import.meta.url).href + " 1x,",
                new URL("../images/olga-desktop-2x.jpg", import.meta.url).href + " 2x,",
                new URL("../images/olga-desktop-3x.jpg", import.meta.url).href + " 3x"
            ],
            tablet: [
                new URL("../images/olga-tablet-1x.jpg", import.meta.url).href + " 1x,",
                new URL("../images/olga-tablet-2x.jpg", import.meta.url).href + " 2x,",
                new URL("../images/olga-tablet-3x.jpg", import.meta.url).href + " 3x"
            ],
            mobile: [
                new URL("../images/olga-mobile-1x.jpg", import.meta.url).href + " 1x,",
                new URL("../images/olga-mobile-2x.jpg", import.meta.url).href + " 2x,",
                new URL("../images/olga-mobile-3x.jpg", import.meta.url).href + " 3x"
            ],
            default: new URL("../images/olga-mobile-1x.jpg", import.meta.url).href
        },
        icons: [
            new URL("../images/symboldefs.svg#instagram", import.meta.url).href,
            new URL("../images/symboldefs.svg#twitter", import.meta.url).href,
            new URL("../images/symboldefs.svg#facebook", import.meta.url).href,
            new URL("../images/symboldefs.svg#linkedin", import.meta.url).href
        ]
    },
    {
        name: "Микола Тарасов",
        nameId: "MykolaTarasov",
        position: "Marketing",
        images: {
            desktop: [
                new URL("../images/mykola-desktop-1x.jpg", import.meta.url).href + " 1x,",
                new URL("../images/mykola-desktop-2x.jpg", import.meta.url).href + " 2x,",
                new URL("../images/mykola-desktop-3x.jpg", import.meta.url).href + " 3x"
            ],
            tablet: [
                new URL("../images/mykola-tablet-1x.jpg", import.meta.url).href + " 1x,",
                new URL("../images/mykola-tablet-2x.jpg", import.meta.url).href + " 2x,",
                new URL("../images/mykola-tablet-3x.jpg", import.meta.url).href + " 3x"
            ],
            mobile: [
                new URL("../images/mykola-mobile-1x.jpg", import.meta.url).href + " 1x,",
                new URL("../images/mykola-mobile-2x.jpg", import.meta.url).href + " 2x,",
                new URL("../images/mykola-mobile-3x.jpg", import.meta.url).href + " 3x"
            ],
            default: new URL("../images/mykola-mobile-1x.jpg", import.meta.url).href
        },
        icons: [
            new URL("../images/symboldefs.svg#instagram", import.meta.url).href,
            new URL("../images/symboldefs.svg#twitter", import.meta.url).href,
            new URL("../images/symboldefs.svg#facebook", import.meta.url).href,
            new URL("../images/symboldefs.svg#linkedin", import.meta.url).href
        ]
    },
    {
        name: "Михайло Єрмаков",
        nameId: "MykhailoErmakov",
        position: "UI Designer",
        images: {
            desktop: [
                new URL("../images/muhailo-desktop-1x.jpg", import.meta.url).href + " 1x,",
                new URL("../images/muhailo-desktop-2x.jpg", import.meta.url).href + " 2x,",
                new URL("../images/muhailo-desktop-3x.jpg", import.meta.url).href + " 3x"
            ],
            tablet: [
                new URL("../images/muhailo-tablet-1x.jpg", import.meta.url).href + " 1x,",
                new URL("../images/muhailo-tablet-2x.jpg", import.meta.url).href + " 2x,",
                new URL("../images/muhailo-tablet-3x.jpg", import.meta.url).href + " 3x"
            ],
            mobile: [
                new URL("../images/muhailo-mobile-1x.jpg", import.meta.url).href + " 1x,",
                new URL("../images/muhailo-mobile-2x.jpg", import.meta.url).href + " 2x,",
                new URL("../images/muhailo-mobile-3x.jpg", import.meta.url).href + " 3x"
            ],
            default: new URL("../images/muhailo-mobile-1x.jpg", import.meta.url).href
        },
        icons: [
            new URL("../images/symboldefs.svg#instagram", import.meta.url).href,
            new URL("../images/symboldefs.svg#twitter", import.meta.url).href,
            new URL("../images/symboldefs.svg#facebook", import.meta.url).href,
            new URL("../images/symboldefs.svg#linkedin", import.meta.url).href
        ]
    },
    {
        name: "Ігор Дем'яненко",
        nameId: "IgorDemyanenko",
        position: "Product Designer",
        images: {
            desktop: [
                new URL("../images/igor-desktop-1x.jpg", import.meta.url).href + " 1x,",
                new URL("../images/igor-desktop-2x.jpg", import.meta.url).href + " 2x,",
                new URL("../images/igor-desktop-3x.jpg", import.meta.url).href + " 3x"
            ],
            tablet: [
                new URL("../images/igor-tablet-1x.jpg", import.meta.url).href + " 1x,",
                new URL("../images/igor-tablet-2x.jpg", import.meta.url).href + " 2x,",
                new URL("../images/igor-tablet-3x.jpg", import.meta.url).href + " 3x"
            ],
            mobile: [
                new URL("../images/igor-mobile-1x.jpg", import.meta.url).href + " 1x,",
                new URL("../images/igor-mobile-2x.jpg", import.meta.url).href + " 2x,",
                new URL("../images/igor-mobile-3x.jpg", import.meta.url).href + " 3x"
            ],
            default: new URL("../images/igor-mobile-1x.jpg", import.meta.url).href
        },
        icons: [
            new URL("../images/symboldefs.svg#instagram", import.meta.url).href,
            new URL("../images/symboldefs.svg#twitter", import.meta.url).href,
            new URL("../images/symboldefs.svg#facebook", import.meta.url).href,
            new URL("../images/symboldefs.svg#linkedin", import.meta.url).href
        ]
    },
    {
        name: "Ольга Рєпіна",
        nameId: "OlgaRepina",
        position: "Frontend Developer",
        images: {
            desktop: [
                new URL("../images/olga-desktop-1x.jpg", import.meta.url).href + " 1x,",
                new URL("../images/olga-desktop-2x.jpg", import.meta.url).href + " 2x,",
                new URL("../images/olga-desktop-3x.jpg", import.meta.url).href + " 3x"
            ],
            tablet: [
                new URL("../images/olga-tablet-1x.jpg", import.meta.url).href + " 1x,",
                new URL("../images/olga-tablet-2x.jpg", import.meta.url).href + " 2x,",
                new URL("../images/olga-tablet-3x.jpg", import.meta.url).href + " 3x"
            ],
            mobile: [
                new URL("../images/olga-mobile-1x.jpg", import.meta.url).href + " 1x,",
                new URL("../images/olga-mobile-2x.jpg", import.meta.url).href + " 2x,",
                new URL("../images/olga-mobile-3x.jpg", import.meta.url).href + " 3x"
            ],
            default: new URL("../images/olga-mobile-1x.jpg", import.meta.url).href
        },
        icons: [
            new URL("../images/symboldefs.svg#instagram", import.meta.url).href,
            new URL("../images/symboldefs.svg#twitter", import.meta.url).href,
            new URL("../images/symboldefs.svg#facebook", import.meta.url).href,
            new URL("../images/symboldefs.svg#linkedin", import.meta.url).href
        ]
    },
    {
        name: "Микола Тарасов",
        nameId: "MykolaTarasov",
        position: "Marketing",
        images: {
            desktop: [
                new URL("../images/mykola-desktop-1x.jpg", import.meta.url).href + " 1x,",
                new URL("../images/mykola-desktop-2x.jpg", import.meta.url).href + " 2x,",
                new URL("../images/mykola-desktop-3x.jpg", import.meta.url).href + " 3x"
            ],
            tablet: [
                new URL("../images/mykola-tablet-1x.jpg", import.meta.url).href + " 1x,",
                new URL("../images/mykola-tablet-2x.jpg", import.meta.url).href + " 2x,",
                new URL("../images/mykola-tablet-3x.jpg", import.meta.url).href + " 3x"
            ],
            mobile: [
                new URL("../images/mykola-mobile-1x.jpg", import.meta.url).href + " 1x,",
                new URL("../images/mykola-mobile-2x.jpg", import.meta.url).href + " 2x,",
                new URL("../images/mykola-mobile-3x.jpg", import.meta.url).href + " 3x"
            ],
            default: new URL("../images/mykola-mobile-1x.jpg", import.meta.url).href
        },
        icons: [
            new URL("../images/symboldefs.svg#instagram", import.meta.url).href,
            new URL("../images/symboldefs.svg#twitter", import.meta.url).href,
            new URL("../images/symboldefs.svg#facebook", import.meta.url).href,
            new URL("../images/symboldefs.svg#linkedin", import.meta.url).href
        ]
    },
    {
        name: "Михайло Єрмаков",
        nameId: "MykhailoErmakov",
        position: "UI Designer",
        images: {
            desktop: [
                new URL("../images/muhailo-desktop-1x.jpg", import.meta.url).href + " 1x,",
                new URL("../images/muhailo-desktop-2x.jpg", import.meta.url).href + " 2x,",
                new URL("../images/muhailo-desktop-3x.jpg", import.meta.url).href + " 3x"
            ],
            tablet: [
                new URL("../images/muhailo-tablet-1x.jpg", import.meta.url).href + " 1x,",
                new URL("../images/muhailo-tablet-2x.jpg", import.meta.url).href + " 2x,",
                new URL("../images/muhailo-tablet-3x.jpg", import.meta.url).href + " 3x"
            ],
            mobile: [
                new URL("../images/muhailo-mobile-1x.jpg", import.meta.url).href + " 1x,",
                new URL("../images/muhailo-mobile-2x.jpg", import.meta.url).href + " 2x,",
                new URL("../images/muhailo-mobile-3x.jpg", import.meta.url).href + " 3x"
            ],
            default: new URL("../images/muhailo-mobile-1x.jpg", import.meta.url).href
        },
        icons: [
            new URL("../images/symboldefs.svg#instagram", import.meta.url).href,
            new URL("../images/symboldefs.svg#twitter", import.meta.url).href,
            new URL("../images/symboldefs.svg#facebook", import.meta.url).href,
            new URL("../images/symboldefs.svg#linkedin", import.meta.url).href
        ]
    },
    {
        name: "Ігор Дем'яненко",
        nameId: "IgorDemyanenko",
        position: "Product Designer",
        images: {
            desktop: [
                new URL("../images/igor-desktop-1x.jpg", import.meta.url).href + " 1x,",
                new URL("../images/igor-desktop-2x.jpg", import.meta.url).href + " 2x,",
                new URL("../images/igor-desktop-3x.jpg", import.meta.url).href + " 3x"
            ],
            tablet: [
                new URL("../images/igor-tablet-1x.jpg", import.meta.url).href + " 1x,",
                new URL("../images/igor-tablet-2x.jpg", import.meta.url).href + " 2x,",
                new URL("../images/igor-tablet-3x.jpg", import.meta.url).href + " 3x"
            ],
            mobile: [
                new URL("../images/igor-mobile-1x.jpg", import.meta.url).href + " 1x,",
                new URL("../images/igor-mobile-2x.jpg", import.meta.url).href + " 2x,",
                new URL("../images/igor-mobile-3x.jpg", import.meta.url).href + " 3x"
            ],
            default: new URL("../images/igor-mobile-1x.jpg", import.meta.url).href
        },
        icons: [
            new URL("../images/symboldefs.svg#instagram", import.meta.url).href,
            new URL("../images/symboldefs.svg#twitter", import.meta.url).href,
            new URL("../images/symboldefs.svg#facebook", import.meta.url).href,
            new URL("../images/symboldefs.svg#linkedin", import.meta.url).href
        ]
    },
    {
        name: "Ольга Рєпіна",
        nameId: "OlgaRepina",
        position: "Frontend Developer",
        images: {
            desktop: [
                new URL("../images/olga-desktop-1x.jpg", import.meta.url).href + " 1x,",
                new URL("../images/olga-desktop-2x.jpg", import.meta.url).href + " 2x,",
                new URL("../images/olga-desktop-3x.jpg", import.meta.url).href + " 3x"
            ],
            tablet: [
                new URL("../images/olga-tablet-1x.jpg", import.meta.url).href + " 1x,",
                new URL("../images/olga-tablet-2x.jpg", import.meta.url).href + " 2x,",
                new URL("../images/olga-tablet-3x.jpg", import.meta.url).href + " 3x"
            ],
            mobile: [
                new URL("../images/olga-mobile-1x.jpg", import.meta.url).href + " 1x,",
                new URL("../images/olga-mobile-2x.jpg", import.meta.url).href + " 2x,",
                new URL("../images/olga-mobile-3x.jpg", import.meta.url).href + " 3x"
            ],
            default: new URL("../images/olga-mobile-1x.jpg", import.meta.url).href
        },
        icons: [
            new URL("../images/symboldefs.svg#instagram", import.meta.url).href,
            new URL("../images/symboldefs.svg#twitter", import.meta.url).href,
            new URL("../images/symboldefs.svg#facebook", import.meta.url).href,
            new URL("../images/symboldefs.svg#linkedin", import.meta.url).href
        ]
    },
    {
        name: "Микола Тарасов",
        nameId: "MykolaTarasov",
        position: "Marketing",
        images: {
            desktop: [
                new URL("../images/mykola-desktop-1x.jpg", import.meta.url).href + " 1x,",
                new URL("../images/mykola-desktop-2x.jpg", import.meta.url).href + " 2x,",
                new URL("../images/mykola-desktop-3x.jpg", import.meta.url).href + " 3x"
            ],
            tablet: [
                new URL("../images/mykola-tablet-1x.jpg", import.meta.url).href + " 1x,",
                new URL("../images/mykola-tablet-2x.jpg", import.meta.url).href + " 2x,",
                new URL("../images/mykola-tablet-3x.jpg", import.meta.url).href + " 3x"
            ],
            mobile: [
                new URL("../images/mykola-mobile-1x.jpg", import.meta.url).href + " 1x,",
                new URL("../images/mykola-mobile-2x.jpg", import.meta.url).href + " 2x,",
                new URL("../images/mykola-mobile-3x.jpg", import.meta.url).href + " 3x"
            ],
            default: new URL("../images/mykola-mobile-1x.jpg", import.meta.url).href
        },
        icons: [
            new URL("../images/symboldefs.svg#instagram", import.meta.url).href,
            new URL("../images/symboldefs.svg#twitter", import.meta.url).href,
            new URL("../images/symboldefs.svg#facebook", import.meta.url).href,
            new URL("../images/symboldefs.svg#linkedin", import.meta.url).href
        ]
    },
    {
        name: "Михайло Єрмаков",
        nameId: "MykhailoErmakov",
        position: "UI Designer",
        images: {
            desktop: [
                new URL("../images/muhailo-desktop-1x.jpg", import.meta.url).href + " 1x,",
                new URL("../images/muhailo-desktop-2x.jpg", import.meta.url).href + " 2x,",
                new URL("../images/muhailo-desktop-3x.jpg", import.meta.url).href + " 3x"
            ],
            tablet: [
                new URL("../images/muhailo-tablet-1x.jpg", import.meta.url).href + " 1x,",
                new URL("../images/muhailo-tablet-2x.jpg", import.meta.url).href + " 2x,",
                new URL("../images/muhailo-tablet-3x.jpg", import.meta.url).href + " 3x"
            ],
            mobile: [
                new URL("../images/muhailo-mobile-1x.jpg", import.meta.url).href + " 1x,",
                new URL("../images/muhailo-mobile-2x.jpg", import.meta.url).href + " 2x,",
                new URL("../images/muhailo-mobile-3x.jpg", import.meta.url).href + " 3x"
            ],
            default: new URL("../images/muhailo-mobile-1x.jpg", import.meta.url).href
        },
        icons: [
            new URL("../images/symboldefs.svg#instagram", import.meta.url).href,
            new URL("../images/symboldefs.svg#twitter", import.meta.url).href,
            new URL("../images/symboldefs.svg#facebook", import.meta.url).href,
            new URL("../images/symboldefs.svg#linkedin", import.meta.url).href
        ]
    },
];
console.warn("1️⃣dataDevelopersList (фінальний):", dataDevelopersList); //!


//! ✅2️⃣Перетворюємо масив об'єктів dataDevelopersList в JSON:
const JSONdevelopersList = JSON.stringify(dataDevelopersList);
console.warn("2️⃣JSONdevelopersList (фінальний):", JSONdevelopersList); //!


//! ❌Дані для списку із JSON (так працює лише в http://localhost/):
// import dataDevelopersList from "../json/developers-list.json";
// console.log("dataDevelopersList:", dataDevelopersList); //!


//! ✅3️⃣Використаємо Локальне сховище (localStorage) у якості бази даних (db) для зберігання dataDevelopersList
// localStorage.setItem("dataDevelopers", JSONdevelopersList); //todo: var. 1
// localStorage.setItem("dataDevelopers", JSON.stringify(dataDevelopersList)); //todo: var. 2
//! ✅3️⃣-1️⃣УМОВА: Якщо немає даних (dataDevelopersList) в Локальному сховище (localStorage), то додаємо dataDevelopersList
if (!(localStorage.getItem("dataDevelopers"))) localStorage.setItem("dataDevelopers", JSON.stringify(dataDevelopersList));


//! 4️⃣Зчитуємо дані з Локального сховища (localStorage)
const localStorageDataDevelopersList = localStorage.getItem("dataDevelopers");
console.log("4️⃣localStorageDataDevelopersList:", localStorageDataDevelopersList);


//! 5️⃣Парсимо (конвертуємо) дані отримані з Локального сховища (localStorage) в масив об'єктів dataDevelopersList
// dataDevelopersList = JSON.parse(localStorageDataDevelopersList); //todo: var. 1
dataDevelopersList = JSON.parse(localStorage.getItem("dataDevelopers")); //todo: var. 2
console.log("5️⃣dataDevelopersList (після парсингу з localStorage):", dataDevelopersList);


//todo: ++++++++++++++++++++++++ Розмітка без Handlebars ++++++++++++++++++++++++
// const markup = dataDevelopersList
//     .map(item =>
//         `
//             <li class="our-developers-list__item">
//                 <picture>
//                     <source
//                         srcset="
//                             ${item.images.desktop[0]} 1x,
//                             ${item.images.desktop[1]} 2x,
//                             ${item.images.desktop[2]} 3x
//                         "
//                         media="(min-width: 1200px)"
//                     />
//                     <source
//                         srcset="
//                             ${item.images.tablet[0]} 1x,
//                             ${item.images.tablet[1]} 2x,
//                             ${item.images.tablet[2]} 3x
//                         "
//                         media="(min-width: 768px)"
//                     />
//                     <source
//                         srcset="
//                             ${item.images.mobile[0]} 1x,
//                             ${item.images.mobile[1]} 2x,
//                             ${item.images.mobile[2]} 3x
//                         "
//                         media="(min-width: 480px)"
//                     />
//                     <img
//                         class="our-developers-list__img"
//                         src="${item.images.default}"
//                         alt="${item.name}"
//                     />
//                 </picture>

//                 <p class="our-developers-list__text">${item.name}</p>
//                 <h4 class="our-developers-list__title">${item.position}</h4>
//                 <ul class="our-developers-svg-list">
//                     <li class="our-developers-svg-list__item">
//                         <a class="our-developers-svg-list__link" href="#">
//                             <svg width="20" height="20">
//                                 <use href="${item.icons[0]}"></use>
//                             </svg>
//                         </a>
//                     </li>
//                     <li class="our-developers-svg-list__item">
//                         <a class="our-developers-svg-list__link" href="#">
//                             <svg width="20" height="20">
//                                 <use href="${item.icons[1]}"></use>
//                             </svg>
//                         </a>
//                     </li>
//                     <li class="our-developers-svg-list__item">
//                         <a class="our-developers-svg-list__link" href="#">
//                             <svg width="20" height="20">
//                                 <use href="${item.icons[2]}"></use>
//                             </svg>
//                         </a>
//                     </li>
//                     <li class="our-developers-svg-list__item">
//                         <a class="our-developers-svg-list__link" href="#">
//                             <svg width="20" height="20">
//                                 <use href="${item.icons[3]}"></use>
//                             </svg>
//                         </a>
//                     </li>
//                 </ul>
//             </li>
//         `
//     )
//     .join("");

//! 6️⃣Генеруємо HTML-розмітку для списку всіх розробників
// console.log("6️⃣markup:", markup); //!

//! 7️⃣Додаємо у DOM
// // developersList.innerHTML = ""; //todo: var.1
// // developersList.insertAdjacentHTML("beforeend", markup); //todo: var.1
// developersList.innerHTML = markup; //todo: var.2


//todo: +++++++++++++++++++++++++ Розмітка з Handlebars +++++++++++++++++++++++++
//! 6️⃣-1️⃣ Створюємо та використовуємо шаблон 
import Handlebars from "handlebars";
// import developerTemplate from "../templates/developer.hbs?raw";
//? Використання Intersection Observer для завантаження зображень в секції "Наша команда
import developerTemplate from "../templates/developer-intersection-observer.hbs?raw";

const template = Handlebars.compile(developerTemplate);
console.log("template:", template); //!

//! 6️⃣-2️⃣Генеруємо HTML-розмітку для списку всіх розробників
const markup = dataDevelopersList.map(item => template(item)).join("");
console.log("6️⃣markup:", markup); //!

//! 7️⃣Додаємо у DOM
developersList.innerHTML = markup;
