import { LitElement, html } from 'https://cdn.skypack.dev/lit';

class SocialLinks extends LitElement {
	static properties = {
		links: { type: Array }
	};

	constructor() {
		super();
		this.links = [
			{ platform: 'youtube', icon: 'fa-brands fa-youtube', url: 'https://www.youtube.com' },
			{ platform: 'spotify', icon: 'fa-brands fa-spotify', url: 'https://www.spotify.com' },
			{ platform: 'soundcloud', icon: 'fa-brands fa-soundcloud', url: 'https://www.soundcloud.com' },
			{ platform: 'twitter', icon: 'fa-brands fa-twitter', url: 'https://www.twitter.com' }
		];
	}
	
	render() {
		return html`
      <div class="social-container mb-lg-0 mb-3">
        ${this.links.map(link => html`
          <a href="${link.url}" class="social-item">
            <i class="${link.icon}"></i>
          </a>
        `)}
      </div>
    `;
	}

	createRenderRoot() {
		return this; // use light DOM
	}
}

customElements.define('social-links', SocialLinks);