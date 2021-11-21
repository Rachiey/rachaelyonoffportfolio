window.addEventListener('load', function(){
    var screen1 = document.getElementById('screen1'),
        indicator = document.getElementById('indicator'),
        header = document.getElementById('name'),
        currentTitle= document.getElementById('currentTitle'),
        steps = document.querySelectorAll('.screen__step'),
        step1Intro = document.querySelector('.introduction'),
        step2Skills = document.querySelector('.skills'),
        step3Edu = document.querySelector('.education'),
        step4Project = document.querySelector('.projects'),
        firstTimeline = new TimelineMax({ paused: true });

    TweenLite.defaultEase = Linear.easeNone;

    firstTimeline.to(header, 1000, { scale: 1, top: '35%' });
    firstTimeline.to(header, 1000, { scale: .5, top: '20%' });
    firstTimeline.to(currentTitle, 1000, { left: 0 });
    firstTimeline.to(header, 1000, { top: '-2%' });
    firstTimeline.to(currentTitle, 1000, { top: '-2%' }, '-=1000');
    firstTimeline.to(step1Intro, 1000, { rotationX: 0, visibility: 'visible' });
    firstTimeline.to(step2Skills, 1000, { rotationX: 0, visibility: 'visible' });
    firstTimeline.to(step3Edu, 1000, { rotationX: 0, visibility: 'visible' });
    firstTimeline.to(step4Project, 1000, { rotationX: 0, visibility: 'visible' });
    firstTimeline.to(screen1, 1000, { top: '-30%' }, '+=1500');
  

    scrollissimo.add(firstTimeline, 0, 60);

    scrollissimo.add(new TweenMax(indicator, 10500, { scale: 1, ease: Linear.easeNone, paused: true }), 0);

    window.addEventListener('scroll', function(){
        scrollissimo.knock();
});
});


/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills__content'),
    skillsHeader = document.querySelectorAll('.skills__header');

function toggleSkills() {
    let itemClass = this.parentNode.className;

    for(i = 0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skills__content skills__close';
    }

    if(itemClass === 'skills__content skills__close'){
        this.parentNode.className = 'skills__content skills__open';
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills);
});

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
    tab.addEventListener('click', ()=>{
        const target = document.querySelector(tab.dataset.target);

        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('qualification__active');
        });

        target.classList.add('qualification__active');

        tabs.forEach(tab =>{
            tab.classList.remove('qualification__active');
        })
        tab.classList.add('qualification__active');
    })
})



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

