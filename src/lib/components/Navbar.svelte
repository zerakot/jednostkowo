<script>
	import { page } from '$app/stores';
	import Logo from '$lib/assets/Logo.png';

	let params;
	let pathname;

	$: {
		params = $page?.params;
		pathname = $page?.url?.pathname;
	}
</script>

<nav>
	<a href="/" class="logo"><img src={Logo} alt="Logo Jednostkowo.pl" /></a>
	<ul>
		<li>
			<a href="/kalkulator-procentow" class:active={params?.type === 'kalkulator'}>Kalkulatory</a>
		</li>
		<li>
			<a href="/przelicznik-dlugosci" class:active={params?.type === 'przelicznik'}>Przeliczniki</a>
		</li>
		<li>
			<a href="/blog" class:active={pathname.startsWith('/blog')}>Blog</a>
		</li>
		<li>
			<a href="/kontakt" class:active={pathname.startsWith('/kontakt')}>Kontakt</a>
		</li>
	</ul>
</nav>

<style lang="scss">
	nav {
		align-items: center;
		gap: 2rem;
		display: flex;
		width: 100%;
		grid-area: nav;
		border-bottom: 1px solid $gray-light;

		& a.logo {
			height: 50%;

			& img {
				height: 100%;
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
	}
</style>
