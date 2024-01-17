<script>
	import Scale from './Scale.svelte';

	export let results;
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
								<td>{value}</td>
							{/each}
						</tr>
					{/each}
				</tbody>
			</table>
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

		& .text {
			font-size: 1.1rem;

			& span {
				font-weight: bold;
				color: var(--color, $primary);
			}
		}
	}
</style>
