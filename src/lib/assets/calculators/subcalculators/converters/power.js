import Converter from '$lib/components/calculators/Converter/Converter.svelte';

export default [
	{
		component: Converter,
		converters: [
			{
				units: [
					{
						label: 'Miliwaty',
						ratio: 1000,
						symbol: 'Milliwatt'
					},
					{
						label: 'Waty',
						ratio: 1,
						symbol: 'W',
						default: true
					},
					{
						label: 'Kilowaty',
						ratio: 0.001,
						symbol: 'kW'
					},
					{
						label: 'Megawaty',
						ratio: 0.000001,
						symbol: 'MW'
					},
					{
						label: 'Dżul na sekunde',
						ratio: 1,
						symbol: 'J/s'
					},
					{
						label: 'Koń parowy',
						ratio: 0.0013410220895950279,
						symbol: 'hp'
					},
					{
						label: 'Koń mechaniczny',
						ratio: 0.0013596216173039043,
						symbol: 'mhp'
					},
					{
						label: 'Elektryczny koń mechaniczny',
						ratio: 0.0013404825737265416,
						symbol: 'ehp'
					},
					{
						label: 'Koń mechaniczny kotła parowego',
						ratio: 0.00010194199500484225,
						symbol: 'bhp'
					},
					{
						label: 'Funt na stopę na minutę',
						ratio: 44.253728956635925,
						symbol: 'foot-pound/min'
					},
					{
						label: 'Stopo-Funt na sekundę',
						ratio: 0.7375621492772654,
						symbol: 'foot-pound/s'
					},
					{
						label: 'dBm',
						ratio: 10,
						symbol: 'dBm'
					},
					{
						label: 'Kalorie na godzinę',
						ratio: 859.84524,
						symbol: 'cal/h'
					},
					{
						label: 'Kilokalorie na godzinę',
						ratio: 0.85984524,
						symbol: 'kcal/h'
					},
					{
						label: 'Brytyjska jednostka temperatury na godzine',
						ratio: 3.41214163,
						symbol: 'BTU/h'
					},
					{
						label: 'Brytyjska jednostka temperatury na sekunde',
						ratio: 0.0009478171194444445,
						symbol: 'BTU/s'
					},
					{
						label: 'Ton chłodniczych',
						ratio: 0.00028434512332474514,
						symbol: 'ton of refrigeration'
					}
				]
			}
		]
	}
];
