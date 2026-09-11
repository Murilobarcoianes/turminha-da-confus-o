const cards = [
    ["Felps", "Descrição do personagem 1.", "path/to/image.jpg"],
    ["Ray", "Descrição do personagem 2.", "path/to/image.jpg"],
    ["Gabs", "Descrição do personagem 3.", "path/to/image.jpg"],
    ["Tharcis", "Descrição do personagem 4.", "path/to/image.jpg"],
    ["Felipe", "Descrição do personagem 5.", "path/to/image.jpg"],
    ["Clarinha", "Descrição do personagem 6.", "path/to/image.jpg"],
    ["L.E.O", "Descrição do personagem 7.", "path/to/image.jpg"],
    ["Jhonatan", "Descrição do personagem 8.", "path/to/image.jpg"],
    ["Dany", "Descrição do personagem 9.", "path/to/image.jpg"],
    ["Veve", "Descrição do personagem 10.", "path/to/image.jpg"],
    ["David", "Descrição do personagem 11.", "path/to/image.jpg"],
    ["Matheus", "Descrição do personagem 12.", "path/to/image.jpg"],
    ["Edi", "Descrição do personagem 13.", "path/to/image.jpg"],
    ["Renan", "Descrição do personagem 14.", "path/to/image.jpg"],
    ["Arthur", "Descrição do personagem 15.", "path/to/image.jpg"],
    ["Naty", "Descrição do personagem 16.", "path/to/image.jpg"],
    ["Isa", "Descrição do personagem 17.", "path/to/image.jpg"],
    ["Uriel", "Descrição do personagem 18.", "path/to/image.jpg"],
    ["Day", "Descrição do personagem 19.", "path/to/image.jpg"],
    ["Liam", "Descrição do personagem 20.", "path/to/image.jpg"],
    ["Anthony", "Descrição do personagem 21.", "path/to/image.jpg"],
    ["Mila", "Descrição do personagem 22.", "path/to/image.jpg"],
    ["Murilo", "Descrição do personagem 23.", "path/to/image.jpg"],
    ["Cookie", "Descrição do personagem 24.", "path/to/image.jpg"],
    ["Ezequiel", "Descrição do personagem 25.", "path/to/image.jpg"],
    ["Fuki", "Descrição do personagem 26.", "path/to/image.jpg"],
    ["Molly", "Descrição do personagem 27.", "path/to/image.jpg"],
    ["Rapark", "Descrição do personagem 28.", "path/to/image.jpg"],
    ["Bárbara", "Descrição do personagem 29.", "path/to/image.jpg"],
    ["Skrav", "Descrição do personagem 30.", "path/to/image.jpg"],
    ["Loysge", "Descrição do personagem 31.", "path/to/image.jpg"],
    ["Franklin", "Descrição do personagem 32.", "path/to/image.jpg"],
    ["Carlos", "Descrição do personagem 33.", "path/to/image.jpg"],
    ["Riva", "Descrição do personagem 34.", "path/to/image.jpg"],
    ["Hina", "Descrição do personagem 35.", "path/to/image.jpg"],
    ["Delle", "Descrição do personagem 36.", "path/to/image.jpg"],
    ["Greisa", "Descrição do personagem 37.", "path/to/image.jpg"],
    ["Ruby", "Descrição do personagem 38.", "path/to/image.jpg"],
    ["Opala", "Descrição do personagem 39.", "path/to/image.jpg"],
    ["Asi", "Descrição do personagem 40.", "path/to/image.jpg"],
    ["Romeu", "Descrição do personagem 41.", "path/to/image.jpg"],
    ["Clowndoaldo", "Descrição do personagem 42.", "path/to/image.jpg"],
    ["Zuzu", "Descrição do personagem 43.", "path/to/image.jpg"],
    ["Raz & Daz", "Descrição do personagem 44.", "path/to/image.jpg"],
    ["Charlotte", "Descrição do personagem 45.", "path/to/image.jpg"],
    ["Madame Creusa", "Descrição do personagem 46.", "path/to/image.jpg"],
    ["Wendy", "Descrição do personagem 47.", "path/to/image.jpg"],
    ["Beck & Wite", "Descrição do personagem 48.", "path/to/image.jpg"],
    ["XiOn", "Descrição do personagem 49.", "path/to/image.jpg"],
    ["Louise Ferdinand", "Descrição do personagem 50.", "path/to/image.jpg"],
    ["Trevor", "Descrição do personagem 51.", "path/to/image.jpg"],
    ["Elabell", "Descrição do personagem 52.", "path/to/image.jpg"],
    ["Uriel", "Descrição do personagem 53.", "path/to/image.jpg"],
    ["Virid Constantine", "Descrição do personagem 54.", "path/to/image.jpg"],
    ["Mel Meloso", "Descrição do personagem 55.", "path/to/image.jpg"],
    ["Gogô Da Trinta", "Descrição do personagem 56.", "path/to/image.jpg"],
    ["Deni", "Descrição do personagem 57.", "path/to/image.jpg"],
    ["Stella", "Descrição do personagem 58.", "path/to/image.jpg"],
    ["Astro", "Descrição do personagem 59.", "path/to/image.jpg"],
    ["Galar", "Descrição do personagem 60.", "path/to/image.jpg"],
    ["ADMD", "Descrição do personagem 61.", "path/to/image.jpg"],
];

function renderCards(items) {
    const container = document.querySelector('#cardsContainer');
    if (!container) return;

    if (!items.length) {
        container.innerHTML = '<p class="no-results">Nenhum Resultado encontrado.</p>';
        return;
    }

    container.innerHTML = items.map(([name, description, img]) => `
        <div class="card" onclick="window.location.href='personagens/${name}.html'">
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

    const filteredCards = cards.filter(([name, description, img]) => {
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
