<script>
	export let post;
</script>

<div class="container">
	<a href="/blog/{post?.slug}">
		<article>
			<img src={post?.image.src} alt={post?.image?.alt} />

			<div class="content">
				<h3 class="title">{post?.title}</h3>
				<p class="description">{post?.meta?.description}</p>
			</div>
		</article>
	</a>
</div>

<style lang="scss">
	.container {
		width: 100%;
		container-type: inline-size;

		& article {
			width: fit-content;
			min-width: 200px;
			display: flex;
			overflow: hidden;
			border: 2px solid $gray-medium;
			flex-direction: column;
			border-radius: 10px;
			background-color: white;
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
					-webkit-line-clamp: 4;
					-webkit-box-orient: vertical;
				}
			}
		}

		@container (max-width: 300px) {
			article {
				font-size: 0.8rem;

				& img {
					width: 100%;
					height: 70px;
				}

				& .content {
					& .title {
						line-height: 0.95rem;
						font-size: 0.9rem;
						overflow: hidden;
						display: -webkit-box;
						-webkit-line-clamp: 2;
						-webkit-box-orient: vertical;
					}
					& .description {
						font-size: 0.75rem;
						line-height: 0.9rem;
						-webkit-line-clamp: 3;
					}
				}
			}
		}
	}
</style>
