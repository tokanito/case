function removeTransition(e) {
   
    if (e.propertyName !== "border-bottom-color") return;
    e.target.classList.remove("btn-active");
    e.target.classList.remove("btn-required");

}
var userArr = []
var arr = [];

var timeDelay=1500;
const levelChoice =Array.from(document.querySelectorAll(".choice"));

levelChoice.forEach(choice => choice.addEventListener("click", (e)=>{
    const target=e.target;
    if (e.target.id=='1000') {
        timeDelay=1000;
    } else if (e.target.id=='1500'){
        timeDelay=1500;
    } else if (e.target.id=='400'){
        timeDelay=400;
    }
    
    score.innerHTML = "Score: 0";
    highest.innerHTML = "Highest: 0";
    max = 0;
    counter = 1;


}))


document.addEventListener ("click",(e)=>{
    const target=e.target;//click on letters
    if (e.target.classList.contains('button')) {
    const note = e.target.dataset.note;
    const audio= document.querySelector(`audio[data-note="${note}"]`);
    const btn= document.querySelector(`.button[data-note="${note}"]`);   
    btn.classList.add ("btn-active"); 
    audio.currentTime = 0;
    audio.play();
    const noteNum = parseInt (note,10);
    userArr.push (noteNum);
    check ();

}
    if (e.target.classList.contains('start')) {
        play (counter);
        score.innerHTML = "Score: 0";
        counter = 1;
        max = 0;
        highest.innerHTML = "Highest: 0";
        
    }
})


let counter = 1;
let max = 0;
const keys = Array.from(document.querySelectorAll(".button"));

keys.forEach(button => button.addEventListener("transitionend", removeTransition));
const start = document.querySelector(".start");
const score = document.querySelector(".score");
const highest = document.querySelector(".highest");



function task (color){
    
        const btn= document.querySelector(`.button[data-note="${color}"]`);
        const audio= document.querySelector(`audio[data-note="${color}"]`);
       
        btn.classList.add ("btn-required");
        audio.currentTime = 0;
        audio.play();
}
function timer (color){
    
    setTimeout (task, 200, color)
}

function play (counter) {
    let innerCounter = 0;
    arr=[];
    while (innerCounter<counter) {
        let num=Math.floor(Math.random()*4);
        arr.push (num);
        innerCounter++;
        if (innerCounter===counter) {
            for (let i=0; i<arr.length; i++){
                setTimeout(timer, timeDelay*i, arr[i]);
            }
        }
    }
    return arr;     
}
function check (){
   
if (arr.length===userArr.length) {
    let j=0;
    for (let i=0; i<arr.length; i++){
        if (arr[i]===userArr[i]){
            j++;
        }
    }
    if (j===arr.length){
        score.innerHTML = "Score: " + counter;
        if (counter>max){
            max= counter;
            highest.innerHTML = "Highest: " + max;
        }
        counter++;
        userArr=[];
        setTimeout (play, 1000, counter);
        }
    else {
        counter=1;
        userArr=[];
        score.innerHTML = "Game over";
        
    }
}
}




