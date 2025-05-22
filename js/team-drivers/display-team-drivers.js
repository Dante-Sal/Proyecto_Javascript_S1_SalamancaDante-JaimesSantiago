const body = document.querySelector('body');
const drivers_container_img = document.querySelector('.section__driver-container');
const select_btn = document.querySelector('.section__drivers-container-button');
const section_drivers_container_menu = document.querySelector('.section__drivers-container-menu');

async function FETCH_INFO() {
    const response = await axios.get('https://68288b9d6075e87073a41cba.mockapi.io/f1_api');
    const data = response.data[0];
    return data;
};

async function FETCH_TEAM(id) {
    const response = await axios.get('https://68288b9d6075e87073a41cba.mockapi.io/f1_api');
    const data = response.data[0].teams[id];
    return data;
};

function DISPLAY_TEAM_MENU(team_data) {
    document.title = `F1 // TEAM (${team_data.name}) // DRIVERS`
    body.style.width = '100vw';
    body.style.height = '100vh';
    body.style.backgroundImage = `url('${team_data.resources.background}')`;
    body.style.backgroundPosition = '50%';
    body.style.backgroundRepeat = 'no-repeat';
    body.style.backgroundSize = 'cover';
    FETCH_INFO()
        .then(data => {
            for (let i = 0; i < data.drivers.length; i++) {
                if (data.drivers[i].team === team_data.name && data.drivers[i].role === 'Leader') {
                    drivers_container_img.innerHTML = `
                        <img class="section__driver-container-img" src="${data.drivers[i].image}"/>
                        <div class="section__driver-container-header">
                            <p class="section__driver-container-number section__driver-container-text">${data.drivers[i].driver_number}</p>
                            <img class="section__driver-container-team-img" src="${team_data.resources.no_background_logo}"/>
                        </div>
                        <p class="section__driver-container-name section__driver-container-text">${data.drivers[i].name}</p>
                        <p class="section__driver-container-team section__driver-container-text">${data.drivers[i].team}</p>
                        `;
                    break;
                };
            };
            for (let i = 0; i < data.drivers.length; i++) {
                if (data.drivers[i].team === team_data.name) {
                    section_drivers_container_menu.insertAdjacentHTML('beforeend', `
                        <div class="section__drivers-container-menu--driver" driver-id="${data.drivers[i].driver_number}">
                            <img class="section__drivers-container-menu--driver-img" driver-id="${data.drivers[i].driver_number}" src="${data.drivers[i].image}"/>
                            <p class="section__drivers-container-menu--driver-name" driver-id="${data.drivers[i].driver_number}">${data.drivers[i].name}</p>
                        </div>
                        `);
                };
            };
            document.querySelectorAll('.section__drivers-container-menu--driver').forEach(driver => {
                driver.addEventListener('click', DISPLAY_DRIVER)
            });
        });
};

function DISPLAY_DRIVER(event) {
    const drivers = document.querySelectorAll('.section__drivers-container-menu--driver');

    const driver_number = event.target.getAttribute('driver-id');
    const driver = document.querySelector(`[driver-id="${driver_number}"]`);

    drivers.forEach(driver => {
        driver.style.border = '0.2vw solid rgb(255, 255, 255, 0)';
    });
    driver.style.borderColor = 'rgb(255, 255, 255)';
    SELECT_DRIVER(driver_number);
};

async function SELECT_DRIVER(driver_number) {
    await FETCH_INFO()
        .then(data => {
            FETCH_TEAM(data.selected_team)
                .then(team_data => {
                    for (let i = 0; i < data.drivers.length; i++) {
                        if (data.drivers[i].driver_number === parseInt(driver_number)) {
                            drivers_container_img.innerHTML = `
                                    <img class="section__driver-container-img" src="${data.drivers[i].image}"/>
                                    <div class="section__driver-container-header">
                                        <p class="section__driver-container-number section__driver-container-text">${data.drivers[i].driver_number}</p>
                                        <img class="section__driver-container-team-img" src="${team_data.resources.no_background_logo}"/>
                                    </div>
                                    <p class="section__driver-container-name section__driver-container-text">${data.drivers[i].name}</p>
                                    <p class="section__driver-container-team section__driver-container-text">${data.drivers[i].team}</p>
                                    `;
                            break;
                        };
                    };
                });
        });
}

FETCH_INFO()
    .then(data => {
        FETCH_TEAM(data.selected_team)
            .then(team_data => {
                DISPLAY_TEAM_MENU(team_data);
            });
    });