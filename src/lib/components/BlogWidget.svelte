<script>
	import { posts } from '$lib/assets/blog.js';
	import BlogCard from './BlogCard.svelte';
</script>

<div class="container">
	<h2>Najnowsze wpisy na blogu</h2>

	<div class="posts">
		{#each posts?.slice(0, 3) as post}
			<BlogCard {post} transition={{ x: 150 }} />
		{/each}
	</div>
</div>

<style lang="scss">
	.container {
		margin: 3rem 0 0 0;
		padding: 2rem 0 0 0;
		gap: 1rem;
		display: flex;
		flex-direction: column;
		border-top: 2px solid $gray-medium;

		& h2 {
			margin: 0;
		}

		& .posts {
			gap: 1rem;
			display: grid;
			grid-template-columns: repeat(1, 1fr);
		}

		@include sm {
			& .posts {
				grid-template-columns: repeat(2, 1fr);
			}
		}
		@include lg {
			& .posts {
				grid-template-columns: repeat(3, 1fr);
			}
		}
	}
</style>
