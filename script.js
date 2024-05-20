let imageSlider1 = 0;
let imageSlider2 = 0;
let imageSlider3 = 0;
let imageSlider4 = 0;

const leftButton1 = document.querySelector("#left-button1");
const rightButton1 = document.querySelector("#right-button1");
const projectImage1 = document.querySelector("#img1");
const leftButton2 = document.querySelector("#left-button2");
const rightButton2 = document.querySelector("#right-button2");
const projectImage2 = document.querySelector("#img2");
const leftButton3 = document.querySelector("#left-button3");
const rightButton3 = document.querySelector("#right-button3");
const projectImage3 = document.querySelector("#img3");
const leftButton4 = document.querySelector("#left-button4");
const rightButton4 = document.querySelector("#right-button4");
const projectImage4 = document.querySelector("#img4");

const projectImages = [projectImage1, projectImage2, projectImage3, projectImage4];
const imageSliders = [imageSlider1, imageSlider2, imageSlider3, imageSlider4];
const images1 = ["project1/ege_logo.png", "project1/ec_logo.png", "project1/pf_logo.png"];
const images2 = ["project2/gui.png", "project2/gui2.png", "project2/gui3.png", "project2/gui4.png"];
const images3 = ["profile pic v2-2.png", "blankSheet.png", "filledSheet.png", "galaxy_background.png"];
const images4 = ["project4/blankSheet.png", "project4/filledSheet.png", "project4/filledSheet2.png"];
const images = [images1, images2, images3, images4]

// parameters: (1, false) means that the second projects image is being changed and it was a right button press
leftButton1.addEventListener("click", () => changeImage(0, true));
leftButton2.addEventListener("click", () => changeImage(1, true));
leftButton3.addEventListener("click", () => changeImage(2, true));
leftButton4.addEventListener("click", () => changeImage(3, true));
rightButton1.addEventListener("click", () => changeImage(0, false));
rightButton2.addEventListener("click", () => changeImage(1, false));
rightButton3.addEventListener("click", () => changeImage(2, false));
rightButton4.addEventListener("click", () => changeImage(3, false));

function changeImage(slider, button) {
    if(button && imageSliders[slider] > 0) {
        imageSliders[slider]--;
        projectImages[slider].src = images[slider][imageSliders[slider]];
    }
    if(!button && imageSliders[slider] < images[slider].length - 1) {
        imageSliders[slider]++;
        projectImages[slider].src = images[slider][imageSliders[slider]];
    }
}


const hueSlider = document.getElementById("hue-slider");
const root = document.querySelector(":root");

hueSlider.addEventListener("input", hueChange);

function hueChange() {
    root.style.setProperty("--background-hue", `${hueSlider.value}deg`);
}