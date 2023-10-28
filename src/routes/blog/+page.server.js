import blog from '$lib/blog.json';

export const load = () => {
	const posts = blog.posts;

	return { posts };
};
