import Converter from '$lib/components/calculators/Converter/Converter.svelte';

export default [
	{
		component: Converter,
		converters: [
			{
				category: 'Metryczny',
				units: [
					{
						label: 'Kilometry sześcienne',
						ratio: 1e-12,
						symbol: 'km³'
					},
					{
						label: 'Metry sześcienne',
						ratio: 0.001,
						symbol: 'm³',
						default: true
					},
					{
						label: 'Hektolitry',
						ratio: 0.01,
						symbol: 'hl'
					},
					{
						label: 'Dekalitr',
						ratio: 0.1,
						symbol: 'decaliter'
					},
					{
						label: 'Decymetry sześcienne',
						ratio: 1,
						symbol: 'dm³'
					},
					{
						label: 'Litr',
						ratio: 1,
						symbol: 'l'
					},
					{
						label: 'Decylitr',
						ratio: 10,
						symbol: 'dl'
					},
					{
						label: 'Centiliter',
						ratio: 100,
						symbol: 'cl'
					},
					{
						label: 'Centymetry sześcienne',
						ratio: 1000,
						symbol: 'cm³'
					},
					{
						label: 'Mililitry',
						ratio: 1000,
						symbol: 'ml'
					},
					{
						label: 'Milimetry sześcienne',
						ratio: 1000000,
						symbol: 'mm³'
					},
					{
						label: 'Mikrolitr',
						ratio: 1000000,
						symbol: 'µl'
					}
				]
			},
			{
				category: 'Brytyjskie jednostki płynów i produktów suchych',
				units: [
					{
						label: 'Baryłki',
						ratio: 0.006110602,
						symbol: 'barrel'
					},
					{
						label: 'Buszel',
						ratio: 0.0274961,
						symbol: 'bu'
					},
					{
						label: 'Peck',
						ratio: 0.1099844,
						symbol: 'pk'
					},
					{
						label: 'Galon',
						ratio: 0.2199688,
						symbol: 'gal'
					},
					{
						label: 'Kwarty',
						ratio: 0.8798751,
						symbol: 'qt'
					},
					{
						label: 'Pinta',
						ratio: 1.759751,
						symbol: 'pt'
					},
					{
						label: 'Uncja Płynu',
						ratio: 35.19501,
						symbol: 'oz'
					}
				]
			},
			{
				category: 'Amerykańska miara płynów',
				units: [
					{
						label: 'Akr sześcienny',
						ratio: 8.107131e-7,
						symbol: 'acre foot'
					},
					{
						label: 'Jard sześcienny',
						ratio: 0.001307951,
						symbol: 'yd³'
					},
					{
						label: 'Baryłki',
						ratio: 0.006289813,
						symbol: 'barrel'
					},
					{
						label: 'Stopa sześcienna',
						ratio: 0.03531468,
						symbol: 'ft³'
					},
					{
						label: 'Galon',
						ratio: 0.2641722,
						symbol: 'gal'
					},
					{
						label: 'Kwarty',
						ratio: 1.056688,
						symbol: 'qt'
					},
					{
						label: 'Pinta',
						ratio: 2.113376,
						symbol: 'pt'
					},
					{
						label: 'Gill',
						ratio: 8.453507,
						symbol: 'gill'
					},
					{
						label: 'Uncja Płynu',
						ratio: 33.81402,
						symbol: 'oz'
					},
					{
						label: 'Cal sześcienny',
						ratio: 61.02376,
						symbol: 'in³'
					},
					{
						label: 'Naparstek',
						ratio: 270.5122,
						symbol: 'fluid dram'
					},
					{
						label: 'Półnuta',
						ratio: 16230.73,
						symbol: 'minim'
					}
				]
			},
			{
				category: 'Amerykańskie miary produktów suchych',
				units: [
					{
						label: 'Baryłki',
						ratio: 0.008648492,
						symbol: 'barrel'
					},
					{
						label: 'Buszel',
						ratio: 0.02837759,
						symbol: 'bu'
					},
					{
						label: 'Peck',
						ratio: 0.1135104,
						symbol: 'pk'
					},
					{
						label: 'Galon',
						ratio: 0.2270208,
						symbol: 'gal'
					},
					{
						label: 'Kwarty',
						ratio: 0.9080832,
						symbol: 'qt'
					},
					{
						label: 'Pinta',
						ratio: 1.816166,
						symbol: 'pt'
					},
					{
						label: 'Gill',
						ratio: 7.264665,
						symbol: 'gill'
					},
					{
						label: 'Stopa lądowa',
						ratio: 0.42377611111111113,
						symbol: 'FBM'
					}
				]
			},
			{
				category: 'Japoński',
				units: [
					{
						label: 'Koku',
						ratio: 0.005543548,
						symbol: 'koku'
					},
					{
						label: 'Do',
						ratio: 0.05543548,
						symbol: 'to'
					},
					{
						label: 'Sho',
						ratio: 0.5543548,
						symbol: 'sho'
					},
					{
						label: 'Go',
						ratio: 5.543548,
						symbol: 'go'
					}
				]
			},
			{
				category: 'Amerykańskie jednostki kuchenne',
				units: [
					{
						label: 'Filiżanki',
						ratio: 4.226754,
						symbol: 'cup'
					},
					{
						label: 'Łyżka stołowa',
						ratio: 67.62803,
						symbol: 'tablespoon'
					},
					{
						label: 'Łyżeczki',
						ratio: 202.8841,
						symbol: 'teaspoon'
					}
				]
			},
			{
				category: 'Jednostki kuchenne w systemie metrycznym',
				units: [
					{
						label: 'Łyżka stołowa',
						ratio: 66.66667,
						symbol: 'tablespoon'
					},
					{
						label: 'Łyżeczki',
						ratio: 200,
						symbol: 'teaspoon'
					},
					{
						label: 'Szczypta',
						ratio: 1000,
						symbol: 'spice measure'
					}
				]
			}
		]
	}
];
