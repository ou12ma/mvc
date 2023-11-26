class View {
  constructor(model) {
    this.model = model;
    this.favorisList = document.querySelector('.favoris-list');

    // Initialisation de l'interface
    this.initializeInterface();

    // Écouter les événements de clic sur les boutons de suppression de favoris
    this.setupDeleteButtons();
 

  // Écouter les clics sur les étoiles pour supprimer les favoris
  this.favorisList.addEventListener('click', this.handleStarClick.bind(this));
    // Add event listener to the back arrow button
    returnButton.addEventListener('click', function () {
      redirectToFavorites(); // Redirect to the favorites interface
    });
  
// Function to redirect to the favorites interface
function redirectToFavorites() {
  window.location.assign('http://localhost:5500/index.html'); // Replace with your actual URL for favorites
}
     // Écouter les clics sur les boutons itinéraire
     this.favorisList.addEventListener('click', event => {
      if (event.target.classList.contains('itinerary-btn')) {
        console.log('Itinerary button clicked');
        this.redirectToItinerary(); // Redirect to the itinerary interface
      }
    });  
  }

  // Méthode pour rediriger vers l'interface itinéraire
  redirectToItinerary() {
    // Replace the window.location.href with the URL of your itinerary interface
    window.location.assign('http://localhost:5500/it.html');
  }
// Créer l'interface avec les favoris
  initializeInterface() {
    const favorites = this.model.getFavorites();

    favorites.forEach(favorite => {
      this.displayFavorite(favorite);
    });
  }

  displayFavorite(favorite) {
    const favorisItem = document.createElement('div');
    favorisItem.classList.add('favoris-item');

    const favoriteStar = document.createElement('button');
    favoriteStar.classList.add('favorite-star');
    favoriteStar.innerHTML = '⭐';
    favorisItem.appendChild(favoriteStar);

    const favoriteName = document.createElement('span');
    favoriteName.classList.add('favorite-name');
    favoriteName.textContent = favorite;
    favorisItem.appendChild(favoriteName);

    const itineraryButton = document.createElement('button');
    itineraryButton.classList.add('itinerary-btn');
    const itineraryIcon = document.createElement('img');
    itineraryIcon.src = 'https://cdn0.iconfinder.com/data/icons/maps-15/24/directions-512.png';
    itineraryIcon.alt = 'Itinéraire';
    itineraryButton.appendChild(itineraryIcon);
    favorisItem.appendChild(itineraryButton);

    this.favorisList.appendChild(favorisItem);
  }

  // Écouter les clics sur les boutons de suppression de favoris
  setupDeleteButtons() {
    this.favorisList.addEventListener('click', event => {
      if (event.target.classList.contains('delete-btn')) {
        const favorisItem = event.target.parentElement;
        const favoriteName = favorisItem.querySelector('.favorite-name').textContent;
        this.model.removeFavorite(favoriteName);
        favorisItem.remove();
      }
    });
  }
  

  // Gérer les clics sur les étoiles pour supprimer les favoris
  handleStarClick(event) {
    if (event.target.classList.contains('favorite-star')) {
      const favorisItem = event.target.parentElement;
      const favoriteName = favorisItem.querySelector('.favorite-name').textContent;
      this.model.removeFavorite(favoriteName);
      favorisItem.remove();
    }
  }
}


const model = new Model(); // Your Model class instance
const view = new View(model); // Initialize View with the model