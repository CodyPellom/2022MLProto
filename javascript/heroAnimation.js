let runBtn = document.getElementById('runBtn');
let circle = document.getElementById('hero-circle');
let circle2 = document.getElementById('hero-circle2');
let circle3 = document.getElementById('hero-circle3');
let circle4 = document.getElementById('hero-circle4');
let circle5 = document.getElementById('hero-circle5');
let circle6 = document.getElementById('hero-circle6');
let circle7 = document.getElementById('hero-circle7');
let circle8 = document.getElementById('hero-circle8');
let circle9 = document.getElementById('hero-circle9');
let circle10 = document.getElementById('hero-circle10');
let circle11 = document.getElementById('hero-circle11');
let circle12 = document.getElementById('hero-circle12');
let animatedSection = document.getElementById('animated-hero-section');

let colorList = ["13c561", "3d3733", "2510b5", "51f08f", "fb391e", "b2dc35", "fc7101", "3b7a07"];

setInterval(function(){
    initHero(circle);
    initHero(circle2);
    initHero(circle3);
    initHero(circle4);
    initHero(circle5);
    initHero(circle6);
    initHero(circle7);
    initHero(circle8);
    initHero(circle9);
    initHero(circle10);
    initHero(circle11);
    initHero(circle12);
}, 2000)

function initHero(target) {
    anime({
        targets: target,
        backgroundColor: randColor,
        width: randomNumber(150),
        height: randomNumber(150),
        translateX: randomNumber(800),
        translateY: randomNumber(50),
        easing: 'easeInOutSine',
        duration: 1500
    });
}

function randomNumber(length) {
    let random_int = Math.floor(Math.random() * length);
    return random_int;
}

function genCircle() {
let cDiv = document.createElement('div');
cDiv.className = 'gen-circle';
cDiv.style.width = `${randomNumber100}`+ px;
cDiv.style.height = `${randomNumber100}` + px;
return cDiv;
}

function randColor(){
    let random_int = Math.floor(Math.random() * 8);
    return `#${colorList[random_int]}`;
}