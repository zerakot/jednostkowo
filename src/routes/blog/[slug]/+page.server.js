import blog from '$lib/blog.json';

export const load = ({ params }) => {
	const slug = params?.slug;
	const post = blog?.posts?.find((post) => post?.slug === slug);

	return { post };
};
