import Controllers from '$lib/components/calculators/Controllers/Controllers.svelte';

const getDateDifference = (startDate, finalDate) => {
	var delta = Math.abs(finalDate - startDate) / 1000;

	let days = Math.floor(delta / 86400);
	delta -= days * 86400;
	let hours = Math.floor(delta / 3600) % 24;
	delta -= hours * 3600;
	let minutes = Math.floor(delta / 60) % 60;
	delta -= minutes * 60;
	let seconds = delta % 60;

	return { seconds, minutes, hours, days };
};
const getResultByHistory = (history) => {
	const targetDate = history.reduce((date, curr) => {
		date.setSeconds(date.getSeconds() + parseInt(curr.seconds || 0) * curr.operation);
		date.setMinutes(date.getMinutes() + parseInt(curr.minutes || 0) * curr.operation);
		date.setHours(date.getHours() + parseInt(curr.hours || 0) * curr.operation);
		date.setDate(date.getDate() + parseInt(curr.days || 0) * curr.operation);
		return date;
	}, new Date(0));

	let { seconds, minutes, hours, days } = getDateDifference(targetDate, new Date(0));

	return {
		table: {
			keys: ['Dni', 'Godziny', 'Minuty', 'Sekundy', 'Razem'],
			values: [[days, hours, minutes, seconds]]
		},
		type: 'table',
		sameWidth: true,
		history
	};
};

export default [
	{
		label: 'Dodawanie i odejmowanie czasu',
		component: Controllers,
		controllers: [
			{
				id: 'days',
				defaultValue: '',
				element: 'input',
				label: 'Dni',
				attributes: {
					type: 'number',
					placeholder: 'Dni',
					min: 0
				}
			},
			{
				id: 'hours',
				defaultValue: '',
				element: 'input',
				label: 'Godziny',
				attributes: {
					type: 'number',
					placeholder: 'Godziny',
					min: 0
				}
			},
			{
				id: 'minutes',
				defaultValue: '',
				element: 'input',
				label: 'Minuty',
				attributes: {
					type: 'number',
					placeholder: 'Minuty',
					min: 0
				}
			},
			{
				id: 'seconds',
				defaultValue: '',
				element: 'input',
				label: 'Sekundy',
				attributes: {
					type: 'number',
					placeholder: 'Sekundy',
					min: 0
				}
			}
		],
		buttons: [
			{
				label: 'Dodaj',
				action: (dataset, history) => {
					if (Object.values(dataset).every((val) => ['0', ''].includes(val.trim()))) {
						return { error: 'Nie można wprowadzać pustych wartości' };
					}

					const updatedHistory = [...history, { ...dataset, operation: 1 }];
					return getResultByHistory(updatedHistory);
				}
			},
			{
				label: 'Odejmij',
				variant: 'outline',
				action: (dataset = {}, history) => {
					if (Object.values(dataset).every((val) => ['0', ''].includes(val.trim()))) {
						return { error: 'Nie można wprowadzać pustych wartości' };
					}

					const updatedHistory = [...history, { ...dataset, operation: -1 }];
					return getResultByHistory(updatedHistory);
				}
			}
		],
		history: {
			template: {
				text: 'Dni: {days}, Godziny: {hours}, Minuty: {minutes}, Sekundy: {seconds}',
				icon: {
					key: 'operation',
					values: {
						1: { name: 'add', color: 'green' },
						'-1': { name: 'remove', color: 'red' }
					}
				}
			},
			onRemove: (history, index) => {
				const newHistory = history.filter((_, i) => i !== index);
				return getResultByHistory(newHistory);
			}
		},
		layout: {
			gridTemplate: '"days hours minutes seconds" / 1fr 1fr 1fr 1fr'
		},
		resetOnSubmit: true
	}
];
