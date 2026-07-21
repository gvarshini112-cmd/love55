const container = document.getElementById("hearts");

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("floating-heart");

    heart.innerHTML = "❤";

    // Random horizontal position
    heart.style.left = Math.random() * 100 + "vw";

    // Random size
    heart.style.fontSize = (5 + Math.random() * 15) + "px";

    // Random animation duration
    heart.style.animationDuration = (4 + Math.random() * 6) + "s";

    // Random delay
    heart.style.animationDelay = Math.random() * 2 + "s";

    container.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 10000);
}

// Create LOTS of hearts
setInterval(createHeart, 40);

// White center heart animation
const whiteHeart = document.getElementById("heart");

if (whiteHeart) {

    setInterval(() => {

        whiteHeart.style.transform = "scale(1.2)";

        setTimeout(() => {
            whiteHeart.style.transform = "scale(1)";
        }, 300);

    }, 1000);

}
function showLove(){

    document.getElementById("love-message").style.display="block";

}


function showFinal(){

    document.getElementById("love-message").style.display="none";

    document.getElementById("final-message").style.display="block";

}