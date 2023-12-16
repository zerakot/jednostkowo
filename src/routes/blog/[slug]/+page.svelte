<script>
	import { fly } from 'svelte/transition';
	import SEO from '$lib/components/Seo/Seo.svelte';
	import Markdown from '../../../lib/components/Markdown.svelte';
	import Ad from '../../../lib/components/Ad.svelte';

	export let data;
</script>

<div class="container">
	<!-- Dodaj wtrącenie do użycia kalkulatora lub przelicznika (użyj formatowania bloku code) -->
	<img src={data?.post.image} alt="Banner artykułu" in:fly={{ x: -150 }} />

	<section class="content" in:fly={{ x: -150, delay: 100 }}>
		<h1>{data?.post.title}</h1>
		<Markdown source={data?.post?.content} />
	</section>

	<div class="ad" in:fly={{ x: 150, delay: 200 }}>
		<Ad />
	</div>
</div>

<SEO {...data?.metaTags} />

<style lang="scss">
	.container {
		gap: 1rem 2rem;
		display: grid;
		grid-template-rows: 200px auto auto;
		grid-template-columns: 1fr;
		grid-template-areas:
			'ad'
			'img'
			'main';

		& img {
			grid-area: img;
			height: 50vh;
			width: 100%;
			object-fit: cover;
			border-radius: 10px;
			overflow: hidden;
			border: 1px solid $gray-medium;
			box-shadow: 0 0 20px $gray-medium;
		}

		& section.content {
			grid-area: main;

			& h1 {
				margin-bottom: 1rem;
				line-height: 4rem;
			}
		}

		& .ad {
			width: 100%;
			grid-area: ad;
		}

		@include md {
			grid-template-rows: auto 1fr;
			grid-template-columns: 1fr auto;
			grid-template-areas:
				'img img'
				'main ad';

			& .ad {
				top: 20px;
				position: sticky;
				width: 250px;
			}
		}
	}
</style>
