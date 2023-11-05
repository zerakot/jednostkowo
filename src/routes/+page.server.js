import { seo, website } from '$lib/assets/seo';

export const load = () => {
	const metaTags = seo(
		{
			title: `Jednostkowo.pl - strona główna`,
			canonical: `${website.baseUrl}`,
			description: `Jednostkowo.pl - Twój pomocnik w pracy z liczbami. Obliczanie procentów, przeliczanie jednostek, kalkulator proporcji. Wszystko w jednym miejscu. Sprawdź!`
		},
		true
	);

	return {
		metaTags
	};
};
