const body = document.querySelector('body');

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

function DISPLAY_TEAM_MENU(data) {
    document.title = `F1 // TEAM (${data.name})`
    body.style.width = '100vw';
    body.style.height = '100vh';
    body.style.backgroundImage = `url('${data.resources.background}')`;
    body.style.backgroundPosition = '50%';
    body.style.backgroundRepeat = 'no-repeat';
    body.style.backgroundSize = 'cover';
};

FETCH_INFO()
    .then(data => {
        FETCH_TEAM(data.selected_team)
            .then(team_data => {
                DISPLAY_TEAM_MENU(team_data);
            });
    });