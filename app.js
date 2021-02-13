function createHeart(){
    const heart = document.createElement('div');

    heart.classList.add('heart');
    heart.innerText = '❤️';
    heart.style.left = Math.random()*100+'vw';
    heart.style.animationDirection = Math.random()*2+3+'s';
    document.body.appendChild(heart);
}
setInterval(createHeart, 300);