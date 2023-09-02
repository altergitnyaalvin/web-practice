
// (function() {
//     'use strict';
//     window.addEventListener('load', function() {
//         // Fetch all the forms we want to apply custom Bootstrap validation styles to
//         var forms = document.getElementsByClassName('needs-validation');
//         // Loop over them and prevent submission
//         var validation = Array.prototype.filter.call(forms, function(form) {
//             form.addEventListener('submit', function(event) {
//                 if (form.checkValidity() === false) {
                    // event.preventDefault();
                    // event.stopPropagation();
//                 }
//                 form.classList.add('was-validated');
//             }, false);
//         });
//     }, false);
// })();

const btnLogin = document.querySelector('#btn_login') // selection terhadap button login

btnLogin.addEventListener('click', (event) => onLogin(event))

const onLogin = (event) => {
    event.preventDefault()
    event.stopPropagation()
    const username_value = document.querySelector('input[name=username]') // get element input username
    const password_value = document.querySelector('input[name=password]') // get element input password
    const username_validation = document.querySelector('#username_validation') // get element div username validation
    const password_validation = document.querySelector('#password_validation') // get element div password validation


    // Menambahkan prosedur validasi terhadap username & password jika sesuai
    if(username_value.value === 'admin' && password_value.value === '1234'){
        // block ketika berhasil
        alert('Loginnya berhasil bang!')
        username_value.classList.add('is-valid') // menambahkan class name is-valid
        password_value.classList.add('is-valid')
    } else if(username_value.value === '' && password_value.value === ''){
        // block username/password tidak terisi
        username_validation.innerText = 'Username tidak boleh kosong!'
        password_validation.innerText = 'Password tidak boleh kosong!'
        username_value.classList.add('is-invalid') // menambahkan class name is-invalid
        password_value.classList.add('is-invalid')
        document.querySelector('.invalid-feedback').style.display = 'inline'
    } else {
        // block salah password/username
        username_validation.innerText = 'Username salah!'
        password_validation.innerText = 'Password salah!'
        username_value.classList.add('is-invalid') // menambahkan class name is-invalid
        password_value.classList.add('is-invalid')
        document.querySelector('.invalid-feedback').style.display = 'inline'
    }
}
