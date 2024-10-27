import Controllers from '$lib/components/calculators/Controllers/Controllers.svelte';
import { calculateBmi, round } from '../../../utils';

export default [
	{
		label: 'Obliczanie BMI',
		component: Controllers,
		controllers: [
			{
				id: 'height',
				element: 'input',
				label: 'Wzrost [cm]',
				attributes: {
					type: 'number',
					placeholder: 'Podaj swój wzrost'
				}
			},
			{
				id: 'weight',
				element: 'input',
				label: 'Masa ciała [kg]',
				attributes: {
					type: 'number',
					placeholder: 'Podaj masę ciała'
				}
			}
		],
		buttons: [
			{
				label: 'Oblicz',
				action: (dataset) => {
					delete dataset.error;

					if (!dataset?.height || !dataset.weight) return { error: 'Podaj wzrost i masę ciała.' };
					const { bmi, label } = calculateBmi(dataset?.weight, dataset?.height);

					return {
						label,
						scale: [8, 48],
						value: dataset?.height > 30 ? round(bmi) : undefined,
						type: 'scale',
						gradient:
							'to right, rgb(188, 32, 32) 0%, rgb(188, 32, 32) 20%, rgb(211, 136, 136) 20%, rgb(211, 136, 136) 22.50%, rgb(255, 228, 0) 22.50%, rgb(255, 228, 0) 26.25%, rgb(0, 129, 55) 26.25%, rgb(0, 129, 55) 42.50%, rgb(255, 228, 0) 42.50%, rgb(255, 228, 0) 55.00%, rgb(211, 136, 136) 55.00%, rgb(211, 136, 136) 67.50%, rgb(188, 32, 32) 67.50%, rgb(188, 32, 32) 80%, rgb(138, 1, 1) 80%, rgb(138, 1, 1) 100%'
					};
				}
			}
		]
	}
];
