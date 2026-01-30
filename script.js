document.addEventListener("DOMContentLoaded", () => {
    const gallery = document.getElementById('gallery-container');
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modal-content');

    // 1. Fonction d'affichage des données
    function displayPassions(data) {
        data.forEach(item => {
            const section = createSectionElement(item);
            gallery.appendChild(section);
        });
    }

    // 2. Création d'un élément de section
    function createSectionElement(item) {
        const article = document.createElement('article');
        article.className = 'passion-item';
        article.innerHTML = `
            <div class="image-box">
                <img src="${item.imgSmall}" alt="${item.titre}" class="zoomable" data-large="${item.imgLarge}">
                <p class="credit">Source : <a href="${item.source}" target="_blank">${item.credit}</a></p>
            </div>
            <div class="text-box">
                <h3>${item.titre}</h3>
                <p>${item.description}</p>
            </div>
        `;
        return article;
    }

    // 3. Gestion du Zoom
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('zoomable')) {
            const largeImg = e.target.getAttribute('data-large');
            modalContent.innerHTML = `<img src="${largeImg}" style="width:100%">`;
            modal.style.display = "block";
        }
        if (e.target.id === 'open-legal') {
            modalContent.innerHTML = `<h2>Mentions Légales</h2><p>Éditeur : Votre Nom<br>Hébergeur : o2switch<br>Cadre : SAE 105 - MMI 2026</p>`;
            modal.style.display = "block";
        }
    });

    // 4. Fermer la modale
    document.querySelector('.close-modal').onclick = () => modal.style.display = "none";

    // 5. Formulaire Contributif (Prévisualisation)
    document.getElementById('btn-preview').onclick = () => {
        const previewArea = document.getElementById('preview-area');
        const newItem = {
            titre: document.getElementById('form-title').value,
            description: document.getElementById('form-text').value,
            imgSmall: document.getElementById('form-url').value,
            imgLarge: document.getElementById('form-url').value,
            source: document.getElementById('form-url').value,
            credit: document.getElementById('form-credit').value
        };
        previewArea.innerHTML = "<h4>Aperçu :</h4>";
        previewArea.appendChild(createSectionElement(newItem));
    };

    displayPassions(passionData);
});