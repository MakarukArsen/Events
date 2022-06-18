const buttons = document.querySelector(".buttons");
console.log(buttons);

function playSound(target){
    const mp3 = new Audio(`/sounds/${target}.mp3`);
    mp3.play();
}
buttons.addEventListener("click", (e) => {
    const target = e.target.closest(".button").id;
    if(e.target.closest(".button")){
        playSound(target);
    }
});