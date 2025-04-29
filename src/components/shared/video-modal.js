import { LitElement, html } from 'https://cdn.skypack.dev/lit';

class VideoModal extends LitElement {
	static properties = {
		id: { type: String },
		videoUrl: { type: String }
	};

	render() {
		return html`
			<div class="modal fade bg-overlay" id="${this.id}" tabindex="-1" aria-hidden="true">
				<div class="modal-dialog modal-dialog-centered modal-lg">
				<div class="modal-content bg-dark-color">
					<iframe class="ifr-video" src="${this.videoUrl}"></iframe>
				</div>
				</div>
			</div>
		`;
	}

	createRenderRoot() {
		return this; // use light DOM
	}
}

customElements.define('video-modal', VideoModal);