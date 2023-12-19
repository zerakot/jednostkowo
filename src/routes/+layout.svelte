<script>
	import '$lib/scss/global.scss';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '../lib/components/Footer.svelte';
</script>

<div class="container">
	<Navbar />
	<slot />
	<Footer />
</div>

<style lang="scss">
	.container {
		gap: 1rem;
		width: 100%;
		min-height: 100vh;
		display: grid;
		padding: 0 1rem;
		grid-template-columns: 100%;
		grid-template-rows: 60px auto;
		grid-template-areas:
			'nav'
			'main';

		@include md {
			gap: 1.5rem;
			width: 90%;
		}
		@include lg {
			gap: 2rem;
			width: 768px;
			flex-direction: row;
		}
		@include xl {
			width: 1200px;
		}
	}
</style>
