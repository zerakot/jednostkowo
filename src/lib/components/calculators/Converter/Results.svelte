<script>
	import Big from 'big.js';

	export let number;
	export let unitRatio;
	export let decimals;
	export let converters;

	const convert = (amount, ratio, dec) => {
		if (amount === '') amount = 0;

		return converters.map((converter) => {
			const name = converter.name;

			const values = converter.units.map((unit) => {
				const bigRatio = new Big(ratio);
				const bigUnitRatio = new Big(unit.ratio);
				const bigAmount = new Big(amount);

				const value = bigUnitRatio.div(bigRatio).times(bigAmount).round(dec).toFixed(dec);
				return { ...unit, value };
			});

			return {
				name,
				units: values
			};
		});
	};

	let results = [];
	$: results = convert(number, unitRatio, parseInt(decimals));
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
				<tr class:active={unitRatio === unit.ratio}>
					<td class="label">{unit.label}</td>
					<td>{unit.symbol}</td>
					<td class="alignRight fitwidth">{unit.value}</td>
				</tr>
			{/each}
		{/each}
	</tbody>
</table>

<style lang="scss">
	table {
		@include table;

		@include sm {
			font-size: 0.9rem;
		}
	}
</style>
