<script>
	import Sidebar from '$lib/components/Sidebar.svelte';
	import SideBlogWidget from '../../lib/components/SideBlogWidget.svelte';
	/** @type {{children?: import('svelte').Snippet}} */
	let { children } = $props();
</script>

<div class="container">
	<div class="content">
		<Sidebar />

		<main>
			{@render children?.()}
		</main>
	</div>

	<SideBlogWidget />
</div>

<!-- <BlogWidget /> -->

<style lang="scss">
	.container {
		width: 100%;
		gap: 2rem 1rem;
		display: flex;
		justify-content: center;
		align-items: center;
		grid-area: main;
		flex-direction: column;

		& .content {
			gap: 1rem;
			display: flex;
			grid-area: main;
			flex-direction: column;

			& main {
				width: 100%;
				gap: 2rem 0;
				display: grid;
				max-width: 650px;
				grid-template-columns: 100%;
			}
		}

		@include sm {
			& .content {
				max-width: 600px;
				padding: 0 1rem;
			}
		}

		@include lg {
			& .content {
				max-width: unset;
				flex-direction: row;
			}
		}

		@include xl {
			flex-direction: row;
			align-items: flex-start;
		}
	}
</style>
