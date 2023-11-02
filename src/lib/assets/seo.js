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
				url: '/images/logos/900x800.png',
				alt: 'Logo Jednostkowo.pl'
			},
			{
				width: 800,
				height: 600,
				url: '/images/logos/800x600.png',
				alt: 'Logo Jednostkowo.pl'
			},
			{
				url: '/images/logos/900x800.png',
				alt: 'Logo Jednostkowo.pl'
			}
		]
	}
};

export const seo = (values, overwrite) => {
	/* if (overwrite) {
	} */
	return mergeDeep(defaultSeo, values);
};
