import { website } from '../seo';

import time_subcalculators from './subcalculators/time';
import percentage_subcalculators from './subcalculators/percentage';
import proportions_subcalculators from './subcalculators/proportions';
import trigonometry_subcalculators from './subcalculators/trigonometry';
import bmi_subcalculators from './subcalculators/bmi';
import pythagoras_subcalculators from './subcalculators/pythagoras';
import compound_interest_subcalculators from './subcalculators/compound-interest';
import divisibility_subcalculators from './subcalculators/divisibility';

import length_converter from './subcalculators/converters/length';
import time_converter from './subcalculators/converters/time';
import mass_converter from './subcalculators/converters/mass';
import volume_converter from './subcalculators/converters/volume';
import pressure_converter from './subcalculators/converters/pressure';
import energy_converter from './subcalculators/converters/energy';
import frequency_converter from './subcalculators/converters/frequency';
import density_converter from './subcalculators/converters/density';
import power_converter from './subcalculators/converters/power';
import velocity_converter from './subcalculators/converters/velocity';
import force_converter from './subcalculators/converters/force';
import area_converter from './subcalculators/converters/area';

export const calculators = [
	{
		id: 'kalkulator-procentow',
		type: 'kalkulator',
		name: 'procentów',
		title: 'Kalkulator procentów',
		icon: 'percent',
		description:
			'Kalkulator procentowy to wszechstronne narzędzie stworzone, aby ułatwić i przyspieszyć rozwiązywanie różnych zadań matematycznych związanych z procentami. Kalkulator oferuje szereg funkcji, umożliwiając m.in. obliczanie procentu z danej liczby, obliczanie, jakim procentem jest liczba A dla liczby B oraz dodawanie i odejmowanie procentów. Skorzystaj z kalkulatora procentów, aby w łatwy sposób obliczyć procenty,  uzyskując precyzyjne i wiarygodne wyniki w ciągu kilku sekund.',
		about:
			'Procenty to sposób wyrażania części całości. Można je zrozumieć jako ułamki, w których mianownik jest zawsze równy 100. Na przykład, jeśli mamy 25 procent czegoś, to znaczy, że mamy 25 części na 100 możliwych. Procenty są używane w wielu sytuacjach, na przykład w matematyce, finansach, statystyce czy ocenianiu.',
		markdown: `## Obliczanie procentów – z naszym kalkulatorem to proste\n\nCzy tego chcesz, czy nie, z procentami masz do czynienia na co dzień. Podwyżki i obniżki cen, podatki, punktacja na egzaminach i sprawdzianach – ich zastosowanie jest bardzo szerokie. Dlatego nacisk na obliczanie procentów na lekcjach matematyki w szkole jest tak duży. **To jedna z najbardziej przydatnych umiejętności, dlatego warto nauczyć się, jak obliczać procenty**. Potrzebujesz pomocy? Chcesz szybko obliczyć np. procent z liczby lub dowiedzieć się o ile procent jakaś wartość zmalała lub wzrosła w stosunku do innej? Sprawdź nasz kalkulator procentów, który zawiera wszystkie potrzebne funkcje i natychmiast pokazuje prawidłowy wynik.\n\n\n## Obliczanie procentów: jak obliczyć procent z liczby?\n\nGdy zabierasz się za naukę obliczania procentów, podstawową zagwozdką, z jaką przyjdzie Ci się zmierzyć, jest „jak obliczyć procent z liczby”. To działanie ma bardzo szerokie zastosowanie. Wyobraź sobie, że wchodzisz do sklepu, w którym obowiązuje promocja: minus 30% od wszystkich cen na metkach. Jeśli wiesz, jak obliczyć procent z liczby, łatwo dowiesz się, ile dokładnie zaoszczędzisz i ile zapłacisz przy kasie.\n\nObliczanie procentów jest możliwe na wiele sposobów, ale najpopularniejsze są dwa.\n\n\n### Jak obliczyć procent z liczby: metoda 1\n\nPierwsza metoda polega na podzieleniu liczby przez 100 i pomnożeniu wyniku przez wartość procentu tym samym wyznaczasz 1% z liczby i mnożysz go przez procent, jaki sz uzyskać.\n\nPrzykład: chcesz skorzystać z opisanej wyżej promocji. Widzisz świetną kurtkę za 350 zł. Jak obliczyć, ile wyniesie rabat, jeśli promocja to -30%? Możesz podzielić 350 na 100, co daje 3,50. Jeśli pomnożysz tę liczbę przez 30, otrzymasz wartość zniżki, czyli 105 zł. Tyle właśnie zaoszczędzisz, a za kurtkę zapłacisz 350-105=245 zł.\n\n\n### Jak obliczyć procent z liczby: metoda 2\n\nObliczanie procentów jest też możliwe przez zamienienie wartości procentowej na ułamek. 30% to zatem 30/100, 3/10 lub 0,3. Teraz tylko wystarczy pomnożyć tę wartość przez daną liczbę. To świetna metoda, jeśli do obliczenia procentu z liczby chcesz wykorzystać zwykły kalkulator.\n\nPrzykład: tym razem przyjmijmy, że kupujesz książkę o wartości 35 złotych, na którą został nałożony rabat w wartości 20%. 20% to 0,2. Teraz możesz łatwo pomnożyć 0,2 przez cenę książki, aby dowiedzieć się, że zaoszczędzisz dokładnie 7 zł.\n\nPamiętaj, że zawsze wtedy, gdy chcesz obliczyć procent z liczby, kalkulator na stronie Jednostkowo.pl jest do Twojej dyspozycji. Po prostu wpisz wartość procentową i liczbę, a natychmiast otrzymasz wynik.\n\n\n## Kalkulator procentów: jakim procentem jednej liczny jest druga liczba?\n\nObliczanie, jakim procentem jednej liczby jest druga liczba, często przydaje się w szkole i na studiach. Załóżmy, że trzeba mieć 90% poprawnych odpowiedzi ze sprawdzianu, aby dostać piątkę. Czy jeśli zrobisz dobrze 25 zadań na 27, uda Ci się ją dostać?\n\nW tym przypadku nie jest nawet potrzebny skomplikowany kalkulator procentów. Wystarczy bowiem, że podzielisz jedną liczbę przez drugą, a następnie pomnożysz wynik przez 100%. W powyższym przykładzie 25/27=0,(925). Jeśli pomnożysz ten wynik przez 100%, otrzymasz w przybliżeniu 95,5%. Oznacza to, że mając wynik 25/27 punktów, dostaniesz piątkę ze swojego sprawdzianu.\n\n\n## Kalkulator do procentów: jak dodać lub odjąć procent\n\nZałóżmy, że do swojego zakupu musisz dodać VAT. Oznacza to, że cena zwiększy się np. o 23%. Czyli dokładnie o ile? **Nasz kalkulator do procentów pomoże Ci to obliczyć w kilka sekund**. Po prostu wpisz swoje wartości w podane okienka. Jeśli jednak chcesz obliczyć wynik samodzielnie, możesz zastosować metodę na obliczanie procentu z liczby, a następnie dodać ją do wartości bazowej.\n\nObliczanie procentów tego typu jest jednak szybsze, gdy przedstawisz je w formie ułamka dziesiętnego. Skoro do ceny produktu musisz doliczyć 23% VAT-u, tę wartość można przedstawić jako 0,23. Cena bazowa produktu to natomiast 100%, czyli 1. Razem zapłacisz zatem 1,23 ceny bazowej. Podobnie działa odejmowanie procentu od liczby. Jeśli np. obniżka wynosi 20%, zapłacisz za produkt 1-0,2=0,8 ceny bazowej.\n\nPrzykład: produkt kosztuje 400 zł + 23% VAT. Trzeba więc za niego zapłacić 1,23x400=492 zł. Z takim obliczeniem poradzą sobie wszystkie proste kalkulatory. Procent możesz równie łatwo odjąć od liczby. Jeśli produkt kosztuje 200 zł i jest objęty obniżką 20%, zapłacisz za niego 0,8x200=160 zł.\n\n\n## Jak obliczać procenty: skorzystaj z wygodnej pomocy!\n\nNasz kalkulator procentów pomoże Ci szybko wykonywać wszystkie działania na procentach. Jego maksymalne uproszczenie sprawia, że ryzyko pomyłki praktycznie nie istnieje. Dzięki temu możesz mieć pewność, że zawsze otrzymasz poprawny wynik. **Obliczanie procentów nie jest trudne, a z naszym kalkulatorem stanie się jeszcze prostsze i wygodniejsze**. Wykonuj zarówno proste, jak i bardziej skomplikowane działania na dowolnych liczbach. Po prostu wpisz swoje dane w odpowiednich miejscach, a od razu otrzymasz wynik. Obliczanie procentów przestanie być Twoją zmorą!`,
		meta: {
			description:
				'Skorzystaj z kalkulatora procentów online, aby obliczyć procent z liczby, jakim procentem liczby jest druga, dodać i odjąć procent od liczby.'
		},
		subcalculators: percentage_subcalculators
	},
	{
		id: 'kalkulator-proporcji',
		type: 'kalkulator',
		name: 'proporcji',
		title: 'Kalkulator proporcji',
		icon: 'shuffle',
		description:
			'Z kalkulatorem proporcji online łatwo obliczysz nawet skomplikowane dane w ciągu kilku sekund. Kalkulator proporcji online to narzędzie, dzięki któremu przeliczysz wartość bez wysiłku. Chcesz obliczyć proporcje? Wystarczy w odpowiednie pole wpisać liczbę i kliknąć "oblicz", by w drugim zobaczyć od razu prawidłowy wynik. Czy to procent, czy równanie, czy proporcja, nasz kalkulator błyskawicznie pomoże Ci rozwiązać problem!',
		about:
			'Proporcje to relacja między wielkościami, które można porównać ze sobą. Proporcje mogą być wyrażone w różnych sposobach, np. jako ułamek, procent, stosunek czy skala. Proporcje są używane w wielu dziedzinach, np. w matematyce, sztuce, architekturze czy kuchni. Proporcje pomagają nam zrozumieć i opisać zależności między różnymi wielkościami.',
		markdown: `## Jak obliczyć proporcje?\n\nŻeby zacząć **obliczanie proporcji** najpierw trzeba wiedzieć, [czym są proporcje](${website.baseUrl}/blog/proporcje-wyjasnione-jak-obliczyc-proporcje). W skrócie jest to równość dwóch stosunków względem siebie. Mając tę wiedzę, możemy przejść do obliczania proporcji.\n\nAby obliczyć brakującą wartość proporcji, trzeba skorzystać z właściwości, która mówi, że _a_ podzielone przez _b_ jest równe _c_ dzielone przez _d_. Jeśli znasz trzy wartości z tego wzoru, możesz w prosty sposób obliczyć niewiadomą. Na przykład, żeby obliczyć _d_, znając _a_,_b_,_c_, należy ułożyć równanie _d_=_b_*_c_/_a_. Analogicznie, jeśli znasz _b_,_c_ i _d_, możesz obliczyć _a_, korzystając ze wzoru _a_=_d_*_c_/_a_. Żeby **obliczyć proporcję** wiedząc, że _a=10_, _b=20_, _c=50_, możemy skorzystać z powyższego wzoru, podstawiając nasze liczby - _d_ = 20*50/10, czego wynikiem jest _d_ = 100. W ten prosty sposób możemy obliczyć proporcje z pominięciem **kalkulatora proporcji**.\n\n\n## Proporcje online - zastosowanie\n\nObliczanie proporcji online ma wiele zastosowań w codziennym życiu. Kalkulator proporcji umożliwia szybkie **obliczanie proporcji składników** na przykład podczas gotowania. Równie pomocny jest w podczas zakupów, kiedy znamy cenę za kilogram produktu, a potrzebujemy na przykład 1,25 kilograma. Kolejnym aspektem życia, w którym nasz kalkulator jest przydatny są podróże. Załóżmy, że jedziemy na 500 kilometrową wycieczkę w góry. Pierwsze 80 kilometrów przejechaliśmy w 40 minut i chcemy wiedzieć, ile zajmie nam reszta drogi. Układamy następujące równanie: x=420*40/80, którego wynikiem jest 210 minut, czyli 3 godziny i 30 minut.\n\n\n## Do czego służy kalkulator proporcji\n\nNasz **kalkulator proporcji** umożliwia łatwe **obliczanie proporcji** w Twojej przeglądarce. Dzięki niemu, proces ten staje się szybszy i wygodniejszy. Już nigdy nie będziesz musiał szukać kartki, żeby rozrysować na niej schemat proporcji i wyliczać ile wynosi _x_. Wystarczy, że wejdziesz na jednostkowo.pl i wybierzesz **kalkulator proporcji**. Wpisz w pola tekstowe odpowiednie wartości, naciśnij przycisk “Oblicz”, a w pustym polu tekstowym zobaczysz wynik obliczeń. Z myślą o naszych użytkownikach zadbaliśmy, żeby interfejs naszego kalkulatora być jak najbardziej intuicyjny i łatwy w obsłudze.\n\n\n## Kalkulator proporcji stworzony dla Ciebie\n\nNasz **kalkulator proporcji** został zaprojektowany z myślą o użytkowniku. Jest prosty w użyciu oraz intuicyjny, dzięki czemu **obliczanie proporcji** nie jest wyzwaniem. Idealnie nadaje się zarówno do pracy, jak i szkoły. Doskonale zdajemy sobie sprawę, jak bardzo proporcje są ważne w codziennym życiu, dlatego nasze narzędzie jest dostępne zawsze w twoim telefonie lub komputerze. Nie trać czasu na ręczne obliczanie proporcji i narażanie się na błędy rachunkowe. Wybierz kalkulator proporcji na jednostkowo.pl i oszczędź sobie nerwów.`,
		meta: {
			description:
				'Kalkulator proporcji online oblicza wartość brakującą w równaniach proporcji. Szybko i łatwo znajdź wartość x i sprawdzaj proporcje między liczbami.'
		},
		subcalculators: proportions_subcalculators
	},
	{
		id: 'kalkulator-funkcji-trygonometrycznych',
		type: 'kalkulator',
		name: 'trygonometrii',
		title: 'Kalkulator trygonometrii',
		icon: 'change_history',
		description:
			'Kalkulator trygonometryczny online pozwala szybko i łatwo przeliczyć funkcje trygonometryczne. Wystarczy, że wybierzesz, w jakich jednostkach chcesz wprowadzić kąt, a następnie podasz go i gotowe. Sinus, cosinus, tangens i cotangens - ich wartość poznasz od razu. Nie musisz już więcej obliczać niczego na kartce, a trygonometria stanie się o wiele bardziej przyjazna. Nasz kalkulator online pozwoli na dokonanie obliczeń w ciągu kilku sekund.',
		about:
			'Trygonometria jest działem matematyki zajmującym się badaniem związków między kątami i bokami trójkątów. Trygonometria wykorzystuje funkcje trygonometryczne, takie jak sinus, cosinus i tangens, do obliczania wartości kątów i długości boków. Trygonometria ma wiele zastosowań w nauce i technice, na przykład w nawigacji, astronomii, fizyce i inżynierii.',
		meta: {
			description:
				'Skorzystaj z naszego kalkulatora trygonometrycznego online do obliczania wartości funkcji trygonometrycznych, kątów i wiele więcej. Szybko i wygodnie!'
		},
		subcalculators: trigonometry_subcalculators
	},
	{
		id: 'kalkulator-bmi',
		type: 'kalkulator',
		name: 'BMI',
		title: 'Kalkulator BMI',
		icon: 'scale',
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
		subcalculators: bmi_subcalculators
	},
	{
		id: 'kalkulator-pitagorasa',
		type: 'kalkulator',
		name: 'Pitagorasa',
		title: 'Kalkulator twierdzenia Pitagorasa',
		icon: 'details',
		description:
			'Kalkulator twierdzenia Pitagorasa online to przydatne narzędzie, które pozwoli błyskawicznie obliczyć długość przeciwprostokątnej i przyprostokątnej. Choć wzór twierdzenia Pitagorasa wydaje się prosty, to obliczenie go może być wymagające. Nasz kalkulator online pozwoli Ci na szybkie obliczenie długości boku. Wpisz długości wybranych boków, a kalkulator obliczy długość trzeciego. Kalkulator online wykonuje obliczenia w ciągu kilku sekund!',
		markdown:
			'## Wzór na twierdzenie Pitagorasa\n\n**Twierdzenie Pitagorasa** posiada bardzo prosty wzór: _a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup>_, gdzie _a_ jest długością pierwszej przyprostokątnej, _b_ jest równe długości drugiej przyprostokątnej, a _c_ jest długością przeciwprostokątnej. **Czym jest przyprostokątna, a czym przeciwprostokątna?** Przyprostokątną określamy bok trójkąta, który przylega do kąta prostego, a przeciwprostokątną nazywamy bok, który leży naprzeciw kąta prostego. **Wzór na Pitagorasa** można stosować zawsze, kiedy znamy dwie z trzech wartości, niekoniecznie _a_ i _b_. Na przykład znając _a_ i _c_, możemy obliczyć długość boku _b_. Wystarczy przekształcić wzór w następujący sposób: _b<sup>2</sup> = c<sup>2</sup> - a<sup>2</sup>_, a następnie obliczyć pierwiastek z _b_. Przydatnym narzędziem do obliczania Pitagorasa jest **kalkulator Pitagorasa**, który znacznie przyspiesza ten proces.\n\n## Twierdzenie Pitagorasa - dlaczego działa?\n\nTwierdzenie Pitagorasa na pierwszy rzut oka może wydawać się nieco nieintuicyjne. W końcu dlaczego kwadrat długości dwóch przyprostokątnych ma być równy kwadratowi długości przeciwprostokątnej? Jednak da się to przedstawić w dużo bardziej zrozumiały sposób. **Obliczanie twierdzenia Pitagorasa** staje się znacznie łatwiejsze, kiedy zrozumiemy, że jest one prostym założeniem mówiącym, że jeśli stworzymy dwa kwadraty o długościach boków odpowiadającym długościom przyprostokątnych, to suma ich pól powierzchni będzie równa polu powierzchni kwadratu o długości boku równej długości przeciwprostokątnej. Właśnie dlatego stosując twierdzenie Pitagorasa, potęgujemy długości przyprostokątnych, a następnie pierwiastkujemy długość przeciwprostokątnej.\n\n## Obliczanie pitagorasa na zwykłym kalkulatorze\n\nCzęsto jedyne co mamy pod ręką podczas **obliczania twierdzenia Pitagorasa** jest prosty kalkulator, który nie posiada takich funkcji, jak potęgowanie, czy pierwiastkowanie. W takiej sytuacji jedyne co nam pozostaje to zdanie się na własny spryt.\n\nPierwszą przeszkodą, na którą możemy natrafić jest potęgowanie. Jeśli nasz kalkulator nie posiada takiej opcji, wystarczy pomnożyć liczbę przez samą siebie. Na przykład, żeby obliczyć potęgę stopnia drugiego liczby 5, wystarczy pomnożyć 5 przez samą siebie, czego wynikiem jest 25 (5*5=25).\n\nDrugim problemem, który kryje **obliczanie Pitagorasa** jest pierwiastkowanie. Tutaj już nie jest tak łatwo, dlatego że nie istnieje prosty sposób na pierwiastkowanie. Warto przygotować się zawczasu i poznać najpopularniejsze pierwiastki, czyli sprawdzić potęgi liczb od 1 do 20. Jeśli jednak obliczamy Pitagorasa bez tej wiedzy, jedyne co nam pozostaje to sprawdzanie po kolei, potęga której liczby jest najbliżej liczby pod pierwiastkiem. Na przykład chcąc obliczyć pierwiastek z liczby 361, najpierw sprawdzamy ile wynosi potęga na przykład liczby 12. Jest to 144, więc wiemy, że powinniśmy szukać liczby większej. Wybieramy 17, ale 289 to nadal za mało. Bierzemy więc 19 i trafiliśmy. 19 do kwadratu to dokładnie 361.\n\nDzięki tym prostym sztuczkom, **obliczanie Pitagorasa** już nigdy nie będzie wyzwaniem.\n\n## Kalkulator Pitagorasa do szkoły i pracy\n\nNasz **kalkulator Pitagorasa** stworzyliśmy z myślą o wszystkich, dla których ręczne obliczanie Pitagorasa jest niepotrzebnym wysiłkiem, niezależnie czy w szkole czy w pracy. Mimo, że **wzór na Pitagorasa** nie jest skomplikowany, łatwo popełnić błędy rachunkowe podczas jego obliczania. Potęgowanie i pierwiastkowanie często wymaga nieproporcjonalnie dużo czasu, który można przeznaczyć na przyjemniejsze czynności. Żeby obliczyć Pitagorasa na naszym kalkulatorze wystarczy wpisać długości dwóch boków w pola tekstowe, a w trzecim pojawi się szukana wartość. Nie pozwól, sobie na stratę czasu - poznaj **kalkulator twierdzenia Pitagorasa** na Jednostkowo.pl.',
		meta: {
			description:
				'Skorzystaj z naszego kalkulatora Pitagorasa do obliczania twierdzenia Pitagorasa w trójkątach prostokątnych. Szybko obliczaj długości boków trójkąta.'
		},
		subcalculators: pythagoras_subcalculators
	},
	{
		id: 'kalkulator-czasu',
		type: 'kalkulator',
		name: 'czasu',
		title: 'Kalkulator czasu',
		icon: 'schedule',
		description:
			'Kalkulator czasu to narzędzie pozwalające na dodawanie i odejmowanie czasu. Dzięki temu otrzymujemy skumulowany wynik, będący rezultatem wielu operacji wykonywanych na odcinkach czasowych. Podaj ilość dni, godzin, minut lub sekund, naciśnij oblicz i ciesz się szybkim i bezbłędnym wynikiem. Korzystaj z modułu historii, umożliwiającemu podgląd oraz usuwanie poprzednich operacji, aby jeszcze wydajniej korzystać z kalkulatora.',
		markdown:
			'## **Kalkulator czasu – dodawanie i odejmowanie czasu**\n\nJedną z funkcji naszego kalkulatora jest dodawanie i odejmowanie czasu. Zapewne niejednokrotnie spotkałeś się z potrzebą dodawania wielu odcinków czasu do siebie i przekonałeś się jak trudne jest robić to w pamięci. Obliczenia te są bardzo podatne na błędy, które ciężko wyłapać, szczególnie w przypadku odejmowania czasu. Często ułatwiamy sobie ten proces tworząc na kartce oś czasu i nanosząc na nią odpowiednie godziny i daty. Wtedy dużo łatwiej wyłapać błąd, choć nadal nie jest to technika niezawodna. Jeśli chcesz mieć pewność, że **obliczysz różnicę czasu bezbłędnie, skorzystaj z naszego kalkulatora czasu**, pozwalającego na szybkie dodawanie i odejmowanie dni, godzin, minut oraz sekund. Jest on wyposażony w historię, dzięki czemu możesz kontrolować wszystkie operacje. Nie pozwól sobie na błędy podczas obliczania czasu.\n\n\n## **Do czego wykorzystać kalkulator czasu?**\n\nDodawanie i odejmowanie czasu towarzyszy nam na co dzień  – od planowania podróży, aż po tworzenie harmonogramów pracy. **Obliczanie czasu jest przydatne szczególnie w logistyce**, gdzie mały błąd spowoduje opóźnienie procesów, a co za tym idzie – zwiększy koszty. Właśnie dlatego korzystają oni z kalkulatorów czasu, zapewniających dokładny wynik w krótkim czasie.',
		meta: {
			description:
				'Skorzystaj z naszego kalkulatora czasu, umożliwiającego dodawanie i odejmowanie dni, godzin, minut i sekund. Zaoszczędź czas i uniknij się błędów!'
		},
		subcalculators: time_subcalculators
	},
	{
		id: 'kalkulator-procentu-składanego',
		type: 'kalkulator',
		name: 'procentu składanego',
		title: 'Kalkulator procentu składanego',
		icon: 'percent',
		description:
			'Wpłacasz środki na lokatę? Skorzystaj z kalkulatora procentu składanego! Dzięki kalkulatorowi procentu składanego możesz precyzyjnie obliczyć przyszłe odsetki, uwzględniając kapitalizację odsetek, która pozwala na ich reinwestycję. W ten sposób odsetki są dodawane do kapitału początkowego, co zwiększa bazę do naliczania nowych odsetek. Nasz kalkulator online pozwala szybko ocenić, jak inflacja wpłynie na realną wartość Twojego zysku procentowego, umożliwiając dokonanie świadomej decyzji inwestycyjnej.',
		markdown:
			'## **Procent składany - co to?**\n\nProcent składany często nazywany "ósmym cudem świata" **to sposób oprocentowania wkładu pieniężnego zakładający, że odsetki wygenerowane za dany okres oszczędzania będą dodawane do wkładu w następnym okresie**. W skrócie zamiast wypłacać odsetki po każdej kapitalizacji reinwestuje się je, powiększając zysk. Zwykle jest to forma oszczędzania długoterminowego często wzbogacana o dodatkowe wpłaty, generujące jeszcze większe odsetki. Ile można zarobić na procencie składanym? Możesz to sprawdzić, korzystając z kalkulatora procentu składanego. Wystarczy, że uzupełnisz kilka informacji i w mgnieniu oka zobaczysz swoje przyszłe zyski, wraz z wyszczególnieniem każdego okresu kapitalizacji. \n\n### **Czym są odsetki procentu składanego?**\n\nOdsetki są wynagrodzeniem za korzystanie z cudzego kapitału. W kontekście procentu składanego mówimy o odsetkach składanych, w których odsetki zarobione w jednym okresie są dodawane do kapitału, a w kolejnym okresie są obliczane od nowej, większej kwoty, generując jeszcze większe odsetki. Jest to samonakręcające się koło pozwalające na dynamiczny wzrost zysków przy względnie niskim poziomie zaangażowania. \n\n### **Co oznacza kapitalizacja odsetek?**\n\nMówiąc o procencie składanym, nie można pominąć pojęcia kapitalizacji odsetek. **Jest to nic innego jak częstotliwość z jaką bank dopisuje odsetki do depozytu**. Najczęściej spotykamy się z kapitalizacją roczną lub jednorazową, choć istnieją jeszcze kapitalizacje półroczne, kwartalne, miesięczne, a nawet dzienne. Która kapitalizacja jest najbardziej opłacalna? Z perspektywy osoby oszczędzającej najbardziej opłacalna jest ta kapitalizacja, która zachodzi najczęściej. Wynika to z faktu, iż im częściej odsetki będą naliczane do depozytu, tym więcej na nich zarobisz.\n\n## **Jak działa procent składany?**\n\nProcent składany działa na zasadzie efektu kuli śnieżnej. Im więcej pracuje i nabiera na objętości, tym bardziej widowiskowe przynosi efekty. Przy zwykłej formie oszczędzania na lokacie czy koncie oszczędnościowym mamy do czynienia z procentem prostym, który opiera się na inwestowaniu stałej kwoty, nie uzupełniając jej o odsetki. W takim przypadku jedynym naszym zyskiem jest suma stałych odsetek wypłaconych w czasie oszczędzania. **Stosując procent składany, reinwestujemy nasz zysk w celu uzyskania większych odsetek, co długoterminowo prowadzi do dużo większych zarobków**. Na poniższym wykresie można od razu dostrzec różnicę pomiędzy procentem prostym, a składanym. Widać, że ten pierwszy rośnie liniowo a drugi wykładniczo, prowadząc do wymiernych korzyści.\n\n![Wykres przedstawiający różnicę między procentem prostym, a składanym.](/images/compound-interest-calculator-simple-compound.webp "Wykres: Różnica między procentem prostym, a składanym")\n\nWykres przedstawia zmianę wartości lokaty o oprocentowaniu 8% i wkładzie początkowym 10 tys. złotych na przestrzeni 30 lat. Wyraźnie widać różnicę pomiędzy procentem prostym i składanym.\n\n### **Procent składany z dopłatami**\n\nCzęsto zdarza się, że chcemy powiększać nasze oszczędności, nie tylko bazując na odsetkach, ale również o nabyty w międzyczasie kapitał. Wtedy możemy skorzystać z procentu składanemu z dopłatami, który jeszcze bardziej zwiększa nasz zysk z lokaty. **Jest to nic innego jak uzupełnianie wkładu w następnym miesiącu poprzez wpłacenie na lokatę bankową dodatkowych funduszy,** zwiększających odsetki w następnych okresach kapitalizacji. Oszacowanie zysków z tego rodzaju inwestycji nie jest proste, ponieważ wymaga uwzględnienia wielu parametrów. Dużo łatwiej jest skorzystać z oferowanego przez nas kalkulatora procentu składanego z dopłatami. Dzięki niemu dowiesz się ile zarobisz na procencie składanym oraz sprawdzisz dane dotyczące każdego okresu kapitalizacji. Jaką różnicę robią dopłaty? Sprawdźmy to, uzupełniając poprzedni wykres o dodatkowe, coroczne wpłaty.\n\n![Wykres przedstawiający różnicę między procentem prostym, składanym i składanym z dopłatami](/images/compound-interest-calculator-simple-compound-with-surcharges.webp "Wykres: Różnica pomiędzy procentem prostym, składanym i składanym z dopłatami")\n\nWykres przedstawia zmianę wartości lokaty o oprocentowaniu 8% i wkładzie początkowym 10 tys. złotych, na przestrzeni 30 lat, przy uwzględnieniu dopłat rocznych wynoszących 500 złotych. \n\n## **Obliczanie procentu składanego - wzór**\n\nWzór na procent składany może na pierwszy rzut oka wydawać się nieco skomplikowany, ale kiedy przeanalizujemy go, okazuje się, że wcale tak nie jest. Składa się on z podstawowych operacji matematycznych, takich jak dodawanie, mnożenie, dzielenie oraz potęgowanie. **Podczas korzystania ze wzoru na procent składany trzeba pamiętać o kolejności wykonywania działań, żeby nie popełnić podstawowych błędów**. Wzór wygląda następująco:\n\n![Wzór na procent składany](/images/compound-interest-calculator-formula.svg#small "Wzór na procent składany")\n\n, gdzie:\n\n* _Kn_ – Kapitał zgromadzony po _n_ latach oszczędzania\n* _K_ – Kapitał początkowy\n* _n_ – liczba lat oszczędzania\n* _p_ – oprocentowanie w skali roku\n* _k_ – liczba kapitalizacji w ciągu roku\n\nNajłatwiej będzie nam zrozumieć go na przykładzie. Przyjrzyjmy się lokacie pięcioletniej o rocznej kapitalizacji, kapitale początkowym 10 tys. złotych i oprocentowaniu 6%. Aby obliczyć procent składany, podkładamy nasze dane do wzoru:\n\n![Uzupełniony wzór na procent składany](/images/compound-interest-calculator-formula-filled.svg#small "Uzupełniony wzór na procent składany")\n\nWynikiem tego równania jest 13382,26 złotych. Teraz już wiemy, że po pięciu latach lokaty, stosując procent składany, wyjmiemy z niej 13382 zł.\n\nMimo że wzór na procent składany nie jest bardzo skomplikowany, łatwo popełnić błąd podczas jego obliczania. Wielokrotne mnożenie, dzielenie oraz kolejność wykonywania działań mogą doprowadzić do kosztownej pomyłki. **Zamiast tego, możesz skorzystać z kalkulatora procentu składanego online, który szybko i dokładnie obliczy procent składany Twojej przyszłej lokaty, również uwzględniając dodatkowe wpłaty**. W kwestii finansów nie ma kompromisów – musi być dokładnie, a taki właśnie jest nasz kalkulator.',
		meta: {
			description:
				'Skorzystaj z naszego kalkulatora procentu składanego, aby obliczyć przyszłą wartość inwestycji i potencjalny zysk w danym okresie. Oszczędzaj i planuj finanse!'
		},
		subcalculators: compound_interest_subcalculators
	},
	{
		id: 'kalkulator-podzielnosci-liczb',
		type: 'kalkulator',
		name: 'podzielności liczb',
		title: 'Kalkulator podzielności liczb',
		icon: 'filter_1',
		description:
			'Kalkulator podzielności liczb umożliwia sprawdzenie w ciągu kilku sekund, czy wybrane przez Ciebie liczby są podzielne bez reszty.  Wystarczy wpisać wybrane liczby w odpowiednie pola, by sprawdzić dzielenie. Kalkulator podzielności liczb ułatwia także znalezienie dzielnika danej liczby, co jest kluczowe przy rozkładaniu liczb na czynniki pierwsze, w tym identyfikacji liczb pierwszych. Dzięki temu narzędziu, z łatwością możesz określić, czy liczba jest pierwsza, czyli czy jej jedynymi dzielnikami są 1 i ona sama.',
		meta: {
			description:
				'Kalkulator online podzielności liczb naturalnych - znajdź dzielniki i resztę z dzielenia. Sprawdź jak znaleźć czynniki pierwsze danej liczby.'
		},
		subcalculators: divisibility_subcalculators
	},

	{
		id: 'przelicznik-dlugosci',
		type: 'przelicznik',
		name: 'długości',
		title: 'Przelicznik długości',
		icon: 'straighten',
		description:
			'Łatwy w użyciu kalkulator długości, który ułatwi Ci przeliczanie jednostek długości.',
		about:
			'Miary długości to jednostki służące do określania odległości między punktami w przestrzeni. Są one stosowane w różnych dziedzinach, takich jak fizyka, geografia, czy inżynieria. Najpopularniejsze jednostki długości to: centymetr, metr i kilometr.	',
		subcalculators: length_converter
	},
	{
		id: 'przelicznik-czasu',
		type: 'przelicznik',
		name: 'czasu',
		title: 'Przelicznik czasu',
		description: 'Łatwy w użyciu kalkulator czasu, który ułatwi Ci przeliczanie jednostek czasu.',
		icon: 'schedule',
		about:
			'Jednostki czasu umożliwiają mierzenie upływu czasu. Są podstawowym narzędziem do organizacji życia codziennego, zapisywania wydarzeń historycznych i określania czasu trwania różnych zjawisk.',
		subcalculators: time_converter
	},
	{
		id: 'przelicznik-masy',
		type: 'przelicznik',
		name: 'masy',
		title: 'Przelicznik masy',
		description:
			'Przelicznik masy do doskonałe narzędzie dla każdego, kto potrzebuje przeliczyć funty na kilogramy, uncje na gramy, czy miligramy na gramy. To szybkie i łatwe w obsłudze narzędzie, które zaoszczędzi Ci mnóstwo czasu i nerwów. Kiedy następnym razem będziesz się zastanawiał, jak przeliczyć lbs na kg, skorzystaj z naszego przelicznika masy. Konwertuj pomiędzy systemem metrycznym i imperialnym bez zbędnych obliczeń.',
		icon: 'weight',
		about:
			'Jednostki masy służą do pomiaru ilości materii zawartej w danym obiekcie. Najczęściej używanymi jednostkami masy są kilogram, gram i miligram. Masa wyraża się ilością materii obecną w danym ciele i jest jednym z fundamentalnych parametrów fizycznych.',
		markdown: `## **Jak przeliczać kilogramy na gramy?**\n\nPrzeliczanie kg na g jest łatwe do zapamiętania. **1 kg to 1000 gram, wiec jedyne, co musimy zrobić to pomnożyć liczbę kilogramów razy 1000**. Dzięki temu wiemy, że 10 kg to 10000 gram, a 0,5 kg to 500 gram. Analogicznie, **aby przeliczyć gramy na kilogramy, wystarczy liczbę gramów podzielić przez 1000**. Na przykład 5500 gram to 5,5 kg. W przeciwieństwie do jednostek imperialnych, konwertowanie jednostek metrycznych między sobą jest łatwe, ponieważ zazwyczaj współczynniki są wielokrotnościami liczby 10.\n\n## **Kg na dag - ile dekagramów ma kilogram?**\n\nPrzeliczanie kilogramów na dekagramy jest równie proste jak konwertowanie kilogramów na gramy. W kilogramie jest 100 dag, więc łatwo wyciągnąć wniosek, że **aby przeliczyć kg na dag wystarczy pomnożyć ilość kilogramów razy 100**. Na przykład 5 kg jest równe 500 dag. Analogicznie chcąc przeliczyć dag na kg, wystarczy podzielić ilość dekagramów przez 100, na przykład 450 dag to 4,5 kg (450 / 100 = 4,5).\n\nPodobnie sprawa się ma jeśli przeliczamy dag na g. Otóż 1 dag to 10 gram, więc **aby zamienić dekagramy na gramy wystarczy pomnożyć ilość dekagramów przez 10**. Na przykład 15 dag to 150 g. Jeśli zamienimy mnożenie na dzielenie, dowiemy się ile gramów jest w określonej ilości dekagramów. Przykładowo 2500 g to inaczej 250 dag (2500 * 10 = 250).\n\n## **Jak przeliczać funty na kilogramy?**\n\nFunty są powszechnie wykorzystywane w krajach z systemem imperialnym. Można je nazwać odpowiednikiem metrycznego kilograma, mimo że stanowią około połowę jego wagi. **1 funt (lbs) to około 0,454 kilograma**. Warto zapamiętać współczynnik lbs na kg, ponieważ w podróży nie zawsze jest czas na przeszukiwanie internetu, celem znalezienia odpowiedzi na pytanie "Ile kilogramów ma funt?".\n\nWarto również poznać współczynnik przeliczania kg na lbs. Otóż 1 kg to 2,205 funta. Zapamiętując te dwie liczby, już nigdy nie będziesz miał problemu z przeliczaniem masy w krajach z systemem imperialnym.\n\n## **Uncje na gramy - jak przeliczyć?**\n\nUncja (oz) jest szeroko stosowana do określania wagi metali szlachetnych. Na przykład chcąc zakupić złoto, najczęściej jego waga zostanie Ci podana w uncjach. **Jeśli nie chcesz następnym razem w zadawać sobie pytanie "Ile gram ma uncja?", zapamiętaj ten współczynnik: 1 uncja to 28,3495 grama**. Tak więc kupując 10 oz złota, kupujesz 283,495 gram tego szlachetnego kruszcu. **Jednak ile uncji ma gram? Otóż 1 g to 0,0353 uncji**, więc jeśli zakupisz 200 gram złota, będzie to równe 7,06 oz.\n\nPrzydatne może się również okazać przeliczanie funtów na uncje, szczególnie wyjeżdżając do kraju z systemem imperialnym. Zapamiętaj, że **1 funt to 16 uncji, a 1 uncja to 1/16 lbs, czyli 0,0625 funta**. Z tą wiedzą, przeliczanie funtów i uncji w podróży nie powinno być już dla Ciebie wyzwaniem.\n\n## **Ile gram ma karat?**\n\nKarat (ct) jest wszystkim znaną jednostką masy. Jednak mało kto wie ile gram ma karat. **Współczynnik przeliczania karatów na gramy jest prosty do zapamiętania: 1 karat to 0,2 grama**. Oznacza to, że kupując pierścionek, z brylantami ważącymi 0,05 ct, waga brylantów będzie równa 0,01 grama.\n\nŁatwo zatem wyciągnąć wniosek, że **1 gram to 5 karatów**, więc kupując pierścionek z 1-karatowym diamentem, otrzymamy 5 g tego szlachetnego kruszcu. Zapamiętaj te proste współczynniki, a nigdy już nie będziesz miał problemu podczas wizyty u jubilera.`,
		meta: {
			description:
				'Skorzystaj z przelicznika masy, żeby przeliczać lbs na kg, uncje na gramy, czy karaty na gramy. Przeliczaj między systemem metrycznym i imperialnym.'
		},
		subcalculators: mass_converter
	},

	{
		id: 'przelicznik-objetosci',
		type: 'przelicznik',
		name: 'objętości',
		title: 'Przelicznik objętości',
		description:
			'Łatwy w użyciu kalkulator objętości, który ułatwi Ci przeliczanie jednostek objętości.',
		icon: 'open_in_full',
		about:
			'Jednostki objętości to miary używane do określania wielkości przestrzeni zajmowanej przez ciało lub substancję. Najczęściej stosowanymi jednostkami objętości są metr sześcienny, litr i mililitr. Metr sześcienny to objętość sześcianu o boku długości jednego metra.',
		subcalculators: volume_converter
	},
	{
		id: 'przelicznik-cisnienia',
		type: 'przelicznik',
		name: 'ciśnienia',
		title: 'Przelicznik ciśnienia',
		description:
			'Łatwy w użyciu kalkulator ciśnienia, który ułatwi Ci przeliczanie jednostek ciśnienia.',
		icon: 'tire_repair',

		about:
			'Ciśnienie to siła wywierana na jednostkową powierzchnię, równa stosunkowi siły działającej prostopadle do tej powierzchni do wielkości tej powierzchni. W układzie SI jednostką ciśnienia jest paskal (Pa), który odpowiada sile jednego newtona działającej na jeden metr kwadratowy powierzchni',
		subcalculators: pressure_converter
	},
	{
		id: 'przelicznik-energii',
		type: 'przelicznik',
		name: 'energii',
		title: 'Przelicznik energii',
		description:
			'Łatwy w użyciu kalkulator energii, który ułatwi Ci przeliczanie jednostek energii.',
		icon: 'bolt',

		about:
			'Energia to abstrakcyjna koncepcja opisująca zdolność do wykonywania pracy lub powodowania zmiany, wyrażana często w różnych formach, takich jak ciepło, prąd elektryczny, światło czy ruch.',
		subcalculators: energy_converter
	},
	{
		id: 'przelicznik-czestotliwosci',
		type: 'przelicznik',
		name: 'częstotliwości',
		title: 'Przelicznik częstotliwości',
		description:
			'Łatwy w użyciu kalkulator częstotliwości energii, który ułatwi Ci przeliczanie jednostek częstotliwości.',
		icon: 'radio',

		about:
			'Częstotliwość to miara ilości powtórzeń lub oscylacji zjawiska na jednostkę czasu. Najczęściej częstotliwość jest wyrażana w hercach (Hz) i odnosi się do liczby cykli, oscylacji lub zmian w jednostce czasu, na przykład liczby fal dźwiękowych lub drgań elektromagnetycznych w jednej sekundzie.',
		subcalculators: frequency_converter
	},
	{
		id: 'przelicznik-gestosci',
		type: 'przelicznik',
		name: 'gęstości',
		title: 'Przelicznik gęstości',
		description:
			'Łatwy w użyciu kalkulator gęstości, który ułatwi Ci przeliczanie jednostek gęstości.',
		icon: 'apps',

		about:
			'Gęstość to wielkość fizyczna, która określa masę substancji przypadającą na jednostkę objętości. Innymi słowy, jest to stosunek masy pewnej ilości substancji do zajmowanej przez nią objętości. Jednostką gęstości w układzie SI jest kilogram na metr sześcienny.',
		subcalculators: density_converter
	},

	{
		id: 'przelicznik-mocy',
		type: 'przelicznik',
		name: 'mocy',
		title: 'Przelicznik mocy',
		description: 'Łatwy w użyciu kalkulator mocy, który ułatwi Ci przeliczanie jednostek mocy.',
		icon: 'electrical_services',
		about:
			'Moc jest wielkością fizyczną, która informuje o szybkości wykonywania danej pracy. Im szybciej zostanie wykonana praca, tym większa będzie moc. Moc z definicji jest równa stosunkowi wykonanej pracy do czasu, w którym ta została wykonana.',
		subcalculators: power_converter
	},
	{
		id: 'przelicznik-predkosci',
		type: 'przelicznik',
		name: 'prędkości',
		description:
			'Łatwy w użyciu kalkulator prędkości, który ułatwi Ci przeliczanie jednostek prędkości.',
		title: 'Przelicznik prędkości',
		icon: 'speed',
		about:
			'Prędkość to miara szybkości zmiany położenia w czasie. Jest to wektorowa wielkość fizyczna, która określa, jak szybko i w którym kierunku porusza się obiekt względem punktu odniesienia. Jednostką prędkości w układzie SI jest metr na sekundę.',
		subcalculators: velocity_converter
	},
	{
		id: 'przelicznik-sily',
		type: 'przelicznik',
		name: 'siły',
		description: 'Łatwy w użyciu kalkulator siły, który ułatwi Ci przeliczanie jednostek siły.',
		title: 'Przelicznik siły',
		icon: 'swap_horiz',
		about:
			'Siła to wektorowa wielkość fizyczna będąca miarą oddziaływań fizycznych między ciałami. Jednostką miary siły w układzie SI jest niuton. Nazwa tej jednostki pochodzi od nazwiska angielskiego fizyka Isaaca Newtona.',
		subcalculators: force_converter
	},
	{
		id: 'przelicznik-powierzchni',
		type: 'przelicznik',
		name: 'powierzchni',
		description:
			'Łatwy w użyciu kalkulator powierzchni, który ułatwi Ci przeliczanie jednostek pola powierzchni.',
		title: 'Przelicznik powierzchni',
		icon: 'crop_square',
		about:
			'Jednostki miary powierzchni to sposoby określania wielkości obszarów na płaszczyźnie lub na powierzchni sferycznej. Służą do pomiaru i porównywania wielkości różnych terenów, takich jak lasy, jeziora, kraje czy kontynenty. Jednostką podstawową miary powierzchni w układzie SI jest metr kwadratowy.',

		subcalculators: area_converter
	}
];
