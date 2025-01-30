"use strict";

const nav_menu_button = document.querySelector('.nav_menu_button')
const nav_menu_small_screen = document.querySelector('.nav_menu_small_screen')

nav_menu_button.addEventListener('click', () => {
    nav_menu_small_screen.classList.toggle('hidden')
})

