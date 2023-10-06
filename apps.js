let onlydiv = document.getElementById("div_one");

function changecolor(details) {
    details[`target`][`style`][`color`] = `red`;
    
}
onlydiv.addEventListener('click', changecolor);


let onlysection = document.getElementById("section_one");

function DoubleClicking() {
    onlysection.style.fontSize = "40px";
}
onlysection.addEventListener("dblclick", DoubleClicking);


let onlyarticle = document.getElementById("article_one");

function printMouseOver() {
    onlyarticle.style.backgroundColor = "magenta";
}

onlyarticle.addEventListener("mouseover", printMouseOver);


let spacebarkey = document.getElementById("body");

function spacebar() {
    spacebarkey.style.backgroundColor = "aqua";
}
spacebarkey.addEventListener("keydown", spacebar);