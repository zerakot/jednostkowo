import { calculators } from '$lib/assets/calculators';
import { seo, website } from '$lib/assets/seo';

export const load = ({ params }) => {
	const id = params?.id;
	const page = calculators?.find((item) => item.id === id) || calculators[0];

	const metaTags = seo(
		{
			title: `${page?.title} ${website.titleSuffix}`,
			canonical: `${website.baseUrl}/${page?.id || calculators[0]?.id}`,
			description: `${page?.description} Jednostkowo.pl - Twój pomocnik w pracy z liczbami. Obliczanie procentów, przeliczanie jednostek, kalkulator proporcji. Wszystko w jednym miejscu. Sprawdź!`
		},
		true
	);

	return {
		name: page.name,
		description: page.description,
		id: page?.id,
		title: page?.title,
		metaTags
	};
};
