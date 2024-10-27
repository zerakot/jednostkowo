import Converter from '$lib/components/calculators/Converter/Converter.svelte';

export default [
	{
		component: Converter,
		converters: [
			{
				category: 'Metryczny',
				units: [
					{
						label: 'Megapaskale',
						ratio: 0.000001,
						symbol: 'MPa'
					},
					{
						label: 'Bary',
						ratio: 0.00001,
						symbol: 'bar'
					},
					{
						label: 'Kilogram-siła na centymetr kwadratowy',
						ratio: 0.00001019716,
						symbol: 'kgf/cm²'
					},
					{
						label: 'Kilopaskale',
						ratio: 0.001,
						symbol: 'kPa'
					},
					{
						label: 'Hektopaskale',
						ratio: 0.01,
						symbol: 'hPa'
					},
					{
						label: 'Milibary',
						ratio: 0.01,
						symbol: 'millibar'
					},
					{
						label: 'Kilogram-siła na metr kwadratowy',
						ratio: 0.1019716,
						symbol: 'kgf/m²'
					},
					{
						label: 'Paskale',
						ratio: 1,
						symbol: 'Pa',
						default: true
					}
				]
			},
			{
				category: 'Avoirdupois (USA)',
				units: [
					{
						label: 'Kilofunty na cal kwadratowy',
						ratio: 1.450377e-7,
						symbol: 'ksi'
					},
					{
						label: 'Funty na cal kwadratowy',
						ratio: 0.0001450377,
						symbol: 'psi'
					},
					{
						label: 'Funty na stopę kwadartową',
						ratio: 0.02088543,
						symbol: 'psf'
					}
				]
			},
			{
				category: 'Woda',
				units: [
					{
						label: 'Metr słupa wody',
						ratio: 0.000101974428892211,
						symbol: 'mH2O'
					},
					{
						label: 'Centymetr słupa wody',
						ratio: 0.0101974428892211,
						symbol: 'cmH2O'
					},
					{
						label: 'Stopa słupa wody',
						ratio: 0.000334561774580745,
						symbol: 'ftH20'
					},
					{
						label: 'Cal słupa wody',
						ratio: 0.00401474129496894,
						symbol: 'inH2O'
					}
				]
			},
			{
				category: 'Atmosfery',
				units: [
					{
						label: 'Atmosfera fizyczna',
						ratio: 0.000009869233,
						symbol: 'atm'
					},
					{
						label: 'Atmosfera techniczna',
						ratio: 0.00001019716,
						symbol: 'technical atmosphere'
					}
				]
			},
			{
				category: 'Rtęć',
				units: [
					{
						label: 'Cale słupka rtęci',
						ratio: 0.0002953007,
						symbol: 'inHg'
					},
					{
						label: 'Centymetry słupka rtęci',
						ratio: 0.0007500638,
						symbol: 'cmHg'
					},
					{
						label: 'Milimetry słupka rtęci',
						ratio: 0.007500638,
						symbol: 'mmHg'
					},
					{
						label: 'Tor',
						ratio: 0.007500638,
						symbol: 'torr'
					}
				]
			}
		]
	}
];
