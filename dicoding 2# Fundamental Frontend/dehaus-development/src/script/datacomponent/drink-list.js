import './drink-item.js';

class DrinkList extends HTMLElement {

  set drinks(drinks) {
      this._drinks = drinks;
      this.render();
  }

  render() {
      this.innerHTML = `
      <!-- Popular drink -->
      <section class="popular p-4">
        <div class="container">
          <div class="row populari mb-3">
            <div class="col">
              <h3>Popular Drinks</h3>
            </div>
          </div>
          <div id="drinks" class="row pt-3">

          </div>
        </div>
      </section>
      `;
      const drinksRow = document.querySelector("#drinks");
      this._drinks.forEach(drink => {
          const drinkItemElement = document.createElement("drink-item");
          drinkItemElement.drink = drink;
          // this.appendChild(drinkItemElement);
          drinksRow.appendChild(drinkItemElement);
      })
  }

  renderError(message) {
      this.innerHTML = `
    <div class="col col-lg-8 offset-lg-2 mt-4">
      <div class="alert alert-warning alert-dismissible fade show" role="alert">
        <h4 class="text-center text-uppercase">${message}</h4>
        <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
      </div>
    </div>
        `;
  }
}

customElements.define("drink-list", DrinkList);
