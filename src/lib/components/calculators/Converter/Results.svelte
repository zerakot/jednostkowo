<script>
	export let results;
</script>

<table>
	<thead>
		<tr>
			<th>Nazwa</th>
			<th class="symbol">Symbol</th>
			<th class="fitwidth">Wynik</th>
		</tr>
	</thead>
	<tbody>
		{#each results as category}
			{#if category?.name}
				<tr class="category">
					<td colspan="3">{category.name}</td>
				</tr>
			{/if}

			{#each category.units as unit}
				<tr class:active={unit?.active}>
					<td class="label">{unit.label}</td>
					<td class="symbol">{unit.symbol}</td>
					<td class="alignRight fitwidth bold">{unit.value}</td>
				</tr>
			{/each}
		{/each}
	</tbody>
</table>

<style lang="scss">
	table {
		@include table;

		& thead tr th.symbol {
			display: none;
		}
		& tbody tr td.symbol {
			display: none;
		}

		@include md {
			& thead tr th.symbol {
				display: table-cell;
			}
			& tbody tr td.symbol {
				display: table-cell;
			}
		}
	}
</style>
