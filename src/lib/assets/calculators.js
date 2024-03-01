import Converter from '$lib/components/calculators/Converter/Converter.svelte';
import Percentage from '$lib/components/calculators/Percentage/Percentage.svelte';
import Controllers from '$lib/components/calculators/Controllers/Controllers.svelte';
import { calculateBmi, formatOutputNumber, round } from '../utils';
import { website } from './seo';

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
		markdown:
			'## Jak obliczyć procent z liczby?\n\nAby **obliczyć procent z liczby** najpierw należy zamienić procent na ułamek. Robi się to dzieląc liczbę stojącą obok procenta przez 100. Na przykład 30% jest równe 0,3 (30 / 100 = 0,3). Następnie należy pomnożyć ułamek przez liczbę, z której chcemy **obliczyć procent**. Na przykład jeśli chcemy obliczyć 40% z 180, najpierw zamieniamy 40% na ułamek (40 / 100 = 0,4). Następnie mnożymy 180 przez 0,4, co daje nam 72 (180 * 0,4 = 72). Ta prosta technika pozwala szybko obliczyć procent z liczby nawet w głowie.\n\n\n## Jak dodać procent do liczby?\n\n**Dodawanie procentu do liczby** wcale nie jest trudnym zadaniem. Pierwszym, co musisz zrobić jest zamiana procentu na ułamek dziesiętny. Robi się to dzieląc liczbę znajdującą się obok procenta przez 100. Na przykład 10% jest równe 0,1 (10 / 100 = 0,1). Następnie mnożymy liczbę, do której chcemy dodać procent przez ułamek. Wynik mnożenia jest wartością **procentu z liczby**. Teraz pozostaje nam tylko dodać liczbę podstawową do wyniku naszych obliczeń.\n\nNa przykład: Chcemy dodać 20% do 150. W tym celu zamieniamy 20% na ułamek dziesiętny, dzieląc 20 przez 100, czego wynikiem jest 0,2. Następnie mnożymy 150 przez 0,2, co daje nam 30. Na koniec dodajemy 30 do 150 i otrzymujemy wynik 180.\n\n\n## Obliczanie procentów na kalkulatorze\n\nAby **obliczyć procent z danej liczby** na zwykłym kalkulatorze wystarczy pomnożyć tę liczbę przez liczbę stojącą obok procentu, który chcesz uzyskać, a następnie podzielić przez 100. Na przykład jeśli chcesz obliczyć 20% z 150 powinieneś wykonać następujące działanie: 150 * 20 / 100, którego wynikiem jest liczba 30. Dzięki tej prostej technice, przeliczanie procentów na kalkulatorze staje się jeszcze prostsze.\n\n\n## Kalkulator procentów stworzony z myślą o Tobie\n\nNasz **kalkulator procentów** został stworzony z myślą o wygodnym i wydajnym użytkowaniu, aby **obliczanie procentów** było procesem prostym i przyjemnym. Skupiliśmy się na zaprojektowaniu intuicyjnego i estetycznego interfejsu z myślą o użytkowniku. Kalkulator do procentów na Jednostkowo.pl umożliwia obliczanie procentu z liczby, obliczanie jakim procentem jest liczba A dla liczby B, dodawanie procenta do liczby, odejmowanie procenta od liczby, obliczanie o ile procent liczba A wzrosła lub zmalała w stosunku do liczby B. Dzięki tym funkcjom, **nasz kalkulator procentów sprawdza się świetnie podczas pracy biurowej lub w szkole**.\n\n\n## Obliczanie procentów dla każdego\n\nObliczanie procentów na Jednostkowo.pl jest proste i przyjemne. Jedyne, co musisz zrobić to wpisać dwie liczby do pól tekstowych, a wynik pojawi się od razu. Nasi użytkownicy chwalą nasz kalkulator procentów za niesamowitą prostotę, wygodę w użytkowaniu oraz mnogość funkcji w nim zawartych. **Korzystanie z kalkulatora procentowego znacznie przyspiesza obliczanie procentów**, a co za tym idzie - oszczędza Twój czas. Nie trać czasu ani nerwów na ręczne rozprawianie się z procentami. Skorzystaj z kalkulatora procentów na Jednostkowo.pl.',
		operations: [
			{
				name: 'Obliczanie procentu z danej liczby',
				labels: ['% z', '=', ''],
				formula: (a, b) => (a / 100) * b
			},
			{
				name: 'Jakim procentem jest liczba A dla liczby B',
				labels: ['dla', '=', '%'],
				formula: (a, b) => (a / b) * 100
			},
			{
				name: 'Dodaj procent do liczby',
				labels: ['+', '% =', ''],
				formula: (a, b) => a + (a * b) / 100
			},
			{
				name: 'Odejmij procent od liczby',
				labels: ['-', '% =', ''],
				formula: (a, b) => a - (a * b) / 100
			},
			{
				name: 'O ile procent liczba A wzrosła/zmalała w stosunku do B',
				labels: ['do', 'w/z o', '%'],
				formula: (a, b) => ((b - a) / a) * 100
			}
		]
	},
	{
		id: 'kalkulator-proporcji',
		type: 'kalkulator',
		name: 'proporcji',
		title: 'Kalkulator proporcji',
		description: 'Łatwy w użyciu kalkulator proporcji, który ułatwi Ci obliczanie proporcji.',
		icon: 'shuffle',
		component: Controllers,
		about:
			'Proporcje to relacja między wielkościami, które można porównać ze sobą. Proporcje mogą być wyrażone w różnych sposobach, np. jako ułamek, procent, stosunek czy skala. Proporcje są używane w wielu dziedzinach, np. w matematyce, sztuce, architekturze czy kuchni. Proporcje pomagają nam zrozumieć i opisać zależności między różnymi wielkościami.',
		markdown: `## Jak obliczyć proporcje?\n\nŻeby zacząć **obliczanie proporcji** najpierw trzeba wiedzieć, [czym są proporcje](${website.baseUrl}/blog/proporcje-wyjasnione-jak-obliczyc-proporcje). W skrócie jest to równość dwóch stosunków względem siebie. Mając tę wiedzę, możemy przejść do obliczania proporcji.\n\nAby obliczyć brakującą wartość proporcji, trzeba skorzystać z właściwości, która mówi, że _a_ podzielone przez _b_ jest równe _c_ dzielone przez _d_. Jeśli znasz trzy wartości z tego wzoru, możesz w prosty sposób obliczyć niewiadomą. Na przykład, żeby obliczyć _d_, znając _a_,_b_,_c_, należy ułożyć równanie _d_=_b_*_c_/_a_. Analogicznie, jeśli znasz _b_,_c_ i _d_, możesz obliczyć _a_, korzystając ze wzoru _a_=_d_*_c_/_a_. Żeby **obliczyć proporcję** wiedząc, że _a=10_, _b=20_, _c=50_, możemy skorzystać z powyższego wzoru, podstawiając nasze liczby - _d_ = 20*50/10, czego wynikiem jest _d_ = 100. W ten prosty sposób możemy obliczyć proporcje z pominięciem **kalkulatora proporcji**.\n\n\n## Proporcje online - zastosowanie\n\nObliczanie proporcji online ma wiele zastosowań w codziennym życiu. Kalkulator proporcji umożliwia szybkie **obliczanie proporcji składników** na przykład podczas gotowania. Równie pomocny jest w podczas zakupów, kiedy znamy cenę za kilogram produktu, a potrzebujemy na przykład 1,25 kilograma. Kolejnym aspektem życia, w którym nasz kalkulator jest przydatny są podróże. Załóżmy, że jedziemy na 500 kilometrową wycieczkę w góry. Pierwsze 80 kilometrów przejechaliśmy w 40 minut i chcemy wiedzieć, ile zajmie nam reszta drogi. Układamy następujące równanie: x=420*40/80, którego wynikiem jest 210 minut, czyli 3 godziny i 30 minut.\n\n\n## Do czego służy kalkulator proporcji\n\nNasz **kalkulator proporcji** umożliwia łatwe **obliczanie proporcji** w Twojej przeglądarce. Dzięki niemu, proces ten staje się szybszy i wygodniejszy. Już nigdy nie będziesz musiał szukać kartki, żeby rozrysować na niej schemat proporcji i wyliczać ile wynosi _x_. Wystarczy, że wejdziesz na jednostkowo.pl i wybierzesz **kalkulator proporcji**. Wpisz w pola tekstowe odpowiednie wartości, naciśnij przycisk “Oblicz”, a w pustym polu tekstowym zobaczysz wynik obliczeń. Z myślą o naszych użytkownikach zadbaliśmy, żeby interfejs naszego kalkulatora być jak najbardziej intuicyjny i łatwy w obsłudze.\n\n\n## Kalkulator proporcji stworzony dla Ciebie\n\nNasz **kalkulator proporcji** został zaprojektowany z myślą o użytkowniku. Jest prosty w użyciu oraz intuicyjny, dzięki czemu **obliczanie proporcji** nie jest wyzwaniem. Idealnie nadaje się zarówno do pracy, jak i szkoły. Doskonale zdajemy sobie sprawę, jak bardzo proporcje są ważne w codziennym życiu, dlatego nasze narzędzie jest dostępne zawsze w twoim telefonie lub komputerze. Nie trać czasu na ręczne obliczanie proporcji i narażanie się na błędy rachunkowe. Wybierz kalkulator proporcji na jednostkowo.pl i oszczędź sobie nerwów.`,
		controllers: [
			{
				id: 'a',
				element: 'input',
				attributes: { type: 'number', placeholder: 'A' }
			},
			{
				id: 'c',
				element: 'input',
				attributes: { type: 'number', placeholder: 'C' }
			},
			{
				id: 'icon',
				element: 'icon',
				name: 'equal',
				ignore: true
			},
			{
				id: 'b',
				element: 'input',
				attributes: { type: 'number', placeholder: 'B' }
			},
			{
				id: 'd',
				element: 'input',
				attributes: { type: 'number', placeholder: 'D' }
			}
		],
		formula: (dataset) => {
			const p = {
				a: parseFloat(dataset.a),
				b: parseFloat(dataset.b),
				c: parseFloat(dataset.c),
				d: parseFloat(dataset.d)
			};

			if (!isNaN(p?.a) && !isNaN(p?.b)) {
				if ((!isNaN(p?.c) && isNaN(p?.d)) || (!isNaN(p?.c) && !isNaN(p?.d))) {
					//Jeśli D jest pusty lub wszystkie są uzupełnione, zmień odtatni (D)
					dataset.d = (p?.c * p?.b) / p?.a;
				} else if (!isNaN(p?.d) && isNaN(p?.c)) {
					dataset.c = (p?.a * p?.d) / p?.b;
				}
			} else if (!isNaN(p?.c) && !isNaN(p?.d)) {
				if (!isNaN(p?.a) && isNaN(p?.b)) {
					dataset.b = (p?.a * p?.d) / p?.c;
				} else if (!isNaN(p?.b) && isNaN(p?.a)) {
					dataset.a = (p?.c * p?.b) / p?.d;
				}
			}

			return { dataset, overwrite: true };
		},
		layout: { gridTemplate: '"a icon b" "c icon d" / auto 20px auto' }
	},
	{
		id: 'kalkulator-funkcji-trygonometrycznych',
		type: 'kalkulator',
		name: 'trygonometrii',
		title: 'Kalkulator trygonometrii',
		description:
			'Łatwy w użyciu kalkulator funkcji trygonometrycznych, który ułatwi Ci obliczanie funkcji trygonometrycznych.',
		icon: 'change_history',
		component: Controllers,
		about:
			'Trygonometria jest działem matematyki zajmującym się badaniem związków między kątami i bokami trójkątów. Trygonometria wykorzystuje funkcje trygonometryczne, takie jak sinus, cosinus i tangens, do obliczania wartości kątów i długości boków. Trygonometria ma wiele zastosowań w nauce i technice, na przykład w nawigacji, astronomii, fizyce i inżynierii.',
		controllers: [
			{
				id: 'unit',
				element: 'select',
				label: 'Podaj w jakich jednostkach chcesz wprowadzić kąt',
				options: [
					{ label: 'Stopnie', name: 'deg', default: true },
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
		markdown:
			'## Co to BMI?\n\nBMI (z ang. Body Mass Index), inaczej wskaźnik masy ciała to jedno z narzędzi pozwalających sprawdzić, czy nasze ciało jest w odpowiedniej formie. Określa on stosunek wzrostu osoby badanej do jej masy ciała. **Sprawdzanie BMI** jest bardzo proste i wymaga znania jedynie wzrostu oraz wagi osoby badanej oraz wykonania prostych obliczeń matematycznych. Znajomość swojego **BMI** jest przydatna podczas oceniania zagrożenia otyłością lub niedowagą i jego wczesnemu zapobieganiu. Warto pamiętać, że **wskaźnik BMI** nie zawsze jest adekwatny do stanu zdrowia, dlatego nie należy się nim nadmiernie sugerować.\n\n## Co to kalkulator BMI?\n\nKalkulator BMI to narzędzie, które pozwala na **obliczenie BMI** w prosty i szybki sposób, podając jedynie kilka informacji o swoim ciele. W skrócie pomaga sprawdzić, czy nasza waga jest adekwatna do wzrostu. Jest to istotna informacja, ponieważ za wysoki lub zbyt niski **wskaźnik BMI** mogą świadczyć o problemach zdrowotnych, takich jak nadwaga lub niedowaga. Mimo, że BMI jest przydatnym wskaźnikiem, istnieją sytuacje, w których nie sprawdza się najlepiej. Na przykład nie sprawdzi się on u osób z rozwiniętą tkanką mięśniową, ponieważ jest ona tak samo traktowana jak tkanka tłuszczowa.\n\n## Jak obliczyć BMI?\n\n**Obliczanie BMI** pomijając kalkulator BMI wcale nie jest trudnym zadaniem. W najprostszej wersji wystarczy znać swój wzrost i wagę. Wzór na BMI wygląda następująco: BMI = masa / (wzrost)<sup>2</sup>. Masę podajemy w kilogramach, a wzrost w metrach. Na przykład dla osoby ważącej 80 kilogramów i mierzącej 1,8 metra, **wskaźnik BMI** będzie wynosił: 80 / (1,8)<sup>2</sup> = 24,69, co jest klasyfikowane jako górna granica wagi prawidłowej. Jak widać, obliczanie BMI samemu nie jest wyzwaniem, jak niektórym mogłoby się wydawać. **Oblicz BMI** na naszym **kalkulatorze BMI** i sprawdź, czy twoja waga jest adekwatna do wzrostu.\n\n## Klasyfikacja BMI\n\nObliczenie BMi to dopiero połowa sukcesu. Drugą częścią jest interpretacja wyników. Sama liczba nic nam nie mówi, dlatego stworzono następujące klasyfikacje wyników:\n\n* &lt;16,0 (wygłodzenie)\n* 16,0–16,9 (wychudzenie)\n* 17,0–18,5 (niedowaga)\n* 18,5–24,9 (waga prawidłowa)\n* 25,0–29,9 (nadwaga)\n* 30,0–34,9 (otyłość I stopnia)\n* 35,0–39,9 (otyłość II stopnia)\n* ≥40 (otyłość III stopnia)\n\nJak widać **klasyfikacja BMI** jest dość obszerna. Całe szczęście nasz kalkulator BMI jest wyposażony w graficzny oraz tekstowy wskaźnik BMI, dzięki czemu interpretacja BMI staje się jeszcze łatwiejsza.',
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
			delete dataset.error;

			if (!dataset?.height || !dataset.weight) return { error: 'Podaj wzrost i masę ciała.' };
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
		id: 'kalkulator-pitagorasa',
		type: 'kalkulator',
		name: 'Pitagorasa',
		title: 'Kalkulator Pitagorasa',
		description: 'Łatwy w użyciu kalkulator Pitagorasa, który ułatwi Ci obliczanie Pitagorasa.',
		icon: 'details',
		component: Controllers,
		markdown:
			'## Wzór na twierdzenie Pitagorasa\n\n**Twierdzenie Pitagorasa** posiada bardzo prosty wzór: _a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup>_, gdzie _a_ jest długością pierwszej przyprostokątnej, _b_ jest równe długości drugiej przyprostokątnej, a _c_ jest długością przeciwprostokątnej. **Czym jest przyprostokątna, a czym przeciwprostokątna?** Przyprostokątną określamy bok trójkąta, który przylega do kąta prostego, a przeciwprostokątną nazywamy bok, który leży naprzeciw kąta prostego. **Wzór na Pitagorasa** można stosować zawsze, kiedy znamy dwie z trzech wartości, niekoniecznie _a_ i _b_. Na przykład znając _a_ i _c_, możemy obliczyć długość boku _b_. Wystarczy przekształcić wzór w następujący sposób: _b<sup>2</sup> = c<sup>2</sup> - a<sup>2</sup>_, a następnie obliczyć pierwiastek z _b_. Przydatnym narzędziem do obliczania Pitagorasa jest **kalkulator Pitagorasa**, który znacznie przyspiesza ten proces.\n\n## Twierdzenie Pitagorasa - dlaczego działa?\n\nTwierdzenie Pitagorasa na pierwszy rzut oka może wydawać się nieco nieintuicyjne. W końcu dlaczego kwadrat długości dwóch przyprostokątnych ma być równy kwadratowi długości przeciwprostokątnej? Jednak da się to przedstawić w dużo bardziej zrozumiały sposób. **Obliczanie twierdzenia Pitagorasa** staje się znacznie łatwiejsze, kiedy zrozumiemy, że jest one prostym założeniem mówiącym, że jeśli stworzymy dwa kwadraty o długościach boków odpowiadającym długościom przyprostokątnych, to suma ich pól powierzchni będzie równa polu powierzchni kwadratu o długości boku równej długości przeciwprostokątnej. Właśnie dlatego stosując twierdzenie Pitagorasa, potęgujemy długości przyprostokątnych, a następnie pierwiastkujemy długość przeciwprostokątnej.\n\n## Obliczanie pitagorasa na zwykłym kalkulatorze\n\nCzęsto jedyne co mamy pod ręką podczas **obliczania twierdzenia Pitagorasa** jest prosty kalkulator, który nie posiada takich funkcji, jak potęgowanie, czy pierwiastkowanie. W takiej sytuacji jedyne co nam pozostaje to zdanie się na własny spryt.\n\nPierwszą przeszkodą, na którą możemy natrafić jest potęgowanie. Jeśli nasz kalkulator nie posiada takiej opcji, wystarczy pomnożyć liczbę przez samą siebie. Na przykład, żeby obliczyć potęgę stopnia drugiego liczby 5, wystarczy pomnożyć 5 przez samą siebie, czego wynikiem jest 25 (5*5=25).\n\nDrugim problemem, który kryje **obliczanie Pitagorasa** jest pierwiastkowanie. Tutaj już nie jest tak łatwo, dlatego że nie istnieje prosty sposób na pierwiastkowanie. Warto przygotować się zawczasu i poznać najpopularniejsze pierwiastki, czyli sprawdzić potęgi liczb od 1 do 20. Jeśli jednak obliczamy Pitagorasa bez tej wiedzy, jedyne co nam pozostaje to sprawdzanie po kolei, potęga której liczby jest najbliżej liczby pod pierwiastkiem. Na przykład chcąc obliczyć pierwiastek z liczby 361, najpierw sprawdzamy ile wynosi potęga na przykład liczby 12. Jest to 144, więc wiemy, że powinniśmy szukać liczby większej. Wybieramy 17, ale 289 to nadal za mało. Bierzemy więc 19 i trafiliśmy. 19 do kwadratu to dokładnie 361.\n\nDzięki tym prostym sztuczkom, **obliczanie Pitagorasa** już nigdy nie będzie wyzwaniem.\n\n## Kalkulator Pitagorasa do szkoły i pracy\n\nNasz **kalkulator Pitagorasa** stworzyliśmy z myślą o wszystkich, dla których ręczne obliczanie Pitagorasa jest niepotrzebnym wysiłkiem, niezależnie czy w szkole czy w pracy. Mimo, że **wzór na Pitagorasa** nie jest skomplikowany, łatwo popełnić błędy rachunkowe podczas jego obliczania. Potęgowanie i pierwiastkowanie często wymaga nieproporcjonalnie dużo czasu, który można przeznaczyć na przyjemniejsze czynności. Żeby obliczyć Pitagorasa na naszym kalkulatorze wystarczy wpisać długości dwóch boków w pola tekstowe, a w trzecim pojawi się szukana wartość. Nie pozwól, sobie na stratę czasu - poznaj **kalkulator twierdzenia Pitagorasa** na Jednostkowo.pl.',
		controllers: [
			{
				id: 'a',
				defaultValue: '',
				element: 'input',
				label: 'Długość boku A (przyprostokątna)',
				attributes: { type: 'number', placeholder: 'Podaj długość boku A' }
			},
			{
				id: 'b',
				defaultValue: '',
				element: 'input',
				label: 'Długość boku B (przyprostokątna)',
				attributes: { type: 'number', placeholder: 'Podaj długość boku B' }
			},
			{
				id: 'c',
				element: 'input',
				defaultValue: '',
				label: 'Długość boku C (przeciwprostokątna)',
				attributes: { type: 'number', placeholder: 'Podaj długość boku C' }
			}
		],
		formula: (dataset) => {
			delete dataset.error;

			if (
				(dataset?.a !== '' && dataset.b !== '') ||
				(dataset?.a !== '' && dataset.b !== '' && dataset.c !== '')
			) {
				// Jeśli C jest pusty lub wszystkie są uzupełnione, oblicz C
				dataset.c = round(Math.sqrt(parseFloat(dataset.a) ** 2 + parseFloat(dataset.b) ** 2), 5);
			} else if (dataset.b !== '' && dataset.c !== '') {
				// Jeśli b i c są dostępne, oblicz a
				dataset.a = round(Math.sqrt(parseFloat(dataset.c) ** 2 - parseFloat(dataset.b) ** 2), 5);
			} else if (dataset.a !== '' && dataset.c !== '') {
				// Jeśli a i c są dostępne, oblicz b
				dataset.b = round(Math.sqrt(parseFloat(dataset.c) ** 2 - parseFloat(dataset.a) ** 2), 5);
			} else {
				// Nieprawidłowy zestaw wartości
				return { error: 'Podaj długości dwóch boków' };
			}

			return { dataset, overwrite: true };
		}
	},
	{
		id: 'kalkulator-procentu-składanego',
		type: 'kalkulator',
		name: 'procentu składanego',
		title: 'Kalkulator procentu składanego',
		description:
			'Łatwy w użyciu kalkulator procentu składanego, który ułatwi Ci obliczanie procentu składanego.',
		icon: 'percent',
		component: Controllers,
		controllers: [
			{
				id: 'ammount',
				defaultValue: '',
				element: 'input',
				label: 'Kapitał początkowy',
				attributes: { type: 'number', placeholder: 'Podaj kapitał początkowy' }
			},

			{
				id: 'periods',
				defaultValue: '',
				element: 'input',
				label: 'Okres oszczędzania',
				attributes: { type: 'number', placeholder: 'Podaj okres oszczędzania' }
			},
			{
				id: 'periodsType',
				element: 'select',
				label: 'Typ okresu',
				options: [
					{ label: 'Lata', name: '1' },
					{ label: 'Miesiące', name: '12', default: true }
				]
			},
			{
				id: 'interestRate',
				element: 'input',
				defaultValue: '',
				label: 'Oprocentowanie',
				attributes: { type: 'number', placeholder: 'Podaj oprocentowanie' }
			},
			{
				id: 'capitalisation',
				element: 'select',
				label: 'Kapitalizacja odsetek',
				options: [
					{ label: 'Rocznie', name: '1' },
					{ label: 'Kwartalnie', name: '4' },
					{ label: 'Miesięcznie', name: '12', default: true },
					{ label: 'Codziennie', name: '365' }
				]
			}
		],
		formula: (dataset) => {
			const { ammount, periods, periodsType, interestRate, capitalisation } = dataset;
			// Konwersja stopy procentowej z procent na ułamek
			const r = interestRate / 100;
			// Przeliczanie okresów na lata, jeśli potrzeba
			const t = periods / parseInt(periodsType);
			// Ustalenie liczby kapitalizacji odsetek w roku
			let n = parseInt(capitalisation);

			let valueAtEndOfEachPeriod = [];
			let currentAmount = ammount;
			const totalPeriods = n * t;

			for (let i = 0; i < totalPeriods; i++) {
				currentAmount *= 1 + r / n;
				valueAtEndOfEachPeriod.push(round(currentAmount, 2));
			}

			const finalAmount = round(currentAmount, 2);
			const profit = round(finalAmount - ammount, 2);

			return {
				type: 'chart',
				description: `Na koniec okresu oszczędzania, stan konta będzie wynosił
					<b>${formatOutputNumber(finalAmount)}zł</b>.
					Całkowity zysk wyniesie <b>${formatOutputNumber(profit)}zł</b>.`,
				config: {
					type: 'line',
					data: {
						labels: Array.from({ length: totalPeriods + 1 }, (_, i) => `Okres ${i}`),
						datasets: [
							{
								label: 'Kwota',
								data: [ammount, ...valueAtEndOfEachPeriod],
								borderColor: website.primaryColor,
								stepped: true,
								pointStyle: 'circle',
								pointRadius: 4,
								pointHoverRadius: 8
							}
						]
					},
					options: {
						responsive: true,
						maintainAspectRatio: false,
						plugins: {
							legend: {
								display: false
							}
						},

						scales: {
							x: {
								grid: {
									display: false
								},
								ticks: {
									display: false
								}
							}
						}
					}
				}
			};
		},
		layout: {
			gridTemplate:
				'"ammount ammount" "periods periodsType" "interestRate interestRate" "capitalisation capitalisation" "paymentAmount paymentFrequency" / 1fr 50%'
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
						symbol: 'day',
						default: true
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
						symbol: 'megabit',
						default: true
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
					},
					{
						label: 'Jednostka masy atomowej',
						ratio: 6.022045e26,
						symbol: 'u'
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
				category: 'Metryczny',
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
						symbol: 'J',
						default: true
					},
					{
						label: 'Elektronowolt',
						ratio: 6241506000000000000n,
						symbol: 'eV'
					}
				]
			},
			{
				category: 'Brytyjski/Amerykański',
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
				category: 'Inne',
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
				category: 'Metryczny',
				units: [
					{
						label: 'Gram na centymetr sześcienny',
						ratio: 0.001,
						symbol: 'g/cm³'
					},
					{
						label: 'Kilogram na metr sześcienny',
						ratio: 1,
						symbol: 'kg/m³',
						default: true
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
				category: 'Brytyjski/Amerykański',
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
				category: 'Pospolite substancje',
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
				category: 'Metryczny',
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
						symbol: 'km/h',
						default: true
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
				category: 'Brytyjski/Amerykański',
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
				category: 'Morski',
				units: [
					{
						label: 'Węzeł',
						ratio: 1.9438444924406,
						symbol: 'knot'
					}
				]
			},
			{
				category: 'Inne',
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
	},
	/* {
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
						default: true,
						label: 'Celsjusz',
						ratio: 100,
						symbol: 'C',
						default: true
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
	}, */
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
					},
					{
						label: 'Mikrometry kwadratowe',
						ratio: 1000000000000,
						symbol: 'µm²'
					},
					{
						label: 'Nanometry kwadratowe',
						ratio: 1000000000000000000n,
						symbol: 'nm²'
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
