class CocktailAPI {

    // Get recipe by name
    async getDrinksByName(name) {
        // Search by name
        const apiResponse = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`);
        // Returns a json response
        const cocktails = await apiResponse.json();

        return {
            cocktails
        }
    }
}