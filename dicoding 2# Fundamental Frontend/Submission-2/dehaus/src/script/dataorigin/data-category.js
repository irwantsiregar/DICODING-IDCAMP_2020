
function category() {
    const baseUrl = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`;

    const getCategory = () => {
      fetch(`${baseUrl}`)
      .then(response => {
        return response.json();
      })
      .then(responseJson => {
        if (responseJson.error) {
          showResponseMessage(responseJson.message);
        } else {
          renderAlldrinks(responseJson.drinks);
        }
      })
      .catch(error =>{
        showResponseMessage(error);
      })

    };
    const renderAlldrinks = (drinks) => {
        const categorID = document.querySelector("#categorID");
        categorID.innerHTML = "";

        drinks.forEach(drink => {
            categorID.innerHTML += `
            <style>
            .figure a:hover{text-decoration: none;}
            </style>
            <div class="col-6 col-sm-4 col-md-3">
              <figure class="figure">
                <a href="#">
                <img src="https://source.unsplash.com/380x350/?cocktail" class="figure-img img-fluid rounded" alt="cocktail">
                <figcaption class="figure-caption">
                  <h5 class="text-center">${drink.strCategory}</h5>
                </figcaption>
                </a>
              </figure>
            </div>
            `;
        });

    };

    const showResponseMessage = (message = "Check your internet connection") => {
        alert(message);
    };

    document.addEventListener("DOMContentLoaded", () => {
        getCategory();
    });
}

export default category;
