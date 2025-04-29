import { LitElement, html, css } from 'https://cdn.skypack.dev/lit';
import './app-nav.js';
import './social-links.js';

class AppHeader extends LitElement {
  static properties = {
    logo: { type: String }
  };

  constructor() {
    super();
    this.logo = 'image/logo.png';
  }

  render() {
    return html`
      <header class="bg-secondary-dark sticky-top">
        <div class="r-container">
          <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
              <a class="navbar-brand" href="index.html">
                <div class="logo-container">
                  <img 
                    src="${this.logo}"
                    alt="logo"
                    class="img-fluid"
                    width="100" 
                    height="100" />
                </div>
              </a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                aria-expanded="false" aria-label="Toggle navigation">
                <i class="fa-solid fa-bars-staggered"></i>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <app-nav></app-nav>
                <social-links></social-links>
              </div>
            </div>
          </nav>
        </div>
      </header>
    `;
  }

  createRenderRoot() {
    return this; // use light DOM
  }
}

customElements.define('app-header', AppHeader);