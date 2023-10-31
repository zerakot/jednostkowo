<script>
	import Ad from '$lib/components/Ad.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import BlogWidget from '$lib/components/BlogWidget.svelte';
	import SvelteSeo from 'svelte-seo';
	import seo from '$lib/assets/seo.json';

	export let data;
</script>

<SvelteSeo
	title="{data?.title} {seo.suffixes.title}"
	description="{data?.description} {seo.suffixes.description}"
	canonical="{seo.url}/{data?.type}-{data?.id}"
	keywords="{data?.type} {data?.name}, {seo.rootKeywords}"
	openGraph={{
		title: `${data?.title} ${seo.suffixes.title}`,
		description: `${data?.description} ${seo.suffixes.description}`,
		url: `${seo.url}/${data?.type}-${data?.id}`
	}}
	twitter={{
		title: `${data?.title} ${seo.suffixes.title}`,
		description: `${data?.description} ${seo.suffixes.description}`
	}}
/>
<!-- facebook={{
		appId: '1234567890'
	}} -->

<div class="container">
	<div class="wrapper">
		<Sidebar />

		<main>
			<Ad />

			<slot />
		</main>
	</div>

	<BlogWidget />
</div>

<style lang="scss">
	.container {
		display: flex;
		flex-direction: column;
		grid-area: main;

		& .wrapper {
			flex-direction: column;
			display: flex;
			gap: 2rem;

			& main {
				min-height: 100vh;
				width: 100%;
				gap: 2rem 0;
				display: grid;
				grid-template-columns: 1fr;
				grid-template-rows: 200px auto;
			}
		}

		@include sm {
			& main .content hgroup h1 {
				gap: 0.6rem;
				font-size: 2rem;

				& span.category {
					padding: 0.3rem 0.7rem;
					font-size: 0.75rem;
				}
			}
		}
		@include lg {
			& .wrapper {
				flex-direction: row;
			}
		}
	}
</style>
