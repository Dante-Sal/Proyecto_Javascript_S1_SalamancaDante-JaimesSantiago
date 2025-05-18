const section_loader = document.querySelector('.section-loader');

function SHOW_LOADER() {
    section_loader.style.opacity = '100%';
    section_loader.style.top = '0'
};

function HIDE_LOADER() {
    section_loader.style.opacity = '0';
    section_loader.style.top = '-1000vw'
};

window.addEventListener('DOMContentLoaded', () => {
    SHOW_LOADER();
});

window.addEventListener('load', () => {
    HIDE_LOADER();
});