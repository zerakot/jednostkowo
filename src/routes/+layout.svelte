<script>
	import '$lib/scss/global.scss';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '../lib/components/Footer.svelte';
	import SvelteSeo from 'svelte-seo';
</script>

<SvelteSeo
	title="Jednostkowo.pl - procenty, jednostki, proporcje"
	description="Jednostkowo.pl - Twój pomocnik w pracy z liczbami. Obliczanie procentów, przeliczanie jednostek, kalkulator proporcji. Wszystko w jednym miejscu. Sprawdź!"
	canonical="https://jednostkowo.vercel.app/"
	keywords="obliczanie procentów, kalkulator proporcji, kalkulator, procenty, przeliczanie jednostek, kalkulator jednostek, obliczanie jednostek, kalkulator procentów"
	openGraph={{
		title: `Jednostkowo.pl - procenty, jednostki, proporcje`,
		description:
			'Jednostkowo.pl - twój pomocnik w pracy z liczbami. Obliczanie procentów, przeliczanie jednostek, kalkulator proporcji. Wszystko w jednym miejscu. Sprawdź!',
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
		title: 'Jednostkowo.pl - procenty, jednostki, proporcje',
		description:
			'Jednostkowo.pl - Twój pomocnik w pracy z liczbami. Obliczanie procentów, przeliczanie jednostek, kalkulator proporcji. Wszystko w jednym miejscu. Sprawdź!',
		image: '/logos/900x800.png'
	}}
/>

<div class="container">
	<Navbar />
	<slot />
	<Footer />
</div>

<style lang="scss">
	.container {
		gap: 2rem;
		width: 100%;
		min-height: 100vh;
		display: grid;
		padding: 0 1rem;
		grid-template-columns: 1fr;
		grid-template-rows: 60px auto;
		grid-template-areas:
			'nav'
			'main';

		@include md {
			width: 768px;
		}
		@include lg {
			width: 992px;
			flex-direction: row;
		}
		@include xl {
			width: 1200px;
		}
	}
</style>
