<script>
	import blog from '$lib/assets/blog.json';
</script>

<footer>
	<section>
		<h4 class="header">Najnowsze artykuły</h4>
		<ul>
			{#each blog?.posts?.slice(0, 5) as post}
				<li>
					<a href="/blog/{post?.slug}">{post?.title}</a>
				</li>
			{/each}
		</ul>
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
		justify-items: center;
		padding: 2rem 1rem;
		width: 100%;
		display: grid;
		gap: 2rem 0;
		border-top: 1px solid $gray-medium;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: auto;

		& section {
			display: flex;
			flex-direction: column;
			gap: 0.4rem;

			& h4 {
				margin: 0;
			}

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
