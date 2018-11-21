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

    // Get recipe by ingredient
    async getDrinksByIngredient(ingredient) {
        // Search by ingredient
        const apiResponse = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        // Returns a json
        const cocktails = await apiResponse.json();

        return {
            cocktails
        }
    }

    // Get single recipe
    async getSingleRecipe(id) {
        // Search by ingredient
        const apiResponse = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
        // Returns a json
        const recipe = await apiResponse.json();

        return {
            recipe
        }
    }
}