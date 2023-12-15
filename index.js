var defaultStyle = "dark";
const validStyleNames = ["light", "dark"];


function setStyleSheet(url) {
    console.log("Setting the stylesheet variable to " + url);
    var stylesheet = document.getElementById("stylesheet");
    stylesheet.setAttribute('href', url);
    return (null);
}

function setStylePreference(preference) {
    localStorage.setItem("style", validStyleNames.includes(preference) ? preference : defaultStyle);
    return (null);
}

// If there is a style already stored in local storage then we want to use that.
// Otherwise we should set it to the default,this way there should be a seemless
// transition between pages.
function getStylePreference() {
    var noExistingStyle = (!localStorage.getItem("style"));
    if (noExistingStyle) {
        console.log("no style variable found in local storage");
    }
    var chosenStyle = (noExistingStyle ? defaultStyle : localStorage.getItem("style"));
    return chosenStyle;
}

function toggleStyle() {
    var currPreference = getStylePreference();
    if (currPreference == "dark") {
        setStylePreference("light");
    } else {
        setStylePreference("dark");
    }
    updateStyle();
    return (null);
}

function updateStyle() {
    var preference = getStylePreference();
    var styleUrl = (preference == "light") ? "./css/stylesheet.css" : "./css/stylesheet-dark.css";
    setStyleSheet(styleUrl);
    return (null);
}

updateStyle();


// This is where we set up the page for the home page.
var imageFilePaths = [
    "hail-science.png",
    "skull.png",
    "moe.gif",
    "whale-hello.gif",
    "blueberry.jpg",
    "bold-and-brash.webp",
    "lockdown-graffiti.jpg",
    "free-speech-flag.png"
].map((x) => "./resources/" + x);

var fileNumber = Math.floor(Math.random() * imageFilePaths.length);

document
    .getElementById("myPicture")
    .setAttribute("src", imageFilePaths[fileNumber]);
