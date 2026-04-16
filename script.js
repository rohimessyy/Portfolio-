const typingElement = document.getElementById("typing");

const words = ["C++ Developer", "Python Programmer", "Web Developer", "Problem Solver"];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentWord = words[wordIndex];

    if (!isDeleting) {
        typingElement.textContent = currentWord.substring(0, charIndex++);
    } else {
        typingElement.textContent = currentWord.substring(0, charIndex--);
    }

    if (charIndex === currentWord.length + 1) {
        isDeleting = true;
        setTimeout(typeEffect, 1000);
        return;
    }

    if (charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
    }

    setTimeout(typeEffect, isDeleting ? 50 : 100);
}

typeEffect();
