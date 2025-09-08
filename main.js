const OpenMenu = document.querySelector('#Open-menu');
const CloseMenu = document.querySelector('#Close-menu');
const NavLinks = document.querySelector('#Nav-links');
const ProjectButton = document.querySelector('#Project-button');
const AbilityButton = document.querySelector('#Ability-button');
const ContactButton = document.querySelector('#Contact-button');

OpenMenu.addEventListener('click', () => {
    NavLinks.classList.add('active');
});

CloseMenu.addEventListener('click', () => {
    NavLinks.classList.remove('active');
});

ProjectButton.addEventListener('click', () => {
    NavLinks.classList.remove('active');
});

AbilityButton.addEventListener('click', () => {
    NavLinks.classList.remove('active');
});

ContactButton.addEventListener('click', () => {
    NavLinks.classList.remove('active');
});