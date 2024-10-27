import Controllers from '$lib/components/calculators/Controllers/Controllers.svelte';
import { round } from '../../../utils';

export default [
	{
		label: 'Obliczanie twierdzenia Pitagorasa',
		component: Controllers,
		controllers: [
			{
				id: 'a',
				defaultValue: '',
				element: 'input',
				label: 'Długość boku A (przyprostokątna)',
				attributes: {
					type: 'number',
					placeholder: 'Podaj długość boku A'
				}
			},
			{
				id: 'b',
				defaultValue: '',
				element: 'input',
				label: 'Długość boku B (przyprostokątna)',
				attributes: {
					type: 'number',
					placeholder: 'Podaj długość boku B'
				}
			},
			{
				id: 'c',
				element: 'input',
				defaultValue: '',
				label: 'Długość boku C (przeciwprostokątna)',
				attributes: {
					type: 'number',
					placeholder: 'Podaj długość boku C'
				}
			}
		],
		buttons: [
			{
				label: 'Oblicz',
				action: (dataset) => {
					delete dataset.error;

					let result;
					if ((dataset?.a && dataset.b) || (dataset?.a && dataset.b && dataset.c)) {
						// Jeśli C jest pusty lub wszystkie są uzupełnione, oblicz C
						result = round(Math.sqrt(parseFloat(dataset.a) ** 2 + parseFloat(dataset.b) ** 2), 5);
						dataset.c = result;
					} else if (dataset.b && dataset.c) {
						// Jeśli b i c są dostępne, oblicz a
						result = round(Math.sqrt(parseFloat(dataset.c) ** 2 - parseFloat(dataset.b) ** 2), 5);
						dataset.a = result;
					} else if (dataset.a && dataset.c) {
						// Jeśli a i c są dostępne, oblicz b
						result = round(Math.sqrt(parseFloat(dataset.c) ** 2 - parseFloat(dataset.a) ** 2), 5);
						dataset.b = result;
					} else {
						// Nieprawidłowy zestaw wartości
						return { error: 'Podaj długości dwóch boków.' };
					}
					return { dataset };
				}
			}
		]
	}
];
