<script>
	import BlogWidget from '$lib/components/BlogWidget.svelte';

	import SEO from '$lib/components/Seo/Seo.svelte';
	import { fly } from 'svelte/transition';

	/** @type {{data: any}} */
	let { data } = $props();
</script>

<div class="container" in:fly={{ x: -150, delay: 150 }}>
	<hgroup>
		<h1>Kontakt</h1>
		<p>
			Zapraszam do kontaktu w każdej sprawie. Chętnie rozważę propozycje współpracy oraz nowych
			pomysłów na rozwój portalu. Jeśli jesteś zainteresowany sprawami technicznymi związanymi z tą
			strona - również chętnie odpowiem na pytania.
		</p>
	</hgroup>
	<section>
		<p>Adres e-mail: <a href="mailto:iktorn2006@wp.pl">iktorn2006@wp.pl</a></p>
		<p>
			Instagram: <a
				href="https://www.instagram.com/zdjecia_wiktorka/"
				target="_blank"
				rel="nofollow">@zdjecia_wiktorka</a
			>
		</p>
	</section>
</div>

<BlogWidget />
<SEO {...data?.metaTags} />

<style lang="scss">
	.container {
		gap: 1rem;
		display: flex;
		flex-direction: column;

		& hgroup {
			color: $text;
			width: 100%;

			& h2 {
				margin: 0;
			}

			& p {
				margin: 0;
				color: $text-light;
			}
		}

		& section {
			& p {
				margin: 0;

				& a {
					font-weight: bold;
					color: $primary;
				}
			}
		}

		@include lg {
			& hgroup {
				width: 70%;
			}
		}
	}
</style>
