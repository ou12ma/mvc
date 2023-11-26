class Model extends Observable {
    constructor() {
      super();
      this.favorites = []; // Liste des favoris
      this.routes = {}; // Informations sur les itinéraires pour chaque destination
    }
  
    // Ajouter un favori à la liste
    addFavorite(favorite) {
      this.favorites.push(favorite);
      this.setChanged();
      this.notifyObservers();
    }
  
    // Supprimer un favori de la liste
    removeFavorite(favorite) {
      const index = this.favorites.indexOf(favorite);
      if (index !== -1) {
        this.favorites.splice(index, 1);
        this.setChanged();
        this.notifyObservers();
      }
    }
  
    // Obtenir la liste des favoris
    getFavorites() {
      return this.favorites;
    }
  
    // Ajouter des informations d'itinéraire pour une destination
    addRouteForDestination(destination, routeInfo) {
      this.routes[destination] = routeInfo;
      this.setChanged();
      this.notifyObservers();
    }
  
    // Obtenir les informations d'itinéraire pour une destination spécifique
    getRouteForDestination(destination) {
      return this.routes[destination];
    }
  }
  
