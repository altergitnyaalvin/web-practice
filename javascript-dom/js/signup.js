const btn_signUp = document.querySelector('#btn_signUp') // selection terhadap button signup
btn_signUp.addEventListener('click', (event) => onSignUp(event))
const onSignUp = (event) => {
    event.preventDefault()
    event.stopPropagation()
    const username_value = document.querySelector('input[name=username]') // get element input username
    const password_value = document.querySelector('input[name=password]') // get element input password
    const password_confirmation_value = document.querySelector('input[name=password_confirmation]') // get element input password confirmation
    const gender_value = document.querySelector('input[name=gender]') // get element input gender

    const username_validation = document.querySelector('#username_validation') // get element div username validation
    const password_validation = document.querySelector('#password_validation') // get element div password validation
    const password_confirmation_validation = document.querySelector('#password_confirmation_validation') 
    const gender_validation = document.querySelector('#gender_validation') 

    if(username_value.value === '' && password_value.value === '' && password_confirmation_value.value === '' && gender_value.value === ''){
        // block username/password tidak terisi
        username_validation.innerText = 'Username tidak boleh kosong!'
        password_validation.innerText = 'Password tidak boleh kosong!'
        password_confirmation_validation.innerText = 'Konfirmasi password tidak boleh kosong!'
        gender_validation.innerText = 'Gender tidak boleh kosong!'

        username_value.classList.add('is-invalid') // menambahkan class name is-invalid
        password_value.classList.add('is-invalid')
        password_confirmation_value.classList.add('is-invalid')
        gender_value.classList.add('is-invalid')
        document.querySelector('.invalid-feedback').style.display = 'inline'
    } if(password_value.value !== password_value.value){
        alert('Password tidak sama!')
    } else {
        // block salah password/username
        username_validation.innerText = 'Username salah!'
        password_validation.innerText = 'Password salah!'
        username_value.classList.add('is-invalid') // menambahkan class name is-invalid
        password_value.classList.add('is-invalid')
        document.querySelector('.invalid-feedback').style.display = 'inline'
    }
}