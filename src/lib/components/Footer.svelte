<script>
	import { posts } from '$lib/assets/blog.js';
</script>

<footer>
	<section>
		<h2 class="header">Najnowsze artykuły</h2>
		<ul>
			{#each posts?.slice(0, 3) as post}
				<li>
					<a href="/blog/{post?.slug}">{post?.title}</a>
				</li>
			{/each}
		</ul>
	</section>
	<section>
		<h2 class="header">Mapa strony</h2>
		<ul>
			<li>
				<a href="/kalkulator-procentow">Kalkulatory</a>
			</li>
			<li>
				<a href="/przelicznik-dlugosci">Przeliczniki</a>
			</li>
			<li>
				<a href="/blog">Blog</a>
			</li>
			<li>
				<a href="/kontakt">Kontakt</a>
			</li>
		</ul>
	</section>

	<section>
		<h2 class="header">Kontakt</h2>
		<ul>
			<li>
				<b>Adres e-mail:</b> <br />
				<a href="mailto:iktorn2006@wp.pl" rel="nofollow">iktorn2006@wp.pl</a>
			</li>
			<li>
				<b>Instagram:</b> <br />
				<a href="https://www.instagram.com/zdjecia_wiktorka/" target="_blank" rel="nofollow"
					>@zdjecia_wiktorka</a
				>
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

		@include sm {
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
