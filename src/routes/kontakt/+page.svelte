<script>
	import BlogWidget from '$lib/components/BlogWidget.svelte';
</script>

<svelte:head>
	<meta name="keywords" content="blue" />
</svelte:head>

<div class="container">
	<hgroup>
		<h2>Kontakt</h2>
		<p>
			Zapraszam do kontaktu w każdej sprawie. Chętnie rozważę propozycje współpracy oraz nowych
			pomysłów na rozwój portalu. Jeśli jesteś zainteresowany sprawami technicznymi związanymi z tą
			strona - również chętnie odpowiem na pytania.
		</p>
	</hgroup>
	<section>
		<p>Adres e-mail: <a href="mailto:iktorn2006@wp.pl">iktorn2006@wp.pl</a></p>
		<p>
			Instagram: <a href="https://www.instagram.com/zdjecia_wiktorka/" target="_blank"
				>@zdjecia_wiktorka</a
			>
		</p>
	</section>
	<BlogWidget />

	<!-- Jockey one
        Koulen
        Jua -->
</div>

<!-- 
# Jak obliczyć średnią ocen?\n
To pytanie, które zadaje sobie wielu uczniów i studentów, zwłaszcza przed egzaminami i zaliczeniami. Czy wiesz, jak prawidłowo policzyć średnią ocen z przedmiotów, które masz w planie studiów lub szkolnym? Jeśli nie, to nie martw się - mamy dla Ciebie rozwiązanie!\n
## Kalkulator średniej ocen\n
Na naszej stronie znajdziesz kalkulator średniej ocen, który pomoże Ci w prosty i szybki sposób obliczyć swoją średnią. Wystarczy, że wpiszesz swoje oceny z poszczególnych przedmiotów, a kalkulator sam wyliczy średnią arytmetyczną, ważoną lub harmonijną. Możesz też podać liczbę godzin lub punktów ECTS dla każdego przedmiotu, aby uzyskać dokładniejszy wynik.\n
Kalkulator średniej ocen to nie tylko przydatne narzędzie dla uczniów i studentów, ale także dla nauczycieli i wykładowców, którzy chcą sprawdzić, jak radzą sobie ich podopieczni. Kalkulator pozwala na obliczanie średniej ocen z dowolnej liczby przedmiotów i ocen, a także na zapisywanie i drukowanie wyników.\n
Nie czekaj dłużej - sprawdź nasz kalkulator średniej ocen już dziś i dowiedz się, jak stoisz na tle innych! To świetny sposób na motywowanie się do nauki i poprawiania swoich wyników.\n
## Nasz blog\n
A jeśli chcesz dowiedzieć się więcej o tym, jak oblicza się średnią ocen, to zapraszamy do czytania naszego bloga, gdzie znajdziesz wiele ciekawych artykułów na temat matematyki, fizyki, chemii i innych nauk ścisłych. Na naszym blogu znajdziesz też porady, jak uczyć się skutecznie i efektywnie, jak przygotować się do egzaminów i zaliczeń, jak radzić sobie ze stresem i presją oraz jak cieszyć się nauką.\n
Nasz blog to miejsce, gdzie możesz znaleźć odpowiedzi na wszystkie swoje pytania dotyczące nauki i edukacji. Naszym celem jest pomóc Ci osiągnąć sukces w nauce i życiu. Dlatego stworzyliśmy portal do przeliczania jednostek (np. z metrów na kilometry), operowania na procentach, przeliczania proporcji, obliczania średniej ocen i tym podobne. To wszystko w jednym miejscu, za darmo i bez rejestracji!\n
Zapraszamy Cię do korzystania z naszego portalu i bloga oraz do dzielenia się swoimi opiniami i sugestiami. Jesteśmy otwarci na Twoje potrzeby i oczekiwania. Chcemy być dla Ciebie wsparciem i inspiracją w nauce. Dołącz do naszej społeczności i bądź na bieżąco z nowościami i aktualnościami z zakresu edukacji!\n
Pamiętaj - obliczanie średniej ocen nie musi być trudne i skomplikowane. Z naszym kalkulatorem średniej ocen możesz to zrobić w kilka sekund i bez błędów. Sprawdź sam i przekonaj się, jak łatwo jest obliczyć swoją średnią!
	
 -->

<style lang="scss">
	.container {
		gap: 1rem;
		display: flex;
		flex-direction: column;

		& hgroup {
			color: $text;
			width: 100%;

			& p {
				color: $text-light;
			}
		}

		& section {
			& p a {
				font-weight: bold;
				color: $primary;
			}
		}

		@include lg {
			& hgroup {
				width: 70%;
			}
		}
	}
</style>
