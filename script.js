const cards = [
    ["Felps", "Descrição do personagem 1.", "path/to/image.jpg"],
    ["Ray", "Descrição do personagem 2.", "path/to/image.jpg"],
    ["Tharcis", "Descrição do personagem 3.", "path/to/image.jpg"]
];

document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.cards');
    if (!container) return;

    container.innerHTML = cards.map(([t, d, img]) => `
        <div class="card">
            <div class="card-content">
                ${img ? `<img src="${img}" alt="${t}">` : ''}
                <h2>${t}</h2>
                <p>${d}</p>
            </div>
        </div>
    `).join('');

});
