const messages = [
    "I told you not to press it!",
    "Seriously, stop pressing it!",
    "This is your last warning from the CEO of REDI SCHOOL!",
    "Great, if you press again your device will be automatically destroyed!",
    "Why are you still pressing it?",
    "Just walk away from the button!",
    "You must really like pressing this button."
];
const messageElement = document.querySelector('.message');
const button = document.querySelector('.red-button');
let clickCount = 0;
button.addEventListener('click', () => {
    messageElement.textContent = messages[clickCount % messages.length];
    clickCount++;
});