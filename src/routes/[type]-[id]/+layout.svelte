<script>
	import Ad from '$lib/components/Ad.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import BlogWidget from '$lib/components/BlogWidget.svelte';
	import SvelteSeo from 'svelte-seo';

	export let data;
</script>

<SvelteSeo
	title="{data?.title} • Przelicznik.pl"
	description="{data?.description} Jednostkowo.pl - Twój pomocnik w pracy z liczbami."
	canonical="https://jednostkowo.vercel.app/{data?.type}-{data?.id}"
	keywords="{data?.type} {data?.name}, obliczanie procentów, kalkulator proporcji, kalkulator, procenty, przeliczanie jednostek, kalkulator jednostek, obliczanie jednostek, kalkulator procentów"
	openGraph={{
		title: `${data?.title} • Przelicznik.pl`,
		description: `${data?.description} Jednostkowo.pl - Twój pomocnik w pracy z liczbami`,
		image: '/logos/800x600.png',
		url: 'https://jednostkowo.vercel.app',
		type: 'website',
		images: [
			{
				url: '/logos/800x600.png',
				width: 800,
				height: 600,
				alt: 'Logo Jednostkowo.pl'
			},
			{
				url: '/logos/900x800.png',
				width: 900,
				height: 800,
				alt: 'Logo Jednostkowo.pl'
			},
			{
				image: '/logos/800x600.png',
				alt: 'Logo Jednostkowo.pl'
			}
		]
	}}
	twitter={{
		card: 'summary_large_image',
		title: `${data?.title} • Przelicznik.pl`,
		description: `${data?.description} Jednostkowo.pl - Twój pomocnik w pracy z liczbami.`,
		image: '/logos/900x800.png'
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
