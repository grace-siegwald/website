const container = document.getElementById("imageBox"); // finds the html needed

const images = container.querySelectorAll("img"); //looks for images

let showingFirst = true; //much like a boolean, if true which tracks which image is visible


container.addEventListener("click", () => { //this is a click event listener

if (showingFirst) { //checks the "boolean"

images[0].classList.remove("active");

images[1].classList.add("active");

} else {

images[1].classList.remove("active");

images[0].classList.add("active");

}

showingFirst = !showingFirst; // flips the "boolean"

})