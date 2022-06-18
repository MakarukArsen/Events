const buttonsGroup = document.querySelector(".buttons");
const buttonsColection = buttonsGroup.querySelectorAll(".button");
function playSound(target){
    const mp3 = document.querySelector(`audio[data-key="${target}"]`);
    if(!mp3) return;
    mp3.play();
}
document.addEventListener("keyup", (e) => {
    const btn = document.getElementById(e.keyCode);
    if(btn == null) return;
    btn.classList.add("_active");
    setTimeout(() => {
        btn.classList.remove("_active");
    }, 500);
    playSound(e.keyCode);
});
buttonsGroup.addEventListener("click", (e) => {
    const target = e.target.closest(".button").id;
    if(e.target.closest(".button")){
        playSound(target);
    }
});