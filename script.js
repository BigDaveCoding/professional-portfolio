"use strict";


document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger,TextPlugin)
    // code here!
    const nav_menu_button = document.querySelector('.nav_menu_button')
    const nav_menu_small_screen = document.querySelector('.nav_menu_small_screen')

    nav_menu_button.addEventListener('click', () => {
        nav_menu_small_screen.classList.toggle('hidden')
    })
   });



