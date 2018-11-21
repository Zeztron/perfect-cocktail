// Instantiate the classes
const ui = new UI();



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
        ui.printMessage();
    } else {

    }
    

}