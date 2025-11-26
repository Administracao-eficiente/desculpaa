const goose = document.getElementById("goose");
const box = document.getElementById("message-box");

function runAnimation() {
    const center = window.innerWidth / 2 - box.offsetWidth / 2;

    // pato aparece
    setTimeout(() => {
        goose.style.left = "120px";
        box.style.left = "200px";
    }, 300);

    // empurra até o centro
    setTimeout(() => {
        goose.style.left = (center - 130) + "px";
        box.style.left = center + "px";
    }, 2500);

    // pato vai embora
    setTimeout(() => {
        goose.style.transition = "left 3s linear";
        goose.style.left = "-200px";
    }, 5200);
}

runAnimation();
