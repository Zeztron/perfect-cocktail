class CocktailDB {

    // Save the recipes into local storage
    saveIntoDB(drink) {
        const drinks = this.getFromDB();
        drinks.push(drink);

        // Add the new arrow into local storage
        localStorage.setItem("drinks", JSON.stringify(drinks));
    }

    // Remove element from LS
    removeFromDB(id) {
        const drinks = this.getFromDB();

        // Loop
        drinks.forEach((drink, index) => {
            if (id === drink.id) {
                drinks.splice(index, 1);
            }
        });

        // Set the array into LS
        localStorage.setItem("drinks", JSON.stringify(drinks));
    }


    // Return recipes from storage
    getFromDB() {
        let drinks;
        // Check from local storage
        if (localStorage.getItem("drinks") === null) {
            drinks = [];
        } else {
            drinks = JSON.parse(localStorage.getItem("drinks"));
        }
        return drinks;
    }
}