import Converter from '$lib/components/calculators/Converter/Converter.svelte';

export default [
	{
		component: Converter,
		converters: [
			{
				category: 'Metryczny',
				units: [
					{
						label: 'Kilowatogodziny',
						ratio: 2.7777777777777776e-7,
						symbol: 'kWh'
					},
					{
						label: 'Megadżule',
						ratio: 0.000001,
						symbol: 'MJ'
					},
					{
						label: 'Kilodżule',
						ratio: 0.001,
						symbol: 'kJ'
					},
					{
						label: 'Dżule',
						ratio: 1,
						symbol: 'J',
						default: true
					},
					{
						label: 'Elektronowolt',
						ratio: 6241506000000000000n,
						symbol: 'eV'
					}
				]
			},
			{
				category: 'Brytyjski/Amerykański',
				units: [
					{
						label: 'Kwadrat',
						ratio: 9.478134e-19,
						symbol: 'quad'
					},
					{
						label: 'Therm',
						ratio: 9.478134e-9,
						symbol: 'therm'
					},
					{
						label: 'Brytyjska jednostka ciepła',
						ratio: 0.0009478171,
						symbol: 'BTU'
					},
					{
						label: 'Stopo-funt',
						ratio: 0.7375822,
						symbol: 'foot-pound'
					}
				]
			},
			{
				category: 'Inne',
				units: [
					{
						label: 'Kilokalorie',
						ratio: 0.0002388459,
						symbol: 'kcal'
					},
					{
						label: 'Kalorie',
						ratio: 0.2388459,
						symbol: 'cal'
					},
					{
						label: 'Termia',
						ratio: 2.388459e-7,
						symbol: 'th'
					}
				]
			}
		]
	}
];
