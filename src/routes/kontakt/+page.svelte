<div class="container">
	<hgroup>
		<h2>Kontakt</h2>
		<p>
			Zapraszam do kontaktu w każdej sprawie. Chętnie rozważę propozycje współpracy oraz nowych
			pomysłów na rozwój portalu. Jeśli jesteś zainteresowany sprawami technicznymi związanymi z tą
			strona - również chętnie odpowiem na pytania.
		</p>
	</hgroup>
	<section>
		<p>Adres e-mail: <a href="mailto:iktorn2006@wp.pl">iktorn2006@wp.pl</a></p>
		<p>
			Instagram: <a href="https://www.instagram.com/zdjecia_wiktorka/" target="_blank"
				>@zdjecia_wiktorka</a
			>
		</p>
	</section>

	<!-- Jockey one
        Koulen
        Jua -->
</div>

<style lang="scss">
	.container {
		gap: 1rem;
		display: flex;
		flex-direction: column;

		& hgroup {
			color: $text;
			width: 100%;

			& p {
				color: $text-light;
			}
		}

		& section {
			& p a {
				font-weight: bold;
				color: $primary;
			}
		}

		@include lg {
			& hgroup {
				width: 70%;
			}
		}
	}
</style>
