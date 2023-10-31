import { pages } from '$lib/CMS';
import { error, redirect } from '@sveltejs/kit';

export const load = ({ params }) => {
	const id = params?.id;
	const type = params?.type;
	const page = pages?.find((item) => item.id === id && item?.type === type);

	if (!page) {
		throw error(404, { message: `Nie znaleziono kalkulatora` });
	}

	return {
		type: page?.type,
		name: page.name,
		description: page.description,
		id: page?.id,
		title: page?.title
	};
};
