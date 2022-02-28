var currentActive = "main";
let jeremyskalla = document.getElementById("name");
let linkDiv = document.getElementById("link-container");
let secondLinkDiv = document.getElementById('second-link-div');
let about = document.getElementById('about');
let projects = document.getElementById('projects');
let work = document.getElementById('workexp');
let content = document.getElementById('content')

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

    jeremyskalla.style.top = "0%";
    jeremyskalla.style.fontSize="4em";

    linkDiv.style.top = "5%";
    linkDiv.style.fontSize="1.5em";
    secondLinkDiv.style.margin = "0 5.75%";
}

function activateAbout() {
    about.style.color = "#42A5F5";
    about.style.cursor = "default";
    document.getElementById('about-underline').classList.remove("underline");
    moveUp("about");
    setTimeout(function () { content.hidden = false; }, 1000);
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