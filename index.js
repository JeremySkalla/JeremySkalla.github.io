var currentActive = "main";
var mainNewTop = "0%";
var linkNewTextSize = "1.5em";
let jeremyskalla = document.getElementById("name");
let linkDiv = document.getElementById("link-container");
let secondLinkDiv = document.getElementById('second-link-div');
let about = document.getElementById('about');
let projects = document.getElementById('projects');
let work = document.getElementById('workexp');
let content = document.getElementById('content');

function modeChange() {
    if (jeremyskalla.style.color == "rgb(33, 33, 33)") {
        jeremyskalla.style.color = "#FAFAFA";
        document.body.style.backgroundColor = "#212121";
    }
    else {
        console.log(jeremyskalla.style.color)
        jeremyskalla.style.color = "#212121";
        document.body.style.backgroundColor = "#FAFAFA";
    }
}

function restoreToPrev() {
    if (currentActive == "about") {
        content.hidden = true;
        about.style.color = "#757575";
        work.style.cursor = "pointer";
        document.getElementById('about-underline').classList.add("underline");
    }
    else if (currentActive == "projects") {
        projects.style.color = "#757575";
        work.style.cursor = "pointer";
        document.getElementById('projects-underline').classList.add("underline");
    }
    else if (currentActive == "work") {
        work.style.color = "#757575";
        work.style.cursor = "pointer";
        document.getElementById('work-underline').classList.add("underline");
    }
}

function moveUp(newactive) {
    restoreToPrev();
    currentActive = newactive;

    jeremyskalla.style.top = mainNewTop;
    jeremyskalla.style.fontSize = "4em";

    linkDiv.style.top = "5%";
    linkDiv.style.fontSize = linkNewTextSize;
    secondLinkDiv.style.margin = "0 5.75%";
}

function activateAbout() {
    about.style.color = "#42A5F5";
    about.style.cursor = "default";
    document.getElementById('about-underline').classList.remove("underline");
    moveUp("about");
    setTimeout(function () { content.hidden = false; }, 1000); // Move this to moveUp once content done for all
}

function activateProjects() {
    projects.style.color = "#42A5F5";
    projects.style.cursor = "default";
    document.getElementById('projects-underline').classList.remove("underline");
    moveUp("projects");
}

function activateWork() {
    work.style.color = "#42A5F5";
    work.style.cursor = "default";
    document.getElementById('work-underline').classList.remove("underline");
    moveUp("work");
}

about.addEventListener('click', activateAbout);
projects.addEventListener('click', activateProjects);
work.addEventListener('click', activateWork);
console.log(document.body.style.width)

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    content.style.width = "90%"; // Adjust width for mobile devices
    content.style.fontSize = "2.5em";
    linkDiv.style.top = "40%";
    mainNewTop = "2.5%";
    linkNewTextSize = "2em";
}