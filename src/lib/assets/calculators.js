import Converter from '$lib/components/calculators/Converter/Converter.svelte';
import Percentage from '$lib/components/calculators/Percentage/Percentage.svelte';
import Proportions from '$lib/components/calculators/Proportions/Proportions.svelte';
import Stack from '$lib/components/calculators/Stack/Stack.svelte';
import Controllers from '$lib/components/calculators/Controllers/Controllers.svelte';
import { calculateBmi, formatGrade, round } from '../utils';

export const calculators = [
	{
		id: 'kalkulator-procentow',
		type: 'kalkulator',
		name: 'procentów',
		description: 'Łatwy w użyciu kalkulator procentów, który ułatwi Ci obliczanie procentów.',
		title: 'Kalkulator procentów',
		icon: 'percent',
		component: Percentage,
		about:
			'Procenty to sposób wyrażania części całości. Można je zrozumieć jako ułamki, w których mianownik jest zawsze równy 100. Na przykład, jeśli mamy 25 procent czegoś, to znaczy, że mamy 25 części na 100 możliwych. Procenty są używane w wielu sytuacjach, na przykład w matematyce, finansach, statystyce czy ocenianiu.',
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
				labels: ['do', 'w/z o', '%'],
				formula: (a, b, handler) => handler(a, b, (a, b) => ((b - a) / a) * 100)
			}
		]
	},
	{
		id: 'kalkulator-sredniej-ocen',
		type: 'kalkulator',
		name: 'średniej ocen',
		title: 'Kalkulator średniej ocen',
		description:
			'Łatwy w użyciu kalkulator średniej ocen, który ułatwi Ci obliczanie średniej ocen.',
		icon: 'school',
		component: Stack,
		about:
			'Średnia ocen, zwana także średnią arytmetyczną, to sposób obliczania wyników uczniów na podstawie wszystkich ocen, jakie otrzymali z danego przedmiotu lub semestru. Aby obliczyć średnią ocen, należy dodać wszystkie oceny i podzielić je przez ich liczbę, opcjonalnie uwzględniając ich wagi.',
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
		id: 'kalkulator-proporcji',
		type: 'kalkulator',
		name: 'proporcji',
		title: 'Kalkulator proporcji',
		description: 'Łatwy w użyciu kalkulator proporcji, który ułatwi Ci obliczanie proporcji.',
		icon: 'shuffle',
		component: Proportions,
		about:
			'Proporcje to relacja między wielkościami, które można porównać ze sobą. Proporcje mogą być wyrażone w różnych sposobach, np. jako ułamek, procent, stosunek czy skala. Proporcje są używane w wielu dziedzinach, np. w matematyce, sztuce, architekturze czy kuchni. Proporcje pomagają nam zrozumieć i opisać zależności między różnymi wielkościami.'
	},
	{
		id: 'kalkulator-funkcji-trygonometrycznych',
		type: 'kalkulator',
		name: 'trygonometrii',
		title: 'Kalkulator trygonometrii',
		description:
			'Łatwy w użyciu kalkulator funkcji trygonometrycznych, który ułatwi Ci obliczanie funkcji trygonometrycznych.',
		icon: 'square_foot',
		component: Controllers,
		about:
			'Trygonometria jest działem matematyki zajmującym się badaniem związków między kątami i bokami trójkątów. Trygonometria wykorzystuje funkcje trygonometryczne, takie jak sinus, cosinus i tangens, do obliczania wartości kątów i długości boków. Trygonometria ma wiele zastosowań w nauce i technice, na przykład w nawigacji, astronomii, fizyce i inżynierii.',
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
		id: 'kalkulator-bmi',
		type: 'kalkulator',
		name: 'BMI',
		title: 'Kalkulator BMI',
		description: 'Łatwy w użyciu kalkulator BMI, który ułatwi Ci obliczanie BMI.',
		icon: 'scale',
		component: Controllers,
		about:
			'BMI, czyli indeks masy ciała (ang. Body Mass Index), to wskaźnik używany do oceny masy ciała osoby w stosunku do jej wzrostu. Jest to powszechnie stosowany sposób oceny, czy dana osoba ma odpowiednią masę ciała, nadwagę, niedowagę lub otyłość.',
		controllers: [
			{
				id: 'height',
				element: 'input',
				label: 'Wzrost [cm]',
				attributes: { type: 'number', placeholder: 'Podaj swój wzrost' }
			},
			{
				id: 'weight',
				element: 'input',
				label: 'Masa ciała [kg]',
				attributes: { type: 'number', placeholder: 'Podaj masę ciała' }
			}
		],
		formula: (dataset) => {
			const { bmi, label } = calculateBmi(dataset?.weight, dataset?.height);

			return {
				label,
				scale: [8, 48],
				value: dataset?.height > 30 ? round(bmi) : undefined,
				type: 'scale',
				gradient:
					'to right, rgb(188, 32, 32) 0%, rgb(188, 32, 32) 20%, rgb(211, 136, 136) 20%, rgb(211, 136, 136) 22.50%, rgb(255, 228, 0) 22.50%, rgb(255, 228, 0) 26.25%, rgb(0, 129, 55) 26.25%, rgb(0, 129, 55) 42.50%, rgb(255, 228, 0) 42.50%, rgb(255, 228, 0) 55.00%, rgb(211, 136, 136) 55.00%, rgb(211, 136, 136) 67.50%, rgb(188, 32, 32) 67.50%, rgb(188, 32, 32) 80%, rgb(138, 1, 1) 80%, rgb(138, 1, 1) 100%'
			};
		}
	},
	{
		id: 'przelicznik-dlugosci',
		type: 'przelicznik',
		name: 'długości',
		title: 'Przelicznik długości',
		description:
			'Łatwy w użyciu kalkulator długości, który ułatwi Ci przeliczanie jednostek długości.',
		icon: 'straighten',
		component: Converter,
		about:
			'Miary długości to jednostki służące do określania odległości między punktami w przestrzeni. Są one stosowane w różnych dziedzinach, takich jak fizyka, geografia, czy inżynieria. Najpopularniejsze jednostki długości to: centymetr, metr i kilometr.	',

		converters: [
			{
				name: 'Metryczny',
				units: [
					{
						label: 'Kilometr',
						ratio: 0.001,
						symbol: 'km'
					},
					{
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
				name: 'Brytyjski/Amerykański',
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
				name: 'Morski',
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
				name: 'Astronomiczny',
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
	},
	{
		id: 'przelicznik-czasu',
		type: 'przelicznik',
		name: 'czasu',
		title: 'Przelicznik czasu',
		description: 'Łatwy w użyciu kalkulator czasu, który ułatwi Ci przeliczanie jednostek czasu.',
		icon: 'schedule',
		component: Converter,
		about:
			'Jednostki czasu umożliwiają mierzenie upływu czasu. Są podstawowym narzędziem do organizacji życia codziennego, zapisywania wydarzeń historycznych i określania czasu trwania różnych zjawisk.',
		converters: [
			{
				units: [
					{
						label: 'Lata',
						ratio: 1,
						symbol: 'year'
					},
					{
						label: 'Miesiące',
						ratio: 12,
						symbol: 'month'
					},
					{
						label: 'Tygodnie',
						ratio: 52.17857,
						symbol: 'week'
					},
					{
						label: 'Dni',
						ratio: 365.25,
						symbol: 'day'
					},
					{
						label: 'Godziny',
						ratio: 8766,
						symbol: 'hour'
					},
					{
						label: 'Minuty',
						ratio: 525960,
						symbol: 'minute'
					},
					{
						label: 'Sekundy',
						ratio: 31557600,
						symbol: 's'
					},
					{
						label: 'Milisekundy',
						ratio: 31557600000,
						symbol: 'ms'
					},
					{
						label: 'Mikrosekundy',
						ratio: 31557600000000,
						symbol: 'µs'
					},
					{
						label: 'Nanosekundy',
						ratio: 31557600000000000n,
						symbol: 'ns'
					}
				]
			}
		]
	},
	{
		id: 'przelicznik-informatyczny',
		type: 'przelicznik',
		name: 'informatyczny',
		title: 'Przelicznik informatyczny',
		description:
			'Łatwy w użyciu kalkulator informatyczny, który ułatwi Ci przeliczanie jednostek informatycznych.',
		icon: 'database',
		component: Converter,
		about:
			'Jednostki informatyczne to sposoby pomiaru ilości danych, które można przechowywać lub przesyłać za pomocą urządzeń elektronicznych. Każda z jednostek odpowiada określonej liczbie bitów, czyli najmniejszych elementów informacji.',
		converters: [
			{
				units: [
					{
						label: 'Bity',
						ratio: 8388608,
						symbol: 'bit'
					},
					{
						label: 'Półbajt',
						ratio: 2097152,
						symbol: 'nibble'
					},
					{
						label: 'Kilobity',
						ratio: 8192,
						symbol: 'kilobit'
					},
					{
						label: 'Megabity',
						ratio: 8,
						symbol: 'megabit'
					},
					{
						label: 'Gigabity',
						ratio: 0.0078125,
						symbol: 'gigabit'
					},
					{
						label: 'Terabity',
						ratio: 0.000007629395,
						symbol: 'terabit'
					},
					{
						label: 'Petabity',
						ratio: 7.450581e-9,
						symbol: 'petabit'
					},
					{
						label: 'Eksabity',
						ratio: 7.275958e-12,
						symbol: 'exabit'
					},
					{
						label: 'Bajty',
						ratio: 1048576,
						symbol: 'B'
					},
					{
						label: 'Kilobajty',
						ratio: 1024,
						symbol: 'kB'
					},
					{
						label: 'Megabajty',
						ratio: 1,
						symbol: 'MB'
					},
					{
						label: 'Gigabajty',
						ratio: 0.0009765625,
						symbol: 'GB'
					},
					{
						label: 'Terabajty',
						ratio: 9.536744e-7,
						symbol: 'TB'
					},
					{
						label: 'Petabajty',
						ratio: 9.313227e-10,
						symbol: 'PB'
					},
					{
						label: 'Eksabajty',
						ratio: 9.094948e-13,
						symbol: 'EB'
					}
				]
			}
		]
	},
	{
		id: 'przelicznik-masy',
		type: 'przelicznik',
		name: 'masy',
		title: 'Przelicznik masy',
		description: 'Łatwy w użyciu kalkulator masy, który ułatwi Ci przeliczanie jednostek masy.',
		icon: 'weight',
		component: Converter,
		about:
			'Jednostki masy służą do pomiaru ilości materii zawartej w danym obiekcie. Najczęściej używanymi jednostkami masy są kilogram, gram i miligram. Masa wyraża się ilością materii obecną w danym ciele i jest jednym z fundamentalnych parametrów fizycznych.',
		converters: [
			{
				name: 'Metryczny',
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
						symbol: 'kg'
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
					},
					{
						label: 'Jednostka masy atomowej',
						ratio: 6.022045e26,
						symbol: 'u'
					}
				]
			},
			{
				name: 'Avoirdupois (USA)',
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
				name: 'Troy',
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
				name: 'Japoński',
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
				name: 'Chiński',
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
				name: 'Staroszwedzki',
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
	},

	{
		id: 'przelicznik-objetosci',
		type: 'przelicznik',
		name: 'objętości',
		title: 'Przelicznik objętości',
		description:
			'Łatwy w użyciu kalkulator objętości, który ułatwi Ci przeliczanie jednostek objętości.',
		icon: 'open_in_full',
		component: Converter,
		about:
			'Jednostki objętości to miary używane do określania wielkości przestrzeni zajmowanej przez ciało lub substancję. Najczęściej stosowanymi jednostkami objętości są metr sześcienny, litr i mililitr. Metr sześcienny to objętość sześcianu o boku długości jednego metra.',
		converters: [
			{
				name: 'Metryczny',
				units: [
					{
						label: 'Kilometry sześcienne',
						ratio: 1e-12,
						symbol: 'km³'
					},
					{
						label: 'Metry sześcienne',
						ratio: 0.001,
						symbol: 'm³'
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
				name: 'Brytyjskie jednostki płynów i produktów suchych',
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
				name: 'Amerykańska miara płynów',
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
				name: 'Amerykańskie miary produktów suchych',
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
				name: 'Japoński',
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
				name: 'Amerykańskie jednostki kuchenne',
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
				name: 'Jednostki kuchenne w systemie metrycznym',
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
	},
	{
		id: 'przelicznik-cisnienia',
		type: 'przelicznik',
		name: 'ciśnienia',
		title: 'Przelicznik ciśnienia',
		description:
			'Łatwy w użyciu kalkulator ciśnienia, który ułatwi Ci przeliczanie jednostek ciśnienia.',
		icon: 'tire_repair',
		component: Converter,
		about:
			'Ciśnienie to siła wywierana na jednostkową powierzchnię, równa stosunkowi siły działającej prostopadle do tej powierzchni do wielkości tej powierzchni. W układzie SI jednostką ciśnienia jest paskal (Pa), który odpowiada sile jednego newtona działającej na jeden metr kwadratowy powierzchni',
		converters: [
			{
				name: 'Metryczny',
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
						symbol: 'Pa'
					}
				]
			},
			{
				name: 'Avoirdupois (USA)',
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
				name: 'Woda',
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
				name: 'Atmosfery',
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
				name: 'Rtęć',
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
	},
	{
		id: 'przelicznik-energii',
		type: 'przelicznik',
		name: 'energii',
		title: 'Przelicznik energii',
		description:
			'Łatwy w użyciu kalkulator energii, który ułatwi Ci przeliczanie jednostek energii.',
		icon: 'bolt',
		component: Converter,
		about:
			'Energia to abstrakcyjna koncepcja opisująca zdolność do wykonywania pracy lub powodowania zmiany, wyrażana często w różnych formach, takich jak ciepło, prąd elektryczny, światło czy ruch.',
		converters: [
			{
				name: 'Metryczny',
				units: [
					{
						label: 'Kilowatogodziny',
						ratio: 2.7777777777777776e-7,
						symbol: 'kWh'
					},
					{
						label: 'Megadżule',
						ratio: 0.000001,
						symbol: 'MJ'
					},
					{
						label: 'Kilodżule',
						ratio: 0.001,
						symbol: 'kJ'
					},
					{
						label: 'Dżule',
						ratio: 1,
						symbol: 'J'
					},
					{
						label: 'Elektronowolt',
						ratio: 6241506000000000000n,
						symbol: 'eV'
					}
				]
			},
			{
				name: 'Brytyjski/Amerykański',
				units: [
					{
						label: 'Kwadrat',
						ratio: 9.478134e-19,
						symbol: 'quad'
					},
					{
						label: 'Therm',
						ratio: 9.478134e-9,
						symbol: 'therm'
					},
					{
						label: 'Brytyjska jednostka ciepła',
						ratio: 0.0009478171,
						symbol: 'BTU'
					},
					{
						label: 'Stopo-funt',
						ratio: 0.7375822,
						symbol: 'foot-pound'
					}
				]
			},
			{
				name: 'Inne',
				units: [
					{
						label: 'Kilokalorie',
						ratio: 0.0002388459,
						symbol: 'kcal'
					},
					{
						label: 'Kalorie',
						ratio: 0.2388459,
						symbol: 'cal'
					},
					{
						label: 'Termia',
						ratio: 2.388459e-7,
						symbol: 'th'
					}
				]
			}
		]
	},
	{
		id: 'przelicznik-czestotliwosci',
		type: 'przelicznik',
		name: 'częstotliwości',
		title: 'Przelicznik częstotliwości',
		description:
			'Łatwy w użyciu częstotliwości energii, który ułatwi Ci przeliczanie jednostek częstotliwości.',
		icon: 'radio',
		component: Converter,
		about:
			'Częstotliwość to miara ilości powtórzeń lub oscylacji zjawiska na jednostkę czasu. Najczęściej częstotliwość jest wyrażana w hercach (Hz) i odnosi się do liczby cykli, oscylacji lub zmian w jednostce czasu, na przykład liczby fal dźwiękowych lub drgań elektromagnetycznych w jednej sekundzie.',
		converters: [
			{
				name: 'Częstotliwość',
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
						symbol: 'Hz'
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
				name: 'Okres obrotu',
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
				name: 'Prędkość kątowa',
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
	},
	{
		id: 'przelicznik-gestosci',
		type: 'przelicznik',
		name: 'gęstości',
		title: 'Przelicznik gęstości',
		description:
			'Łatwy w użyciu kalkulator gęstości, który ułatwi Ci przeliczanie jednostek gęstości.',
		icon: 'apps',
		component: Converter,
		about:
			'Gęstość to wielkość fizyczna, która określa masę substancji przypadającą na jednostkę objętości. Innymi słowy, jest to stosunek masy pewnej ilości substancji do zajmowanej przez nią objętości. Jednostką gęstości w układzie SI jest kilogram na metr sześcienny.',
		converters: [
			{
				name: 'Metryczny',
				units: [
					{
						label: 'Gram na centymetr sześcienny',
						ratio: 0.001,
						symbol: 'g/cm³'
					},
					{
						label: 'Kilogram na metr sześcienny',
						ratio: 1,
						symbol: 'kg/m³'
					},
					{
						label: 'Gram na metr sześcienny',
						ratio: 1000,
						symbol: 'g/m³'
					},
					{
						label: 'Miligram na metr sześcienny',
						ratio: 1000000,
						symbol: 'mg/m³'
					}
				]
			},
			{
				name: 'Brytyjski/Amerykański',
				units: [
					{
						label: 'Uncja na galon',
						ratio: 0.1335264712,
						symbol: 'oz/gal'
					},
					{
						label: 'Funt na stopę sześcienną',
						ratio: 0.06242796058,
						symbol: 'lb/ft³'
					},
					{
						label: 'Funt na cal sześcienny',
						ratio: 0.000036127292,
						symbol: 'lb/in³'
					}
				]
			},
			{
				name: 'Pospolite substancje',
				units: [
					{
						label: 'Woda przy 4°C',
						ratio: 0.00100002500062,
						symbol: 'water 4C'
					}
				]
			}
		]
	},

	{
		id: 'przelicznik-mocy',
		type: 'przelicznik',
		name: 'mocy',
		title: 'Przelicznik mocy',
		description: 'Łatwy w użyciu kalkulator mocy, który ułatwi Ci przeliczanie jednostek mocy.',
		icon: 'electrical_services',
		component: Converter,
		about:
			'Moc jest wielkością fizyczną, która informuje o szybkości wykonywania danej pracy. Im szybciej zostanie wykonana praca, tym większa będzie moc. Moc z definicji jest równa stosunkowi wykonanej pracy do czasu, w którym ta została wykonana.',
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
						symbol: 'W'
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
	},
	{
		id: 'przelicznik-predkosci',
		type: 'przelicznik',
		name: 'prędkości',
		description:
			'Łatwy w użyciu kalkulator prędkości, który ułatwi Ci przeliczanie jednostek prędkości.',
		title: 'Przelicznik prędkości',
		icon: 'speed',
		component: Converter,
		about:
			'Prędkość to miara szybkości zmiany położenia w czasie. Jest to wektorowa wielkość fizyczna, która określa, jak szybko i w którym kierunku porusza się obiekt względem punktu odniesienia. Jednostką prędkości w układzie SI jest metr na sekundę.',
		converters: [
			{
				name: 'Metryczny',
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
						symbol: 'km/h'
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
				name: 'Brytyjski/Amerykański',
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
				name: 'Morski',
				units: [
					{
						label: 'Węzeł',
						ratio: 1.9438444924406,
						symbol: 'knot'
					}
				]
			},
			{
				name: 'Inne',
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
	},
	{
		id: 'przelicznik-sily',
		type: 'przelicznik',
		name: 'siły',
		description: 'Łatwy w użyciu kalkulator siły, który ułatwi Ci przeliczanie jednostek siły.',
		title: 'Przelicznik siły',
		icon: 'swap_horiz',
		component: Converter,
		about:
			'Siła to wektorowa wielkość fizyczna będąca miarą oddziaływań fizycznych między ciałami. Jednostką miary siły w układzie SI jest niuton. Nazwa tej jednostki pochodzi od nazwiska angielskiego fizyka Isaaca Newtona.',
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
						symbol: 'N'
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
	},
	{
		id: 'przelicznik-temperatury',
		type: 'przelicznik',
		name: 'temperatury',
		title: 'Przelicznik temperatury',
		description:
			'Łatwy w użyciu kalkulator temperatury, który ułatwi Ci przeliczanie jednostek temperatury.',
		icon: 'thermostat',
		component: Converter,
		converters: [
			{
				units: [
					{
						label: 'Kelwin',
						ratio: 373.15,
						symbol: 'K'
					},
					{
						label: 'Celsjusz',
						ratio: 100,
						symbol: 'C'
					},
					{
						label: 'Fahrenheit',
						ratio: 212,
						symbol: 'F'
					},
					{
						label: 'Reaumur',
						ratio: 80,
						symbol: 'R'
					},
					{
						label: 'Rankine',
						ratio: 671.67,
						symbol: 'rankine'
					}
				]
			}
		]
	},
	{
		id: 'przelicznik-powierzchni',
		type: 'przelicznik',
		name: 'powierzchni',
		description:
			'Łatwy w użyciu kalkulator powierzchni, który ułatwi Ci przeliczanie jednostek pola powierzchni.',
		title: 'Przelicznik powierzchni',
		icon: 'crop_square',
		component: Converter,
		about:
			'Jednostki miary powierzchni to sposoby określania wielkości obszarów na płaszczyźnie lub na powierzchni sferycznej. Służą do pomiaru i porównywania wielkości różnych terenów, takich jak lasy, jeziora, kraje czy kontynenty. Jednostką podstawową miary powierzchni w układzie SI jest metr kwadratowy.',
		converters: [
			{
				name: 'Metryczny',
				units: [
					{
						label: 'Kilometry kwadratowe',
						ratio: 0.000001,
						symbol: 'km²'
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
					},
					{
						label: 'Mikrometry kwadratowe',
						ratio: 1000000000000,
						symbol: 'µm²'
					},
					{
						label: 'Nanometry kwadratowe',
						ratio: 1000000000000000000,
						symbol: 'nm²'
					}
				]
			},
			{
				name: 'Brytyjski/Amerykański',
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
				name: 'Japoński',
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
				name: 'Inne',
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
					}
				]
			},
			{
				name: 'Brazylijski',
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
