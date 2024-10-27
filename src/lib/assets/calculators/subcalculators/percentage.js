import Percentage from '$lib/components/calculators/Percentage/Percentage.svelte';

export default [
	{
		component: Percentage,
		id: 'percentFromNumber',
		name: 'Obliczanie procentu z danej liczby',
		labels: ['% z', '=', ''],
		formula: ({ a, b }) => ({ result: (a / 100) * b })
	},
	{
		component: Percentage,
		id: 'atobPercent',
		name: 'Jakim procentem jest liczba A dla liczby B',
		labels: ['dla', '=', '%'],
		formula: ({ a, b }) => ({ result: (a / b) * 100 })
	},
	{
		component: Percentage,
		id: 'addPercent',
		name: 'Dodaj procent do liczby',
		labels: ['+', '% =', ''],
		formula: ({ a, b }) => ({ result: a + (a * b) / 100 })
	},
	{
		component: Percentage,
		id: 'subtractPercent',
		name: 'Odejmij procent od liczby',
		labels: ['-', '% =', ''],
		formula: ({ a, b }) => ({ result: a - (a * b) / 100 })
	},
	{
		component: Percentage,
		id: 'increaseDecreaseAtob',
		name: 'O ile procent liczba A wzrosła/zmalała w stosunku do B',
		labels: ['do', 'w/z o', '%'],
		formula: ({ a, b }) => ({ result: ((b - a) / a) * 100 })
	}
];
