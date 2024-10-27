import Converter from '$lib/components/calculators/Converter/Converter.svelte';

export default [
	{
		component: Converter,
		converters: [
			{
				category: 'Metryczny',
				units: [
					{
						label: 'Gram na centymetr sześcienny',
						ratio: 0.001,
						symbol: 'g/cm³'
					},
					{
						label: 'Kilogram na metr sześcienny',
						ratio: 1,
						symbol: 'kg/m³',
						default: true
					},
					{
						label: 'Gram na metr sześcienny',
						ratio: 1000,
						symbol: 'g/m³'
					},
					{
						label: 'Miligram na metr sześcienny',
						ratio: 1000000,
						symbol: 'mg/m³'
					}
				]
			},
			{
				category: 'Brytyjski/Amerykański',
				units: [
					{
						label: 'Uncja na galon',
						ratio: 0.1335264712,
						symbol: 'oz/gal'
					},
					{
						label: 'Funt na stopę sześcienną',
						ratio: 0.06242796058,
						symbol: 'lb/ft³'
					},
					{
						label: 'Funt na cal sześcienny',
						ratio: 0.000036127292,
						symbol: 'lb/in³'
					}
				]
			},
			{
				category: 'Pospolite substancje',
				units: [
					{
						label: 'Woda przy 4°C',
						ratio: 0.00100002500062,
						symbol: 'water 4C'
					}
				]
			}
		]
	}
];
