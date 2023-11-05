import { mergeDeep } from '../utils';

export const website = {
	baseUrl: 'https://jednostkowo.vercel.app',
	titleSuffix: '• Jednostkowo.pl'
};

const defaultSeo = {
	title: 'Procenty, jednostki, proporcje',
	description:
		'Jednostkowo.pl - Twój pomocnik w pracy z liczbami. Obliczanie procentów, przeliczanie jednostek, kalkulator proporcji. Wszystko w jednym miejscu. Sprawdź!',
	openGraph: {
		locale: 'pl_PL',
		type: 'website',
		title: `Procenty, jednostki, proporcje ${website.titleSuffix}`,
		image: `${website.baseUrl}/images/logos/900x471.png`,
		images: [
			{
				width: 900,
				height: 800,
				url: `${website.baseUrl}/images/logos/900x800.png`,
				alt: 'Logo Jednostkowo.pl'
			},
			{
				width: 800,
				height: 600,
				url: `${website.baseUrl}/images/logos/800x600.png`,
				alt: 'Logo Jednostkowo.pl'
			},
			{
				width: 900,
				height: 471,
				url: `${website.baseUrl}/images/logos/900x471.png`,
				alt: 'Logo Jednostkowo.pl'
			},
			{
				url: `${website.baseUrl}/images/logos/900x471.png`,
				alt: 'Logo Jednostkowo.pl'
			}
		]
	},
	twitter: {
		card: 'summary_large_image',
		site: '@primalmovement',
		title: 'Procenty, jednostki, proporcje',
		description:
			'Jednostkowo.pl - Twój pomocnik w pracy z liczbami. Obliczanie procentów, przeliczanie jednostek, kalkulator proporcji. Wszystko w jednym miejscu. Sprawdź!',
		image: `${website.baseUrl}/images/logos/900x471.png`
	}
};

export const seo = (values, overwrite = false) => {
	let newTags = mergeDeep(defaultSeo, values);

	if (overwrite) {
		const { title, description, canonical } = values;

		if (title) {
			newTags.openGraph.title = title;
			newTags.twitter.title = title;
		}
		if (description) {
			newTags.openGraph.description = description;
			newTags.twitter.description = description;
		}
		if (canonical) {
			newTags.openGraph.url = canonical;
			newTags.twitter.url = canonical;
		}
	}

	return newTags;
};
