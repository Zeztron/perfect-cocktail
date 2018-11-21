// Instantiate the classes
const ui = new UI();
const cocktail = new CocktailAPI();



// Create the Event Listeners
function eventListeners() {
    // Search form
    const searchForm = document.querySelector("#search-form");
    if (searchForm) {
        searchForm.addEventListener("submit", getCocktails);
    }
    
}

eventListeners();

// Get cocktails function
function getCocktails(e) {
    e.preventDefault();

    const searchTerm = document.querySelector("#search").value;

    // Check if something is in the search input
    if (searchTerm === "") {
        // Call user interface print message
        ui.printMessage("Please add something into the form", "danger");
    } else {
        // Query by the name of the drink
        cocktail.getDrinksByName(searchTerm)
         .then(cocktails => {
             if (cocktails.cocktails.drinks === null) {
                 // Nothing exists
                 ui.printMessage(`There are no results for ${searchTerm}, try a different term.`, "danger");
             } else {
                 //console.log(cocktails.cocktails.drinks);
                 ui.displayDrinksWithIngredients(cocktails.cocktails.drinks);
                 
             }
             
         })        
    }
    

}