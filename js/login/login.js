const login_form = document.querySelector('.login-container__form');

login_form.addEventListener('submit', e => {
    e.preventDefault();
    if (window.location.href.replace('index.html', '/').charAt(-1) === '/') {
        location.href = `${window.location.href.replace('index.html', '/')}pages/home.html`;
    } else {
        location.href = `${window.location.href.replace('index.html', '/')}/pages/home.html`;
    };
});