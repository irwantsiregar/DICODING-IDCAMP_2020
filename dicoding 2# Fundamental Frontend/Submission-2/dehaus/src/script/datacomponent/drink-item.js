// import './datacomponent/detail.js';

class DrinkItem extends HTMLElement {

  set drink(drink) {
    this._drink = drink;
    this.render();
  }

// style="width: 200px; height: 220px;"
  render() {
    this.innerHTML = `
          <style>
          .figure a:hover{text-decoration: none;}
          .figure {width: 150px; height: 160px;}
          @media (min-width: 768px) {
            .figure {width: 200px; height: 210px; margin: auto;}
          }
          @media (min-width: 992px) { .figure {width: 250px; height: 260px; margin: auto;}
          }
          </style>
          <!-- <div class="col-xm-6 col-sm-4 col-md-3 col-lg-2 offset-2 items"> -->
          <div class="col col-md-4 mb-4 items">
            <figure class="figure">
              <a href="detail.html?id=${this._drink.idDrink}">
              <img src="${this._drink.strDrinkThumb}" class="figure-img img-fluid rounded" alt="cocktail">
              <figcaption class="figure-caption">
                <h5 class="text-center">${this._drink.strDrink}</h5>
              </figcaption>
              </a>
            </figure>
          </div>
        `;
  }
}

customElements.define("drink-item", DrinkItem);
