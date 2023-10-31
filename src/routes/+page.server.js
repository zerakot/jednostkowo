import { pages } from '$lib/CMS';
import { redirect } from '@sveltejs/kit';

export const load = () => {
	const firstConverter = pages?.find((page) => page?.type === 'przelicznik');
	throw redirect(302, `${firstConverter?.type}-${firstConverter?.id}`);
};
