class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    // Mettre en place les écouteurs d'événements
    this.setupEventListeners();
  }

  // Méthode pour configurer les écouteurs d'événements
  setupEventListeners() {
    const addFavoriteButton = document.querySelector('.add-favorite-button');

    // Écouter l'événement de clic sur le bouton d'ajout de favori
    addFavoriteButton.addEventListener('click', () => {
      this.handleAddFavorite(); // Méthode pour gérer l'ajout de favori
    });
  }

  // Méthode pour gérer l'ajout de favori
  handleAddFavorite() {
    const destinationInput = document.getElementById('destinationInput');
    const destination = destinationInput.value;

    if (destination.trim() !== '') {
      // Ajouter le favori au modèle
      this.model.addFavorite(destination);

      // Mettre à jour la vue en affichant le nouveau favori
      this.view.displayFavorite(destination);

      // Effacer le champ de saisie après l'ajout du favori
      destinationInput.value = '';
    } else {
      // Gérer le cas où l'entrée est vide
      alert('Veuillez saisir une destination.');
    }
  }
}
export default Controller;
