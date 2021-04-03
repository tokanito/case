
var form = document.querySelector('.formWithValidation')
var fields = form.querySelectorAll('.field')
console.log (fields);
var confirm = document.querySelector('.confirm')

var removeValidation = function () {
  var errors = form.querySelectorAll('.error')

  for (var i = 0; i < errors.length; i++) {
    errors[i].remove()
  }
}

var pattern=/^[а-яА-ЯёЁ ]+$/; 
function validateUsr(username) {
  console.log(username); 
    if (pattern.test(username)){
    
    console.log (true);
    }else {
      
       }
    return username;
}
  

    var  example = '1231 ';
    // validateUsr(example)  ; 

    var pattern=/^[а-яА-ЯёЁ ]+$/;   
    var checkFieldsPresence = function () {
    for (var i = 0; i < fields.length; i++) {
        console.log (fields[i].value);
        if (!fields[i].value) {

            console.log('field is blank', fields[i])
            var error = document.createElement('div')
            error.className='error'
            error.style.color = 'red'
            error.innerHTML = 'Необходимо для заполнения'
            fields[i].parentElement.insertBefore(error, fields[i])
        }
        else {
          confirm.innerHTML = 'Форма успешно отправлена'
          console.log (fields[i].value)
          validateUsr(fields[i].value);
        }
    }
}




form.addEventListener('submit', function (event) {
  event.preventDefault();
  removeValidation();
  checkFieldsPresence();
})