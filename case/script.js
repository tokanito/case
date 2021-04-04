
var form = document.querySelector('.formWithValidation')
var check=document.querySelectorAll('.error');
var confirm=document.querySelector ('.confirm');

var removeValidation = function () {
  var errors = form.querySelectorAll('.error')

  for (var i = 0; i < errors.length; i++) {
    errors[i].remove()
  }
}


  
    var checkFieldsPresence = function () {
    for (var i = 0; i < fields.length; i++) {
        console.log (fields[i].value);
        if ((!fields[i].value) && (!pattern.test(fields[i].value))) {
            console.log('field is blank', fields[i])
            var error = document.createElement('div')
            error.className='error'
            error.style.color = 'red'
            error.innerHTML = 'Cannot be blank'
            form[i].parentElement.insertBefore(error, fields[i])
        }
    }
}


var fields = form.querySelectorAll('.field')

form.addEventListener('submit', function (event) {
  event.preventDefault();
  removeValidation();
 
  checkFieldsPresence();
  if (check.length==0){
    confirm.innerHTML = 'Форма успешно отправлена';
    form.reset();
  }
 
})