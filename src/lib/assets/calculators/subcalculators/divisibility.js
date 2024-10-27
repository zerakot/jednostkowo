import Controllers from '$lib/components/calculators/Controllers/Controllers.svelte';

export default [
	{
		label: 'Sprawdzanie czy liczba jest podzielna przez drugą',
		component: Controllers,
		controllers: [
			{
				id: 'a',
				defaultValue: '',
				element: 'input',
				label: 'Licznik (nad kreską ułamkową)',
				attributes: {
					type: 'number',
					placeholder: 'Podaj wartość liczika'
				}
			},
			{
				id: 'b',
				defaultValue: '',
				element: 'input',
				label: 'Mianownik (pod kreską ułamkową)',
				attributes: {
					type: 'number',
					placeholder: 'Podaj wartość mianownika'
				}
			}
		],
		buttons: [
			{
				label: 'Oblicz',
				action: (dataset) => {
					let result = parseFloat(dataset.a) % parseFloat(dataset.b) === 0 ? '' : 'nie';
					let response = `Liczba ${dataset.a} <b>${result} jest podzielna</b> przez ${dataset.b}.`;
					return { description: response };
				}
			}
		]
	}
];
