const buttonsGroup = document.querySelector(".buttons");
const buttonsColection = buttonsGroup.querySelectorAll(".button");
function playSound(target){
    const mp3 = document.querySelector(`audio[data-key="${target}"]`);
    if(!mp3) return;
    mp3.play();
}
function makeActive(target){
    const btn = document.getElementById(target);
    if(btn == null) return;
    btn.classList.add("_active");
    setTimeout(() => {
        btn.classList.remove("_active");
    }, 500);
}
document.addEventListener("keyup", (e) => {
    makeActive(e.keyCode);
    playSound(e.keyCode);
});
buttonsGroup.addEventListener("click", (e) => {
    makeActive(e.target.id);
    if(e.target.closest(".button")){
        playSound(e.target.id);
    }
});