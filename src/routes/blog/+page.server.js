import { posts } from '$lib/assets/blog.js';
import { seo, website } from '$lib/assets/seo';

export const load = () => {
	const metaTags = seo(
		{
			title: `Blog ${website.titleSuffix}`,
			canonical: `${website.baseUrl}/blog`,
			description: 'Blog Jednostkowo.pl - baza wiedzy o przeliczaniu jednostek'
		},
		true
	);

	return { posts, metaTags };
};
