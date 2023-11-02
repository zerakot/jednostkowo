import { calculators } from '$lib/assets/calculators';
import { error } from '@sveltejs/kit';
import { seo, website } from '$lib/assets/seo';

export const load = ({ params }) => {
	const id = params?.id;
	const type = params?.type;
	const page = calculators?.find((item) => item.id === id && item?.type === type);

	if (!page) {
		throw error(404, { message: `Nie znaleziono kalkulatora` });
	}

	const metaTags = seo(
		{
			title: `${page?.title} ${website.titleSuffix}`,
			canonical: `${website.baseUrl}/${page?.type}-${page?.id}`,
			description: `${page?.description} Jednostkowo.pl - Twój pomocnik w pracy z liczbami. Obliczanie procentów, przeliczanie jednostek, kalkulator proporcji. Wszystko w jednym miejscu. Sprawdź!`
		},
		true
	);

	return {
		type: page?.type,
		name: page.name,
		description: page.description,
		id: page?.id,
		title: page?.title,
		metaTags
	};
};
