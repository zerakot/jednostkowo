export const dataset = {
	basic: [
		{
			input: [
				{
					hours: '1',
					minutes: '2',
					seconds: '30',
					operation: 1
				},
				{
					minutes: '22',
					seconds: '3',
					operation: -1
				},
				{
					hours: '11',
					operation: 1
				}
			],
			output: {
				table: ['0', '11', '40', '27'],
				history: [
					'Dni: 0, Godziny: 1, Minuty: 2, Sekundy: 30',
					'Dni: 0, Godziny: 0, Minuty: 22, Sekundy: 3',
					'Dni: 0, Godziny: 11, Minuty: 0, Sekundy: 0'
				]
			}
		},
		{
			input: [
				{
					hours: '13',
					minutes: '8',
					operation: 1
				},
				{
					hours: '20',
					seconds: '23',
					operation: 1
				},
				{
					seconds: '16',
					operation: 1
				}
			],
			output: {
				table: ['1', '9', '8', '39'],
				history: [
					'Dni: 0, Godziny: 13, Minuty: 8, Sekundy: 0',
					'Dni: 0, Godziny: 20, Minuty: 0, Sekundy: 23',
					'Dni: 0, Godziny: 0, Minuty: 0, Sekundy: 16'
				]
			}
		},
		{
			input: [
				{
					days: '1',
					minutes: '8',
					operation: 1
				},
				{
					hours: '23',
					seconds: '23',
					operation: 1
				},
				{
					minutes: '50',
					operation: 1
				},
				{
					minutes: '23',
					operation: -1
				},
				{
					minutes: '30',
					operation: 1
				}
			],
			output: {
				table: ['2', '0', '5', '23'],
				history: [
					'Dni: 1, Godziny: 0, Minuty: 8, Sekundy: 0',
					'Dni: 0, Godziny: 23, Minuty: 0, Sekundy: 23',
					'Dni: 0, Godziny: 0, Minuty: 50, Sekundy: 0',
					'Dni: 0, Godziny: 0, Minuty: 23, Sekundy: 0',
					'Dni: 0, Godziny: 0, Minuty: 30, Sekundy: 0'
				]
			}
		}
	],
	historyRemove: [
		{
			input: [
				{
					hours: '1',
					minutes: '2',
					seconds: '30',
					operation: 1
				},
				{
					minutes: '22',
					seconds: '3',
					operation: -1
				},
				{
					removeId: 1
				},
				{
					hours: '11',
					operation: 1
				}
			],
			output: {
				table: ['0', '12', '2', '30'],
				history: [
					'Dni: 0, Godziny: 1, Minuty: 2, Sekundy: 30',
					'Dni: 0, Godziny: 11, Minuty: 0, Sekundy: 0'
				]
			}
		},
		{
			input: [
				{
					days: '12',
					hours: '3',
					operation: 1
				},
				{
					days: '1',
					minutes: '22',
					operation: -1
				},
				{
					days: '1',
					hours: '02',
					minutes: '23',
					seconds: '16',
					operation: 1
				},
				{ seconds: '55', operation: -1 },
				{
					removeId: 3
				},
				{
					hours: '2',
					minutes: '15',
					operation: 1
				}
			],
			output: {
				table: ['12', '7', '16', '16'],
				history: [
					'Dni: 12, Godziny: 3, Minuty: 0, Sekundy: 0',
					'Dni: 1, Godziny: 0, Minuty: 22, Sekundy: 0',
					'Dni: 1, Godziny: 02, Minuty: 23, Sekundy: 16',
					'Dni: 0, Godziny: 2, Minuty: 15, Sekundy: 0'
				]
			}
		}
	]
};

export async function getResetButton(page) {
	return await page.getByRole('button', { name: 'Resetuj' });
}
export async function getAddButton(page) {
	return await page.getByRole('button', { name: 'Dodaj' });
}
export async function getSubtractButton(page) {
	return await page.getByRole('button', { name: 'Odejmij' });
}
export const getInputs = async (page) => {
	const days = await page.getByLabel('Dni').first();
	const hours = await page.getByLabel('Godziny').first();
	const minutes = await page.getByLabel('Minuty').first();
	const seconds = await page.getByLabel('Sekundy').first();

	return {
		days,
		hours,
		minutes,
		seconds
	};
};

export const getResults = async (page) => {
	const table = await page.locator('table').first();
	const daysResult = await table.locator('td').nth(0);
	const hoursResult = await table.locator('td').nth(1);
	const minutesResult = await table.locator('td').nth(2);
	const secondsResult = await table.locator('td').nth(3);
	const totalResults = await table.locator('td').nth(4);

	return { daysResult, hoursResult, minutesResult, secondsResult, totalResults };
};
