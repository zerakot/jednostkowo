<script>
	import '$lib/scss/global.scss';
	import Navbar from '$lib/components/UI/Navbar.svelte';
</script>

<svelte:head>
	<script
		async
		src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8080398088944990"
		crossorigin="anonymous"
	></script>
</svelte:head>

<div class="container">
	<Navbar />

	<slot />
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
		background-color: blue;

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
