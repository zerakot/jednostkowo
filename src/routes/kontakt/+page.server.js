import { seo, website } from '$lib/assets/seo';

export const load = async () => {
	const metaTags = seo(
		{
			canonical: `${website.baseUrl}/kontakt`,
			title: `Kontakt ${website.titleSuffix}`,
			description:
				'Jeśli chcesz zasugerować zmianę lub znalazłeź błąd na stronie, skontaktuj się ze mną. Kontakt z użytkownikami jest dla mnie bardzo ważny.'
		},
		true
	);

	return { metaTags };
};
