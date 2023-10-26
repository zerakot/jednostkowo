import { pages } from '$lib/CMS';

export const load = ({ params }) => {
	const id = params.id;
	const page = pages?.find((item) => item.id === id);

	if (!page) {
		throw error(404, {
			message: 'Not found'
		});
	}

	return {
		type: page?.type,
		name: page.name,
		description: page.description,
		category: page?.id,
		title: page?.title
	};
};
