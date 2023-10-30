import { pages } from '$lib/CMS';
import { redirect } from '@sveltejs/kit';

export const load = () => {
	throw redirect(302, `${pages[0]?.type}-${pages[0]?.id}`);
};
