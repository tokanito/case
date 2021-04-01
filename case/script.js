var completed =false;
const confirmed = document.querySelector ('.btn');
const lastName = document.querySelector ('.feedback--input__lastname');
const firstName = document.querySelector ('.feedback--input__name');
const birth = document.querySelector ('.feedback--input__date');
const phoneNumber = document.querySelector ('.feedback--input__number');
const group = document.querySelector ('.feedback--input__group');
const city = document.querySelector ('.address--input__city');
const documentType = document.querySelector ('.passport-form');
const documentDate = document.querySelector ('.passport-form--option__date');

let arr = [confirmed,lastName,firstName,birth,phoneNumber,group,city,documentType,documentDate]
for (let i=0; i<arr.length; i++){
    console.log (arr[i]);
}





confirmed.addEventListener ('click', function(){
    const confirmForm=document.querySelector(".img-confirm");
    confirmForm.innerHTML = "Форма успешно отправлена";
    
    console.log (confirmForm);
})