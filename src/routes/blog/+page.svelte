<script>
	import { fly } from 'svelte/transition';
	import BlogCard from '../../lib/components/BlogCard.svelte';

	import SEO from '$lib/components/Seo/Seo.svelte';

	export let data;
</script>

<div class="container">
	<hgroup in:fly={{ x: -150, delay: 150 }}>
		<h1>Blog o jednostkach</h1>
		<p>
			Towarzyszą nam setki lat, opisują otaczający nas świat - to właśnie jednostki. Na naszym blogu
			dowiesz się wszystkiego na temat przeliczania jednostek oraz różnych operacji na liczbach.
			Poznaj tajniki jednostek na naszym blogu.
		</p>
	</hgroup>
	<div class="posts">
		{#each data?.posts as post}
			<BlogCard {post} />
		{/each}
	</div>
</div>

<SEO {...data?.metaTags} />

<style lang="scss">
	.container {
		gap: 1.5rem;
		display: flex;
		flex-direction: column;

		& hgroup {
			& h1 {
				margin: 0;
				color: $text;
			}
			& p {
				margin: 0;
				width: 100%;
				color: $text-light;
			}
		}

		& .posts {
			gap: 0.5rem;
			width: 100%;
			display: grid;
			grid-template-columns: 1fr;
			grid-template-rows: auto;
		}

		@include sm {
			gap: 1rem;

			& hgroup p {
				width: 80%;
			}

			& .posts {
				grid-template-columns: 1fr 1fr;
			}
		}
		@include lg {
			& .posts {
				gap: 1rem;
			}
		}
		@include xl {
			& hgroup p {
				width: 70%;
			}
			& .posts {
				grid-template-columns: 1fr 1fr 1fr;
			}
		}
	}
</style>
