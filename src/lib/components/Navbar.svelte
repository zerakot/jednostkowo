<script>
	import { page } from '$app/stores';

	let params;
	let pathname;

	$: {
		params = $page?.params;
		pathname = $page?.url?.pathname;
	}
</script>

<nav>
	<a href="/" class="logo">
		<img src="/images/logos/Long-text.png" alt="Logo Jednostkowo.pl" class="long" />
		<img src="/images/logos/icon.png" alt="Logo Jednostkowo.pl" class="short" />
	</a>
	<ul>
		<li>
			<a
				href="/kalkulator-procentow"
				class:active={params?.id?.startsWith('kalkulator') || pathname === '/'}>Kalkulatory</a
			>
		</li>
		<li>
			<a href="/przelicznik-dlugosci" class:active={params?.id?.startsWith('przelicznik')}
				>Przeliczniki</a
			>
		</li>
		<li>
			<a href="/blog" class:active={pathname?.startsWith('/blog')}>Blog</a>
		</li>
		<li>
			<a href="/kontakt" class:active={pathname?.startsWith('/kontakt')}>Kontakt</a>
		</li>
	</ul>
</nav>

<style lang="scss">
	nav {
		align-items: center;
		gap: 1rem;
		display: flex;
		width: 100%;
		grid-area: nav;
		border-bottom: 1px solid $gray-light;

		& a.logo {
			height: 50%;

			& img {
				height: 100%;

				&.long {
					display: none;
				}
			}
		}

		& ul {
			display: flex;
			height: 100%;
			align-items: center;
			gap: 1.5rem;
			list-style: none;

			& li {
				font-size: 0.9rem;

				& a {
					color: $text-light;

					&:hover {
						color: $text;
					}

					&.active {
						color: $text;
						font-weight: bold;
					}
				}
			}
		}

		@include sm {
			gap: 2rem;

			& a.logo img {
				&.long {
					display: block;
				}
				&.short {
					display: none;
				}
			}
		}
	}
</style>
