import Converter from '$lib/components/calculators/Converter/Converter.svelte';

export default [
	{
		component: Converter,
		converters: [
			{
				category: 'Metryczny',
				units: [
					{
						label: 'Kilometr',
						ratio: 0.001,
						symbol: 'km'
					},
					{
						default: true,
						label: 'Metr',
						ratio: 1,
						symbol: 'm'
					},
					{
						label: 'Decymetr',
						ratio: 10,
						symbol: 'dm'
					},
					{
						label: 'Centymetr',
						ratio: 100,
						symbol: 'cm'
					},
					{
						label: 'Milimetr',
						ratio: 1000,
						symbol: 'mm'
					},
					{
						label: 'Mikrometr',
						ratio: 1000000,
						symbol: 'µm'
					},
					{
						label: 'Nanometr',
						ratio: 1000000000,
						symbol: 'nm'
					},
					{
						label: 'Angstrem',
						ratio: 10000000000,
						symbol: 'Å'
					}
				]
			},
			{
				category: 'Brytyjski/Amerykański',
				units: [
					{
						label: 'Liga',
						ratio: 0.000207123730745778,
						symbol: 'league'
					},
					{
						label: 'Mila',
						ratio: 0.0006213711922373339,
						symbol: 'mi'
					},
					{
						label: 'Furlongi',
						ratio: 0.004970969537898671,
						symbol: 'furlong'
					},
					{
						label: 'Łańcuch',
						ratio: 0.049709695378986715,
						symbol: 'chain'
					},
					{
						label: 'Pręt',
						ratio: 0.19883878151594686,
						symbol: 'rd'
					},
					{
						label: 'Jard',
						ratio: 1.0936132983377078,
						symbol: 'yd'
					},
					{
						label: 'Stopa',
						ratio: 3.2808398950131235,
						symbol: 'ft'
					},
					{
						label: 'Link',
						ratio: 4.970969537898672,
						symbol: 'link'
					},
					{
						label: 'Dłoń',
						ratio: 9.84251968503937,
						symbol: 'hand'
					},
					{
						label: 'Cal',
						ratio: 39.37007874015748,
						symbol: 'in'
					},
					{
						label: 'Linia',
						ratio: 393.7007874015748,
						symbol: 'line'
					},
					{
						label: 'Mil',
						ratio: 39370.07874015748,
						symbol: 'mil'
					},
					{
						label: 'Thou',
						ratio: 39370.07874015748,
						symbol: 'thou'
					}
				]
			},
			{
				category: 'Morski',
				units: [
					{
						label: 'Mila morska',
						ratio: 0.0005399568034557236,
						symbol: 'sea mile'
					},
					{
						label: 'Sążeń',
						ratio: 0.5468066491688539,
						symbol: 'fathom'
					}
				]
			},
			{
				category: 'Astronomiczny',
				units: [
					{
						label: 'Parsek',
						ratio: 3.240779e-17,
						symbol: 'pc'
					},
					{
						label: 'Rok świetlny',
						ratio: 1.0570008340246154e-16,
						symbol: 'light year'
					},
					{
						label: 'Jednostka astronomiczna',
						ratio: 6.684589e-12,
						symbol: 'AE'
					},
					{
						label: 'Minuty świetlne',
						ratio: 5.559404e-11,
						symbol: 'light minute'
					},
					{
						label: 'Sekundy świetlne',
						ratio: 3.335642e-9,
						symbol: 'light second'
					}
				]
			}
		]
	}
];
