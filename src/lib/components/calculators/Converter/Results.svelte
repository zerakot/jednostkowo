<script>
	import { formatOutputNumber, sortUnits } from '../../../utils';

	let { results, decimals } = $props();
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
		{#each results as converter (converter.category)}
			{#if converter?.category}
				<tr class="category">
					<td colspan="3">{converter.category}</td>
				</tr>
			{/if}

			{#each sortUnits(converter.units) as unit}
				<tr class:active={unit?.active}>
					<td class="label">{unit.label}</td>
					<td class="symbol">{unit.symbol}</td>
					<td class="alignRight fitwidth bold">
						{formatOutputNumber(unit.value, parseInt(decimals))}
					</td>
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
		& tbody tr td.label {
			text-transform: lowercase;
		}

		@include sm {
			& thead tr th.symbol {
				display: table-cell;
			}

			& tbody tr td.symbol {
				display: table-cell;
			}
		}
	}
</style>
