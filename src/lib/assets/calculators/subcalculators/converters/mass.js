import Converter from '$lib/components/calculators/Converter/Converter.svelte';

export default [
	{
		component: Converter,
		converters: [
			{
				category: 'Metryczny',
				units: [
					{
						label: 'Tona',
						ratio: 0.001,
						symbol: 't'
					},
					{
						label: 'Kilonewton',
						ratio: 0.009806652,
						symbol: 'kN'
					},
					{
						label: 'Kilogram',
						ratio: 1,
						symbol: 'kg',
						default: true
					},
					{
						label: 'Hektogram',
						ratio: 10,
						symbol: 'hg'
					},
					{
						label: 'Decagram',
						ratio: 100,
						symbol: 'dag'
					},
					{
						label: 'Gram',
						ratio: 1000,
						symbol: 'g'
					},
					{
						label: 'Karat',
						ratio: 5000,
						symbol: 'karat'
					},
					{
						label: 'Centygram',
						ratio: 100000,
						symbol: 'centigram'
					},
					{
						label: 'Miligram',
						ratio: 1000000,
						symbol: 'mg'
					},
					{
						label: 'Mikrogram',
						ratio: 1000000000,
						symbol: 'µg'
					},
					{
						label: 'Nanogram',
						ratio: 1000000000000,
						symbol: 'ng'
					}
				]
			},
			{
				category: 'Avoirdupois (USA)',
				units: [
					{
						label: 'Tona długa',
						ratio: 0.000984206527611061,
						symbol: 'long ton'
					},
					{
						label: 'Tona krótka',
						ratio: 0.00110231131092439,
						symbol: 'short ton'
					},
					{
						default: true,
						label: 'Duży cetnar',
						ratio: 0.0196841305522212,
						symbol: 'long hundredweight'
					},
					{
						label: 'mały cetnar',
						ratio: 0.0220462262184878,
						symbol: 'short hundredweight'
					},
					{
						label: 'Kamień',
						ratio: 0.15747304441777,
						symbol: 'stone'
					},
					{
						label: 'Funt',
						ratio: 2.20462262184878,
						symbol: 'lb'
					},
					{
						label: 'Uncja',
						ratio: 35.2739619495804,
						symbol: 'ounce'
					},
					{
						label: 'Łut',
						ratio: 564.383391193287,
						symbol: 'dr'
					},
					{
						label: 'Gran',
						ratio: 15432.3583529414,
						symbol: 'gr'
					}
				]
			},
			{
				category: 'Troy',
				units: [
					{
						label: 'Funt',
						ratio: 2.679228885025959,
						symbol: 'pound'
					},
					{
						label: 'Uncja',
						ratio: 32.15074739556441,
						symbol: 'ounce'
					},
					{
						label: 'Masa pensa',
						ratio: 642.9506,
						symbol: 'pennyweight'
					},
					{
						label: 'Karat',
						ratio: 4877.561,
						symbol: 'carat'
					},
					{
						label: 'Gran',
						ratio: 15432.358377749522,
						symbol: 'grain'
					},
					{
						label: 'Grosz',
						ratio: 308616.4,
						symbol: 'mite'
					},
					{
						label: 'Doite',
						ratio: 7406796,
						symbol: 'doite'
					}
				]
			},
			{
				category: 'Japoński',
				units: [
					{
						label: 'Koku',
						ratio: 0.005542993,
						symbol: 'koku'
					},
					{
						label: 'Kann',
						ratio: 0.2666401,
						symbol: 'kann'
					},
					{
						label: 'Kinn',
						ratio: 1.666501,
						symbol: 'kinn'
					},
					{
						label: 'Monnme',
						ratio: 266.6402,
						symbol: 'monnme'
					}
				]
			},
			{
				category: 'Chiński',
				units: [
					{
						label: 'Tael',
						ratio: 26.4643,
						symbol: 'tael'
					},
					{
						label: 'Ku ping',
						ratio: 26.79796,
						symbol: 'ku ping'
					}
				]
			},
			{
				category: 'Staroszwedzki',
				units: [
					{
						label: 'Skeppspund',
						ratio: 0.005881768,
						symbol: 'skeppspund'
					},
					{
						label: 'Lispund',
						ratio: 0.1176077,
						symbol: 'lispund'
					},
					{
						label: 'Skålpund',
						ratio: 2.352707,
						symbol: 'skålpund'
					},
					{
						label: 'Mark',
						ratio: 4.705414,
						symbol: 'mark'
					},
					{
						label: 'Uns',
						ratio: 35.83873,
						symbol: 'uns'
					},
					{
						label: 'Lod',
						ratio: 75.18049,
						symbol: 'lod'
					}
				]
			}
		]
	}
];
