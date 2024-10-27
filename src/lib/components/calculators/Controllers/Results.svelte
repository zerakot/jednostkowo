<script>
	import Chart from './results/Chart.svelte';
	import Scale from './results/Scale.svelte';
	import Description from './results/Description.svelte';
	import Table from './results/Table.svelte';
	import Separator from '../../Separator.svelte';

	let { result } = $props();
</script>

{#if result}
	<div class="results">
		<Separator label="Wynik" />

		<div class="response">
			{#if result?.description}
				<Description {result} />
			{/if}

			{#if result?.type === 'scale'}
				<Scale {result} />
			{:else if result?.type === 'table'}
				<Table {result} />
			{:else if result?.type === 'chart'}
				<Chart {result} />
			{/if}
		</div>
	</div>
{/if}

<style lang="scss">
	.results {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;

		& .response {
			gap: 1rem;
			display: flex;
			flex-direction: column;
		}
	}
</style>
