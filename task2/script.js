
// const btn= document.querySelector(`.button[data_key="${e.keyCode}"]`);
// if(event.target.classList.contains("piano_key")) {
function removeTransition(e) {
    console.log (e);
    if (e.propertyName !== "border-bottom-color") return;
    e.target.classList.remove("btn-active");
}

document.addEventListener ("click",(e)=>{
    const target=e.target;//click on letters
    if (e.target.classList.contains('button')) {
    const note = e.target.dataset.note;
    const btn= document.querySelector(`.button[data-note="${note}"]`);
   
    btn.classList.add ("btn-active"); 
}
})


let counter = 1;
const keys = Array.from(document.querySelectorAll(".button"));
console.log (keys); 
keys.forEach(button => button.addEventListener("transitionend", removeTransition));
const start = document.querySelector(".start");
console.log (start);

start.addEventListener("click", play (counter));
console.log (counter);





function play (counter) {
    let innerCounter = 0;
    let arr=[];
    if (innerCounter<counter) {
        let num=Math.floor(Math.random()*4);
        arr.push (num);
        console.log(num);
        console.log (arr);
    }
     
}



