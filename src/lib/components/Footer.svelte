<script>
	import Logo from '$lib/images/Logo.png';
</script>

<footer>
	<section class="about">
		<img src={Logo} alt="Logo Jednostkowo.pl" />
		<p>Jednostkowo.pl - przeliczanie jednostek, obliczanie procentów, wszystko w jednym miejscu.</p>
	</section>
	<section>
		<h4 class="header">Mapa strony</h4>
		<ul>
			<li>
				<a href="/kalkulator-procentow">Kalkulatory</a>
			</li>
			<li>
				<a href="/przelicznik-dlugosci">Przeliczniki</a>
			</li>
			<li>
				<a href="/kontakt">Kontakt</a>
			</li>
		</ul>
	</section>
	<section>
		<h4 class="header">Kontakt</h4>
		<ul>
			<li>
				<b>Adres e-mail:</b> <br /> <a href="mailto:iktorn2006@wp.pl">iktorn2006@wp.pl</a>
			</li>
			<li>
				<b>Instagram:</b> <br />
				<a href="https://www.instagram.com/zdjecia_wiktorka/" target="_blank">@zdjecia_wiktorka</a>
			</li>
		</ul>
	</section>
</footer>

<style lang="scss">
	footer {
		margin: 4rem 0 0 0;
		justify-items: center;
		padding: 2rem 1rem;
		width: 100%;
		display: grid;
		gap: 2rem 0;
		border-top: 1px solid $secondary;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: auto;

		& section {
			display: flex;
			flex-direction: column;
			gap: 0.4rem;

			&.about {
				width: 90%;
				grid-column: 1/3;
			}

			& ul {
				display: flex;
				list-style: none;
				flex-direction: column;
				gap: 0.2rem;

				& li a {
					color: $primary;
				}
			}

			& img {
				width: 200px;
			}

			& p {
				font-size: 0.95rem;
				color: $text-light;
			}
		}

		@include md {
			gap: 0;
			grid-template-columns: 1fr 1fr 1fr;

			& section {
				&.about {
					width: auto;
					grid-column: auto;
				}
			}
		}
	}
</style>
