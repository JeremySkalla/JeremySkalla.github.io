var currentActive = "main";
var mainNewTop = "0%";
var linkNewTextSize = "1.5em";
var movedUpOnce = false;

let jeremyskalla = document.getElementById("name");
let linkDiv = document.getElementById("link-container");
let secondLinkDiv = document.getElementById('second-link-div');
let about = document.getElementById('about');
let projects = document.getElementById('projects');
let work = document.getElementById('workexp');
let content = document.getElementById('content');
let contentText = document.getElementById('content-text');
let contentHeader = document.getElementById('content-header');

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
    console.log(movedUpOnce)
    if (!movedUpOnce) { // Changing page
        setTimeout(function () { content.hidden = false; }, 1000); // Move this to moveUp once content done for all
        movedUpOnce = true;
    }
    else {
        setTimeout(function () { content.hidden = false; }, 100);
    }
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
    contentText.innerHTML = aboutContent;
    contentHeader.innerHTML = aboutHeader;
}

function activateProjects() {
    projects.style.color = "#42A5F5";
    projects.style.cursor = "default";
    document.getElementById('projects-underline').classList.remove("underline");
    moveUp("projects");
    contentText.innerHTML = projectsContent1;
    contentHeader.innerHTML = projectsHeader1;
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
console.log(document.body.style.width);