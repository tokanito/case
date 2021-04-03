// var completed =false;
// const confirmed = document.querySelector ('.btn');





// let clientNumber =0;


// confirmed.addEventListener ('click', function(){
//     // clientNumber++;
//     // var 
    
//     const lastName = document.querySelector ('.feedback--input__lastname').value;
//     const firstName = document.querySelector ('.feedback--input__name').value;
//     const birth = document.querySelector ('.feedback--input__date').value;
//     const phoneNumber = document.querySelector ('.feedback--input__number').value;
//     const group = document.querySelector ('.feedback--input__group').value;
//     const city = document.querySelector ('.address--input__city').value;
//     const documentType = document.querySelector ('.passport-form--option__type').value;
//     const documentDate = document.querySelector ('.passport-form--option__date').value;


//     const confirmForm=document.querySelector(".img-confirm");
//     confirmForm.innerHTML = "Форма успешно отправлена";
   
//     let arr = [lastName,firstName,birth,phoneNumber,group,city,documentType,documentDate];
//     var k=0;
//     for (let i=0; i<arr.length; i++){
//         console.log (typeof  arr[i]);
//         if ((arr[i]!==undefined) && (arr[i]!=='false')){
//             k++;
        
//         }
//     }
//     console.log (k);
    
// })

// confirmed.addEventListener('submit', function (event) {
//     event.preventDefault()
  
//     for (var i = 0; i < fields.length; i++) {
//       if (!fields[i].value) {
//         console.log('field is blank', fields[i])
//       }
//     }
//   })

// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 

  
var form = document.querySelector('.formWithValidation')
var fields = document.querySelectorAll('.field')
console.log (fields[0]);
for (var i = 0; i < fields.length; i++) {
    console.log (fields[i]);
}
var removeValidation = function () {
  var errors = form.querySelectorAll('.error')

  for (var i = 0; i < errors.length; i++) {
    errors[i].remove()
  }
}

var patternNumber=/^[0-9]+$/; //for phonenumber

function validateUsr(username) {
    var pattern=/^[а-яА-ЯёЁ ]+$/;    //for name, lastname,city
    var matchStatus=false;
        if (username.length>=4  && username.length<=16){
            matchStatus = pattern.test(username);
        }
    console.log (matchStatus);
    return matchStatus;
}
  

    var  example = 'ываыва ';
    validateUsr(example)  ; 

    var pattern=/^[а-яА-ЯёЁ ]+$/;   
    var checkFieldsPresence = function () {
    for (var i = 0; i < fields.length; i++) {
        
        if (!fields[i].value)  {
            console.log('field is blank', fields[i])
            var error = document.createElement('div')
            error.className='error'
            error.style.color = 'red'
            error.innerHTML = 'Cannot be blank'
            form[i].parentElement.insertBefore(error, fields[i])
        }
    }
}




form.addEventListener('submit', function (event) {
  event.preventDefault();
  removeValidation();
  checkFieldsPresence();
})
