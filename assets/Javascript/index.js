const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const notifyItems = $$('.header__notify-item')

notifyItems.forEach((notifyItem, index) => notifyItem.onclick = function() {
    this.classList.add('header__notify-item--viewed')
})  

const signInBtn = $('.signIn')
const signUpBtn = $('.signUp')
const signUpForm = $('.modal__auth-form:first-child')
const signInForm = $('.modal__auth-form:last-child')

const handleSignUpClick = () => {
    const modal = $('.modal')
    modal.classList.add('active')
    modal.onclick = (e) => {
        e.stopPropagation()
        modal.classList.remove('active')
    }

    signUpForm.classList.add('signUp')
    signInForm.classList.remove('signIn')
}

const handleSignInClick = () => {
    const modal = $('.modal')
    modal.classList.add('active')
    modal.onmousedown = () => {
        modal.classList.remove('active')
    }

    signInForm.classList.add('signIn')
    signUpForm.classList.remove('signUp')
}