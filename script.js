const cards = [
    ["Felps", "Descrição do personagem 1.", "path/to/image.jpg"],
    ["Ray", "Descrição do personagem 2.", "path/to/image.jpg"],
    ["Tharcis", "Descrição do personagem 3.", "path/to/image.jpg"],
    ["Clarinha", "Descrição do personagem 4.", "path/to/image.jpg"]
];

function renderCards(items) {
    const container = document.querySelector('#cardsContainer');
    if (!container) return;

    if (!items.length) {
        container.innerHTML = '<p class="no-results">Nenhum Resultado encontrado.</p>';
        return;
    }

    container.innerHTML = items.map(([name, description, img]) => `
        <div class="card">
            <div class="card-content">
                ${img ? `<img src="${img}" alt="${name}">` : ''}
                <h2>${name}</h2>
                <p>${description}</p>
            </div>
        </div>
    `).join('');
}

function filterCards() {
    const input = document.querySelector('#searchInput');
    const searchTerm = input ? input.value.trim().toLowerCase() : '';

    const filteredCards = cards.filter(([name, description]) => {
        return name.toLowerCase().includes(searchTerm) || description.toLowerCase().includes(searchTerm);
    });

    renderCards(filteredCards);
}

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('#searchInput');
    const searchButton = document.querySelector('#searchButton');

    renderCards(cards);

    if (searchButton) {
        searchButton.addEventListener('click', filterCards);
    }

    if (searchInput) {
        searchInput.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                event.preventDefault();
                filterCards();
            }
        });
    }
});
