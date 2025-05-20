const section_team_cards = document.querySelector('.section__team-cards');

async function FETCH_INFO() {
    const response = await axios.get('https://68288b9d6075e87073a41cba.mockapi.io/f1_api');
    const data = response.data[0];
    return data;
};

function FETCH_ID(event) {
    const id = event.target.getAttribute('team-id');
    FETCH_INFO()
        .then(data => {
            SELECT_TEAM(data, id);
            location.href = `${window.location.href.replace('home.html', '')}team-menu.html`;
        });
};

async function SELECT_TEAM(data, id) {
    const req = {
        "drivers": data.drivers,
        "teams": data.teams,
        "circuits": data.circuits,
        "vehicles": data.vehicles,
        "selected_team": id
    };
    await axios.put('https://68288b9d6075e87073a41cba.mockapi.io/f1_api/1', req);
};

function DISPLAY_TEAMS(data) {
    for (let i = 0; i < data.teams.length; i++) {
        section_team_cards.insertAdjacentHTML('beforeend', `
            <a class="section__team-cards--card" team-id="${i}">
                <img class="section__team-cards--card-img" team-id="${i}"
                    src="${data.teams[i].resources.logo}" />
                <span class="section__team-cards--card-footer" team-id="${i}">
                    <span team-id="${i}">${data.teams[i].name}</span>
                </span>
            </a>
            `);
    };
    document.querySelectorAll('.section__team-cards--card').forEach(card => {
        card.addEventListener('click', FETCH_ID);
    });
};

FETCH_INFO()
    .then(data => {
        SELECT_TEAM(data, -1);
    });

FETCH_INFO()
    .then(data => {
        DISPLAY_TEAMS(data);
    });