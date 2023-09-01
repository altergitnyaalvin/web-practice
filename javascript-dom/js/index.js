
// (function() {
//     'use strict';
//     window.addEventListener('load', function() {
//         // Fetch all the forms we want to apply custom Bootstrap validation styles to
//         var forms = document.getElementsByClassName('needs-validation');
//         // Loop over them and prevent submission
//         var validation = Array.prototype.filter.call(forms, function(form) {
//             form.addEventListener('submit', function(event) {
//                 if (form.checkValidity() === false) {
//                     event.preventDefault();
//                     event.stopPropagation();
//                 }
//                 form.classList.add('was-validated');
//             }, false);
//         });
//     }, false);
// })();

const btn_login = document.querySelector('#btn_login')

btn_login.addEventListener('click', (e) => onClickLogin(e))

function onClickLogin(event) {
    const username = document.querySelector('input[name="username"]') // get element by name="username"
    const password = document.querySelector('input[name="password"]') // get element by name="password"
    const username_validation = document.querySelector('#username_validation') //
    const password_validation = document.querySelector('#password_validation')

    const cred_username = "admin"
    const cred_password = "1234"

    if(username.value === cred_username && password.value === cred_password){
        alert('Login Berhasil!')
        username.classList.add("is-valid");
        password.classList.add("is-valid");
    } else {
        // alert('Credential salah!')
        username_validation.innerHTML = 'username salah'
        password_validation.innerHTML = 'password salah'
        username.classList.add("is-invalid");
        password.classList.add("is-invalid");
        document.querySelector('.invalid-feedback').style.display = 'inline'
        
        event.preventDefault();
        event.stopPropagation();
    }
 }