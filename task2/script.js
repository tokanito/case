
// const btn= document.querySelector(`.button[data_key="${e.keyCode}"]`);
// if(event.target.classList.contains("piano_key")) {
function removeTransition(e) {
   
    if (e.propertyName !== "border-bottom-color") return;
    e.target.classList.remove("btn-active");
    e.target.classList.remove("btn-required");

}
var userArr = []
var arr = [];
document.addEventListener ("click",(e)=>{
    const target=e.target;//click on letters
    if (e.target.classList.contains('button')) {
    const note = e.target.dataset.note;
    const btn= document.querySelector(`.button[data-note="${note}"]`);   
    btn.classList.add ("btn-active"); 
    const noteNum = parseInt (note,10);
    userArr.push (noteNum);
    console.log (userArr);
    console.log (arr);

}
    if (e.target.classList.contains('start')) {
        play (counter);
        console.log (arr);
        
    }
})


let counter = 5;
const keys = Array.from(document.querySelectorAll(".button"));

keys.forEach(button => button.addEventListener("transitionend", removeTransition));
const start = document.querySelector(".start");
console.log (start);

function task (color){
    
        const btn= document.querySelector(`.button[data-note="${color}"]`);
       
        btn.classList.add ("btn-required");
         

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
                setTimeout(timer, 1000*i, arr[i]);
        
        
            }
        }
    }
    
    
    return arr;
     
}
if (arr===userArr) {
    console.log ('auuff')

    }




