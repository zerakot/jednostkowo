<script>
	export let data;
</script>

<div class="posts">
	{#each data?.posts as post}
		<a href="blog/{post?.slug}">
			<div class="post">
				<img src={post?.image} alt="Zdjęcie artykułu" />
				<div class="content">
					<div class="title">{post?.title}</div>
					<div class="description">{post?.content}</div>
				</div>
			</div>
		</a>
	{/each}
</div>

<style lang="scss">
	.posts {
		gap: 1rem;
		width: 100%;
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-template-rows: auto;

		& .post {
			display: flex;
			flex-direction: column;
			height: 100%;
			overflow: hidden;
			border: 2px solid $gray-medium;
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
					-webkit-line-clamp: 4;
					-webkit-box-orient: vertical;
				}
			}
		}
	}
</style>
