/*==================== PORTFOLIO SWIPER  ====================*/
let swiper = new Swiper(".portfolio__container", {
    cssMode: true,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});


/*==================== THEME TOGGLE ====================*/
const springIcon = document.querySelector('.spring-season');
const summerIcon = document.querySelector('.summer-season');
const autumnIcon = document.querySelector('.autumn-season');
const winterIcon = document.querySelector('.winter-season');
const body = document.body;

const theme = localStorage.getItem("theme");
const isSpring = localStorage.getItem('isSpring');
const isSummer = localStorage.getItem('isSummer');
const isAutumn = localStorage.getItem('isAutumn');
const isWinter = localStorage.getItem('isWinter');


if (theme) {
body.classList.add(theme);
isSpring && body.classList.add('spring-theme');
isSummer && body.classList.add('summer-theme');
isAutumn && body.classList.add('autumn-theme');
isWinter && body.classList.add('winter-theme');
}


summerIcon.onclick = () => {
if (body.classList.contains('spring-theme') || body.classList.contains('autumn-theme') || body.classList.contains('winter-theme')) {
    body.classList.remove('spring-theme');
    body.classList.remove('autumn-theme');
    body.classList.remove('winter-theme')
    body.classList.add('summer-theme');
localStorage.setItem(theme, 'summer-theme')
} else {
    body.classList.contains('summer-theme');
  
  localStorage.setItem('isSummer', true);
}

};

springIcon.onclick = () => {
if (body.classList.contains('summer-theme') || body.classList.contains('autumn-theme') || body.classList.contains('winter-theme')) {
    body.classList.remove('summer-theme');
    body.classList.remove('autumn-theme');
    body.classList.remove('winter-theme')
    body.classList.add('spring-theme');
localStorage.setItem(theme, 'spring-theme')
} else {
body.classList.contains('summer-theme');

localStorage.setItem('isSpring', true);
}
};


autumnIcon.onclick = () => {
if (body.classList.contains('spring-theme') || body.classList.contains('summer-theme') || body.classList.contains('winter-theme')) {
  body.classList.remove('spring-theme');
  body.classList.remove('summer-theme');
  body.classList.remove('winter-theme')
  body.classList.add('autumn-theme');
//   localStorage.removeItem('isAutumn');

} else {
    body.classList.contains('autumn-theme');
  
  localStorage.setItem('isAutumn', true);
}
};

winterIcon.onclick = () => {
if (body.classList.contains('spring-theme') || body.classList.contains('summer-theme') || body.classList.contains('autumn-theme')) {
  body.classList.remove('spring-theme');
  body.classList.remove('summer-theme');
  body.classList.remove('autumn-theme');
  body.classList.add('winter-theme')

} else {
    body.classList.contains('winter-theme');
  
  localStorage.setItem('isWinter', true);
}
};

