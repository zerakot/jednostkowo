import Converter from '$lib/components/calculators/Converter/Converter.svelte';

export default [
	{
		component: Converter,
		converters: [
			{
				units: [
					{
						label: 'Lata',
						ratio: 1,
						symbol: 'year'
					},
					{
						label: 'Miesiące',
						ratio: 12,
						symbol: 'month'
					},
					{
						label: 'Tygodnie',
						ratio: 52.17857,
						symbol: 'week'
					},
					{
						label: 'Dni',
						ratio: 365.25,
						symbol: 'day',
						default: true
					},
					{
						label: 'Godziny',
						ratio: 8766,
						symbol: 'hour'
					},
					{
						label: 'Minuty',
						ratio: 525960,
						symbol: 'minute'
					},
					{
						label: 'Sekundy',
						ratio: 31557600,
						symbol: 's'
					},
					{
						label: 'Milisekundy',
						ratio: 31557600000,
						symbol: 'ms'
					},
					{
						label: 'Mikrosekundy',
						ratio: 31557600000000,
						symbol: 'µs'
					},
					{
						label: 'Nanosekundy',
						ratio: 31557600000000000n,
						symbol: 'ns'
					}
				]
			}
		]
	}
];
