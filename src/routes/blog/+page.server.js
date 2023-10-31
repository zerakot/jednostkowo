import blog from '$lib/assets/blog.json';

export const load = () => {
	const posts = blog.posts;

	return { posts };
};
