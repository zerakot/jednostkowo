import blog from '$lib/assets/blog.json';
import { error } from '@sveltejs/kit';

export const load = ({ params }) => {
	const slug = params?.slug;
	const post = blog?.posts?.find((post) => post?.slug === slug);

	if (!post) {
		throw error(404, {
			message: 'Nie znaleziono wpisu',
			returnHref: '/blog',
			returnLabel: 'bloga'
		});
	}

	return { post };
};
