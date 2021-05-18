
class Detail extends HTMLElement {

  set detail(drinks) {
      this._detail = drinks;
      this.render();
  }

  render() {
    this.innerHTML = "";
    this._detail.forEach(drink => {
        this.innerHTML = `
        <!-- Column 1 drink-->
        <div class="col-6">
          <div class="row item mb-3 justify-content-center">
            <h3 class="text-center">${drink.strDrink}</h3>
          </div>
          <div class="row justify-content-center">
            <figure class="figure">
              <img src="${drink.strDrinkThumb}" class="figure-img img-fluid rounded" alt="single-drink">
              <figcaption class="figure-caption">perferendis commodi ratione fugit.</figcaption>
            </figure>
          </div>
        </div>

        <!-- Column 2 ingredients -->
        <div class="col-6">
          <div class="row item mb-3 justify-content-center">
            <h3>Ingredients</h3>
          </div>
          <!-- Item ingredients -->
          <div class="row">
            <div class="col-4 mb-4">
              <figure class="figure">
                <div class="figure-img">
                  <img src="https://source.unsplash.com/170x180/?cocktail" class="figure-img img-fluid rounded" alt="cocktail">
                  <figcaption class="figure-caption">
                    <h6 class="text-center">Juice of 1 Lime</h6>
                  </figcaption>
                </div>
              </figure>
            </div>
            <div class="col-4 mb-4">
              <figure class="figure">
                <div class="figure-img">
                  <img src="https://source.unsplash.com/171x180/?cocktail" class="figure-img img-fluid rounded" alt="cocktail">
                  <figcaption class="figure-caption">
                    <h6 class="text-center">Juice of 1 Lime</h6>
                  </figcaption>
                </div>
              </figure>
            </div>
            <div class="col-4 mb-4">
              <figure class="figure">
                <div class="figure-img">
                  <img src="https://source.unsplash.com/170x180/?cocktail" class="figure-img img-fluid rounded" alt="cocktail">
                  <figcaption class="figure-caption">
                    <h6 class="text-center">Juice of 1 Lime</h6>
                  </figcaption>
                </div>
              </figure>
            </div>
            <div class="col-4 mb-4">
              <figure class="figure">
                <div class="figure-img">
                  <img src="https://source.unsplash.com/170x181/?cocktail" class="figure-img img-fluid rounded" alt="cocktail">
                  <figcaption class="figure-caption">
                    <h6 class="text-center">Juice of 1 Lime</h6>
                  </figcaption>
                </div>
              </figure>
            </div>
            <!-- End Item ingredients -->
          </div>
        </div>
        `;
  }

}

customElements.define("detail", Detail);
