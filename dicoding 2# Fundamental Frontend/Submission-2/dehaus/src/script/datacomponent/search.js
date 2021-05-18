class SearchBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.querySelector("#searchElement").value;
  }

  render() {
    this.innerHTML = `
        <style>
          .form-control {
            border-radius: 27px;
            padding: 20px;
          }
        </style>

        <!-- Section Search -->
        <section class="search bg-light">
          <div class="container">
            <div class="row p-5">
              <div class="col col-sm-4 col-md-6 offset-3 m-auto">
              <h5 class="text-center">We provide various types of drinks that you can find here.</h5>
                <div class="input-group">
                  <input type="search" id="searchElement" class="form-control" placeholder="Search..." aria-label="search" aria-describedby="basic-addon2">
                </div>
              </div>
            </div>
          </div>
        </section>
       `;

        this.querySelector(".form-control").addEventListener("keyup", this._clickEvent);
  }
}


customElements.define("search-bar", SearchBar);
