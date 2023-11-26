<script>
	import SvelteMarkdown from 'svelte-markdown';
	import { fly } from 'svelte/transition';
	import SEO from '$lib/components/Seo/Seo.svelte';

	import Paragraph from '$lib/components/markdown/Paragraph.svelte';
	import Headings from '$lib/components/markdown/Headings.svelte';
	import List from '$lib/components/markdown/List.svelte';
	import ListItem from '$lib/components/markdown/ListItem.svelte';
	import Link from '$lib/components/markdown/Link.svelte';

	export let data;
</script>

<div class="container">
	<!-- Dodaj wtrącenie do użycia kalkulatora lub przelicznika (użyj formatowania bloku code) -->
	<img src={data?.post.image} alt="Banner artykułu" in:fly={{ x: -150 }} />

	<section class="content" in:fly={{ x: -150, delay: 100 }}>
		<h1>{data?.post.title}</h1>
		<SvelteMarkdown
			source={data?.post.content}
			renderers={{
				heading: Headings,
				paragraph: Paragraph,
				list: List,
				listitem: ListItem,
				link: Link
			}}
		/>
	</section>

	<div class="ad" in:fly={{ x: 150, delay: 200 }} />
</div>

<SEO {...data?.metaTags} />

<style lang="scss">
	.container {
		gap: 1rem 2rem;
		display: grid;
		grid-template-rows: auto 200px auto;
		grid-template-columns: 1fr;
		grid-template-areas:
			'img'
			'ad'
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
			background-color: $gray-light;
			width: 100%;
			height: 100%;
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
				height: calc(100vh - 40px);
			}
		}
	}
</style>
