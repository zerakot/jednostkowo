<script>
	import Chart from '../../Chart.svelte';
	import Scale from './Scale.svelte';

	export let results;
</script>

{#if results}
	<div class="results">
		{#if results?.description}
			<p class="description">{@html results?.description}</p>
		{/if}

		{#if results?.type === 'scale'}
			<Scale data={results} />
		{:else if results?.type === 'table'}
			<div class="tableWrapper customScrollbar">
				<table>
					<thead>
						<tr>
							{#each results?.data?.keys as key}
								<th>{key}</th>
							{/each}
						</tr>
					</thead>
					<tbody>
						{#each results?.data?.values as row}
							<tr>
								{#each row as value}
									<td>{value}</td>
								{/each}
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		{:else if results?.type === 'chart'}
			<div class="chartResults">
				<div class="chartWrapper">
					<Chart config={results.config} />
				</div>
			</div>
		{:else if results?.response}
			<div class="response">
				{@html results.response}
			</div>
		{/if}
	</div>
{/if}

<style lang="scss">
	.results {
		display: flex;
		flex-direction: column;
		gap: 1rem;

		& .description {
			padding: 0.7rem;
			border: 1px solid $gray-medium;
			border-radius: 5px;
			background-color: #f9f9f9;
		}

		& .tableWrapper {
			overflow-y: auto;
			max-height: 300px;
			display: block;
			padding: 0 0.4rem 0 0;

			& table {
				@include table;
			}
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

		& .response {
			font-size: 1rem;
			color: $primary;
			padding: 0.6rem;
			border: 1px solid $primary;
			border-radius: 7px;
			background-color: $primary-ghost;

			& :global(span) {
				font-weight: bold;
				color: var(--color, $primary);
			}
		}
	}
</style>
