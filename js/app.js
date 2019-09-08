var flag = 0;

window.addEventListener('keydown', (e) => {
    if(flag === 0) {
        const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

        key.classList.add('pressed');
        audio.play();

        setTimeout(() => {
            key.classList.remove('pressed');
            audio.currentTime = 0;
            audio.pause();
        },200);
    } 

});



// callAnimate();

function callAnimate(){
    flag = 1;
    const party = document.querySelector('.party');
    const h = document.querySelector('.header');
    const btn = document.querySelector('button');
    const body =document.querySelector('body');

    party.play();
    h.style.display = "none";
    btn.style.display = "none";
    body.style.backgroundColor = "#2f3640";

    var i = 65;
     setInterval(() => {
         animate(i)
     }, 200);
     setInterval(() => {
         i++;
         if(i == 90){
            initph2();
         }
     }, 201);
}

function initph2() {
    var j = 65;
        setInterval(() => {
            phase2(j);
        }, 200);
        setInterval(() => {
            j++;
            if(j == 90) {
                const body = document.querySelector('body');
                body.classList.add('bghue');
            }
        }, 201);
}
function animate(i){
        const key = document.querySelector(`.key[data-key="${i}"]`);
        key.classList.add('pressed');
}

function phase2(j) {
    const key = document.querySelector(`.key[data-key="${j}"]`);
    key.classList.remove('pressed');
    key.classList.add('pressed-2');
}