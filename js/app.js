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
    start();
}

    function start() {
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
                initphase2();
             }
         }, 201);
    }
    
    
    function animate(i){
            const key = document.querySelector(`.key[data-key="${i}"]`);
            key.classList.add('pressed');
    }
        
    function initphase2() {
        var j = 65;
            setInterval(() => {
                phase2(j);
            }, 200);
            setInterval(() => {
                j++;
                if(j == 90) {
                    const body = document.querySelector('body');
                    body.classList.add('bghue');
                    initphase3();
                }
            }, 201);
    }
    
    function initphase3() {
        var k = 65;
            setInterval(() => {
                phase3(k);
            }, 200);
            setInterval(() => {
                k++;
                if(k == 90) {
                    initphase4();
                }
            }, 201);
    }
    function initphase4() {
        var l = 65;
            setInterval(() => {
                phase4(l);
            }, 200);
            setInterval(() => {
                l++;
                if(l == 90) {
                    initphase5();
                }
            }, 201);
    }
    
    function initphase5() {
        var m = 65;
        setInterval(() => {
            phase5(m);
        }, 200);
        setInterval(() => {
            m++;
            if(m == 90) {
                initphase6();
            }
        }, 201);
    }
    
    function initphase6() {
        var n = 65;
        setInterval(() => {
            phase6(n);
        }, 200);
        setInterval(() => {
            n++;
            // if(l == 90) {
            //     initphase6();
            // }
        }, 201);
    }
    
    
    function phase2(j) {
        const key = document.querySelector(`.key[data-key="${j}"]`);
        key.classList.remove('pressed');
        key.classList.add('pressed-2');
    }
    
    function phase3(k) {
        const key = document.querySelector(`.key[data-key="${k}"]`);
        key.classList.add('pressed-3');
    }
    
    function phase4(l){
        const key = document.querySelector(`.key[data-key="${l}"]`);
        key.classList.remove('pressed-3');
        key.classList.remove('pressed-2');
        key.classList.add('pressed-4');
    }
    
    function phase5(m) {
        const key = document.querySelector(`.key[data-key="${m}"]`);
        key.classList.remove('pressed-4');
    }
    
    function phase6(n) {
        const key = document.querySelector(`.key[data-key="${n}"]`);
        key.classList.add('pressed-6');
    
        const rest = document.querySelector('.return');
        setTimeout(() => {
            rest.style.display = "block";
        }, 5000);
    }

function reset() {
    flag = 0;
    const keys = document.querySelectorAll('.key');
    const party = document.querySelector('.party');
    const h = document.querySelector('.header');
    const btn = document.querySelector('button');
    const body =document.querySelector('body');
    const rest = document.querySelector('.return');

    keys.forEach(key => {
        key.classList.remove('pressed-6');
    });
    
    party.pause();
    party.currentTime = 0;
    
    h.style.display = "block";
    btn.style.display = "inline-block";
    body.style.backgroundColor = "#3498db";
    body.classList.remove('bghue');

    rest.style.display = "none";
}