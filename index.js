var currentActive = "main"
let jeremyskalla = document.getElementById("name");
let bodyDiv = document.getElementById("body-container");
let about = document.getElementById('about');
let projects = document.getElementById('projects');
let work = document.getElementById('workexp');

function modeChange() {
    if (jeremyskalla.style.color == "rgb(33, 33, 33)") {
        jeremyskalla.style.color = "#FAFAFA";
        document.body.style.backgroundColor = "#212121"
    }
    else {
        console.log(jeremyskalla.style.color)
        jeremyskalla.style.color = "#212121";
        document.body.style.backgroundColor = "#FAFAFA"
    }
}

function moveBack() {
    bodyDiv.classList.remove("top-after");
}

function moveUp() {
    currentActive = "about"; // Works for scoping
    bodyDiv.classList.add("top-after");
    jeremyskalla.style.cursor = "pointer";
    about.style.color = "#42A5F5";
    document.getElementById('about-underline').classList.remove("underline");
}

jeremyskalla.addEventListener('click', moveBack)
about.addEventListener('click', moveUp);