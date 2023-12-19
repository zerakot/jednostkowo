<script>
	import { fly } from 'svelte/transition';

	export let post;
	export let transition = {};
	export let direction = 'column';
</script>

<a href="blog/{post?.slug}" in:fly|global={{ x: 150, ...transition }}>
	<article style="--direction: {direction}">
		<img src={post?.image} alt="Zdjęcie artykułu" />

		<div class="content">
			<h3 class="title">{post?.title}</h3>
			<p class="description">{post?.meta?.description}</p>
		</div>
	</article>
</a>

<style lang="scss">
	article {
		display: flex;
		overflow: hidden;
		border: 2px solid $gray-medium;
		flex-direction: var(--direction);
		border-radius: 10px;
		box-shadow: 0 0 30px $gray-light;

		& img {
			height: 200px;
			object-fit: cover;
			width: 100%;
		}

		& .content {
			gap: 0.3rem;
			display: flex;
			flex-direction: column;
			padding: 0.5rem 1rem 1rem 1rem;

			& h3.title {
				font-weight: bold;
			}

			& .description {
				overflow: hidden;
				color: $text-light;
				display: -webkit-box;
				-webkit-line-clamp: 2;
				-webkit-box-orient: vertical;
			}
		}

		@include sm {
			& .content {
				& .description {
					-webkit-line-clamp: 4;
				}
			}
		}
	}
</style>
