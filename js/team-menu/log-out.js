document.querySelector('.log-out-section__btn')
    .addEventListener('click', () => {
        location.href = window.location.href.replace('//pages/home.html', '').replace('//pages/team-menu.html', '');
    });