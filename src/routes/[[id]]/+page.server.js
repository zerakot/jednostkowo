import { calculators } from '$lib/assets/calculators';
import { seo, website } from '$lib/assets/seo';

export const load = ({ params }) => {
	const id = params?.id;
	const page = calculators?.find((item) => item.id === id) || calculators[0];

	const quizSuffix = page?.quiz ? ' + Zadania i przykłady' : '';
	const metaTags = seo(
		{
			title: `${page?.title} ${website.titleSuffix}${quizSuffix}`,
			canonical: `${website.baseUrl}/${page?.id || 'Jednostkowo.pl'}`,
			description: `${page?.meta?.description || page?.description}`
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
