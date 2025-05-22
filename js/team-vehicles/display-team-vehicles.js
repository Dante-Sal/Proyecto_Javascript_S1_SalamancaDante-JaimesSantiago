const body = document.querySelector('body');
const vehicle_container = document.querySelector('.section__vehicle-container');

async function FETCH_INFO() {
    const response = await axios.get('https://68288b9d6075e87073a41cba.mockapi.io/f1_api/1');
    const data = response.data;
    return data;
};

async function FETCH_TEAM(id) {
    const response = await axios.get('https://68288b9d6075e87073a41cba.mockapi.io/f1_api/1');
    const data = response.data.teams[id];
    return data;
};

function DISPLAY_INFO(team_data) {
    document.title = `F1 // TEAM (${team_data.name}) // VEHICLES`
    body.style.width = '100vw';
    body.style.height = '100vh';
    body.style.backgroundImage = `url('${team_data.resources.background}')`;
    body.style.backgroundPosition = '50%';
    body.style.backgroundRepeat = 'no-repeat';
    body.style.backgroundSize = 'cover';
    FETCH_INFO()
        .then(data => {
            for (let i = 0; i < data.vehicles.length; i++) {
                if (data.vehicles[i].team === team_data.name) {
                    vehicle_container.innerHTML = `
                        <img class="section__vehicle-container-img" src="${data.vehicles[i].image}"/>
                        <div class="section__vehicle-container-section">
                            <p class="section__vehicle-container-model section__vehicle-container-text">${data.vehicles[i].model}</p>
                            <img class="section__vehicle-container-team-img" src="${team_data.resources.no_background_logo}"/>
                        </div>
                        <div class="section__vehicle-container-section">
                            <p class="section__vehicle-container-engine section__vehicle-container-text"><span>Engine:</span><br/>${data.vehicles[i].engine}</p>
                            <p class="section__vehicle-container-max-speed section__vehicle-container-text"><span>Max. speed:</span><br/>${data.vehicles[i].max_speed_kmh} km/h</p>
                            <p class="section__vehicle-container-acceleration-0-100 section__vehicle-container-text"><span>Acceleration from 0 to 100 km/h:</span><br/>${data.vehicles[i].acceleration_0_100} seconds</p>
                        </div>
                        <p class="section__vehicle-container-team section__vehicle-container-text">${data.vehicles[i].team}</p>
                        `;
                    break;
                };
            };
        });
};

FETCH_INFO()
    .then(data => {
        FETCH_TEAM(data.selected_team)
            .then(team_data => {
                DISPLAY_INFO(team_data);
            });
    });