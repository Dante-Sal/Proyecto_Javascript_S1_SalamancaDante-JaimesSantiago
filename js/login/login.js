const login_form = document.querySelector('.login-container__form');

login_form.addEventListener('submit', e => {
    e.preventDefault();
    location.href = '../pages/home.html';
});