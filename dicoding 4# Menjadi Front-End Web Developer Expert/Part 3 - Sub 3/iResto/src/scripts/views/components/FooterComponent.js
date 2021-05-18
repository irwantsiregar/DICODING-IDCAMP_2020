import './GotocontentComponent';
import './NavbarComponent';
import './JumbotronComponent';

class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <p>Copyright &copy; 2020 - <span class="i-logo">iResto </span></p>
    `;
  }
}

customElements.define('footer-copyright', Footer);
