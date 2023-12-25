<script>
	import { convert } from '$lib/utils';

	export let number;
	export let decimals;
	export let converters;
	export let baseUnitLabel;
	export let targetUnitLabel;

	let results = [];
	$: results = convert(number, baseUnitLabel, targetUnitLabel, decimals, converters);
</script>

<table>
	<thead>
		<tr>
			<th>Nazwa</th>
			<th>Symbol</th>
			<th class="fitwidth">Wynik</th>
		</tr>
	</thead>
	<tbody>
		{#each results as converter}
			{#if converter?.name}
				<tr class="category">
					<td colspan="3">{converter.name}</td>
				</tr>
			{/if}

			{#each converter.units as unit}
				<tr class:active={unit?.active}>
					<td class="label">{unit.label}</td>
					<td>{unit.symbol}</td>
					<td class="alignRight fitwidth bold">{unit.value}</td>
				</tr>
			{/each}
		{/each}
	</tbody>
</table>

<style lang="scss">
	table {
		@include table;

		& thead tr th:nth-child(2) {
			display: none;
		}
		& tbody tr td:nth-child(2) {
			display: none;
		}

		@include md {
			& thead tr th:nth-child(2) {
				display: table-cell;
			}
			& tbody tr td:nth-child(2) {
				display: table-cell;
			}
		}
	}
</style>
