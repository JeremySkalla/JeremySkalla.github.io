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
    content.hidden = true;
    if (currentActive == "about") {
        about.style.color = "#757575";
        about.addEventListener('click', activateAbout); // Readds ability to click
        document.getElementById('about-underline').classList.add("underline");
    }
    else if (currentActive == "projects") {
        projects.style.color = "#757575";
        projects.addEventListener('click', activateProjects); // Readds ability to click
        document.getElementById('projects-underline').classList.add("underline");
    }
    else if (currentActive == "work") {
        work.style.color = "#757575";
        work.addEventListener('click', activateWork); // Readds ability to click
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

// These are the same basically so I'm gonna comment only on the first
function activateAbout() {
    about.style.color = "#42A5F5";
    about.removeEventListener('click', activateAbout); // Removes ability to click
    document.getElementById('about-underline').classList.remove("underline");
    moveUp("about");
    contentText.innerHTML = aboutContent;
    contentHeader.innerHTML = aboutHeader;
}

function activateProjects() {
    projects.style.color = "#42A5F5";
    projects.removeEventListener('click', activateProjects); // Removes ability to click
    document.getElementById('projects-underline').classList.remove("underline");
    moveUp("projects");
    contentText.innerHTML = projectsContent1;
    contentHeader.innerHTML = projectsHeader1;
}

function activateWork() {
    work.style.color = "#42A5F5";
    work.removeEventListener('click', activateWork); // Removes ability to click
    document.getElementById('work-underline').classList.remove("underline");
    moveUp("work");
    contentText.innerHTML = workContent1;
    contentHeader.innerHTML = workHeader1;
}

about.addEventListener('click', activateAbout);
projects.addEventListener('click', activateProjects);
work.addEventListener('click', activateWork);
console.log(document.body.style.width);