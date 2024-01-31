<script>
	import Big from 'big.js';
	import { formatOutputNumber } from '../../../utils';
	export let results;
	console.log(results);
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
		{#each results as converter}
			{#if converter?.category}
				<tr class="category">
					<td colspan="3">{converter.category}</td>
				</tr>
			{/if}

			{#each converter.units.sort((a, b) => new Big(b.ratio).cmp(new Big(a.ratio))) as unit}
				<tr class:active={unit?.active}>
					<td class="label">{unit.label}</td>
					<td class="symbol">{unit.symbol}</td>
					<td class="alignRight fitwidth bold">{formatOutputNumber(unit.value)}</td>
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
