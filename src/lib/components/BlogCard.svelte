<script>
	export let post;
	export let direction = 'column';
</script>

<a href="blog/{post?.slug}">
	<article style="--direction: {direction}">
		<img src={post?.image} alt="Zdjęcie artykułu" />
		<div class="content">
			<div class="title">{post?.title}</div>
			<div class="description">{post?.content}</div>
		</div>
	</article>
</a>

<style lang="scss">
	article {
		display: flex;
		height: 100%;

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

			& .title {
				font-weight: bold;
				font-size: 1.4rem;
			}

			& .description {
				font-size: 0.95rem;
				overflow: hidden;
				color: $text-light;
				display: -webkit-box;
				-webkit-line-clamp: 3;
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
