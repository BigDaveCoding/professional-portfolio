"use strict";


document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger,TextPlugin)
    // code here!
    const nav_menu_button = document.querySelector('.nav_menu_button')
    const nav_menu_small_screen = document.querySelector('.nav_menu_small_screen')

    const hero_subtitle = document.querySelector('.hero_subtitle')
    const text_cursor = document.querySelector('.text_cursor')

    nav_menu_button.addEventListener('click', () => {
        nav_menu_small_screen.classList.toggle('hidden')
    })

    function animateTextCursor(cursor) {

        const tl = gsap.timeline({repeat: -1})

        tl.to(cursor, {
            opacity: 1,
            duration: 0.1
        })
        tl.to(cursor, {
            duration: 0.2
        })
        tl.to(cursor, {
            opacity: 0,
            duration: 0.3
        })
        tl.to(cursor, {
            duration: 0.1
        })
        
    }

    function animateSubtitle(){
        const prefix = 'I am a ';
        const words = ['Software Developer', 'Designer', 'Software Engineer', 'Student', 'Problem Solver', 'Video Game Addict ', 'Creative Thinker', 'Tech Enthusiast'];
        const icon = ['<i class="fa-solid fa-laptop-code"></i>', '<i class="fa-solid fa-brush"></i>', '<i class="fa-solid fa-code"></i>', '<i class="fa-solid fa-book"></i>', '<i class="fa-solid fa-toolbox"></i>', 
                        '<i class="fa-solid fa-gamepad"></i>', '<i class="fa-solid fa-lightbulb"></i>', '<i class="fa-solid fa-microchip"></i>']
        const typeSpeed = 0.15; // Typing speed in seconds per character
        const delayBetweenWords = 1; // Delay in seconds between words

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
                text: '',
                duration: word.length * (typeSpeed / 2),
                ease: 'none'
            });
        });
    }

    animateSubtitle()
    animateTextCursor(text_cursor)

    
    const project_one_title = document.querySelector('.project_one_title')
    const project_one_desc = document.querySelector('.project_one_description')
    const project_one_skills = document.querySelector('.project_one_skills')

    const project_two_title = document.querySelector('.project_two_title')
    const project_two_desc = document.querySelector('.project_two_description')
    const project_two_skills = document.querySelector('.project_two_skills')

    const project_three_title = document.querySelector('.project_three_title')
    const project_three_desc = document.querySelector('.project_three_description')
    const project_three_skills = document.querySelector('.project_three_skills')


    fetch('./json/info.json')
        .then(response => response.json())
        .then(data => {
            console.log(data)

            project_one_title.textContent = data.project_one.name
            project_one_desc.textContent = data.project_one.about
            data.project_one.skills.forEach(skill => {
                const span = document.createElement("span")
                span.classList.add('pr-3')
                span.textContent = '#' + skill
                project_one_skills.appendChild(span)
            })

            project_two_title.textContent = data.project_two.name
            project_two_desc.textContent = data.project_two.about
            data.project_two.skills.forEach(skill => {
                const span = document.createElement("span")
                span.classList.add('pr-3')
                span.textContent = '#' + skill
                project_two_skills.appendChild(span)
            })

            project_three_title.textContent = data.project_three.name
            project_three_desc.textContent = data.project_three.about
            data.project_three.skills.forEach(skill => {
                const span = document.createElement("span")
                span.classList.add('pr-3')
                span.textContent = '#' + skill
                project_three_skills.appendChild(span)
            })

        })
    
});



