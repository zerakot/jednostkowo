<script>
	import { fly } from 'svelte/transition';
	import SEO from '$lib/components/Seo/Seo.svelte';
	import Markdown from '../../../lib/components/Markdown.svelte';
	import CalculatorBanner from './CalculatorBanner.svelte';

	export let data;
</script>

<div class="container">
	<CalculatorBanner calculatorId={data?.post?.calculatorId} />

	<img src={data?.post.image.src} alt={data?.post?.image?.alt} in:fly={{ x: -150 }} />

	<section class="content" in:fly={{ x: -150, delay: 100 }}>
		<h1>{data?.post.title}</h1>
		<Markdown source={data?.post?.content} />
	</section>
</div>
<SEO {...data?.metaTags} />

<style lang="scss">
	.container {
		gap: 1rem 2rem;
		display: grid;
		grid-template-rows: repeat(3, auto);
		grid-template-columns: 1fr;
		grid-template-areas:
			'widget'
			'img'
			'content';

		& img {
			grid-area: img;
			height: 30vh;
			width: 100%;
			object-fit: cover;
			border-radius: 10px;
			overflow: hidden;
			border: 1px solid $gray-medium;
			box-shadow: 0 0 20px $gray-medium;
		}

		& section.content {
			grid-area: content;

			& h1 {
				margin-bottom: 1rem;
			}
		}

		@include lg {
			grid-template-rows: auto 1fr;
			grid-template-columns: 1fr 250px;
			grid-template-areas:
				'img img'
				'content widget';

			& img {
				height: 40vh;
			}

			& .ad {
				height: auto;
				width: 250px;
			}
		}
	}
</style>
