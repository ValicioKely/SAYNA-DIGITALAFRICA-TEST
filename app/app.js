var audio1 = document.getElementById("audio1");
var bar = document.getElementById("bar");

window.addEventListener('click' , function () {
    audio1.play();
    setInterval(() => {
        bar.style.width = (audio1.currentTime*100)/audio1.duration + "%";
    }, 1000);
}
)
