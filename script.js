const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const clouds = document.querySelector(".cloud");
const dust1 = document.querySelector(".dust");
const dust2 = document.querySelector(".dust2");
const dust3 = document.querySelector(".dust3");

function jump () {
    mario.classList.add("jump");
    
    setTimeout(() => {
        mario.classList.remove("jump");
    }, 500);
}

const loop = setInterval (()=> {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace("px", "");
    const cloudPosition = clouds.offsetLeft;
    const dust1Position = dust1.offsetLeft;
    const dust2Position = dust2.offsetLeft;
    const dust3Position = dust3.offsetLeft;


    console.log("loop");
    
    if(pipePosition <= 140 && pipePosition > 0 && marioPosition < 100) {
        clouds.style.animation = "none";
        clouds.style.left = `${cloudPosition}px`;
        
        pipe.style.animation = "none";
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = "none";
        mario.style.bottom = `${marioPosition}px`;

        mario.src = "./img/game-over.png";
        mario.style.width = "70px";
        mario.style.marginLeft = "62px";

        dust1.style.animation = "none";
        dust2.style.animation = "none";
        dust3.style.animation = "none";
        dust1.style.left = `${dust1Position}px`;
        dust2.style.left = `${dust2Position}px`;
        dust3.style.left = `${dust3Position}px`;



        clearInterval(loop);
    }
}, 10);

document.addEventListener("keydown", jump)
document.addEventListener("click", jump)

