
// const btn= document.querySelector(`.button[data_key="${e.keyCode}"]`);
// if(event.target.classList.contains("piano_key")) {
function removeTransition(e) {
    console.log (e);
    if (e.propertyName !== "border-bottom-color") return;
    e.target.classList.remove("btn-active");
    e.target.classList.remove("btn-required");

}

document.addEventListener ("click",(e)=>{
    const target=e.target;//click on letters
    if (e.target.classList.contains('button')) {
    const note = e.target.dataset.note;
    const btn= document.querySelector(`.button[data-note="${note}"]`);
   
    btn.classList.add ("btn-active"); 
}
    if (e.target.classList.contains('start')) {
        play (counter);
    }
})


let counter = 5;
const keys = Array.from(document.querySelectorAll(".button"));
console.log (keys); 
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
    let arr=[];
    while (innerCounter<counter) {
        let num=Math.floor(Math.random()*4);
        arr.push (num);
        for (let i=0; i<arr.length; i++){
            let color =arr[i];
            
            setTimeout (timer, 2000, color);
        innerCounter++;
        console.log(num);
        console.log (arr);
    }
    
    }
     
}



