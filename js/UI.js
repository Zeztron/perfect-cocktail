class UI {


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
            document.querySelector(".alert").remove()
        }, 3000);
    }
}