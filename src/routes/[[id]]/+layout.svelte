<script>
	import Ad from '$lib/components/Ad.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import BlogWidget from '$lib/components/BlogWidget.svelte';
</script>

<div class="container">
	<Sidebar />

	<main>
		<Ad />
		<slot />
	</main>
</div>
<BlogWidget />

<style lang="scss">
	.container {
		width: 100%;
		gap: 2rem;
		display: flex;
		grid-area: main;
		flex-direction: column;

		& main {
			width: 100%;
			gap: 2rem 0;
			display: grid;
			grid-template-columns: 100%;
			grid-template-rows: repeat(2, auto);
		}

		@include lg {
			flex-direction: row;

			& main {
				grid-template-rows: repeat(2, auto);
			}
		}
	}
</style>
