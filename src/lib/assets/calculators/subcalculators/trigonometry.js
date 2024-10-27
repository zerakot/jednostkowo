import Controllers from '$lib/components/calculators/Controllers/Controllers.svelte';
import { round } from '../../../utils';

export default [
	{
		label: 'Obliczanie wartości funkcji trygonometrycznych',
		component: Controllers,
		controllers: [
			{
				id: 'unit',
				element: 'select',
				label: 'Podaj w jakich jednostkach chcesz wprowadzić kąt',
				options: [
					{
						label: 'Stopnie',
						name: 'deg',
						default: true
					},
					{
						label: 'Radiany',
						name: 'rad'
					}
				]
			},
			{
				id: 'number',
				element: 'input',
				label: 'Wprowadź wartość kąta',
				attributes: {
					type: 'number',
					placeholder: 'Wprowadź wartość kąta'
				}
			}
		],
		buttons: [
			{
				label: 'Oblicz',
				action: (dataset) => {
					if (!dataset?.number) {
						return { error: 'Podaj wartość kąta.' };
					}

					const unit = dataset?.unit;
					const number = parseFloat(dataset?.number) || 0;

					const formattedNumber = unit === 'deg' ? number * (Math.PI / 180) : number;

					const sinResult = round(Math.sin(formattedNumber) || 0, 4);
					const cosResult = round(Math.cos(formattedNumber) || 0, 4);
					const tanResult = round(Math.tan(formattedNumber) || 0, 4);
					const cotResult = round(1 / tanResult, 4);

					return {
						table: {
							keys: ['sin', 'cos', 'tan', 'cot'],
							values: [[sinResult, cosResult, tanResult, cotResult]]
						},
						type: 'table'
					};
				}
			}
		]
	}
];
