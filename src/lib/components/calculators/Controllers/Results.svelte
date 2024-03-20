<script>
	import { formatOutputNumber } from '../../../utils';
	import Chart from '../../Chart.svelte';
	import Scale from './Scale.svelte';

	export let results;
	$: console.log(results);
</script>

{#if results}
	<div class="results">
		{#if results?.type === 'scale'}
			<Scale data={results} />
		{:else if results?.type === 'table'}
			<table>
				<thead>
					<tr>
						{#each Object.keys(results?.value[0]) as key}
							<th>{key}</th>
						{/each}
					</tr>
				</thead>
				<tbody>
					{#each results?.value as row}
						<tr>
							{#each Object.values(row) as value}
								<td>{formatOutputNumber(value)}</td>
							{/each}
						</tr>
					{/each}
				</tbody>
			</table>
		{:else if results?.type === 'chart'}
			<div class="chartResults">
				<p>{@html results?.description}</p>
				<div class="chartWrapper">
					<Chart config={results.config} />
				</div>
			</div>
		{:else if results?.value && !results?.overwrite}
			<div class="text">
				Wynik: <span style="--color: {results?.color || null}">{results?.value}</span>
			</div>
		{/if}
	</div>
{/if}

<style lang="scss">
	.results {
		& table {
			@include table;
		}

		& .chartResults {
			gap: 1rem;
			display: flex;
			flex-direction: column;
			& .chartWrapper {
				width: 100%;
				height: 250px;
			}
			& p {
				font-size: 1rem;
				color: $primary;
				padding: 0.6rem;
				border: 1px solid $primary;
				border-radius: 7px;
				background-color: $primary-ghost;
			}
		}

		& .text {
			font-size: 1.1rem;

			& span {
				font-weight: bold;
				color: var(--color, $primary);
			}
		}
	}
</style>
