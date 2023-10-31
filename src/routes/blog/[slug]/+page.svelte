<script>
	import SvelteMarkdown from 'svelte-markdown';
	import SvelteSeo from 'svelte-seo';
	import seo from '$lib/assets/seo.json';

	export let data;

	const seoData = {
		...seo.default,
		title: `${data?.post?.title} ${seo.suffixes.title}`,
		canonical: `${seo.url}/blog/${data?.post?.slug}`,
		description: 'Blog Jednostkowo.pl - baza wiedzy o przeliczaniu jednostek',
		keywords: `${data?.post?.keywords?.join(', ') || ''} + ${seo.rootKeywords}`,
		openGraph: {
			...seo.default.openGraph,
			image: data?.post?.image,
			title: `${data?.post?.title} ${seo.suffixes.title}`,
			description: 'Blog Jednostkowo.pl - baza wiedzy o przeliczaniu jednostek',
			url: `${seo.url}/blog/${data?.post?.slug}`
		},
		twitter: {
			...seo.default.twitter,
			image: data?.post?.image,
			title: `${data?.post?.title} ${seo.suffixes.title}`,
			description: 'Blog Jednostkowo.pl - baza wiedzy o przeliczaniu jednostek'
		}
	};
</script>

<SvelteSeo {...seoData} />
<div class="container">
	<img src={data?.post.image} alt="Banner" />

	<main>
		<h1>{data?.post.title}</h1>
		<div class="content">
			<SvelteMarkdown source={data?.post.content} />
		</div>
	</main>

	<div class="ad" />
</div>

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

		& main {
			grid-area: main;
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
				height: 90vh;
			}
		}
	}
</style>
