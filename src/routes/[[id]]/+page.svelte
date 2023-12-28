<script>
	import { calculators } from '$lib/assets/calculators';

	import SEO from '$lib/components/Seo/Seo.svelte';
	import { fly } from 'svelte/transition';
	import Icon from '../../lib/components/Icon.svelte';

	export let data;
	$: pageData = calculators?.find((item) => item.id === data?.id);
</script>

{#key pageData?.id}
	<div class="container" in:fly|global={{ x: 150 }}>
		<hgroup>
			<div class="pill">{pageData?.name}</div>
			<h1>
				{`${pageData?.type.charAt(0).toUpperCase() + pageData?.type.slice(1)} ${pageData?.name}`}
			</h1>
			<p>{pageData?.description}</p>
		</hgroup>

		{#key pageData?.id}
			<svelte:component this={pageData?.component} {pageData} />
		{/key}

		<aside>
			<Icon name="lightbulb" fill="primary" />
			<p>
				{pageData?.about || ''}
			</p>
		</aside>
	</div>
{/key}

<SEO {...data?.metaTags} />

<style lang="scss">
	.container {
		gap: 1rem;
		width: 100%;
		display: flex;
		flex-direction: column;

		& hgroup {
			align-items: flex-start;
			display: flex;
			flex-direction: column;

			& h1 {
				margin: 0;
				color: $text;
			}

			& .pill {
				font-weight: bold;
				border-radius: 20px;
				text-transform: uppercase;
				color: white;
				background-color: $primary;
				padding: 0.25rem 0.6rem;
				font-size: 0.7rem;
			}

			& p {
				margin: 0;
				color: $text-light;
			}
		}

		& aside {
			gap: 0.5rem;
			padding: 0.8rem;
			display: flex;
			width: 100%;
			border: 1px solid $primary;
			border-radius: 8px;
			background-color: transparentize($primary, 0.96);

			& p {
				color: $text;
			}
		}

		@include sm {
			& hgroup h1 {
				gap: 0.6rem;

				& span.category {
					padding: 0.3rem 0.7rem;
					font-size: 0.75rem;
				}
			}
		}

		@include lg {
			gap: 1.5rem;

			& aside {
				width: 80%;
			}
		}
	}
</style>
