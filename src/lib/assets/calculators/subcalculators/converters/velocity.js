import Converter from '$lib/components/calculators/Converter/Converter.svelte';

export default [
	{
		component: Converter,
		converters: [
			{
				category: 'Metryczny',
				units: [
					{
						label: 'Kilometr na sekundę',
						ratio: 0.001,
						symbol: 'km/s'
					},
					{
						label: 'Metr na sekundę',
						ratio: 1,
						symbol: 'm/s'
					},
					{
						label: 'Kilometr na godzinę',
						ratio: 3.6,
						symbol: 'km/h',
						default: true
					},
					{
						label: 'Milimetr na sekundę',
						ratio: 1000,
						symbol: 'mm/s'
					},
					{
						label: 'Mikrometr na sekundę',
						ratio: 1000000,
						symbol: 'µm/s'
					}
				]
			},
			{
				category: 'Brytyjski/Amerykański',
				units: [
					{
						label: 'Mila na sekundę',
						ratio: 0.000621371192237334,
						symbol: 'mile per second'
					},
					{
						label: 'Mila na godzinę',
						ratio: 2.2369362920544,
						symbol: 'mph'
					},
					{
						label: 'Stopa na sekundę',
						ratio: 3.28083989501312,
						symbol: 'foot per second'
					}
				]
			},
			{
				category: 'Morski',
				units: [
					{
						label: 'Węzeł',
						ratio: 1.9438444924406,
						symbol: 'knot'
					}
				]
			},
			{
				category: 'Inne',
				units: [
					{
						label: 'Prędkość światła',
						ratio: 3.3356409519815204e-9,
						symbol: 'speed of light'
					},
					{
						label: 'Prędkość dźwięku',
						ratio: 0.0029154518950437317,
						symbol: 'speed of sound'
					},
					{
						label: 'Szybki chód',
						ratio: 0.5882352941176471,
						symbol: 'speed of walk'
					},
					{
						label: 'Prędkość pospolitego ślimaka',
						ratio: 1000,
						symbol: 'speed of snail'
					}
				]
			}
		]
	}
];
