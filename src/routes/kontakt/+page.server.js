import { seo, website } from '$lib/assets/seo';

export const load = async () => {
	const metaTags = seo(
		{
			canonical: `${website.baseUrl}/kontakt`,
			title: `Kontakt ${website.titleSuffix}`
		},
		true
	);

	return { metaTags };
};
