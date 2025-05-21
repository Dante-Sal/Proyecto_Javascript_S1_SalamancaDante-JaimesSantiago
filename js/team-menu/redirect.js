const section_drivers_selector_btn = document.querySelector('.section__drivers-selector-btn');
const section_vehicles_selector_btn = document.querySelector('.section__vehicles-selector-btn');

section_drivers_selector_btn.addEventListener('click', () => {
    location.href = `${window.location.href.replace('team-menu.html', '')}team-drivers.html`;
});

section_vehicles_selector_btn.addEventListener('click', () => {
    location.href = `${window.location.href.replace('team-menu.html', '')}team-vehicles.html`;
});