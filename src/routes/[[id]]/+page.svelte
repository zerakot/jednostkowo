<script>
	import { calculators } from '$lib/assets/calculators';

	import SEO from '$lib/components/Seo/Seo.svelte';
	import Markdown from '$lib/components/Markdown.svelte';
	import Icon from '../../lib/components/Icon.svelte';
	import Quiz from '../../lib/components/Quiz/Quiz.svelte';

	export let data;

	$: calculatorData = calculators?.find((item) => item.id === data?.id);
</script>

{#key calculatorData?.id}
	<div class="container">
		<hgroup>
			<h1>{calculatorData?.title}</h1>
			<p>{calculatorData?.description}</p>
		</hgroup>

		{#key calculatorData?.id}
			<svelte:component this={calculatorData?.component} {calculatorData} />
		{/key}

		{#if calculatorData?.quiz}
			<Quiz {calculatorData} />
		{/if}

		{#if calculatorData?.about}
			<aside>
				<Icon variant="primary" size="1.3rem">lightbulb</Icon>
				<p>
					{calculatorData?.about || ''}
				</p>
			</aside>
		{/if}

		{#if calculatorData?.markdown}
			<Markdown source={calculatorData.markdown} />
		{/if}
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
			gap: 0.5rem;
			align-items: flex-start;
			display: flex;
			flex-direction: column;

			& h1 {
				margin: 0;
				color: $text;
			}

			& p {
				margin: 0;
				width: 100%;
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
			& aside {
				width: 80%;
			}
		}
	}
</style>
