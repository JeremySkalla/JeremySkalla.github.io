let modeSwitch = document.getElementById("modeswitch");
let favicon = document.getElementById("testico");

function modeChange() {
    if (jeremyskalla.style.color == "rgb(33, 33, 33)") {
        jeremyskalla.style.color = "#FAFAFA";
        content.style.color = "#FAFAFA";
        document.documentElement.style.setProperty("--mouseover-color", "#FAFAFA");
        document.body.style.backgroundColor = "#212121";
        favicon.setAttribute("href", "resources/logo-dark.png")
    }
    else {
        jeremyskalla.style.color = "#212121";
        content.style.color = "#212121";
        document.documentElement.style.setProperty("--mouseover-color", "#212121");
        document.body.style.backgroundColor = "#FAFAFA";
        favicon.setAttribute("href", "resources/logo-light.png")
    }
}

modeSwitch.addEventListener('change', modeChange);