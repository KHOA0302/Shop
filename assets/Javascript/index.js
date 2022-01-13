const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const notifyItems = $$('.header__notify-item')

notifyItems.forEach((notifyItem, index) => notifyItem.onclick = function() {
    this.classList.add('header__notify-item--viewed')
})  

const signInBtn = $('.signIn')
const signUpBtn = $('.signUp')
const signUpForm = $('.modal__auth-form-signup')
const signInForm = $('.modal__auth-form-signin')
const switchSignUpBtn = $('.modal__auth__switch-btn.signUp')
const switchSignInBtn = $('.modal__auth__switch-btn.signIn')

const handleModal = () => {
    const modal = $('.modal')
    modal.classList.add('active')
    modal.onclick = () => {
    modal.classList.remove('active')
    }
}

const handleSignUpClick = () => {
    signUpForm.classList.add('signUp')
    signInForm.classList.remove('signIn')
    handleModal()
}

const handleSignInClick = () => {
    signInForm.classList.add('signIn')
    signUpForm.classList.remove('signUp')
    handleModal()
}

const switchSignIn = () => {
    handleSignInClick()
}

const switchSignUp = () => {
    handleSignUpClick()
}