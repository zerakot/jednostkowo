import { calculators } from '$lib/assets/calculators/calculators';
import { seo, website } from '$lib/assets/seo';

export const load = ({ params }) => {
	const id = params?.id;
	const page = calculators?.find((item) => item.id === id) || calculators[0];

	const metaTags = seo(
		{
			title: `${page?.title} ${website.titleSuffix}`,
			canonical: `${website.baseUrl}/${page?.id}`,
			description: `${page?.meta?.description || page?.description}`
		},
		true
	);

	return {
		id: page?.id,
		metaTags
	};
};
