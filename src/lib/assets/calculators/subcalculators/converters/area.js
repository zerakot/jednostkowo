import Converter from '$lib/components/calculators/Converter/Converter.svelte';

export default [
	{
		component: Converter,
		converters: [
			{
				category: 'Metryczny',
				units: [
					{
						label: 'Kilometry kwadratowe',
						ratio: 0.000001,
						symbol: 'km²',
						default: true
					},
					{
						label: 'Hektary',
						ratio: 0.0001,
						symbol: 'ha'
					},
					{
						label: 'Ar',
						ratio: 0.01,
						symbol: 'a'
					},
					{
						label: 'Metry kwadratowe',
						ratio: 1,
						symbol: 'm²'
					},
					{
						label: 'Decymetry kwadratowe',
						ratio: 100,
						symbol: 'dm²'
					},
					{
						label: 'Centymetry kwadratowe',
						ratio: 10000,
						symbol: 'cm²'
					},
					{
						label: 'Milimetry kwadratowe',
						ratio: 1000000,
						symbol: 'mm²'
					}
				]
			},
			{
				category: 'Brytyjski/Amerykański',
				units: [
					{
						label: 'Gmina',
						ratio: 1.072506e-8,
						symbol: 'township'
					},
					{
						label: 'Mila kwadratowa',
						ratio: 3.861022e-7,
						symbol: 'square mile'
					},
					{
						label: 'Działka osadnicza',
						ratio: 0.000001544409,
						symbol: 'homestead'
					},
					{
						label: 'Akr',
						ratio: 0.0002471055,
						symbol: 'acre'
					},
					{
						label: 'Ćwierć akra',
						ratio: 0.000988422,
						symbol: 'rood'
					},
					{
						label: 'Pręt kwadratowy',
						ratio: 0.03953687,
						symbol: 'square rod'
					},
					{
						label: 'Kwadratowy',
						ratio: 0.1076391,
						symbol: 'square'
					},
					{
						label: 'Jard kwadratowy',
						ratio: 1.19599,
						symbol: 'yr²'
					},
					{
						label: 'Stopa kwadratowa',
						ratio: 10.76391,
						symbol: 'ft²'
					},
					{
						label: 'Cal kwadratowy',
						ratio: 1550.003,
						symbol: 'in²'
					}
				]
			},
			{
				category: 'Japoński',
				units: [
					{
						label: 'Tsubo',
						ratio: 0.3024999,
						symbol: 'tsubo'
					},
					{
						label: 'Cho',
						ratio: 100.8333,
						symbol: 'cho'
					},
					{
						label: 'Tann',
						ratio: 1008.333,
						symbol: 'tann'
					},
					{
						label: 'Se',
						ratio: 10083.33,
						symbol: 'se'
					}
				]
			},
			{
				category: 'Inne',
				units: [
					{
						label: 'Metric Dunamar',
						ratio: 0.001,
						symbol: 'metric_dunam'
					},
					{
						label: 'Cypryjski Dunamar',
						ratio: 0.00074749375,
						symbol: 'cypriot_dunam'
					},
					{
						label: 'Iracki Dunamar',
						ratio: 0.0004,
						symbol: 'iraqi_dunam'
					},
					{
						label: 'Boisko do piłki nożnej',
						ratio: 0.000140056,
						symbol: 'football_pitch'
					},
					{
						label: 'Morga',
						ratio: 0.00017857142,
						symbol: 'morga'
					}
				]
			},
			{
				category: 'Brazylijski',
				units: [
					{
						label: 'Alqueire paulista',
						ratio: 0.00004132231405,
						symbol: 'alqueire_paulista'
					},
					{
						label: 'Alqueire mineiro',
						ratio: 0.00002066115702,
						symbol: 'alqueire_mineiro'
					},
					{
						label: 'Alqueire baiano',
						ratio: 0.00001031991744,
						symbol: 'alqueire_baiano'
					},
					{
						label: 'Alqueire do norte',
						ratio: 0.00003676470588,
						symbol: 'alqueire_do_norte'
					}
				]
			}
		]
	}
];
