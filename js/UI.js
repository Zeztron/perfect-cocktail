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
            <div class="col-md-6">
                <div class="card my-3">
                    <img class="card-img-top" src="" alt="">

                    <div class="card-body">
                        <h2 class="card-title text-center"></h2>
                        <p class="card-text font-weight-bold">Instructions: </p>
                        <p class="card-text">

                        </p>
                        <p class="card-text">
                            <ul class="list-group">
                                <li class="list-group-item alert alert-danger">Ingredients</li>
                            </ul>
                        </p>
                        <p class="card-text font-weight-bold">Extra Information: </p>
                        <p class="card-text">
                            <span class="badge badge-pill badge-success">

                            </span>
                            <span class="badge badge-pill badge-warning">
                                Category:
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        
        `;
      });
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