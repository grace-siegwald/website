function changeEyes1() {
    const eyes = document.querySelectorAll('.eyes');
    eyes.forEach((eye) => {
        eye.classList.remove('visible');
    });
    eyes[0].classList.add('visible');
}
function changeEyes2() {
    const eyes = document.querySelectorAll('.eyes');
    eyes.forEach((eye) => {
        eye.classList.remove('visible');
    });
    eyes[1].classList.add('visible');
}