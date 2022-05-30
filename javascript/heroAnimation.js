var circle = document.getElementById('hero-circle');
var animatedSection = document.getElementById('animated-hero-section');
var cNode = circle;
var cloneCircle = cNode.cloneNode(true);
animatedSection.appendChild(cloneCircle);

function initHero(target) {
    anime({
        targets: target,
        translateX: randomNumber100,
        translateY: randomNumber100
    });
}

initHero(cNode);

function randomNumber1000() {
    var random_int = Math.floor(Math.random() * 1000);
    return random_int;
}

function randomNumber100() {
    var random_int = Math.floor(Math.random() * 100);
    return random_int;
}

function randomNumber10() {
    var random_int = Math.floor(Math.random() * 10);
    return random_int;
}

function genCircle() {
var cDiv = document.createElement('div');
cDiv.className = 'gen-circle';
cDiv.style.width = `${randomNumber100}`+ px;
cDiv.style.height = `${randomNumber100}` + px;
return cDiv;
}
