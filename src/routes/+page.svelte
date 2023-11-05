<script>
	import BannerImage from '$lib/assets/images/banner.png';
	import SectionConverterImage from '$lib/assets/images/section_converter.png';
	import SectionCalculatorImage from '$lib/assets/images/section_calculator.png';
	import SEO from '$lib/components/Seo/SEO.svelte';
	import { fly } from 'svelte/transition';

	export let data;
</script>

<div class="container">
	<header>
		<div class="about">
			<hgroup>
				<h1 in:fly={{ x: -150 }}>Wszystko o liczbach</h1>
				<p in:fly={{ x: -150, delay: 100 }}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed magni excepturi architecto
					libero fuga ullam nobis alias enim tempore illum non ut id, asperiores repellendus iure
					beatae deserunt in tenetur.
				</p>
			</hgroup>
			<div class="actions">
				<a href="/przelicznik-dlugosci" in:fly={{ x: -150, delay: 150 }}>Przejdź do serwisu</a>
				<a href="/blog" class="ghost" in:fly={{ x: -150, delay: 200 }}> Odwiedź bloga </a>
			</div>
		</div>

		<img
			src={BannerImage}
			alt="Mężczyzna siedzący na piłce, czytający książkę"
			in:fly={{ x: 150, delay: 250 }}
		/>
	</header>
	<section>
		<div class="about">
			<hgroup>
				<h2>Przeliczniki jednostek</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat sit adipisci eveniet ipsa
					ullam. Ut quas, recusandae mollitia ullam repellat consequuntur nihil molestiae nulla
					voluptatum obcaecati, ipsum reiciendis consequatur delectus.
				</p>
			</hgroup>
			<div class="actions">
				<a href="/przelicznik-dlugosci">Wypróbuj przeliczniki</a>
			</div>
		</div>
		<img src={SectionConverterImage} alt="Szczęśliwa kobieta" />
	</section>
	<section>
		<div class="about">
			<hgroup>
				<h2>Rozmaite kalkulatory</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat sit adipisci eveniet ipsa
					ullam. Ut quas, recusandae mollitia ullam repellat consequuntur nihil molestiae nulla
					voluptatum obcaecati, ipsum reiciendis consequatur delectus.
				</p>
			</hgroup>
			<div class="actions">
				<a href="/kalkulator-procentow">Wypróbuj kalkulatory</a>
			</div>
		</div>
		<img src={SectionCalculatorImage} alt="Szczęśliwa kobieta" />
	</section>
</div>
<SEO {...data?.metaTags} />

<style lang="scss">
	.container {
		display: flex;
		flex-direction: column;

		& header,
		& section {
			gap: 1rem;
			display: flex;
			align-items: center;

			& .about {
				gap: 1rem;
				display: flex;
				align-items: flex-start;
				flex-direction: column;

				& .actions {
					gap: 0.5rem;
					display: flex;

					& a {
						cursor: pointer;
						color: white;
						padding: 0.5rem 1rem;
						border: none;
						font-size: 1rem;
						border-radius: 5px;
						background-color: $primary;

						&.ghost {
							color: $primary;
							background-color: transparent;

							&:hover {
								background-color: transparentize($primary, 0.95);
							}
						}
					}
				}
			}

			& img {
				width: 50%;
			}
		}

		& section {
			border-top: 2px solid $gray-light;

			&:nth-child(even) {
				flex-direction: row-reverse;
			}
		}
	}
</style>
