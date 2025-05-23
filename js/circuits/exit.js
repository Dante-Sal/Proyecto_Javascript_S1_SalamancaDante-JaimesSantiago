const sidebar_brand = document.querySelector('.sidebar__brand');

sidebar_brand.addEventListener('click', () => {
    location.href = `${window.location.href.replace('circuits.html', '')}home.html`;
});