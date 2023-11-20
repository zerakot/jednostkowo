import { posts } from '$lib/assets/blog.js';
import { error } from '@sveltejs/kit';
import { seo, website } from '$lib/assets/seo';

export const load = ({ params }) => {
	const slug = params?.slug;
	const post = posts?.find((post) => post?.slug === slug);

	if (!post) {
		throw error(404, {
			message: 'Nie znaleziono wpisu',
			returnHref: '/blog',
			returnLabel: 'bloga'
		});
	}

	const metaTags = seo(
		{
			title: `${post?.title} ${website.titleSuffix}`,
			canonical: `${website.baseUrl}/blog/${post?.slug}`,
			openGraph: {
				image: post?.image
			},
			twitter: {
				image: post?.image
			}
		},
		true
	);

	return { post, metaTags };
};
