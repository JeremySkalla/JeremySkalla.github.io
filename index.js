let jeremyskalla = document.getElementById("name");

let about = document.getElementById('about');
let projects = document.getElementById('projects');
let work = document.getElementById('workexp')

function modeChange() {
    console.log('hi')
    if (jeremyskalla.style.color == "rgb(33, 33, 33)") {
        jeremyskalla.style.color = "#FAFAFA";
        document.body.style.backgroundColor = "#212121"
    }
    else {
        jeremyskalla.style.color = "#212121";
        document.body.style.backgroundColor = "#FAFAFA"
    }
}