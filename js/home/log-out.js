document.querySelector('.log-out-section__btn')
    .addEventListener('click', () => {
        location.href = window.location.href.replace('index.html', '');
    });