<script>
	import { fly } from 'svelte/transition';
	import BlogCard from '../../lib/components/BlogCard.svelte';
	import SvelteSeo from 'svelte-seo';

	export let data;
</script>

<SvelteSeo {...data?.metaTags} />

<div class="container">
	<hgroup in:fly={{ x: -150 }}>
		<h1>Blog o jednostkach</h1>
		<p>
			Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis cupiditate molestias aliquid
			illo, maxime iusto, nulla dolor excepturi molestiae voluptatem impedit.
		</p>
	</hgroup>
	<div class="posts">
		{#each data?.posts as post, i}
			<BlogCard {post} transition={{ x: -150, delay: 150 }} />
		{/each}
	</div>
</div>

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
			gap: 1rem;
			width: 100%;
			display: grid;
			grid-template-columns: 1fr;
			grid-template-rows: auto;
		}
		@include sm {
			& hgroup p {
				width: 80%;
			}

			& .posts {
				grid-template-columns: 1fr 1fr;
			}
		}
		@include lg {
			& hgroup p {
				width: 70%;
			}
			& .posts {
				grid-template-columns: 1fr 1fr 1fr;
			}
		}
	}
</style>
