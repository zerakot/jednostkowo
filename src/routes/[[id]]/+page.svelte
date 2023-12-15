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
			<h1>
				<span class="type">{pageData?.type}</span>
				<span class="name">{pageData?.name}</span>
				<span class="category">{pageData?.name}</span>
			</h1>
			<p>{pageData?.description}</p>
		</hgroup>

		{#key pageData?.id}
			<svelte:component this={pageData?.component} page={pageData} />
		{/key}

		<div class="about">
			<Icon name="lightbulb" fill="primary" />
			<p>
				{pageData?.about || ''}
			</p>
		</div>
	</div>
{/key}

<SEO {...data?.metaTags} />

<style lang="scss">
	.container {
		gap: 1.5rem;
		width: 100%;
		display: flex;
		flex-direction: column;

		& hgroup {
			& h1 {
				margin: 0;
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
				margin: 0;
				color: $text-light;
			}
		}

		& .about {
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
				font-size: 2rem;

				& span.category {
					padding: 0.3rem 0.7rem;
					font-size: 0.75rem;
				}
			}

			& .about {
				width: 80%;
			}
		}
	}
</style>
