const confirmed = document.querySelector ('.btn');
confirmed.addEventListener ('click', function(){
    const confirmForm=document.querySelector(".img-confirm");
    confirmForm.innerHTML = "Форма успешно отправлена";
    
    console.log (confirmForm);
})