const section_circuit_cards = document.querySelector('.section__circuit-cards');

async function FETCH_INFO() {
    const response = await axios.get('https://68288b9d6075e87073a41cba.mockapi.io/f1_api/1');
    const data = response.data;
    return data;
};

function DISPLAY_CIRCUITS(data) {
    for (let i = 0; i < data.circuits.length; i++) {
        section_circuit_cards.insertAdjacentHTML('beforeend', `
            <div class="section__circuit-cards--circuit">
                <img class="section__circuit-cards--circuit-img" src="${data.circuits[i].image}"/>
                <div class="section__circuit-cards--circuit-info">
                    <p class="section__circuit-cards--circuit-text">${data.circuits[i].name}</p>
                    <button class="section__circuit-cards--circuit-button" circuit-id="${i}">
                        SEE MORE
                    </button>
                </div>
            </div>
            `);
    };
    document.querySelectorAll('.section__circuit-cards--circuit-button').forEach(btn => {
        btn.addEventListener('click', DISPLAY_SELECTED_CIRCUIT)
    })
};

function DISPLAY_SELECTED_CIRCUIT(event) {
    const id = event.target.getAttribute('circuit-id');
    section_circuit_cards.innerHTML = '';
    section_circuit_cards.style.gridTemplateColumns = '1fr';
    FETCH_INFO()
        .then(data => {
            section_circuit_cards.innerHTML = `
                <div class="section__circuit-cards--circuit section__circuit-cards--circuit-selected">
                    <p class="section__circuit-cards--circuit-text section__circuit-cards--circuit-name">${data.circuits[id].name}</p>
                    <img class="section__circuit-cards--circuit-img section__circuit-cards--circuit-selected-img" src="${data.circuits[id].image}"/>
                    <p class="section__circuit-cards--circuit-text"><span>Country:</span>${data.circuits[id].country}</p>
                    <p class="section__circuit-cards--circuit-text"><span>Length:</span>${data.circuits[id].length_km} km</p>
                    <p class="section__circuit-cards--circuit-text"><span>Laps:</span>${data.circuits[id].laps}</p>
                    <p class="section__circuit-cards--circuit-text"><span>Description:</span><a>${data.circuits[id].description}</a></p>
                    <p class="section__circuit-cards--circuit-text"><span>Lap record time:</span>${data.circuits[id].lap_record.time}</p>
                    <p class="section__circuit-cards--circuit-text"><span>Lap record driver:</span>${data.circuits[id].lap_record.driver}</p>
                    <p class="section__circuit-cards--circuit-text"><span>Lap record year:</span>${data.circuits[id].lap_record.year}</p>
                    <div>
                        
                    </div>
                </div>
                `;
        });
}

FETCH_INFO()
    .then(data => {
        DISPLAY_CIRCUITS(data);
    });