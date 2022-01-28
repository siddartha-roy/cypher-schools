let sec=00;
let tens=00;
let mins=00;
let interval;

let getSec=document.querySelector('.seconds');
let getTen=document.querySelector('.tens')
let getMin=document.querySelector('.mins')

let btnStart=document.querySelector('.start')
let btnStop=document.querySelector('.stop')
let btnReset=document.querySelector('.reset')


btnStart.addEventListener('click',()=>{
    clearInterval(interval);
    interval=setInterval(startTimer,10);
})

function startTimer(){
    tens++;
    if(tens<=9)
    {
        getTen.innerHTML='0'+tens;
    }
    if(tens>9)
    {
        getTen.innerHTML=tens;
    }
    if(tens>99)
    {
        sec++;
        getSec.innerHTML='0'+sec;
        tens=0;
        getTen.innerHTML=tens;
    }

    if(sec>9)
    {
        getSec.innerHTML=sec;
    }
    if(sec>59)
    {
        mins++;
        getMin.innerHTML='0'+mins;
        sec=0;
        getSec.innerHTML='0'+0;
    }

    if(mins>9)
    {
        getMin.innerHTML=mins;
    }
}

btnStop.addEventListener('click',()=>{
    clearInterval(interval);

})

btnReset.addEventListener('click',()=>{
    clearInterval(interval);
    tens='00';
    sec='00';
    mins='00';
    getMin.innerHTML=mins;
    getSec.innerHTML=sec;
    getTen.innerHTML=tens;
})