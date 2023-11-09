import Converter from '$lib/components/calculators/Converter/Converter.svelte';
import Percentage from '$lib/components/calculators/Percentage/Percentage.svelte';
import Proportions from '$lib/components/calculators/Proportions/Proportions.svelte';
import Stack from '$lib/components/calculators/Stack/Stack.svelte';
import Controllers from '$lib/components/calculators/Controllers/Controllers.svelte';
import { formatGrade, round } from '../utils';

export const calculators = [
	{
		id: 'procentow',
		type: 'kalkulator',
		name: 'procentów',
		description: 'Łatwy w użyciu kalkulator procentów, który ułatwi Ci obliczanie procentów.',
		title: 'Kalkulator procentów',
		icon: 'percent',
		component: Percentage,
		operations: [
			{
				name: 'Obliczanie procentu z danej liczby',
				labels: ['% z', '=', ''],
				formula: (a, b, handler) => handler(a / 100, b, (a, b) => a * b)
			},
			{
				name: 'Jakim procentem jest liczba A dla liczby B',
				labels: ['dla', '=', '%'],
				formula: (a, b, handler) => handler(a, b, (a, b) => (a / b) * 100)
			},
			{
				name: 'Dodaj procent do liczby',
				labels: ['+', '% =', ''],
				formula: (a, b, handler) => handler(a, b / 100, (a, b) => a + a * b)
			},
			{
				name: 'Odejmij procent od liczby',
				labels: ['-', '% =', ''],
				formula: (a, b, handler) => handler(a, b / 100, (a, b) => a - a * b)
			},
			{
				name: 'O ile procent liczba A wzrosła/zmalała w stosunku do B',
				labels: ['do', 'wzrosło/zmalało o', '%'],
				formula: (a, b, handler) => handler(a, b, (a, b) => ((b - a) / a) * 100)
			}
		]
	},
	{
		id: 'sredniej-ocen',
		type: 'kalkulator',
		name: 'średniej ocen',
		title: 'Kalkulator średniej ocen',
		description:
			'Łatwy w użyciu kalkulator średniej ocen, który ułatwi Ci obliczanie średniej ocen.',
		icon: 'school',
		component: Stack,
		fields: [
			{ type: 'text', name: 'Ocena' },
			{ type: 'number', name: 'Waga' }
		],
		formula: (dataset) => {
			const sum = dataset.reduce(
				(acc, row) => {
					const weight = parseFloat(row.Waga);
					const grade = formatGrade(row.Ocena);

					if (isNaN(weight) || isNaN(grade)) return 0;

					acc.weightSum += weight;
					acc.gradesSum += weight * grade;

					return acc;
				},
				{ weightSum: 0, gradesSum: 0 }
			);

			if (sum.weightSum === 0) {
				return '0.00';
			}

			return round(sum.gradesSum / sum.weightSum, 2);
		}
	},
	{
		id: 'proporcji',
		type: 'kalkulator',
		name: 'proporcji',
		title: 'Kalkulator proporcji',
		description: 'Łatwy w użyciu kalkulator proporcji, który ułatwi Ci obliczanie proporcji.',
		icon: 'shuffle',
		component: Proportions
	},
	{
		id: 'funkcji-trygonometrycznych',
		type: 'kalkulator',
		name: 'trygonometrii',
		title: 'Kalkulator trygonometrii',
		description:
			'Łatwy w użyciu kalkulator funkcji trygonometrycznych, który ułatwi Ci obliczanie funkcji trygonometrycznych.',
		icon: 'square_foot',
		component: Controllers,
		controllers: [
			{
				id: 'unit',
				element: 'select',
				label: 'Podaj w jakich jednostkach chcesz wprowadzić kąt',
				options: [
					{ label: 'Stopnie', name: 'deg' },
					{ label: 'Radiany', name: 'rad' }
				]
			},
			{
				id: 'number',
				element: 'input',
				label: 'Wprowadź wartość kąta',
				attributes: { type: 'number', placeholder: 'Wprowadź wartość kąta' }
			}
		],
		formula: (dataset) => {
			const unit = dataset?.unit;
			const number = parseFloat(dataset?.number) || 0;

			const formattedNumber = unit === 'deg' ? number * (Math.PI / 180) : number;

			const sinResult = round(Math.sin(formattedNumber) || 0, 4);
			const cosResult = round(Math.cos(formattedNumber) || 0, 4);
			const tanResult = round(Math.tan(formattedNumber) || 0, 4);
			const cotResult = round(1 / tanResult, 4);

			return {
				value: [{ sin: sinResult, cos: cosResult, tan: tanResult, cot: cotResult }],
				type: 'table'
			};
		}
	},
	{
		id: 'bmi',
		type: 'kalkulator',
		name: 'BMI',
		title: 'Kalkulator BMI',
		description: 'Łatwy w użyciu kalkulator BMI, który ułatwi Ci obliczanie BMI.',
		icon: 'scale',
		component: Controllers,
		controllers: [
			{
				id: 'weight',
				element: 'input',
				label: 'Masa ciała',
				attributes: { type: 'number', placeholder: 'Podaj masę ciała' }
			},
			{
				id: 'height',
				element: 'input',
				label: 'Wzrost',
				attributes: { type: 'number', placeholder: 'Podaj swój wzrost [cm]' }
			}
		],
		formula: (dataset) => {
			const classifications = [
				{ from: 0, to: 18.5, label: 'niedowaga', color: '#ad5600' },
				{ from: 18.5, to: 25, label: 'waga prawidłowa' },
				{ from: 25, to: Infinity, label: 'nadwaga', color: '#ad0000' }
			];
			const bmi = round(dataset?.weight / Math.pow(dataset?.height / 100, 2), 2);
			const clasification = classifications.find(
				(breakpoint) => breakpoint.from < bmi && breakpoint.to > bmi
			);

			return {
				value:
					!isNaN(bmi) && isFinite(bmi) ? bmi + ` (${clasification?.label || '----'})` : '-----',
				color: clasification?.color
			};
		}
	},
	{
		id: 'dlugosci',
		type: 'przelicznik',
		name: 'długości',
		title: 'Przelicznik długości',
		description:
			'Łatwy w użyciu kalkulator długości, który ułatwi Ci przeliczanie jednostek długości.',
		icon: 'straighten',
		component: Converter,
		converters: [
			{
				label: 'metr',
				ratio: 1,
				symbol: 'm'
			},
			{
				label: 'kilometr',
				ratio: 1000,
				symbol: 'km'
			},
			{
				label: 'decymetr',
				ratio: 0.1,
				symbol: 'dm'
			},
			{
				label: 'centymetr',
				ratio: 0.01,
				symbol: 'cm'
			},
			{
				label: 'milimetr',
				ratio: 0.001,
				symbol: 'mm'
			},
			{
				label: 'mikrometr (mikron)',
				ratio: 0.000001,
				symbol: 'µm (µ)'
			},
			{
				label: 'cal',
				ratio: 0.0254,
				symbol: '"'
			},
			{
				label: 'stopa',
				ratio: 0.3048,
				symbol: 'ft'
			},
			{
				label: 'jard',
				ratio: 0.9144,
				symbol: 'yd'
			},
			{
				label: 'mila',
				ratio: 1609.35,
				symbol: 'mi'
			},
			{
				label: 'mila morska',
				ratio: 1852,
				symbol: 'nmi'
			},
			{
				label: 'jednostka astronomiczna',
				ratio: 149597870700,
				symbol: 'au'
			},
			{
				label: 'rok świetlny',
				ratio: 9460730472580800n,
				symbol: 'ly'
			}
		]
	},
	{
		id: 'czasu',
		type: 'przelicznik',
		name: 'czasu',
		title: 'Przelicznik czasu',
		description: 'Łatwy w użyciu kalkulator czasu, który ułatwi Ci przeliczanie jednostek czasu.',
		icon: 'schedule',
		component: Converter,
		converters: [
			{
				label: 'sekunda',
				ratio: 1,
				symbol: 's'
			},
			{
				label: 'minuta',
				ratio: 60,
				symbol: 'm'
			},
			{
				label: 'godzina',
				ratio: 3600,
				symbol: 'h'
			},
			{
				label: 'doba',
				ratio: 86400,
				symbol: 'd'
			},
			{
				label: 'tydzień',
				ratio: 604800,
				symbol: 'tydz.'
			},
			{
				label: 'miesiąc',
				ratio: 2629700,
				symbol: 'mies.'
			},
			{
				label: 'rok',
				ratio: 31556952,
				symbol: 'r.'
			},
			{
				label: 'nanosekunda',
				ratio: 1e-9,
				symbol: 'ns'
			},
			{
				label: 'mikrosekunda',
				ratio: 0.000001,
				symbol: 'yd'
			},
			{
				label: 'milisekunda',
				ratio: 0.001,
				symbol: 'ms'
			},
			{
				label: 'dekada',
				ratio: 315569520,
				symbol: 'dekada'
			}
		]
	},
	{
		id: 'informatyczny',
		type: 'przelicznik',
		name: 'informatyczny',
		title: 'Przelicznik informatyczny',
		description:
			'Łatwy w użyciu kalkulator informatyczny, który ułatwi Ci przeliczanie jednostek informatycznych.',
		icon: 'database',
		component: Converter,
		converters: [
			{
				label: 'kilobajt',
				ratio: 1,
				symbol: 'kb'
			},
			{
				label: 'megabajt',
				ratio: 1024,
				symbol: 'mb'
			},
			{
				label: 'gigabajt',
				ratio: 1048576,
				symbol: 'gb'
			},
			{
				label: 'terabajt',
				ratio: 1073741824,
				symbol: 'tb'
			},
			{
				label: 'petabajt',
				ratio: 1099511627776,
				symbol: 'pb'
			},
			{
				label: 'eksabajt',
				ratio: 1125899906842600,
				symbol: 'eb'
			},
			{
				label: 'zettabajt',
				ratio: 1152921504606800000n,
				symbol: 'zb'
			}
		]
	},
	{
		id: 'masy',
		type: 'przelicznik',
		name: 'masy',
		title: 'Przelicznik masy',
		description: 'Łatwy w użyciu kalkulator masy, który ułatwi Ci przeliczanie jednostek masy.',
		icon: 'weight',
		component: Converter,
		converters: [
			{
				label: 'gram',
				ratio: 1,
				symbol: 'g'
			},
			{
				label: 'kilogram',
				ratio: 1000,
				symbol: 'kg'
			},
			{
				label: 'dekagram',
				ratio: 100,
				symbol: 'dag'
			},
			{
				label: 'funt',
				ratio: 453.592,
				symbol: 'lb'
			},
			{
				label: 'uncja',
				ratio: 28.349523125,
				symbol: 'oz'
			},
			{
				label: 'karat',
				ratio: 0.2,
				symbol: 'ct'
			},
			{
				label: 'gran',
				ratio: 0.06479891,
				symbol: 'gr'
			},
			{
				label: 'cetnar ang',
				ratio: 50802.34544,
				symbol: 'cwtUK'
			},
			{
				label: 'cetnar USA',
				ratio: 45359.237,
				symbol: 'cwt'
			},
			{
				label: 'tona długa',
				ratio: 1016046.9088,
				symbol: 'tonUK'
			},
			{
				label: 'tona krótka',
				ratio: 907184.74,
				symbol: 'tonUS'
			},
			{
				label: 'tona',
				ratio: 1000000,
				symbol: 't'
			}
		]
	},

	{
		id: 'objetosci',
		type: 'przelicznik',
		name: 'objętości',
		title: 'Przelicznik objętości',
		description:
			'Łatwy w użyciu kalkulator objętości, który ułatwi Ci przeliczanie jednostek objętości.',
		icon: 'open_in_full',
		component: Converter,
		converters: [
			{
				label: 'metr sześcienny',
				ratio: 1,
				symbol: 'm³'
			},
			{
				label: 'kilometr sześcienny',
				ratio: 1000000000,
				symbol: 'kg'
			},
			{
				label: 'decymetr sześcienny (Litr)',
				ratio: 0.001,
				symbol: 'dm³ (l)'
			},
			{
				label: 'centymetr sześcienny (Mililitr)',
				ratio: 0.000001,
				symbol: 'cm³ (ml)'
			},
			{
				label: 'milimetr sześcienny',
				ratio: 1e-9,
				symbol: 'mm³'
			},
			{
				label: 'cal sześcienny',
				ratio: 0.000016387064,
				symbol: 'in³'
			},
			{
				label: 'stopa sześcienna',
				ratio: 0.028316846592,
				symbol: 'ft³'
			},
			{
				label: 'jard sześcienny',
				ratio: 0.764554857984,
				symbol: 'yd³'
			},
			{
				label: 'galon USA',
				ratio: 0.00378541178,
				symbol: 'gal'
			},
			{
				label: 'galon ang',
				ratio: 0.00454609,
				symbol: 'galUK'
			},
			{
				label: 'galon suchy',
				ratio: 0.00440488377086,
				symbol: 'galD'
			},
			{
				label: 'buszel USA',
				ratio: 0.03523907016688,
				symbol: 'bu'
			},
			{
				label: 'buszel ang',
				ratio: 0.03636872,
				symbol: 'buUK'
			},
			{
				label: 'baryłka USA wino',
				ratio: 0.1192404713,
				symbol: 'bbl'
			},
			{
				label: 'baryłka ang',
				ratio: 0.16365924,
				symbol: 'bblUK'
			},
			{
				label: 'baryłka petro',
				ratio: 0.158987294928,
				symbol: 'bo'
			}
		]
	},
	{
		id: 'cisnienia',
		type: 'przelicznik',
		name: 'ciśnienia',
		title: 'Przelicznik ciśnienia',
		description:
			'Łatwy w użyciu kalkulator ciśnienia, który ułatwi Ci przeliczanie jednostek ciśnienia.',
		icon: 'tire_repair',
		component: Converter,
		converters: [
			{
				label: 'paskal',
				ratio: 1,
				symbol: 'Pa'
			},
			{
				label: 'kilopascal',
				ratio: 1000,
				symbol: 'kPa'
			},
			{
				label: 'bar',
				ratio: 100000,
				symbol: 'bar'
			},
			{
				label: 'funt-siła na cal kwadratowy',
				ratio: 6894.757,
				symbol: 'psi'
			},
			{
				label: 'megapaskal',
				ratio: 1000000,
				symbol: 'mPa'
			},
			{
				label: 'atmosfera fizyczna',
				ratio: 101325,
				symbol: 'atm'
			},
			{
				label: 'kilogram-siła na metr kwadratowy',
				ratio: 9.80665,
				symbol: 'kG/m2'
			},
			{
				label: 'atmosfera techniczna',
				ratio: 9.80665,
				symbol: 'at'
			},
			{
				label: 'kilogram-siła na centymetr kwadratowy',
				ratio: 98066.5,
				symbol: 'kG/cm2'
			},
			{
				label: 'kilogram-siła na milimetr kwadratowy',
				ratio: 9806650,
				symbol: 'kG/mm2'
			},
			{
				label: 'dyna na centymetr kwadratowy',
				ratio: 0.1,
				symbol: 'dyn/cm2'
			},
			{
				label: 'milimetr słupa rtęci (Tor)',
				ratio: 133.322387415,
				symbol: 'mmHg (Tr)'
			},
			{
				label: 'milimetr słupa wody',
				ratio: 9.80638,
				symbol: 'mmH2O'
			},
			{
				label: 'cal słupa rtęci',
				ratio: 3,
				symbol: 'inHg'
			},
			{
				label: 'cal słupa wody',
				ratio: 249.082,
				symbol: 'inH2O'
			}
		]
	},
	{
		id: 'energii',
		type: 'przelicznik',
		name: 'energii',
		title: 'Przelicznik energii',
		description:
			'Łatwy w użyciu kalkulator energii, który ułatwi Ci przeliczanie jednostek energii.',
		icon: 'bolt',
		component: Converter,
		converters: [
			{
				label: 'dżul',
				ratio: 1,
				symbol: 'J'
			},
			{
				label: 'kilodżul',
				ratio: 1000,
				symbol: 'kJ'
			},
			{
				label: 'kilogramometr',
				ratio: 9.8067,
				symbol: 'kGm'
			},
			{
				label: 'kilowatogodzina',
				ratio: 3600000,
				symbol: 'kWh'
			},
			{
				label: 'kaloria',
				ratio: 4.1868,
				symbol: 'cal'
			},
			{
				label: 'kilokaloria',
				ratio: 4186.8,
				symbol: 'kcal'
			},
			{
				label: 'koniogodzina',
				ratio: 2647796.4,
				symbol: 'KM⋅h'
			},
			{
				label: 'erg',
				ratio: 1e-7,
				symbol: 'erg'
			},
			{
				label: 'stopofunt',
				ratio: 1.3558179483314,
				symbol: 'ftlbf'
			},
			{
				label: 'stopa-poundal',
				ratio: 0.042140110093805,
				symbol: 'ftpdl'
			},
			{
				label: 'brytyjska jednostka ciepła',
				ratio: 1055.05585262,
				symbol: 'Btu'
			}
		]
	},
	{
		id: 'czestotliwosci',
		type: 'przelicznik',
		name: 'częstotliwości',
		title: 'Przelicznik częstotliwości',
		description:
			'Łatwy w użyciu częstotliwości energii, który ułatwi Ci przeliczanie jednostek częstotliwości.',
		icon: 'radio',
		component: Converter,
		converters: [
			{
				label: '1/min',
				ratio: 0.016666666666667,
				symbol: '1/min'
			},
			{
				label: '1/h',
				ratio: 0.00027777777777778,
				symbol: '1/h'
			},
			{
				label: 'herc (1/s)',
				ratio: 1,
				symbol: 'Hz'
			},
			{
				label: 'petaherc',
				ratio: 1000000000000000,
				symbol: 'PHz'
			},
			{
				label: 'teraherc',
				ratio: 1000000000000,
				symbol: 'THz'
			},
			{
				label: 'gigaherc',
				ratio: 1000000000,
				symbol: 'GHz'
			},
			{
				label: 'megaherc',
				ratio: 1000000,
				symbol: 'MHz'
			},
			{
				label: 'kiloherc',
				ratio: 1000,
				symbol: 'kHz'
			},
			{
				label: 'hektoherc',
				ratio: 100,
				symbol: 'hHz'
			},
			{
				label: 'dekaherc',
				ratio: 10,
				symbol: 'daHz'
			},
			{
				label: 'decyherc',
				ratio: 0.1,
				symbol: 'dHz'
			},
			{
				label: 'centyherc',
				ratio: 0.01,
				symbol: 'cHz'
			},
			{
				label: 'miliherc',
				ratio: 0.001,
				symbol: 'mHz'
			},
			{
				label: 'mikroherc',
				ratio: 0.000001,
				symbol: 'μHz'
			},
			{
				label: 'nanoherc',
				ratio: 1e-9,
				symbol: 'nHz'
			}
		]
	},
	{
		id: 'gestosci',
		type: 'przelicznik',
		name: 'gęstości',
		title: 'Przelicznik gęstości',
		description:
			'Łatwy w użyciu kalkulator gęstości, który ułatwi Ci przeliczanie jednostek gęstości.',
		icon: 'apps',
		component: Converter,
		converters: [
			{
				label: 'gram na litr',
				ratio: 1,
				symbol: 'g/l'
			},
			{
				label: 'gram na centymetr sześcienny',
				ratio: 1000,
				symbol: 'g/cm³'
			},
			{
				label: 'gram na decylitr',
				ratio: 10,
				symbol: 'g/dl'
			},
			{
				label: 'gram na decymetr sześcienny',
				ratio: 1,
				symbol: 'g/dm³'
			},
			{
				label: 'gram na metr sześcienny',
				ratio: 0.001,
				symbol: 'g/m³'
			},
			{
				label: 'gram na mililitr',
				ratio: 1000,
				symbol: 'g/ml'
			},
			{
				label: 'kilogram na litr',
				ratio: 1000,
				symbol: 'kg/l'
			},
			{
				label: 'kilogram na centymetr sześcienny',
				ratio: 1000000,
				symbol: 'kg/cm³'
			},
			{
				label: 'kilogram na decymetr sześcienny',
				ratio: 1000,
				symbol: 'kg/dm³'
			},
			{
				label: 'kilogram na metr sześcienny',
				ratio: 1,
				symbol: 'kg/m³'
			},
			{
				label: 'miligram na decylitr',
				ratio: 0.01,
				symbol: 'mg/dl'
			},
			{
				label: 'miligram na litr',
				ratio: 0.001,
				symbol: 'mg/l'
			},
			{
				label: 'miligram na metr sześcienny',
				ratio: 0.000001,
				symbol: 'mg/m³'
			},
			{
				label: 'miligram na mililitr',
				ratio: 1,
				symbol: 'mg/ml'
			}
		]
	},

	{
		id: 'mocy',
		type: 'przelicznik',
		name: 'mocy',
		title: 'Przelicznik mocy',
		description: 'Łatwy w użyciu kalkulator mocy, który ułatwi Ci przeliczanie jednostek mocy.',
		icon: 'electrical_services',
		component: Converter,
		converters: [
			{
				label: 'wat',
				ratio: 1,
				symbol: 'W'
			},
			{
				label: 'kilowat',
				ratio: 1000,
				symbol: 'kW'
			},
			{
				label: 'kilogramometr na sekundę',
				ratio: 9.80665,
				symbol: 'kG·m/s'
			},
			{
				label: 'kilokaloria na sekundę',
				ratio: 4186.8,
				symbol: 'kcal/s'
			},
			{
				label: 'kilokaloria na godzinę',
				ratio: 1.163,
				symbol: 'kcal/h'
			},
			{
				label: 'koń mechaniczny',
				ratio: 735.49875,
				symbol: 'KM'
			},
			{
				label: 'angielski koń parowy',
				ratio: 745.69987158,
				symbol: 'hp'
			},
			{
				label: 'erg na sekundę',
				ratio: 1e-7,
				symbol: 'erg/s'
			},
			{
				label: 'stopofunt na sekundę',
				ratio: 1.3558179483,
				symbol: 'ft·lbf/s'
			},
			{
				label: 'angielska jednostka ciepła na sekundę',
				ratio: 1055.0558526,
				symbol: 'BTU/s'
			}
		]
	},
	{
		id: 'predkosci',
		type: 'przelicznik',
		name: 'prędkości',
		description:
			'Łatwy w użyciu kalkulator prędkości, który ułatwi Ci przeliczanie jednostek prędkości.',
		title: 'Przelicznik prędkości',
		icon: 'speed',
		component: Converter,
		converters: [
			{
				label: 'beaufort',
				ratio: 35125,
				symbol: 'Bft'
			},
			{
				label: 'centymert na sekundę',
				ratio: 0.036,
				symbol: 'cm/s'
			},
			{
				label: 'stopa na godzinę',
				ratio: 0.0003048,
				symbol: 'fph'
			},
			{
				label: 'stopa na minutę',
				ratio: 0.018288,
				symbol: 'fpm'
			},
			{
				label: 'stopa na sekundę',
				ratio: 1.09728,
				symbol: 'fps'
			},
			{
				label: 'cal na godzinę',
				ratio: 0.0000254,
				symbol: 'iph'
			},
			{
				label: 'kilometr na godzinę',
				ratio: 1,
				symbol: 'km/h'
			},
			{
				label: 'kilometr na minutę',
				ratio: 60,
				symbol: 'km/min'
			},
			{
				label: 'kilometr na sekundę',
				ratio: 3600,
				symbol: 'km/s'
			},
			{
				label: 'metr na godzinę',
				ratio: 0.001,
				symbol: 'm/h'
			},
			{
				label: 'metr na minutę',
				ratio: 0.06,
				symbol: 'm/min'
			},
			{
				label: 'metr na sekundę',
				ratio: 44991,
				symbol: 'm/s'
			},
			{
				label: 'mila morska na godzinę',
				ratio: 1.8519984,
				symbol: 'nm/h'
			},
			{
				label: 'mila na godzinę',
				ratio: 1.609344,
				symbol: 'mph'
			},
			{
				label: 'mila na minutę',
				ratio: 96.56064,
				symbol: 'mpm'
			},
			{
				label: 'mila na sekundę',
				ratio: 5793.6384,
				symbol: 'mps'
			},
			{
				label: 'prędkość dźwięku',
				ratio: 1225.044,
				symbol: 'Mach'
			},
			{
				label: 'prędkość światła',
				ratio: 1079252848.8,
				symbol: 'c'
			}
		]
	},
	{
		id: 'sily',
		type: 'przelicznik',
		name: 'siły',
		description: 'Łatwy w użyciu kalkulator siły, który ułatwi Ci przeliczanie jednostek siły.',
		title: 'Przelicznik siły',
		icon: 'swap_horiz',
		component: Converter,
		converters: [
			{
				label: 'niuton',
				ratio: 1,
				symbol: 'N'
			},
			{
				label: 'kiloniuton',
				ratio: 1000,
				symbol: 'kN'
			},
			{
				label: 'meganiuton',
				ratio: 1000000,
				symbol: 'MN'
			},
			{
				label: 'giganiuton',
				ratio: 1000000000,
				symbol: 'GN'
			},
			{
				label: 'dyna',
				ratio: 0.00001,
				symbol: 'dyn'
			},
			{
				label: 'kilogram-siła',
				ratio: 9.80665,
				symbol: 'kgf'
			},
			{
				label: 'funt-siła',
				ratio: 0.138254954376,
				symbol: 'pdl'
			},
			{
				label: 'poundal',
				ratio: 4.4482216153,
				symbol: 'lbs'
			}
		]
	},

	/* {
		id: 'temperatury',
		name: 'temperatury',
		description:
			'Łatwy w użyciu kalkulator temperatury, który ułatwi Ci przeliczanie jednostek temperatury.',
		icon: 'thermostat',
		component: Converter,
		converters: [
			{
				label: 'kelwin',
				ratio: 1,
				symbol: 'K'
			},
			{
				label: 'stopień Celsjusza',
				ratio: 274.15,
				symbol: '°C'
			},
			{
				label: 'stopień Fahrenheita',
				ratio: 255.92777777778,
				symbol: '°F'
			},
			{
				label: 'hektokelwin',
				ratio: 100,
				symbol: 'hK'
			},
			{
				label: 'kilokelwin',
				ratio: 1000,
				symbol: 'kK'
			},
			{
				label: 'megakelwin',
				ratio: 1000000,
				symbol: 'MK'
			},
			{
				label: 'milikelwin',
				ratio: 0.001,
				symbol: 'mK'
			},
			{
				label: 'stopień Delisle',
				ratio: 372.48333333333,
				symbol: '°De'
			},
			{
				label: 'stopień Newtona',
				ratio: 276.1803030303,
				symbol: '°N'
			},
			{
				label: "stopień Rankine'a",
				ratio: 0.55555555555556,
				symbol: '°Ra'
			},
			{
				label: 'stopień Réaumura',
				ratio: 274.4,
				symbol: '°Ré'
			},
			{
				label: 'stopień Rømera',
				ratio: 260.76904761905,
				symbol: '°Rø'
			}
		]
	}, */
	{
		id: 'powierzchni',
		type: 'przelicznik',
		name: 'powierzchni',
		description:
			'Łatwy w użyciu kalkulator powierzchni, który ułatwi Ci przeliczanie jednostek pola powierzchni.',
		title: 'Przelicznik powierzchni',
		icon: 'crop_square',
		component: Converter,
		converters: [
			{
				label: 'metr kwadratowy',
				ratio: 1,
				symbol: 'm²'
			},
			{
				label: 'kilometr kwadratowy',
				ratio: 1000000,
				symbol: 'km²'
			},
			{
				label: 'decymetr kwadratowy',
				ratio: 0.01,
				symbol: 'dm²'
			},
			{
				label: 'centymetr kwadratowy',
				ratio: 0.0001,
				symbol: 'cm²'
			},
			{
				label: 'milimetr kwadratowy',
				ratio: 0.000001,
				symbol: 'mm²'
			},
			{
				label: 'ar',
				ratio: 100,
				symbol: 'a'
			},
			{
				label: 'hektar',
				ratio: 10000,
				symbol: 'ha'
			},
			{
				label: 'morga',
				ratio: 2500,
				symbol: 'morga'
			},
			{
				label: 'cal kwadratowy',
				ratio: 0.00064516,
				symbol: 'in²'
			},
			{
				label: 'stopa kwadratowa',
				ratio: 0.09290304,
				symbol: 'ft²'
			},
			{
				label: 'jard kwadratowy',
				ratio: 0.83612736,
				symbol: 'yd²'
			},
			{
				label: 'mila kwadratowa',
				ratio: 2589988.110336,
				symbol: 'mi²'
			},
			{
				label: 'akr',
				ratio: 4046.8564224,
				symbol: 'ac'
			}
		]
	},
	{
		id: 'katow',
		type: 'przelicznik',
		name: 'kątów',
		description:
			'Łatwy w użyciu kalkulator kątów, który ułatwi Ci przeliczanie jednostek miar kątów.',
		title: 'Przelicznik kątów',
		icon: 'square_foot',
		component: Converter,
		converters: [
			{
				label: 'stopień',
				ratio: 0.017453292519943,
				symbol: '°'
			},
			{
				label: 'radian',
				ratio: 1,
				symbol: 'rad'
			},
			{
				label: 'grad',
				ratio: 0.0157079633,
				symbol: '^g'
			},
			{
				label: 'gon',
				ratio: 0.015707963267949,
				symbol: 'gon'
			},
			{
				label: 'minuta kątowa',
				ratio: 0.00029088820866572,
				symbol: "'"
			},
			{
				label: 'sekunda kątowa',
				ratio: 0.0000048481368110954,
				symbol: "''"
			},
			{
				label: 'znak',
				ratio: 0.5235987756,
				symbol: 'sign'
			},
			{
				label: 'mil',
				ratio: 0.0009817477,
				symbol: 'mil'
			},
			{
				label: 'obrót',
				ratio: 6.2831853071796,
				symbol: 'r'
			},
			{
				label: 'krąg',
				ratio: 6.2831853071796,
				symbol: 'circle'
			},
			{
				label: 'kwadrant',
				ratio: 1.5707963268,
				symbol: 'quadrant'
			},
			{
				label: 'prosty kąt',
				ratio: 1.5707963268,
				symbol: 'right angle'
			}
		]
	}
];
