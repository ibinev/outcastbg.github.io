import { LitElement, html } from 'https://cdn.skypack.dev/lit';
import '../shared/video-modal.js';

class BannerSection extends LitElement {
	static properties = {
		title: { type: String },
		subtitle: { type: String },
		backgroundImage: { type: String },
		videoUrl: { type: String }
	};

	constructor() {
		super();
		this.title = html`Taking Podcast To <span class="accent-color">The Next Level</span>`;
		this.subtitle = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.';
		this.backgroundImage = 'image/dummy-img-1920x900.jpg';
		this.videoUrl = 'https://www.youtube.com/embed/FK2RaJ1EfA8?autoplay=1';
	}

	render() {
		return html`
      <section class="section position-relative" style="background-image: url(${this.backgroundImage}); height: 90vh;">
        <div class="image-overlay"></div>
        <div class="r-container h-100 position-relative" style="z-index: 2;">
          <div class="row row-cols-1 row-cols-lg-2 w-100 h-100">
            <div class="col h-100 p-lg-0">
              <div class="d-flex flex-column gap-3 justify-content-center h-100">
                <h1 class="font-1 fw-bold lh-1">
                  ${this.title}
                </h1>
                <p class="text-gray fs-5">
                  ${this.subtitle}
                </p>
                <div class="d-flex flex-lg-row flex-column gap-lg-5 gap-4">
                  <a href="" class="btn button font-1 ls-2">LEARN MORE</a>
                  <div class="d-flex flex-row gap-3 align-items-center">
                    <button type="button" class="btn request-loader" data-bs-toggle="modal" data-bs-target="#exampleModal">
                      <i class="fa-solid fa-play ms-1"></i>
                    </button>
                    <span class="font-1 ls-2 fw-bold">START LISTENING</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <video-modal id="exampleModal" videoUrl="${this.videoUrl}"></video-modal>
      </section>
    `;
	}

	createRenderRoot() {
		return this; // use light DOM
	}
}

customElements.define('banner-section', BannerSection);