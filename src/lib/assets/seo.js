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
				url: `${website.baseUrl}/images/logos/900x800.png`,
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
		image: `${website.baseUrl}/images/logos/900x800.png`
	}
};

export const seo = (values, overwrite) => {
	/* if (overwrite) {
	} */
	return mergeDeep(defaultSeo, values);
};
