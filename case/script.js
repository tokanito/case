const confirmed = document.querySelector ('.btn');
confirmed.addEventListener ('click', function(){
    console.log (confirmed);
    const confirmForm=document.createElement("div");
    console.log (confirmForm);
    // elem.classList.add/remove("class") – добавить/удалить класс.
    confirmForm.classList.add ("img-confirm");
    // document.img.classList.add('img-confirm');
    console.log (confirmForm);
})