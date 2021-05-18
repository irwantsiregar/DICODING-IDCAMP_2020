class Navbar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <nav>
      <button id="hamburger" aria-label="hamburger menu">☰</button>
      <div class="logo">
        <a href="#">iResto</a>
      </div>
      <ul>
        <li><a href="#/list-menu" class="active" aria-label="link navigasi">List Menu</a></li>
        <li><a href="#/like" aria-label="link navigasi">Favorite</a></li>
        <li><a href="https://www.linkedin.com/in/irwanto-siregar/?locale=in_ID" rel="noopener" target="_blank"
            aria-label="link navigasi">About Us</a>
        </li>
      </ul>
    </nav>
    `;
  }
}

customElements.define('nav-bar', Navbar);
