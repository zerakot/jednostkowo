import Converter from '$lib/components/calculators/Converter/Converter.svelte';

export default [
	{
		component: Converter,
		converters: [
			{
				units: [
					{
						label: 'Nanoniuton',
						ratio: 1000000000,
						symbol: 'nN'
					},
					{
						label: 'Mikroniuton',
						ratio: 1000000,
						symbol: 'µN'
					},
					{
						label: 'Miliniuton',
						ratio: 1000,
						symbol: 'mN'
					},
					{
						label: 'Niuton',
						ratio: 1,
						symbol: 'N',
						default: true
					},
					{
						label: 'Kiloniuton',
						ratio: 0.001,
						symbol: 'kN'
					},
					{
						label: 'Meganiuton',
						ratio: 0.000001,
						symbol: 'meganewton'
					},
					{
						label: 'Giganiuton',
						ratio: 1e-9,
						symbol: 'GN'
					},
					{
						label: 'Dyna',
						ratio: 100000,
						symbol: 'dyn'
					},
					{
						label: 'Poundal',
						ratio: 7.233013851209894,
						symbol: 'pdl'
					},
					{
						label: 'Dżul na metr',
						ratio: 1,
						symbol: 'J/m'
					},
					{
						label: 'Pascal na metr kwadratowy',
						ratio: 1,
						symbol: 'Pa/m²'
					},
					{
						label: 'Kilopond',
						ratio: 0.10197162129779283,
						symbol: 'kp'
					},
					{
						label: 'Sthen',
						ratio: 0.001,
						symbol: 'sn'
					},
					{
						label: 'Wyrko',
						ratio: 0.00022480894309971047,
						symbol: 'kip'
					},
					{
						label: 'Kilogram-siła',
						ratio: 0.10197162129779283,
						symbol: 'kgf'
					},
					{
						label: 'Tona-siły',
						ratio: 0.00010197162129779283,
						symbol: 'tnf'
					},
					{
						label: 'Funt-siły',
						ratio: 0.22480894309971047,
						symbol: 'lbf'
					},
					{
						label: 'Krótki ton-force',
						ratio: 0.00011240447154985524,
						symbol: 'stnf'
					},
					{
						label: 'Długi ton-force',
						ratio: 0.00010036113531237075,
						symbol: 'ltnf'
					},
					{
						label: 'Uncja-siły',
						ratio: 3.5969430895953685,
						symbol: 'ozf'
					},
					{
						label: 'Utwardzony-force',
						ratio: 101.97162129779282,
						symbol: 'gravet-force'
					},
					{
						label: 'Milli Grave-force',
						ratio: 101.97162129779282,
						symbol: 'mGf'
					},
					{
						label: 'Grave-force',
						ratio: 0.10197162129779283,
						symbol: 'Gf'
					}
				]
			}
		]
	}
];
