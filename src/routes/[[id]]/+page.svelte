<script>
	import { calculators } from '$lib/assets/calculators';

	import SEO from '$lib/components/Seo/Seo.svelte';
	import { fly } from 'svelte/transition';
	import Icon from '../../lib/components/Icon.svelte';

	export let data;

	$: calculatorData = calculators?.find((item) => item.id === data?.id);
</script>

{#key calculatorData?.id}
	<div class="container" in:fly|global={{ x: 150 }}>
		<hgroup>
			<div class="pill">{calculatorData?.name}</div>
			<h1>{calculatorData?.title}</h1>
			<p>{calculatorData?.description}</p>
		</hgroup>

		{#key calculatorData?.id}
			<svelte:component this={calculatorData?.component} {calculatorData} />
		{/key}

		<aside>
			<Icon variant="primary" size="1.3rem">lightbulb</Icon>
			<p>
				{calculatorData?.about || ''}
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
