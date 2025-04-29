import { LitElement, html } from 'https://cdn.skypack.dev/lit';

class AppNav extends LitElement {
	render() {
		return html`
		<ul class="navbar-nav mx-auto mb-2 mb-lg-0 gap-3">
			<li class="nav-item">
			<a class="nav-link active" aria-current="page" href="index.html">Home</a>
			</li>
			<li class="nav-item">
			<a class="nav-link" href="about_us.html">About Us</a>
			</li>
			<li class="nav-item">
			<a class="nav-link" href="podcasts.html">Podcasts</a>
			</li>
			<li class="nav-item dropdown">
			<a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
				aria-expanded="false">
				Pages
			</a>
			<ul class="dropdown-menu">
				<li><a class="dropdown-item" href="team.html">Team</a></li>
				<li><a class="dropdown-item" href="gallery.html">Gallery</a></li>
				<li><a class="dropdown-item" href="pricing.html">Pricing</a></li>
				<li><a class="dropdown-item" href="faq.html">FAQs</a></li>
				<li><a class="dropdown-item" href="404.html">404 Error</a></li>
			</ul>
			</li>
			<li class="nav-item dropdown">
			<a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
				aria-expanded="false">
				Blog
			</a>
			<ul class="dropdown-menu">
				<li><a class="dropdown-item" href="blog.html">Blog Post</a></li>
				<li><a class="dropdown-item" href="single_post.html">Single Post</a></li>
			</ul>
			</li>
			<li class="nav-item">
			<a class="nav-link" href="contact.html">Contact Us</a>
			</li>
		</ul>
		`;
	}

	createRenderRoot() {
		return this; // use light DOM
	}
}

customElements.define('app-nav', AppNav);