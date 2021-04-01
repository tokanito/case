var completed =false;
const confirmed = document.querySelector ('.btn');





let clientNumber =0;


confirmed.addEventListener ('click', function(){
    // clientNumber++;
    // var 
    
    const lastName = document.querySelector ('.feedback--input__lastname').value;
    const firstName = document.querySelector ('.feedback--input__name').value;
    const birth = document.querySelector ('.feedback--input__date').value;
    const phoneNumber = document.querySelector ('.feedback--input__number').value;
    const group = document.querySelector ('.feedback--input__group').value;
    const city = document.querySelector ('.address--input__city').value;
    const documentType = document.querySelector ('.passport-form--option__type').value;
    const documentDate = document.querySelector ('.passport-form--option__date').value;


    const confirmForm=document.querySelector(".img-confirm");
    confirmForm.innerHTML = "Форма успешно отправлена";
   
    let arr = [lastName,firstName,birth,phoneNumber,group,city,documentType,documentDate];
    var k=0;
    for (let i=0; i<arr.length; i++){
        console.log (typeof  arr[i]);
        if ((arr[i]!==undefined) && (arr[i]!=='false')){
            k++;
        
        }
    }
    console.log (k);
    
})