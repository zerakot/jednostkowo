<script>
	import Big from 'big.js';

	export let number;
	export let unitRatio;
	export let decimals;
	export let converters;

	let results = [];

	const convert = (num, ratio, dec) => {
		if (num === '') num = 0;

		return converters.map((converter) => {
			const bigRatio = new Big(ratio);
			const bigConverterRatio = new Big(converter.ratio);
			const bigNum = new Big(num);

			const newValue = bigRatio.div(bigConverterRatio).times(bigNum).round(dec).toFixed(dec);
			return {
				...converter,
				value: newValue
			};
		});
	};

	$: results = convert(number, unitRatio, parseInt(decimals));
</script>

<div class="results">
	<table>
		<thead>
			<tr>
				<th>Nazwa</th>
				<th>Symbol</th>
				<th class="fitwidth">Wynik</th>
			</tr>
		</thead>
		<tbody>
			{#each results as result}
				<tr class:active={unitRatio === result.ratio}>
					<td class="label">{result.label}</td>
					<td>{result.symbol}</td>
					<td class="alignRight fitwidth">{result.value}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<style lang="scss">
	.results {
		display: flex;
		gap: 1rem;
		flex-direction: column;

		& table {
			@include table;
		}

		@include sm {
			& table {
				font-size: 0.9rem;
			}
		}
	}
</style>
