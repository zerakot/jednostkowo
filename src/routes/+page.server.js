import { calculators } from '$lib/assets/calculators';
import { redirect } from '@sveltejs/kit';

export const load = () => {
	const firstConverter = calculators?.find((page) => page?.type === 'przelicznik');
	throw redirect(302, `${firstConverter?.type}-${firstConverter?.id}`);
};
