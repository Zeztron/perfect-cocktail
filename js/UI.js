class UI {
  // Displays drinks with ingredients
  displayDrinksWithIngredients(drinks) {
      // Show the results
      const resultsWrapper = document.querySelector(".results-wrapper");
      resultsWrapper.style.display = "block";

      // Insert the results
      const resultsDiv = document.querySelector("#results");

      drinks.forEach(drink => {
        resultsDiv.innerHTML += `
            <div class="col-md-6 mb-5">
                <div class="card my-3 h-100">
                    <img class="card-img-top" src="${drink.strDrinkThumb}" alt="${drink.strDrink}">

                    <div class="card-body">
                        <h2 class="card-title text-center">${drink.strDrink}</h2>
                        <p class="card-text font-weight-bold">Instructions: </p>
                        <p class="card-text">
                            ${drink.strInstructions}
                        </p>
                        <p class="card-text">
                            <ul class="list-group">
                                <li class="list-group-item alert alert-danger">Ingredients</li>
                                ${this.displayIngredients(drink)}
                            </ul>
                        </p>
                        <p class="card-text font-weight-bold">Extra Information: </p>
                        <p class="card-text">
                            <span class="badge badge-pill badge-success">
                                ${drink.strAlcoholic}
                            </span>
                            <span class="badge badge-pill badge-warning">
                                Category: ${drink.strCategory}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        
        `;
      });
  }

  // Prints the ingredients and measurements
  displayIngredients(drink) {
    // console.log(drink);
    let ingredients = [];
    for (let i = 1; i < 16; i++) {
        const ingredientMeasure = {};
        if (drink[`strIngredient${i}`] != "") {
            ingredientMeasure.ingredient = drink[`strIngredient${i}`];
            ingredientMeasure.measure = drink[`strMeasure${i}`];
            ingredients.push(ingredientMeasure);
        }
    }

    // console.log(ingredients);
    // Build the template
    let ingredientsTemplate = "";
    ingredients.forEach(ingredient => {
        ingredientsTemplate += `
            <li class="list-group-item">${ingredient.ingredient} - ${ingredient.measure}</li>
        `;
    });
    return ingredientsTemplate;
    
    
  }

  // Display custom message
  printMessage(message, className) {
    const div = document.createElement("div");

    // Add the HTML
    div.innerHTML = `
            <div class="alert alert-dismissible alert-${className}">
                <button type="button" class="close" data-dismiss="alert">x</button>
                ${message}
            </div>
        `;

    // Insert before
    const reference = document.querySelector(".jumbotron h1");
    const parentNode = reference.parentElement;
    parentNode.insertBefore(div, reference);

    // remove after 3 seconds
    setTimeout(() => {
      document.querySelector(".alert").remove();
    }, 3000);
  }
}