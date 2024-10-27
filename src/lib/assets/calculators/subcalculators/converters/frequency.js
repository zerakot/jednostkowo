import Converter from '$lib/components/calculators/Converter/Converter.svelte';

export default [
	{
		component: Converter,
		converters: [
			{
				category: 'Częstotliwość',
				units: [
					{
						label: 'Nanoherc',
						ratio: 1000000000,
						symbol: 'nHz'
					},
					{
						label: 'Mikroherc',
						ratio: 1000000,
						symbol: 'µHz'
					},
					{
						label: 'Miliherc',
						ratio: 1000,
						symbol: 'mHz'
					},
					{
						label: 'Herc',
						ratio: 1,
						symbol: 'Hz',
						default: true
					},
					{
						label: 'Kiloherc',
						ratio: 0.001,
						symbol: 'kHz'
					},
					{
						label: 'Megaherc',
						ratio: 0.000001,
						symbol: 'MHz'
					},
					{
						label: 'Gigaherce',
						ratio: 1e-9,
						symbol: 'GHz'
					},
					{
						label: 'Teraherc',
						ratio: 1e-12,
						symbol: 'THz'
					}
				]
			},
			{
				category: 'Okres obrotu',
				units: [
					{
						label: 'Cykle na sekundę',
						ratio: 1,
						symbol: 'cps'
					},
					{
						label: 'Obrotów na minutę',
						ratio: 60,
						symbol: 'rpm'
					},
					{
						label: 'Uderzeń na minutę',
						ratio: 60,
						symbol: 'BPM'
					}
				]
			},
			{
				category: 'Prędkość kątowa',
				units: [
					{
						label: 'Radianów na sekundę',
						ratio: 6.283185307179586,
						symbol: 'rad/s'
					},
					{
						label: 'Radianów na minutę',
						ratio: 376.9911184307752,
						symbol: 'rad/min'
					},
					{
						label: 'Radianów na godzinę',
						ratio: 22619.46710584651,
						symbol: 'rad/h'
					},
					{
						label: 'Radianów na dzień',
						ratio: 542867.2105403163,
						symbol: 'rad/day'
					},
					{
						label: 'Stopni na sekundę',
						ratio: 360,
						symbol: 'degrees/s'
					},
					{
						label: 'Stopni na minutę',
						ratio: 21600,
						symbol: 'degrees/min'
					},
					{
						label: 'Stopni na godzinę',
						ratio: 1296000,
						symbol: 'degrees/h'
					},
					{
						label: 'Stopni na dzień',
						ratio: 31104000,
						symbol: 'degrees/day'
					}
				]
			}
		]
	}
];
