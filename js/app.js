// Instantiate the classes
const ui = new UI();
const cocktail = new CocktailAPI();



// Create the Event Listeners
function eventListeners() {
    // Document ready
    document.addEventListener("DOMContentLoaded", documentReady);
    // Search form
    const searchForm = document.querySelector("#search-form");
    if (searchForm) {
        searchForm.addEventListener("submit", getCocktails);
    }
    
    // The results div listeners
    const resultsDiv = document.querySelector("#results");
    if (resultsDiv) {
        resultsDiv.addEventListener("click", resultsDelegation);
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
        // Server response from promise
        let serverResponse;

        //type of search (ingredients, cocktails, or name)
        const type = document.querySelector("#type").value;
        // Evaluate the type of method and then execute the query

        switch(type) {
            case "name":
                serverResponse = cocktail.getDrinksByName(searchTerm);
                break;
            case "ingredient":
                serverResponse = cocktail.getDrinksByIngredient(searchTerm);
                break;
            case "category":
                serverResponse = cocktail.getDrinksByCategory(searchTerm);
                break;
        }

        ui.clearResults();
        // Query by the name of the drink
        serverResponse.then(cocktails => {
            if (cocktails.cocktails.drinks === null) {
                // Nothing exists
                ui.printMessage(`There are no results for ${searchTerm}, try a different term.`, "danger");
            } else {
                //console.log(cocktails.cocktails.drinks);
                if (type === "name") {
                    // Display with ingredients
                    ui.displayDrinksWithIngredients(cocktails.cocktails.drinks);
                } else {
                    // Dislay without ingredients (category, alcohol, ingredient)
                    ui.displayDrinks(cocktails.cocktails.drinks);
                }
            }
        })        
    }
}

function resultsDelegation(e) {
    e.preventDefault();
    if (e.target.classList.contains("get-recipe")) {
        // console.log(e.target.dataset.id);
        cocktail.getSingleRecipe(e.target.dataset.id)
        .then(recipe => {
            // Display single recipe into the modal
            ui.displaySingleRecipe(recipe.recipe.drinks[0]);
            
        });
        
    }
}

function documentReady() {

    // Select the search category select
    const searchCategory = document.querySelector(".search-category");
    if (searchCategory) {
        ui.displayCategories();
    }
}