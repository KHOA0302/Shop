const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const notifyItems = $$('.header__notify-item')

notifyItems.forEach((notifyItem, index) => notifyItem.onclick = function() {
    this.classList.add('header__notify-item--viewed')
})  