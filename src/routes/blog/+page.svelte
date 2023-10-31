<script>
	import BlogCard from '../../lib/components/BlogCard.svelte';
	import SvelteSeo from 'svelte-seo';
	import seo from '$lib/assets/seo.json';

	export let data;
</script>

<SvelteSeo
	title="Blog {seo.suffixes.title}"
	description="Blog Jednostkowo.pl - baza wiedzy o przeliczaniu jednostek"
	canonical="{seo.url}/blog"
	keywords="blog, {seo.rootKeywords}"
	openGraph={{
		title: `Blog ${seo.suffixes.title}`,
		description: 'Blog Jednostkowo.pl - baza wiedzy o przeliczaniu jednostek',
		url: `${seo.url}/blog`
	}}
	twitter={{
		title: `Blog ${seo.suffixes.title}`,
		description: 'Blog Jednostkowo.pl - baza wiedzy o przeliczaniu jednostek'
	}}
/>

<div class="container">
	<hgroup>
		<h1>Blog o jednostkach</h1>
		<p>
			Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis cupiditate molestias aliquid
			illo, maxime iusto, nulla dolor excepturi molestiae voluptatem impedit.
		</p>
	</hgroup>
	<div class="posts">
		{#each data?.posts as post}
			<BlogCard {post} />
		{/each}
	</div>
</div>

<style lang="scss">
	.container {
		gap: 1.5rem;
		display: flex;
		flex-direction: column;

		& hgroup {
			& h1 {
				color: $text;
			}
			& p {
				width: 100%;
				color: $text-light;
			}
		}

		& .posts {
			gap: 1rem;
			width: 100%;
			display: grid;
			grid-template-columns: 1fr;
			grid-template-rows: auto;
		}
		@include sm {
			& hgroup p {
				width: 80%;
			}

			& .posts {
				grid-template-columns: 1fr 1fr;
			}
		}
		@include lg {
			& hgroup p {
				width: 70%;
			}
			& .posts {
				grid-template-columns: 1fr 1fr 1fr;
			}
		}
	}
</style>
