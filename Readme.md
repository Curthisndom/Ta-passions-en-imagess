L'url du site : http://ndombibukaka.projetsmmichamps.fr/SAE%20105%20final/

Déscription de la procédure:
Pour faire fonctionner ce site sur votre environnement local, suivez les étapes suivantes :

### 1. Préparation du répertoire
1. Localisez le répertoire d'installation de votre serveur XAMPP (généralement `C:\xampp` sur Windows ou `/Applications/XAMPP` sur macOS).
2. Ouvrez le dossier nommé `htdocs`.
3. Créez-y un nouveau dossier intitulé `sae105`.

### 2. Copie des fichiers
1. Décompressez l'archive ZIP du projet.
2. Copiez l'intégralité du contenu (fichiers `.html`, `.css`, `.js` et le dossier `images/`) et collez-le dans le dossier `htdocs/sae105` que vous venez de créer.

### 3. Lancement du serveur
1. Ouvrez le **Panneau de contrôle XAMPP** (XAMPP Control Panel).
2. Cliquez sur le bouton **Start** en face du module **Apache**. Le voyant doit devenir vert.

### 4. Accès au site
1. Ouvrez votre navigateur web préféré.
2. Saisissez l'adresse suivante dans la barre d'URL : 
   `http://localhost/sae105/`
3. Le site CinePassion devrait s'afficher avec ses contenus dynamiques chargés via JavaScript.

---

## Fonctionnalités incluses
- **Affichage dynamique :** Chargement automatique des sections depuis `data.js`.
- **Zoom interactif :** Cliquez sur une image pour l'agrandir via une fenêtre modale.
- **Section Contributive :** Formulaire de suggestion avec prévisualisation en temps réel (sans rechargement de page).
- **Sécurité :** Fichier `.htaccess` présent pour empêcher l'indexation des répertoires.

Opquast: https://www.notion.so/2e4b874c436881ad9cf5f1f42c982610?v=2e4b874c436881b5a6a9000c61cb71c0&source=copy_link