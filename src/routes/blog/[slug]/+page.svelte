<script>
	import SvelteMarkdown from 'svelte-markdown';

	export let data;
</script>

<div class="container">
	<img src={data?.post.image} alt="Banner" />
	<h1>{data?.post.title}</h1>
	<div class="content">
		<SvelteMarkdown source={data?.post.content} />
	</div>
</div>

<style lang="scss">
	.container {
		gap: 1rem;
		display: flex;

		flex-direction: column;

		& img {
			height: 50vh;
			width: 100%;
			object-fit: cover;
			border-radius: 10px;
			overflow: hidden;
			border: 1px solid $gray-medium;
			box-shadow: 0 0 20px $gray-medium;
		}

		& .content {
		}
	}
</style>
