let seconds = 0;
let minutes =0;
let hours = 0;

let start = document.getElementById('start'); 
let stop = document.getElementById('stop');
let reset = document.getElementById('reset'); 
let stopstatus = 0;

/* DOM ELEMENT FOR UPDATING TIMER */
let timer = document.querySelector('.timer');

/* TO START THE TIMER */
start.addEventListener('click', ()=>{
    if(stopstatus!==0){
        clearInterval(stopstatus);
    }
    stopstatus = setInterval(()=>{
        seconds+=1;
        if(seconds === 60){
            seconds = 0;
            minutes++;
            if(minutes === 60){
                minutes = 0;
                hours++;
            }
        }
    let h = hours < 10 ? ("0" + hours ): hours;
    let m = minutes < 10 ? ("0" + minutes) : minutes;
    let s = seconds < 10 ?("0" + seconds) : seconds;
    timer.innerHTML = ` ${h} : ${m} : ${s}`;
},1000);
});


/* TO STOP THE TIMER */
stop.addEventListener('click', ()=>{
    clearInterval(stopstatus);
});

/* TO RESET THE TIMER */
reset.addEventListener('click', ()=>{
    clearInterval(stopstatus);
    seconds = 0;
    minutes =0;
    hours = 0;
    timer.innerHTML = '00 : 00 : 00 ';
});
