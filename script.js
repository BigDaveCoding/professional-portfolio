"use strict";


document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger,TextPlugin)
    // code here!
    const nav_menu_button = document.querySelector('.nav_menu_button')
    const nav_menu_small_screen = document.querySelector('.nav_menu_small_screen')

    const hero_subtitle = document.querySelector('.hero_subtitle')

    nav_menu_button.addEventListener('click', () => {
        nav_menu_small_screen.classList.toggle('hidden')
    })

    function animateSubtitle(){
        const prefix = 'I am a ';
        const words = ['Software Developer', 'Designer', 'Software Engineer', 'Student', 'Problem Solver', 'Video Game Addict ', 'Creative Thinker', 'Tech Enthusiast'];
        const icon = ['<i class="fa-solid fa-laptop-code"></i>', '<i class="fa-solid fa-brush"></i>', '<i class="fa-solid fa-code"></i>', '<i class="fa-solid fa-book"></i>', '<i class="fa-solid fa-toolbox"></i>', 
                        '<i class="fa-solid fa-gamepad"></i>', '<i class="fa-solid fa-lightbulb"></i>', '<i class="fa-solid fa-microchip"></i>']
        const typeSpeed = 0.15; // Typing speed in seconds per character
        const delayBetweenWords = 3; // Delay in seconds between words

        const timeline = gsap.timeline({ repeat: -1, repeatDelay: delayBetweenWords }); //infinte loop with delay between words.

        words.forEach((word, index) => {
            timeline.to(hero_subtitle, {
                text: prefix + word + ' ' + icon[index],
                duration: word.length * typeSpeed,
                ease: 'none'
            });
            timeline.to(hero_subtitle, {
                duration: delayBetweenWords,
                ease: 'none'
            });
            timeline.to(hero_subtitle, {
                text: '|',
                duration: word.length * (typeSpeed / 2),
                ease: 'none'
            });
        });
    }

    animateSubtitle()
    
});



