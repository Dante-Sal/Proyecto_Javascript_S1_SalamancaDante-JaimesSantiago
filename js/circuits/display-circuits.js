const section_circuit_cards = document.querySelector('.section__circuit-cards');

async function FETCH_INFO() {
    const response = await axios.get('https://68288b9d6075e87073a41cba.mockapi.io/f1_api/1');
    const data = response.data;
    return data;
};

function DISPLAY_CIRCUITS(data) {
    for (let i = 0; i < data.circuits.length; i++) {
        section_circuit_cards.insertAdjacentHTML('beforeend', `
            <div class="section__circuit-cards--circuit" driver-id="${i}">
                <img class="section__circuit-cards--circuit-img" driver-id="${i}" src="${data.circuits[i].image}"/>
                <div class="section__circuit-cards--circuit-info">
                    <p class="section__circuit-cards--circuit-name" driver-id="${i}">${data.circuits[i].name}</p>
                    <button class="section__circuit-cards--circuit-button">
                        SEE MORE
                    </button>
                </div>
            </div>
            `);
    };
};

FETCH_INFO()
    .then(data => {
        DISPLAY_CIRCUITS(data);
    });