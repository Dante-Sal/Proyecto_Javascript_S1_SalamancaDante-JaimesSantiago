const login_form = document.querySelector('.login-container__form');

login_form.addEventListener('submit', e => {
    e.preventDefault();
    if ('index.html' in window.location.href) {
        location.href = `${window.location.href.replace('index.html', '')}pages/home.html`;
    } else {
        location.href = `${window.location.href}pages/home.html`;
    };
});