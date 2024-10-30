const roles = ["curious about the future.", "innovating with AI.", "designing seamless applications."];
let index = 0;
let charIndex = 0;
const typingSpeed = 100;
const erasingSpeed = 50;
const delayBetweenRoles = 2000;
const roleTextElement = document.getElementById("role-text");

function typeRole() {
    if (charIndex < roles[index].length) {
        roleTextElement.textContent += roles[index].charAt(charIndex);
        charIndex++;
        setTimeout(typeRole, typingSpeed);
    } else {
        setTimeout(eraseRole, delayBetweenRoles);
    }
}

function eraseRole() {
    if (charIndex > 0) {
        roleTextElement.textContent = roles[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseRole, erasingSpeed);
    } else {
        index = (index + 1) % roles.length;
        setTimeout(typeRole, typingSpeed);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(typeRole, delayBetweenRoles);
});
