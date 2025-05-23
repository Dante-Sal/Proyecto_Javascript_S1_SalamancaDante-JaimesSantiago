const section_circuits_button = document.querySelector('.section__circuits-button');

section_circuits_button.addEventListener('click', () => {
    location.href = `${window.location.href.replace('home.html', '')}circuits.html`;
});