import Converter from '$lib/components/calculators/Converter/Converter.svelte';
import Percentage from '$lib/components/calculators/Percentage/Percentage.svelte';
import Controllers from '$lib/components/calculators/Controllers/Controllers.svelte';
import { calculateBmi, formatOutputNumber, round } from '../utils';
import quizzes from './quizzes.json';
import { website } from './seo';

export const calculators = [
	{
		id: 'kalkulator-procentow',
		type: 'kalkulator',
		name: 'procentów',
		title: 'Kalkulator procentów',
		icon: 'percent',
		component: Percentage,
		description:
			'Kalkulator procentowy to wszechstronne narzędzie stworzone, aby ułatwić i przyspieszyć rozwiązywanie różnych zadań matematycznych związanych z procentami. Kalkulator oferuje szereg funkcji, umożliwiając m.in. obliczanie procentu z danej liczby, obliczanie, jakim procentem jest liczba A dla liczby B oraz dodawanie i odejmowanie procentów. Skorzystaj z kalkulatora procentów, aby w łatwy sposób obliczyć procenty,  uzyskując precyzyjne i wiarygodne wyniki w ciągu kilku sekund.',
		about:
			'Procenty to sposób wyrażania części całości. Można je zrozumieć jako ułamki, w których mianownik jest zawsze równy 100. Na przykład, jeśli mamy 25 procent czegoś, to znaczy, że mamy 25 części na 100 możliwych. Procenty są używane w wielu sytuacjach, na przykład w matematyce, finansach, statystyce czy ocenianiu.',
		markdown: `**Procenty towarzyszą nam w życiu codziennym czy tego chcemy, czy nie. Umiejętność ich szybkiego obliczania pozwala na zaoszczędzenie czasu i często pieniędzy. Nikt z nas przecież nie chce popełnić błędu podczas porównywania cen produktów po obniżce, a co za tym idzie przepłacać. Szybkie przeliczanie procentów przydaje się również uczniom w szkole, dla których jest to podstawowa umiejętność, towarzysząca przez całą ścieżkę edukacji. Po przeczytaniu tego artykułu już nigdy nie będziesz miał problemu z obliczaniem procentów!**\n\n## **Jak obliczyć procent z liczby?**\n\nWyznaczanie procentu z liczby jest najbardziej podstawową operacją procentową. Jest to nic innego, jak wyciągnięcie określonej części z całości. To niezwykle przydatna umiejętność, szczególnie podczas określania kwoty promocji lub podatku, który musimy zapłacić.\n\nSposobów na **obliczenie procentu z danej liczby** jest wiele, ale w tym artykule przedstawimy Ci dwa najłatwiejsze i najbardziej popularne, które z pewnością sprawdzą się w codziennym życiu oraz szkole.\n\n ### Metoda 1 \nPierwszy sposób polega na podzieleniu liczby przez 100 i pomnożeniu wyniku przez wartość procentu. Dokładniej mówiąc, wyznaczamy 1% z liczby i mnożymy go przez procent, jaki chcemy uzyskać.\n\n**Przykład**: Załóżmy, że chcemy kupić nowy telewizor, który kosztuje 3500 złotych i jest objęty promocją w wysokości 15%. Na początku dzielimy 3500 na 100, czego wynikiem jest 35 — ta liczba odpowiada 1% z 3500. Następnie mnożymy 35 przez liczbę stojącą obok znaku procenta — 35 razy 15 równa się 525. Dzięki tym prostym wyliczeniom wiemy, że kwota promocji wynosi 525 złotych.\n\n![Operacje matematyczne: Pierwsza operacja to 3500 podzielone przez 100, co daje wynik 35. Druga operacja to 35 pomnożone przez 15, co daje wynik 525.](${website.baseUrl}/images/percentage-calculator-1.svg "")\n\n ### Metoda 2\n Drugim sposobem jest zamiana procentu na ułamek dziesiętny, przez który następnie mnożymy liczbę podstawową. Jak pewnie wiecie, **procent jest tak naprawdę ułamkiem o mianowniku 100**, więc łatwo można zamienić go na ułamek dziesiętny.  ta jest szczególnie przydatna podczas korzystania z kalkulatora, na którym nie zawsze możemy **obliczyć procent z danej liczby** przy pomocy jednego przycisku.\n\n**Przykład**: Tym razem przyjmijmy, że kupujemy książkę o wartości 35 złotych, na którą został nałożony rabat w wartości 20%. Pierwszą rzeczą, którą musimy zrobić, jest zamiana 20% na ułamek dziesiętny. W tym celu dzielimy 20 przez 100 (zawsze dzielimy przez 100, pamiętając, że procent jest ułamkiem o mianowniku 100), czego wynikiem jest 0,2. Następnie mnożymy 0,2 przez cenę naszej książki (0,2 * 35) i otrzymujemy wynik 7. Teraz wiemy, że książka została przeceniona o 7 złotych.\n\n![Operacje matematyczne: Pierwsza operacja to 20 podzielone przez 100, co daje wynik 0,2. Druga operacja to 0,2 pomnożone przez 35, co daje wynik 7.](${website.baseUrl}/images/percentage-calculator-2.svg "")\n\n## **Jak obliczyć, jakim procentem jednej liczby jest druga liczba?**\n\nSprawdzanie, **jakim procentem danej liczby jest druga,** szczególnie przydaje się na egzaminach, kiedy chcemy zamienić liczbę zdobytych punktów na wynik procentowy. Jest to nic innego, jak obliczenie, jaką częścią całości jest nasz wynik, a następnie zamiana tego ułamka na procenty. Aby to zrobić, dzielimy liczbę, którą chcemy porównać, przez tę, do której porównujemy, a następnie mnożymy przez 100%.\n\n![Wzór matematyczny. Widnieje na nim ułamek o liczniku A i mianowniku B, mnożony przez 100%.](${website.baseUrl}/images/percentage-calculator-3.svg "")\n\n**Przykład**: Załóżmy, że na egzaminie z matematyki zdobyliśmy 30 punktów na 40 możliwych. Aby dowiedzieć się, jaki uzyskaliśmy wynik w procentach, tworzymy ułamek, który w liczniku ma 30 (liczba uzyskanych punktów), a w mianowniku 40 (maksymalna liczba punktów). Następnie mnożymy go przez 100% i otrzymujemy wynik 75%. Dzięki temu wiemy, że napisaliśmy egzamin na 75%.\n\n![Operacja matematyczna: Ułamek o liczniku 30 i mianowniku 40 jest pomnożony przez 100%, co daje wynik 75%.](${website.baseUrl}/images/percentage-calculator-4.svg "")\n\n## **Jak dodać procent do liczby?**\n\n**Dodawanie procentu do liczby** to niezwykle przydatna umiejętność, szczególnie przydatna podczas naliczania podatków np. VAT. To bardzo prosty proces — jedyne, co musisz zrobić to **obliczyć procent** i dodać go do liczby podstawowej. Jednak istnieje pewien sposób, który sprawia, że dodawanie procentu do liczby staje się jeszcze szybsze.\n\n ### Metoda 1\n Pierwszym sposób jest najbardziej podstawowy. Polega on na wyciągnięciu procentu z liczby, a następnie dodaniu go do wartości bazowej. Najprawdopodobniej poznałeś tę metodę już w szkole podstawowej, bo jest najprostsza, ale jak dowiesz się z dalszej części artykułu — nie najszybsza.\n\n**Przykład**: Marek pracuje w pewnej firmie technologicznej, gdzie dotychczas zarabiał 9000 złotych miesięcznie. Szef docenił jego ciężką pracę i udzielił mu podwyżkę w wysokości 10%. Ile zarabia Marek po podwyżce? Pierwszym co musimy zrobić, jest obliczenie kwoty podwyżki. W tym celu określamy, ile wynosi 10% z 9000. Stosując jedną z wcześniej poznanych metod, wiemy, że jest to 900. Pozostaje nam tylko dodać 900 do 9000 i już wiemy, że Marek po podwyżce zarabia 9900 złotych miesięcznie.\n\n![Operacje matematyczne: Pierwsza operacja to 9000 pomnożone przez 0,1, co daje wynik 900. Druga operacja to 9000 plus 900, co daje wynik 9900.](${website.baseUrl}/images/percentage-calculator-5.svg "")\n\n ### Metoda 2\n Drugi sposób jest niezwykle szybki, ale wymaga nieco wprawy. Korzysta on z właściwości, mówiącej, że **każdy procent można przedstawić w postaci ułamka**. Skoro wiemy, że nasza kwota początkowa to 100%, możemy ją też zapisać w postaci ułamka dziesiętnego jako 1. Następnie procent, który chcemy dodać do kwoty podstawowej w postaci ułamka dziesiętnego, dodajemy do 1 i mnożymy ją przez powstały wynik.\n\n**Przykład**: Marta pracuje w sklepie spożywczym, gdzie dotychczas zarabiała 5000 złotych miesięcznie. Szefowa doceniła jej pracę i udzieliła podwyżki w wysokości 20%. Ile zarabia Marta po podwyżce? Na początku zamieniamy 20% na ułamek dziesiętny — 0,2. Następnie dodajemy do niego 1 i otrzymujemy 1,2. Na koniec mnożymy 5000 (kwotę przed podwyżką) przez 1,2 i otrzymujemy 6000 złotych. Dzięki temu wiemy, że Marta po podwyżce zarabia 6000 złotych.\n\n![Operacje matematyczne: Pierwsza operacja to 20 podzielone przez 100, co daje wynik 0,2. Następnie 0,2 jest dodawane do 1, co daje wynik 1,2. Ostatecznie, 5000 jest pomnożone przez 1,2, co daje wynik 6000.](${website.baseUrl}/images/percentage-calculator-6.svg "")\n\n## **Jak odjąć procent od liczby?**\n\n**Odejmowanie procentu od liczby** jest bardzo podobne do dodawania, a co za tym idzie — proste. Jedyne, co musimy zrobić to obliczyć procent z liczby, a następnie jego wartość odjąć od kwoty początkowej. Najbardziej powszechną sytuacją, kiedy odejmowanie procentu od kwoty się przydaje, jest obliczanie zniżek i rabatów oferowanych przez sprzedawców.\n\n**Przykład**: Aneta chce kupić nową torebkę, która kosztuje 300 złotych, ale została przeceniona o 15%. Ile kosztuje torebka po przecenie? Na początku obliczamy 15% z 300 przy użyciu jednej z wyżej wspomnianych metod, czego wynikiem jest 45. Następnie odejmujemy 45 od 300 i już wiemy, że torebka po obniżce kosztuje 255 złotych.\n\n![Operacje matematyczne: Pierwsza operacja to 300 pomnożone przez 0,15, co daje wynik 45. Następnie 45 jest odejmowane od 300, co daje wynik 255.](${website.baseUrl}/images/percentage-calculator-7.svg "")\n\n## **Jak sprawdzić, o ile procent liczba się zwiększyła lub zmalała?**\n\nSprawdzanie **o ile procent liczba jest większa lub mniejsza od drugiej** jest bardzo przydatną umiejętnością zarówno w statystyce, jak i handlu, kiedy chcemy sprawdzić, w jaki sposób zmieniają się ceny produktów na przestrzeni czasu. Poniżej przedstawiono dwa sposoby na porównywanie procentowe liczb, wraz ze wzorami.\n\n### **Jak sprawdzić o ile procent liczba wzrosła?**\nAby sprawdzić, **o ile procent liczba jest większa od drugiej**, musimy skorzystać z poniższego wzoru. Jako A podajemy liczbę większą (którą chcemy porównać), a B to liczba mniejsza (do której porównujemy). Wzór ten oblicza różnicę między obiema liczbami, następnie dzieli ją przez B, aby uzyskać stosunek zmiany do wartości odniesienia, a na koniec zamienia wynik na postać procentową.\n\n![Wzór matematyczny: Ułamek o liczniku A odjąć B i mianowniku B, pomnożony przez 100%](${website.baseUrl}/images/percentage-calculator-8.svg "")\n\n**Przykład**: Cena akcji pewnej spółki wzrosła z 200 złotych do 250 złotych. O ile procent wzrosła cena? Tak więc na początku podstawiamy wartości pod wzór — 250 złotych to A, 200 złotych to B. Następnie wykonujemy odejmowanie: 250-200=50. Później dzielimy 50 przez B, czyli 200, czego wynikiem jest 0,25. Na koniec zamieniamy wynik na wartość procentową, mnożąc 0,25 przez 100%, otrzymując wynik 25%. Teraz już wiemy, że cena akcji wzrosła o 25%.\n\n![Operacja matematyczna: Ułamek o liczniku 250 odjąć 200 oraz mianowniku równym 200 jest pomnożony przez 100%, co daje wynik 25%.](${website.baseUrl}/images/percentage-calculator-9.svg "")\n\n### **Jak sprawdzić o ile procent liczba zmalała?**\n\nSprawdzając, **o ile procent liczba jest mniejsza od drugiej,** korzystamy z podobnego wzoru, jednak zamieniamy kolejnością A i B. W tym przypadku odejmujemy A od B, czyli wartość większą od mniejszej. Dzięki temu uzyskamy wynik ujemny, reprezentujący spadek.\n\n![Wzór matematyczny: Ułamek o liczniku B odjąć A i mianowniku A, pomnożony przez 100%](${website.baseUrl}/images/percentage-calculator-10.svg "")\n\n**Przykład**: Tym razem załóżmy, że spółce się nie powiodło i jej akcje spadły z 250 na 200 złotych, Podstawiamy pod B liczbę 200, a pod A liczbę 250, czego wynikiem odejmowania jest -50. Następnie dzielimy różnicę przez 250 i otrzymujemy wynik -0,2. Na koniec mnożymy -0,2 przez 100% i otrzymujemy -20%. Teraz wiemy, że akcje spółki spadły o 20%.\n\n![Operacja matematyczna: Ułamek o liczniku 200 odjąć 250 oraz mianowniku równym 250 jest pomnożony przez 100%, co daje wynik -20%.](${website.baseUrl}/images/percentage-calculator-11.svg "") \n\n ## **Wypróbuj swoją wiedzę - zadania z procentów**\n Wiedza teoretyczna jest ważna, ale dużo bardziej wartościowe jest praktykowanie jej praktykowanie. Znając samą teorię jazdy na rowerze, nie będziemy w stanie przejechać choćby dwóch metrów. Dopiero, gdy zaczniemy to praktykować, nauczymy się jazdy na rowerze. Tak samo jest z matematyką. **Rozwiązując różne rodzaje zadań z procentów, nabędziemy niezbędnego doświadczenia**, a co za tym idzie — będziemy w tym lepsi. Zadania z treścią mają jeszcze jedną zaletę. Wymagają więcej zaangażowania, analizy i umiejętności wyciągania wniosków. Wiedząc o tym, stworzyliśmy autorski system, generujący ciekawe zadania z treścią z zakresu procentów. Nie musisz już więcej nudzić się rozwiązując przykłady, takie jak "Ile to jest 10% ze 100?". Zamiast tego skorzystaj z kalkulatora do obliczania procentów Jednostkowo.pl i rozwiązuj użyteczne zadania, które dobrze przygotują Cię do testu.\n\n ## Podsumowanie\n Podsumowując, **przeliczanie procentów** wcale nie jest takie trudne. Dzięki poznanym dziś prostym metodom, każdy może szybko i skutecznie wyliczyć procent z danej liczby, dodać lub odjąć procent od liczby, a także sprawdzić, o ile procent liczba wzrosła lub zmalała. Niezależnie od sytuacji, której będziesz stawiał czoła, ta wiedza znacznie ułatwi Ci jej sprawne rozwiązanie, a jeśli wzbogacisz ją jeszcze o praktykę, staniesz się prawdziwym mistrzem procentów. Po przeczytaniu tego tekstu, jesteś już gotowy do podejmowania wyzwań życia codziennego, związanych z procentami!`,
		meta: {
			description:
				'Skorzystaj z kalkulatora procentów online, aby obliczyć procent z liczby, różnicę procentową, dodać i odjąć procent od liczby. Rozwiązuj zadania z procentów.'
		},
		operations: [
			{
				id: 'percentFromNumber',
				name: 'Obliczanie procentu z danej liczby',
				labels: ['% z', '=', ''],
				formula: ({ a, b }) => ({ result: (a / 100) * b })
			},
			{
				id: 'atobPercent',
				name: 'Jakim procentem jest liczba A dla liczby B',
				labels: ['dla', '=', '%'],
				formula: ({ a, b }) => ({ result: (a / b) * 100 })
			},
			{
				id: 'addPercent',
				name: 'Dodaj procent do liczby',
				labels: ['+', '% =', ''],
				formula: ({ a, b }) => ({ result: a + (a * b) / 100 })
			},
			{
				id: 'subtractPercent',
				name: 'Odejmij procent od liczby',
				labels: ['-', '% =', ''],
				formula: ({ a, b }) => ({ result: a - (a * b) / 100 })
			},
			{
				id: 'increaseDecreaseAtob',
				name: 'O ile procent liczba A wzrosła/zmalała w stosunku do B',
				labels: ['do', 'w/z o', '%'],
				formula: ({ a, b }) => ({ result: ((b - a) / a) * 100 })
			}
		],
		quiz: quizzes.percentage
	},
	// https://drive.google.com/file/d/1_HA1eN9v2j7iwUGpKOpntpxTb-Hqh06l/view?usp=sharing
	{
		id: 'kalkulator-proporcji',
		type: 'kalkulator',
		name: 'proporcji',
		title: 'Kalkulator proporcji',
		icon: 'shuffle',
		component: Controllers,
		description:
			'Z kalkulatorem proporcji online łatwo obliczysz nawet skomplikowane dane w ciągu kilku sekund. Kalkulator proporcji online to narzędzie, dzięki któremu przeliczysz wartość bez wysiłku. Chcesz obliczyć proporcje? Wystarczy w odpowiednie pole wpisać liczbę i kliknąć "oblicz", by w drugim zobaczyć od razu prawidłowy wynik. Czy to procent, czy równanie, czy proporcja, nasz kalkulator błyskawicznie pomoże Ci rozwiązać problem!',
		about:
			'Proporcje to relacja między wielkościami, które można porównać ze sobą. Proporcje mogą być wyrażone w różnych sposobach, np. jako ułamek, procent, stosunek czy skala. Proporcje są używane w wielu dziedzinach, np. w matematyce, sztuce, architekturze czy kuchni. Proporcje pomagają nam zrozumieć i opisać zależności między różnymi wielkościami.',
		markdown: `## Jak obliczyć proporcje?\n\nŻeby zacząć **obliczanie proporcji** najpierw trzeba wiedzieć, [czym są proporcje](${website.baseUrl}/blog/proporcje-wyjasnione-jak-obliczyc-proporcje). W skrócie jest to równość dwóch stosunków względem siebie. Mając tę wiedzę, możemy przejść do obliczania proporcji.\n\nAby obliczyć brakującą wartość proporcji, trzeba skorzystać z właściwości, która mówi, że _a_ podzielone przez _b_ jest równe _c_ dzielone przez _d_. Jeśli znasz trzy wartości z tego wzoru, możesz w prosty sposób obliczyć niewiadomą. Na przykład, żeby obliczyć _d_, znając _a_,_b_,_c_, należy ułożyć równanie _d_=_b_*_c_/_a_. Analogicznie, jeśli znasz _b_,_c_ i _d_, możesz obliczyć _a_, korzystając ze wzoru _a_=_d_*_c_/_a_. Żeby **obliczyć proporcję** wiedząc, że _a=10_, _b=20_, _c=50_, możemy skorzystać z powyższego wzoru, podstawiając nasze liczby - _d_ = 20*50/10, czego wynikiem jest _d_ = 100. W ten prosty sposób możemy obliczyć proporcje z pominięciem **kalkulatora proporcji**.\n\n\n## Proporcje online - zastosowanie\n\nObliczanie proporcji online ma wiele zastosowań w codziennym życiu. Kalkulator proporcji umożliwia szybkie **obliczanie proporcji składników** na przykład podczas gotowania. Równie pomocny jest w podczas zakupów, kiedy znamy cenę za kilogram produktu, a potrzebujemy na przykład 1,25 kilograma. Kolejnym aspektem życia, w którym nasz kalkulator jest przydatny są podróże. Załóżmy, że jedziemy na 500 kilometrową wycieczkę w góry. Pierwsze 80 kilometrów przejechaliśmy w 40 minut i chcemy wiedzieć, ile zajmie nam reszta drogi. Układamy następujące równanie: x=420*40/80, którego wynikiem jest 210 minut, czyli 3 godziny i 30 minut.\n\n\n## Do czego służy kalkulator proporcji\n\nNasz **kalkulator proporcji** umożliwia łatwe **obliczanie proporcji** w Twojej przeglądarce. Dzięki niemu, proces ten staje się szybszy i wygodniejszy. Już nigdy nie będziesz musiał szukać kartki, żeby rozrysować na niej schemat proporcji i wyliczać ile wynosi _x_. Wystarczy, że wejdziesz na jednostkowo.pl i wybierzesz **kalkulator proporcji**. Wpisz w pola tekstowe odpowiednie wartości, naciśnij przycisk “Oblicz”, a w pustym polu tekstowym zobaczysz wynik obliczeń. Z myślą o naszych użytkownikach zadbaliśmy, żeby interfejs naszego kalkulatora być jak najbardziej intuicyjny i łatwy w obsłudze.\n\n\n## Kalkulator proporcji stworzony dla Ciebie\n\nNasz **kalkulator proporcji** został zaprojektowany z myślą o użytkowniku. Jest prosty w użyciu oraz intuicyjny, dzięki czemu **obliczanie proporcji** nie jest wyzwaniem. Idealnie nadaje się zarówno do pracy, jak i szkoły. Doskonale zdajemy sobie sprawę, jak bardzo proporcje są ważne w codziennym życiu, dlatego nasze narzędzie jest dostępne zawsze w twoim telefonie lub komputerze. Nie trać czasu na ręczne obliczanie proporcji i narażanie się na błędy rachunkowe. Wybierz kalkulator proporcji na jednostkowo.pl i oszczędź sobie nerwów.`,
		meta: {
			description:
				'Kalkulator proporcji online oblicza wartość brakującą w równaniach proporcji. Szybko i łatwo znajdź wartość x i rozwiązuj rozmaite zadania z proporcji.'
		},
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
		quiz: quizzes.proportions,
		formula: (dataset) => {
			const { a, b, c, d } = dataset;
			if ([a, b, c, d].filter((x) => !!x).length < 3) {
				return { error: 'Podaj 3 wartości, żeby móc obliczyć proporcję.' };
			}
			const p = {
				a: parseFloat(a),
				b: parseFloat(b),
				c: parseFloat(c),
				d: parseFloat(d)
			};

			let result = 0;
			if (!isNaN(p?.a) && !isNaN(p?.b)) {
				if ((!isNaN(p?.c) && isNaN(p?.d)) || (!isNaN(p?.c) && !isNaN(p?.d))) {
					//Jeśli D jest pusty lub wszystkie są uzupełnione, zmień odtatni (D)
					result = (p?.c * p?.b) / p?.a;
					dataset.d = result;
				} else if (!isNaN(p?.d) && isNaN(p?.c)) {
					result = (p?.a * p?.d) / p?.b;
					dataset.c = result;
				}
			} else if (!isNaN(p?.c) && !isNaN(p?.d)) {
				if (!isNaN(p?.a) && isNaN(p?.b)) {
					result = (p?.a * p?.d) / p?.c;
					dataset.b = result;
				} else if (!isNaN(p?.b) && isNaN(p?.a)) {
					result = (p?.c * p?.b) / p?.d;
					dataset.a = result;
				}
			}

			return { dataset, overwrite: true, result };
		},
		layout: { gridTemplate: '"a icon c" "b icon d" / auto 20px auto', responsive: false }
	},
	{
		id: 'kalkulator-funkcji-trygonometrycznych',
		type: 'kalkulator',
		name: 'trygonometrii',
		title: 'Kalkulator trygonometrii',
		icon: 'change_history',
		component: Controllers,
		description:
			'Kalkulator trygonometryczny online pozwala szybko i łatwo przeliczyć funkcje trygonometryczne. Wystarczy, że wybierzesz, w jakich jednostkach chcesz wprowadzić kąt, a następnie podasz go i gotowe. Sinus, cosinus, tangens i cotangens - ich wartość poznasz od razu. Nie musisz już więcej obliczać niczego na kartce, a trygonometria stanie się o wiele bardziej przyjazna. Nasz kalkulator online pozwoli na dokonanie obliczeń w ciągu kilku sekund.',
		about:
			'Trygonometria jest działem matematyki zajmującym się badaniem związków między kątami i bokami trójkątów. Trygonometria wykorzystuje funkcje trygonometryczne, takie jak sinus, cosinus i tangens, do obliczania wartości kątów i długości boków. Trygonometria ma wiele zastosowań w nauce i technice, na przykład w nawigacji, astronomii, fizyce i inżynierii.',
		meta: {
			description:
				'Skorzystaj z naszego kalkulatora trygonometrycznego online do obliczania wartości funkcji trygonometrycznych, kątów i wiele więcej. Szybko i wygodnie!'
		},
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
			if (!dataset?.number) {
				return { error: 'Podaj wartość kąta.' };
			}

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
		icon: 'scale',
		component: Controllers,
		description:
			'Kalkulator BMI pozwala na błyskawiczne obliczenie, czy waga nie jest zbyt duża lub zbyt mała w stosunku do wzrostu. Ten prosty wskaźnik masy ciała ułatwi zachowanie prawidłowej wagi, a otyłość lub niedowaga nie będą Ci grozić. Aby obliczyć body mass index, wystarczy w odpowiednie pola wpisać swoją wagę i wzrost. Kalkulator BMI online pozwoli błyskawicznie obliczać wskaźnik BMI i pilnować tego, by nie groziła Ci niedowaga lub nadwaga!',
		about:
			'BMI, czyli indeks masy ciała (ang. Body Mass Index), to wskaźnik używany do oceny masy ciała osoby w stosunku do jej wzrostu. Jest to powszechnie stosowany sposób oceny, czy dana osoba ma odpowiednią masę ciała, nadwagę, niedowagę lub otyłość.',
		markdown:
			'## Co to BMI?\n\nBMI (z ang. Body Mass Index), inaczej wskaźnik masy ciała to jedno z narzędzi pozwalających sprawdzić, czy nasze ciało jest w odpowiedniej formie. Określa on stosunek wzrostu osoby badanej do jej masy ciała. **Sprawdzanie BMI** jest bardzo proste i wymaga znania jedynie wzrostu oraz wagi osoby badanej oraz wykonania prostych obliczeń matematycznych. Znajomość swojego **BMI** jest przydatna podczas oceniania zagrożenia otyłością lub niedowagą i jego wczesnemu zapobieganiu. Warto pamiętać, że **wskaźnik BMI** nie zawsze jest adekwatny do stanu zdrowia, dlatego nie należy się nim nadmiernie sugerować.\n\n## Co to kalkulator BMI?\n\nKalkulator BMI to narzędzie, które pozwala na **obliczenie BMI** w prosty i szybki sposób, podając jedynie kilka informacji o swoim ciele. W skrócie pomaga sprawdzić, czy nasza waga jest adekwatna do wzrostu. Jest to istotna informacja, ponieważ za wysoki lub zbyt niski **wskaźnik BMI** mogą świadczyć o problemach zdrowotnych, takich jak nadwaga lub niedowaga. Mimo, że BMI jest przydatnym wskaźnikiem, istnieją sytuacje, w których nie sprawdza się najlepiej. Na przykład nie sprawdzi się on u osób z rozwiniętą tkanką mięśniową, ponieważ jest ona tak samo traktowana jak tkanka tłuszczowa.\n\n## Jak obliczyć BMI?\n\n**Obliczanie BMI** pomijając kalkulator BMI wcale nie jest trudnym zadaniem. W najprostszej wersji wystarczy znać swój wzrost i wagę. Wzór na BMI wygląda następująco: BMI = masa / (wzrost)<sup>2</sup>. Masę podajemy w kilogramach, a wzrost w metrach. Na przykład dla osoby ważącej 80 kilogramów i mierzącej 1,8 metra, **wskaźnik BMI** będzie wynosił: 80 / (1,8)<sup>2</sup> = 24,69, co jest klasyfikowane jako górna granica wagi prawidłowej. Jak widać, obliczanie BMI samemu nie jest wyzwaniem, jak niektórym mogłoby się wydawać. **Oblicz BMI** na naszym **kalkulatorze BMI** i sprawdź, czy twoja waga jest adekwatna do wzrostu.\n\n## Klasyfikacja BMI\n\nObliczenie BMi to dopiero połowa sukcesu. Drugą częścią jest interpretacja wyników. Sama liczba nic nam nie mówi, dlatego stworzono następujące klasyfikacje wyników:\n\n* &lt;16,0 (wygłodzenie)\n* 16,0–16,9 (wychudzenie)\n* 17,0–18,5 (niedowaga)\n* 18,5–24,9 (waga prawidłowa)\n* 25,0–29,9 (nadwaga)\n* 30,0–34,9 (otyłość I stopnia)\n* 35,0–39,9 (otyłość II stopnia)\n* ≥40 (otyłość III stopnia)\n\nJak widać **klasyfikacja BMI** jest dość obszerna. Całe szczęście nasz kalkulator BMI jest wyposażony w graficzny oraz tekstowy wskaźnik BMI, dzięki czemu interpretacja BMI staje się jeszcze łatwiejsza.',
		meta: {
			description:
				'Skorzystaj z naszego kalkulatora BMI online, aby obliczyć wskaźnik masy ciała i sprawdzić czy waga jest prawidłowa. Niezbędne narzędzie dla dbających o zdrowie!'
		},
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
		icon: 'details',
		component: Controllers,
		description:
			'Kalkulator twierdzenia Pitagorasa online to przydatne narzędzie, które pozwoli błyskawicznie obliczyć długość przeciwprostokątnej i przyprostokątnej. Choć wzór twierdzenia Pitagorasa wydaje się prosty, to obliczenie go może być wymagające. Nasz kalkulator online pozwoli Ci na szybkie obliczenie długości boku. Wpisz długości wybranych boków, a kalkulator obliczy długość trzeciego. Kalkulator online wykonuje obliczenia w ciągu kilku sekund!',
		markdown:
			'## Wzór na twierdzenie Pitagorasa\n\n**Twierdzenie Pitagorasa** posiada bardzo prosty wzór: _a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup>_, gdzie _a_ jest długością pierwszej przyprostokątnej, _b_ jest równe długości drugiej przyprostokątnej, a _c_ jest długością przeciwprostokątnej. **Czym jest przyprostokątna, a czym przeciwprostokątna?** Przyprostokątną określamy bok trójkąta, który przylega do kąta prostego, a przeciwprostokątną nazywamy bok, który leży naprzeciw kąta prostego. **Wzór na Pitagorasa** można stosować zawsze, kiedy znamy dwie z trzech wartości, niekoniecznie _a_ i _b_. Na przykład znając _a_ i _c_, możemy obliczyć długość boku _b_. Wystarczy przekształcić wzór w następujący sposób: _b<sup>2</sup> = c<sup>2</sup> - a<sup>2</sup>_, a następnie obliczyć pierwiastek z _b_. Przydatnym narzędziem do obliczania Pitagorasa jest **kalkulator Pitagorasa**, który znacznie przyspiesza ten proces.\n\n## Twierdzenie Pitagorasa - dlaczego działa?\n\nTwierdzenie Pitagorasa na pierwszy rzut oka może wydawać się nieco nieintuicyjne. W końcu dlaczego kwadrat długości dwóch przyprostokątnych ma być równy kwadratowi długości przeciwprostokątnej? Jednak da się to przedstawić w dużo bardziej zrozumiały sposób. **Obliczanie twierdzenia Pitagorasa** staje się znacznie łatwiejsze, kiedy zrozumiemy, że jest one prostym założeniem mówiącym, że jeśli stworzymy dwa kwadraty o długościach boków odpowiadającym długościom przyprostokątnych, to suma ich pól powierzchni będzie równa polu powierzchni kwadratu o długości boku równej długości przeciwprostokątnej. Właśnie dlatego stosując twierdzenie Pitagorasa, potęgujemy długości przyprostokątnych, a następnie pierwiastkujemy długość przeciwprostokątnej.\n\n## Obliczanie pitagorasa na zwykłym kalkulatorze\n\nCzęsto jedyne co mamy pod ręką podczas **obliczania twierdzenia Pitagorasa** jest prosty kalkulator, który nie posiada takich funkcji, jak potęgowanie, czy pierwiastkowanie. W takiej sytuacji jedyne co nam pozostaje to zdanie się na własny spryt.\n\nPierwszą przeszkodą, na którą możemy natrafić jest potęgowanie. Jeśli nasz kalkulator nie posiada takiej opcji, wystarczy pomnożyć liczbę przez samą siebie. Na przykład, żeby obliczyć potęgę stopnia drugiego liczby 5, wystarczy pomnożyć 5 przez samą siebie, czego wynikiem jest 25 (5*5=25).\n\nDrugim problemem, który kryje **obliczanie Pitagorasa** jest pierwiastkowanie. Tutaj już nie jest tak łatwo, dlatego że nie istnieje prosty sposób na pierwiastkowanie. Warto przygotować się zawczasu i poznać najpopularniejsze pierwiastki, czyli sprawdzić potęgi liczb od 1 do 20. Jeśli jednak obliczamy Pitagorasa bez tej wiedzy, jedyne co nam pozostaje to sprawdzanie po kolei, potęga której liczby jest najbliżej liczby pod pierwiastkiem. Na przykład chcąc obliczyć pierwiastek z liczby 361, najpierw sprawdzamy ile wynosi potęga na przykład liczby 12. Jest to 144, więc wiemy, że powinniśmy szukać liczby większej. Wybieramy 17, ale 289 to nadal za mało. Bierzemy więc 19 i trafiliśmy. 19 do kwadratu to dokładnie 361.\n\nDzięki tym prostym sztuczkom, **obliczanie Pitagorasa** już nigdy nie będzie wyzwaniem.\n\n## Kalkulator Pitagorasa do szkoły i pracy\n\nNasz **kalkulator Pitagorasa** stworzyliśmy z myślą o wszystkich, dla których ręczne obliczanie Pitagorasa jest niepotrzebnym wysiłkiem, niezależnie czy w szkole czy w pracy. Mimo, że **wzór na Pitagorasa** nie jest skomplikowany, łatwo popełnić błędy rachunkowe podczas jego obliczania. Potęgowanie i pierwiastkowanie często wymaga nieproporcjonalnie dużo czasu, który można przeznaczyć na przyjemniejsze czynności. Żeby obliczyć Pitagorasa na naszym kalkulatorze wystarczy wpisać długości dwóch boków w pola tekstowe, a w trzecim pojawi się szukana wartość. Nie pozwól, sobie na stratę czasu - poznaj **kalkulator twierdzenia Pitagorasa** na Jednostkowo.pl.',
		meta: {
			description:
				'Skorzystaj z naszego kalkulatora Pitagorasa z zadaniami do obliczania twierdzenia Pitagorasa w trójkątach prostokątnych. Oblicz długości boków szybko i łatwo.'
		},
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
		quiz: quizzes.pythagoras,
		formula: (dataset) => {
			delete dataset.error;

			let result;
			if ((dataset?.a && dataset.b) || (dataset?.a && dataset.b && dataset.c)) {
				// Jeśli C jest pusty lub wszystkie są uzupełnione, oblicz C
				result = round(Math.sqrt(parseFloat(dataset.a) ** 2 + parseFloat(dataset.b) ** 2), 5);
				dataset.c = result;
			} else if (dataset.b && dataset.c) {
				// Jeśli b i c są dostępne, oblicz a
				result = round(Math.sqrt(parseFloat(dataset.c) ** 2 - parseFloat(dataset.b) ** 2), 5);
				dataset.a = result;
			} else if (dataset.a && dataset.c) {
				// Jeśli a i c są dostępne, oblicz b
				result = round(Math.sqrt(parseFloat(dataset.c) ** 2 - parseFloat(dataset.a) ** 2), 5);
				dataset.b = result;
			} else {
				// Nieprawidłowy zestaw wartości
				return { error: 'Podaj długości dwóch boków.' };
			}
			return { dataset, result, overwrite: true };
		}
	},
	{
		id: 'kalkulator-procentu-składanego',
		type: 'kalkulator',
		name: 'procentu składanego',
		title: 'Kalkulator procentu składanego',
		icon: 'percent',
		component: Controllers,
		description:
			'Wpłacasz środki na lokatę? Skorzystaj z kalkulatora procentu składanego! Dzięki kalkulatorowi procentu składanego możesz precyzyjnie obliczyć przyszłe odsetki, uwzględniając kapitalizację odsetek, która pozwala na ich reinwestycję. W ten sposób odsetki są dodawane do kapitału początkowego, co zwiększa bazę do naliczania nowych odsetek. Nasz kalkulator online pozwala szybko ocenić, jak inflacja wpłynie na realną wartość Twojego zysku procentowego, umożliwiając dokonanie świadomej decyzji inwestycyjnej.',
		meta: {
			description:
				'Skorzystaj z naszego kalkulatora procentu składanego, aby obliczyć przyszłą wartość inwestycji i potencjalny zysk w danym okresie. Oszczędzaj i planuj finanse!'
		},
		controllers: [
			{
				id: 'amount',
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
					{ label: 'Lata', name: '1', default: true },
					{ label: 'Miesiące', name: '12' }
				]
			},
			{
				id: 'interestRate',
				element: 'input',
				defaultValue: '',
				label: 'Oprocentowanie [%]',
				attributes: { type: 'number', placeholder: 'Podaj oprocentowanie' }
			},
			{
				id: 'capitalisation',
				element: 'select',
				label: 'Kapitalizacja odsetek',
				options: [
					{ label: 'Rocznie', name: '1', default: true },
					{ label: 'Kwartalnie', name: '4' },
					{ label: 'Miesięcznie', name: '12' }
				]
			},
			{
				advanced: true,
				id: 'regularPaymentAmount',
				defaultValue: '',
				element: 'input',
				label: 'Kwota regularnej wpłaty',
				attributes: { type: 'number', placeholder: 'Podaj kwotę regularnej wpłaty' }
			},
			{
				advanced: true,
				id: 'regularPaymentFrequency',
				element: 'select',
				label: 'Częstotliwość regularnej wpłaty',
				options: [
					{ label: 'Rocznie', name: '1', default: true },
					{ label: 'Miesięcznie', name: '12' },
					{ label: 'Kwartalnie', name: '4' },
					{ label: 'Tygodniowo', name: '52' }
				]
			}
		],
		formula: (dataset) => {
			let {
				amount,
				periods,
				periodsType,
				interestRate,
				capitalisation,
				regularPaymentAmount = 0,
				regularPaymentFrequency
			} = dataset;

			if (!amount || !periods || !interestRate) {
				return { error: 'Wypełnij wszystkie pola formularza.' };
			}

			amount = parseFloat(amount);
			periods = parseFloat(periods);
			periodsType = parseFloat(periodsType);
			interestRate = parseFloat(interestRate);
			capitalisation = parseFloat(capitalisation);
			regularPaymentAmount = parseFloat(regularPaymentAmount);
			regularPaymentFrequency = parseFloat(regularPaymentFrequency);

			const interestAtEndOfEachPeriod = [];
			let total_investment = 0,
				total_interest = 0,
				total_value = amount,
				total_deposit = 0;

			const monthsInPeriod = periods * (12 / periodsType);
			for (var i = 0; i < monthsInPeriod; i += 1) {
				// Loop for each month
				var investment = i === 0 ? amount : 0;

				if (regularPaymentAmount) {
					if (regularPaymentFrequency / monthsInPeriod >= 1.0) {
						investment += (regularPaymentAmount * regularPaymentFrequency) / 12;
					} else {
						var interval = 12 / regularPaymentFrequency;

						if ((i + 1) % interval === 0) {
							total_deposit += regularPaymentAmount;
							investment += regularPaymentAmount;
						}
					}
				}

				var interest =
					total_value * Math.pow(1 + interestRate / (capitalisation * 100), capitalisation / 12) -
					total_value;
				total_investment += investment;
				total_interest += interest;
				total_value = total_investment + total_interest;

				interestAtEndOfEachPeriod.push({
					totalDeposits: round(total_deposit, 2),
					interest: round(total_interest, 2)
				});
			}

			const finalAmount = round(total_value, 2);
			const profit = round(total_interest, 2);

			return {
				type: 'chart',
				description: `Na koniec okresu oszczędzania, stan konta będzie wynosił
					<b data-testid="finalAmount">${formatOutputNumber(finalAmount)} zł</b>.
					${
						parseFloat(regularPaymentAmount) > 0
							? `Suma wszystkich regularnych wpłat będzie równa
							<b data-testid="depositsTotal">${formatOutputNumber(round(total_investment - amount, 2))} zł</b>.`
							: ''
					}
					Całkowity zysk wyniesie <b data-testid="profit">${formatOutputNumber(profit)} zł</b>.`,
				config: {
					type: 'bar',
					data: {
						labels: Array.from({ length: monthsInPeriod }, (_, i) => `Miesiąc ${i + 1}`),
						datasets: [
							{
								type: 'bar',
								label: 'Kwota początkowa',
								data: [...interestAtEndOfEachPeriod.map((e) => amount)],
								borderColor: website.primaryColor,
								backgroundColor: website.primaryColor + '55',
								borderWidth: 1
							},
							{
								type: 'bar',
								label: 'Skumulowane wpłaty',
								data: [...interestAtEndOfEachPeriod.map((e) => e.totalDeposits)],
								borderColor: '#b670d1',
								backgroundColor: '#b670d155',
								borderWidth: 1
							},
							{
								type: 'bar',
								label: 'Skumulowane odsetki',
								data: [...interestAtEndOfEachPeriod.map((e) => e.interest)],
								borderColor: '#7078d1',
								backgroundColor: '#7078d155',
								borderWidth: 1
							}
						]
					},
					options: {
						interaction: {
							mode: 'index'
						},
						responsive: true,
						maintainAspectRatio: false,
						plugins: {
							tooltip: {
								callbacks: {
									footer: function (items) {
										return `Razem: ${round(
											items.reduce((a, b) => a + b.parsed.y, 0),
											2
										)}`;
									}
								}
							}
						},
						scales: {
							x: {
								stacked: true,
								grid: {
									display: false
								},
								ticks: {
									display: false
								}
							},
							y: {
								stacked: true
							}
						}
					}
				}
			};
		},
		layout: {
			gridTemplate:
				'"amount amount" "periods periodsType" "interestRate capitalisation" "regularPaymentAmount regularPaymentFrequency" "check check" / 1fr 50%'
		}
	},
	{
		id: 'kalkulator-podzielnosci-liczb',
		type: 'kalkulator',
		name: 'podzielności liczb',
		title: 'Kalkulator podzielności liczb',
		icon: 'filter_1',
		component: Controllers,
		description:
			'Kalkulator podzielności liczb umożliwia sprawdzenie w ciągu kilku sekund, czy wybrane przez Ciebie liczby są podzielne bez reszty.  Wystarczy wpisać wybrane liczby w odpowiednie pola, by sprawdzić dzielenie. Kalkulator podzielności liczb ułatwia także znalezienie dzielnika danej liczby, co jest kluczowe przy rozkładaniu liczb na czynniki pierwsze, w tym identyfikacji liczb pierwszych. Dzięki temu narzędziu, z łatwością możesz określić, czy liczba jest pierwsza, czyli czy jej jedynymi dzielnikami są 1 i ona sama.',
		meta: {
			description:
				'Kalkulator online podzielności liczb naturalnych - znajdź dzielniki i resztę z dzielenia. Sprawdź jak znaleźć czynniki pierwsze danej liczby.'
		},
		controllers: [
			{
				id: 'a',
				defaultValue: '',
				element: 'input',
				label: 'Licznik (nad kreską ułamkową)',
				attributes: { type: 'number', placeholder: 'Podaj wartość liczika' }
			},
			{
				id: 'b',
				defaultValue: '',
				element: 'input',
				label: 'Mianownik (pod kreską ułamkową)',
				attributes: { type: 'number', placeholder: 'Podaj wartość mianownika' }
			}
		],
		formula: (dataset) => {
			delete dataset.error;

			let result = parseFloat(dataset.a) % parseFloat(dataset.b) === 0 ? '' : 'nie';
			let response = `Liczba ${dataset.a} <span>${result} jest podzielna</span> przez ${dataset.b}.`;
			return { response };
		}
	},
	{
		id: 'przelicznik-dlugosci',
		type: 'przelicznik',
		name: 'długości',
		title: 'Przelicznik długości',
		icon: 'straighten',
		component: Converter,
		description:
			'Łatwy w użyciu kalkulator długości, który ułatwi Ci przeliczanie jednostek długości.',
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
	/* 	{
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
	}, */
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
