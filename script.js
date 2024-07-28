//this is for the animation of text

let words = document.querySelectorAll(".word");
words.forEach((word) => {
    let letters = word.textContent.split("");
    word.textContent ="";
    letters.forEach((letter) => {
        let span = document.childElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
    });
});

let currentWordIndex = 0;
let maxWordIndex = words.length - 1;
words[currentWordIndex].style.opacity = "1";

let changeText = () => {
    const currentWord = words[currentWordIndex];
    const nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1]

    Array.from(currentWord.children).forEach((letter, i) => {
        setTimeout(() => {
            letter.className = "letter out";
        }, i * 80);
    });
    nextWord.style.opacity = "1";
    Array.from(nextWord.children).forEach((letter, i) => {
        letter.className = "letter behind";
        setTimeout(() => {
            letter.className = "letter in";
        }, 340 + i * 80);
    });
    currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};

changeText();
setInterval(changeText, 3000)


// circle skill


const circles = document.querySelectorAll(".circle");
circles.forEach(elem => {
    var dots = elem.getAttribute("date-dots");
    var marked = elem.getAttribute("data-percent");
    var percent = Math.floor(dots * marked / 100);
    var points = "";
    var rotate = 360 / dots



    for (let i = 0; i < dots; i++) {
        points += ` <div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`
    }
    elem.innerHTML = points;

    const pointsMarked = elem.querySelectorAll(".points");
    for (let i = o; i < percent; i++) {
        pointsMarked[i].classList.add('marked')
    }
})

// mix it up protfolio section

var mixer = mixitup('.portfolio-gallery')

// active menu

const menuLi = document.querySelectorAll('header ul li a');
const section = document.querySelectorAll('section')

function activeMenu() {
    const len = section.length;
    while (--len & window.scrollY + 97 < section[len].offsetTop) { }
    menuLi.forEach(sec => sec.classList.remove("active"));
    menuLi[len].classList.add("active");
}

activeMenu();
window.addEventListener("scroll", activeMenu);

// sticky navbar
const header = document.querySelector("header");
window.addEventListener("scroll", function () {
    header.classList.toggle("sticky",window.scrollY > 50)
})

// toggle icon navbar

const menuIcon = document.querySelector("#menu-icon")
const navlist = document.querySelector(".navlist")

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x")
    navlist.classList.toggle("open");
}

window.onscroll = () => {
    menuIcon.classList.remove("bx-x");
    navlist.classList.remove("open");
}

// parallax
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry, isIntersection) {
            entry.target.classList.add("show-items");
        } else {
            entry.target.classList.remove("show-items");
        }
    })
})


const scrollScale = document.querySelectorAll(".scroll-scale");
scrollScale.forEach((el) => observer.observe(el));


const scrollButtom = document.querySelectorAll(".scroll-buttom");
scrollButtom.forEach((el) => observer.observe(el));


const scrollTop = document.querySelectorAll(".scroll-top");
scrollTop.forEach((el) => observer.observe(el));





// // Text Animation
// let words = document.querySelectorAll(".word");
// words.forEach((word) => {
//     let letters = word.textContent.split("");
//     word.textContent = "";
//     letters.forEach((letter) => {
//         let span = document.createElement("span");
//         span.textContent = letter;
//         span.className = "letter";
//         word.append(span);
//     });
// });

// // Circle Skill Animation
// const circles = document.querySelectorAll(".circle");
// circles.forEach(elem => {
//     var dots = elem.getAttribute("data-dots");
//     var marked = elem.getAttribute("data-percent");
//     var percent = Math.floor(dots * marked / 100);
//     var points = "";
//     var rotate = 360 / dots;

//     for (let i = 0; i < dots; i++) {
//         points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
//     }
//     elem.innerHTML = points;

//     const pointsMarked = elem.querySelectorAll(".points");
//     for (let i = 0; i < percent; i++) {
//         pointsMarked[i].classList.add('marked');
//     }
// });

// // MixItUp Plugin
// var mixer = mixitup('.portfolio-gallery');

// // Active Menu
// const menuLi = document.querySelectorAll('header ul li a');
// const section = document.querySelectorAll('section');

// function activeMenu() {
//     const len = section.length;
//     while (--len >= 0 && window.scrollY + 97 < section[len].offsetTop) {}
//     menuLi.forEach(sec => sec.classList.remove("active"));
//     menuLi[len].classList.add("active");
// }

// activeMenu();
// window.addEventListener("scroll", activeMenu);

// // Sticky Navbar
// const header = document.querySelector("header");
// window.addEventListener("scroll", function () {
//     header.classList.toggle("sticky", window.scrollY > 50);
// });

// // Toggle Icon Navbar
// const menuIcon = document.querySelector("#menu-icon");
// const navlist = document.querySelector(".navlist");

// menuIcon.onclick = () => {
//     menuIcon.classList.toggle("bx-x");
//     navlist.classList.toggle("open");
// };

// window.onscroll = () => {
//     menuIcon.classList.remove("bx-x");
//     navlist.classList.remove("open");
// };

// // Parallax Effect
// const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//             entry.target.classList.add("show-items");
//         } else {
//             entry.target.classList.remove("show-items");
//         }
//     });
// });

// const scrollScale = document.querySelectorAll(".scroll-scale");
// scrollScale.forEach((el) => observer.observe(el));

// const scrollButtom = document.querySelectorAll(".scroll-buttom");
// scrollButtom.forEach((el) => observer.observe(el));

// const scrollTop = document.querySelectorAll(".scroll-top");
// scrollTop.forEach((el) => observer.observe(el));
