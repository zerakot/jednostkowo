<script>
	import '$lib/scss/global.scss';
	import Navbar from '$lib/components/UI/Navbar.svelte';
	import Footer from '../lib/components/UI/Footer.svelte';
</script>

<div class="container">
	<Navbar />
	<slot />
	<Footer />
</div>

<style lang="scss">
	.container {
		gap: 2rem;
		width: 100%;
		min-height: 100vh;
		display: grid;
		padding: 0 1rem;
		grid-template-columns: 1fr;
		grid-template-rows: 60px auto;
		grid-template-areas:
			'nav'
			'main';

		@include sm {
			padding: 0 2rem;
		}
		@include md {
			width: 768px;
		}
		@include lg {
			width: 992px;
			flex-direction: row;
		}
		@include xl {
			width: 1200px;
		}
	}
</style>
