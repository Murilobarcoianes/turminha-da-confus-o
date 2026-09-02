const cards = [
    ["Felps", "Descrição do personagem 1.", "path/to/image.jpg"],
    ["Ray", "Descrição do personagem 2.", "path/to/image.jpg"],
    ["Personagem 3", "Descrição do personagem 3.", "path/to/image.jpg"]
];

document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.cards');
    if (!container) return;

    // Remove any existing cards (keeps single source of truth from `cards` array)
    container.innerHTML = '';

    cards.forEach(([title, description, img]) => {
        const card = document.createElement('div');
        card.className = 'card';

        const content = document.createElement('div');
        content.className = 'card-content';

        if (img) {
            const image = document.createElement('img');
            image.src = img;
            image.alt = title;
            content.appendChild(image);
        }

        const h2 = document.createElement('h2');
        h2.textContent = title;

        const p = document.createElement('p');
        p.textContent = description;

        content.appendChild(h2);
        content.appendChild(p);
        card.appendChild(content);
        container.appendChild(card);
    });
});
