const cards = [
    ["Felps", "1", "path/to/image.jpg"],
    ["Ray", "2", "path/to/image.jpg"],
    ["Gabs", "3", "path/to/image.jpg"],
    ["Tharcis", "Um cara gente boa que está sempre disposto a ajudar os outros", "path/to/image.jpg"],
    ["Felipe", "5", "path/to/image.jpg"],
    ["Clarinha", "6", "path/to/image.jpg"],
    ["L.E.O", "7", "path/to/image.jpg"],
    ["Jhonatan", "8", "path/to/image.jpg"],
    ["Dany", "9", "path/to/image.jpg"],
    ["Veve", "10", "path/to/image.jpg"],
    ["David", "11", "path/to/image.jpg"],
    ["Matheus", "12", "path/to/image.jpg"],
    ["Edi", "13", "path/to/image.jpg"],
    ["Renan", "14", "path/to/image.jpg"],
    ["Arthur", "15", "path/to/image.jpg"],
    ["Naty", "16", "path/to/image.jpg"],
    ["Isa", "17", "path/to/image.jpg"],
    ["Uriel", "18", "path/to/image.jpg"],
    ["Day", "19", "path/to/image.jpg"],
    ["Liam", "20", "path/to/image.jpg"],
    ["Anthony", "21", "path/to/image.jpg"],
    ["Mila", "22", "path/to/image.jpg"],
    ["Murilo", "23", "path/to/image.jpg"],
    ["Cookie", "24", "path/to/image.jpg"],
    ["Ezequiel", "25", "path/to/image.jpg"],
    ["Fuki", "26", "path/to/image.jpg"],
    ["Molly", "27", "path/to/image.jpg"],
    ["Rapark", "28", "path/to/image.jpg"],
    ["Bárbara", "29", "path/to/image.jpg"],
    ["Skrav", "30", "path/to/image.jpg"],
    ["Loysge", "31", "path/to/image.jpg"],
    ["Franklin", "32", "path/to/image.jpg"],
    ["Carlos", "33", "path/to/image.jpg"],
    ["Riva", "34", "path/to/image.jpg"],
    ["Hina", "35", "path/to/image.jpg"],
    ["Delle", "36", "path/to/image.jpg"],
    ["Greisa", "37", "path/to/image.jpg"],
    ["Ruby", "38", "path/to/image.jpg"],
    ["Opala", "39", "path/to/image.jpg"],
    ["Asi", "40", "path/to/image.jpg"],
    ["Romeu", "41", "path/to/image.jpg"],
    ["Clowndoaldo", "42", "path/to/image.jpg"],
    ["Zuzu", "43", "path/to/image.jpg"],
    ["Raz & Daz", "44", "path/to/image.jpg"],
    ["Charlotte", "45", "path/to/image.jpg"],
    ["Madame Creusa", "46", "path/to/image.jpg"],
    ["Wendy", "47", "path/to/image.jpg"],
    ["Beck & Wite", "48", "path/to/image.jpg"],
    ["XiOn", "49", "path/to/image.jpg"],
    ["Louise Ferdinand", "50", "path/to/image.jpg"],
    ["Trevor", "51", "path/to/image.jpg"],
    ["Elabell", "52", "path/to/image.jpg"],
    ["Uriel", "53", "path/to/image.jpg"],
    ["Virid Constantine", "54", "path/to/image.jpg"],
    ["Mel Meloso", "55", "path/to/image.jpg"],
    ["Gogô Da Trinta", "56", "path/to/image.jpg"],
    ["Deni", "57", "path/to/image.jpg"],
    ["Stella", "58", "path/to/image.jpg"],
    ["Astro", "59", "path/to/image.jpg"],
    ["Galar", "60", "path/to/image.jpg"],
    ["ADMD", "61", "path/to/image.jpg"],
];

function renderCards(items) {
    const container = document.querySelector('#cardsContainer');
    if (!container) return;

    if (!items.length) {
        container.innerHTML = '<p class="no-results">Não Têm nimguém além de você.</p>';
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
