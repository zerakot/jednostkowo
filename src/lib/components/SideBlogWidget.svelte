<script>
	import { posts } from '$lib/assets/blog.js';
	import { fly } from 'svelte/transition';
	import BlogCard from './BlogCard.svelte';
</script>

<div class="sideBlogWidget" in:fly|global={{ x: 150, delay: 150 }}>
	<h3>Najnowsze wpisy</h3>

	<div class="posts">
		{#each posts.slice(0, 4) as post}
			<BlogCard {post} />
		{/each}
	</div>

	<a class="seeMore" href="/blog">Zobacz więcej</a>
</div>

<style lang="scss">
	.sideBlogWidget {
		flex-shrink: 0;
		gap: 0.7rem;
		display: flex;
		width: 100%;
		align-items: center;
		flex-direction: column;

		& h3 {
			width: fit-content;
			text-align: center;
			position: relative;

			&:before {
				bottom: 0px;
				left: 30%;
				width: 40%;
				height: 2px;
				border-radius: 10px;
				content: '';
				background-color: $primary;
				position: absolute;
			}
		}

		& .posts {
			width: 100%;
			display: grid;
			grid-template-columns: 1fr;
			grid-template-rows: repeat(4, 1fr);
			gap: 0.5rem;
		}

		& a.seeMore {
			line-height: 1rem;
			color: $text-light;
			text-align: center;
		}

		@include sm {
			& .posts {
				grid-template-columns: 1fr 1fr;
				grid-template-rows: 1fr 1fr;
			}
		}
		@include lg {
			& .posts {
				width: 80%;
			}
		}
		@include xl {
			flex-direction: column;
			width: 200px;

			& .posts {
				width: 100%;
				display: flex;
				flex-direction: column;
				gap: 0.5rem;
			}
		}
	}
</style>
