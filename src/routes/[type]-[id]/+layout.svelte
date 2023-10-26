<script>
	import AdsWidget from '$lib/components/UI/AdsWidget.svelte';
	import Sidebar from '$lib/components/UI/Sidebar.svelte';

	export let data;
</script>

<svelte:head>
	<title>{data?.title} • Przelicznik.pl</title>
	<meta name="description" content={data?.description} />
</svelte:head>

<div class="container">
	<Sidebar />

	<main>
		<AdsWidget />

		<div class="content">
			<hgroup>
				<h1>
					<span class="type">{data?.type}</span>
					<span class="name">{data?.name}</span>
					<span class="category">{data?.name}</span>
				</h1>
				<p>{data?.description}</p>
			</hgroup>

			<slot />
		</div>
	</main>
</div>

<style lang="scss">
	.container {
		gap: 2rem;
		display: flex;
		grid-area: main;
		flex-direction: column;

		& main {
			width: 100%;
			gap: 2rem 0;
			display: grid;
			grid-template-columns: 1fr;
			grid-template-rows: 200px auto;

			& .content {
				gap: 1.5rem;
				width: 100%;
				display: flex;
				flex-direction: column;

				& hgroup {
					& h1 {
						gap: 0.4rem;
						font-size: 1.6rem;
						color: $text;
						display: flex;
						align-items: center;

						& span.type {
							text-transform: capitalize;
						}
						& span.category {
							margin-left: 0.2rem;
							font-weight: bold;
							border-radius: 20px;
							text-transform: uppercase;
							color: white;
							background-color: $primary;
							padding: 0.25rem 0.6rem;
							font-size: 0.7rem;
						}
					}

					& p {
						color: $text-light;
					}
				}
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
			flex-direction: row;
		}
	}
</style>
