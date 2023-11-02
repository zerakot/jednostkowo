import { seo, website } from '$lib/assets/seo';

export const load = async () => {
	const metaTags = seo(
		{
			title: `Kontakt ${website.titleSuffix}`,
			openGraph: {
				url: `${website.baseUrl}/kontakt`,
				title: `Kontakt ${website.titleSuffix}`
			},
			twitter: {
				title: `Kontakt ${website.titleSuffix}`
			}
		},
		true
	);

	return { metaTags };
};
