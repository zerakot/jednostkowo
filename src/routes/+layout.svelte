<script>
	import '$lib/scss/global.scss';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '../lib/components/Footer.svelte';
	import Analytics from '../lib/components/Analytics.svelte';
	/** @type {{children?: import('svelte').Snippet}} */
	let { children } = $props();
</script>

{#if import.meta.env.PROD}
	<Analytics />
{/if}
<div class="container">
	<Navbar />
	{@render children?.()}
	<Footer />
</div>

<style lang="scss">
	.container {
		gap: 1rem;
		width: 100%;
		min-height: 100vh;
		display: grid;
		padding: 0 0.7rem;
		grid-template-columns: 100%;
		grid-template-rows: 60px auto;
		grid-template-areas:
			'nav'
			'main';

		@include sm {
			max-width: 600px;
		}
		@include lg {
			gap: 2rem;
			max-width: unset;
			min-width: 768px;
			flex-direction: row;
		}
		@include xl {
			width: 1200px;
		}
	}
</style>
