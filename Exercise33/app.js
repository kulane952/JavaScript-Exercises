const header = document.querySelector("#header");
const paragraph = document.querySelector("#paragraph");



function changeContent() {
    header.textContent = "Welcome to my website";
    paragraph.innerHTML = "Welcome to my <b>website</b>";

}

function changeElement() {
    paragraph.innerHTML = "Welcome to my <b>website</b>";

}