const arrows = document.querySelectorAll(".arrow");
const gameLists = document.querySelectorAll(".game-list");

arrows.forEach((arrow,i) => {
    const itemNumber = gameLists[i].querySelectorAll("img").length;
    let clickCounter = 0;
    arrow.addEventListener("click", () => {
        const ratio = Math.floor(window.innerWidth/270);
        clickCounter++;
        if(itemNumber - (4 + clickCounter) + (4 - ratio) >= 0){
            gameLists[i].style.transform = `translateX(${
                gameLists[i].computedStyleMap().get("transform")[0].x.value
                -300}px)`;
        }else{
            gameLists[i].style.transform = "translateX(0)";
            clickCounter = 0;
        }
        });
        console.log(Math.floor(window.innerWidth/270));
    });

let input = document.getElementById("input");
let inputIcon = document.getElementById("inputIcon");
let body = document.getElementById("body");
inputIcon.onclick = function inputClick(){
    input.style.opacity = 1;
    body.style.opacity = 0.8;
}




    

