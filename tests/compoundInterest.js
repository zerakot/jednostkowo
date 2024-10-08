export const dataset = {
	basic: [
		{
			input: {
				ammount: '5612',
				periods: '13',
				periodsType: 'Lata',
				interestRate: '4',
				capitalisation: 'Rocznie'
			},

			output: {
				finalAmount: '9344,39',
				profit: '3732,39'
			}
		},
		{
			input: {
				ammount: '9876.67',
				periods: '15',
				periodsType: 'Miesiące',
				interestRate: '6.3',
				capitalisation: 'Kwartalnie'
			},

			output: {
				finalAmount: '10 679,35',
				profit: '802,68'
			}
		},
		{
			input: {
				ammount: '120000.99',
				periods: '12',
				periodsType: 'Lata',
				interestRate: '7.8',
				capitalisation: 'Miesięcznie'
			},

			output: {
				finalAmount: '305 048,6',
				profit: '185 047,61'
			}
		}
	],
	advanced: [
		{
			input: {
				ammount: '615342.8',
				periods: '16',
				periodsType: 'Miesiące',
				interestRate: '1.95',
				capitalisation: 'Kwartalnie',
				regularPaymentAmount: '178.20',
				regularPaymentFrequency: 'Miesięcznie'
			},
			output: {
				finalAmount: '634 402,46',
				depositsTotal: '2890,84',
				profit: '16 168,82'
			}
		},
		{
			input: {
				ammount: '9999.99',
				periods: '20',
				periodsType: 'Miesiące',
				interestRate: '2',
				capitalisation: 'Miesięcznie',
				regularPaymentAmount: '150',
				regularPaymentFrequency: 'Kwartalnie'
			},
			output: {
				finalAmount: '11 358,04',
				depositsTotal: '1019,38',
				profit: '338,66'
			}
		},
		{
			input: {
				ammount: '3269.42',
				periods: '8',
				periodsType: 'Lata',
				interestRate: '4.44',
				capitalisation: 'Kwartalnie',
				regularPaymentAmount: '128.99',
				regularPaymentFrequency: 'Rocznie'
			},
			output: {
				finalAmount: '5919,8',
				depositsTotal: '1265,2',
				profit: '1385,18'
			}
		}
	]
};

export async function getSubmitButton(page) {
	return await page.getByRole('button', { name: 'Oblicz' });
}
export async function getInputs(page) {
	const ammount = await page.getByLabel('Kapitał początkowy').first();
	const periods = await page.getByLabel('Okres oszczędzania').first();
	const periodsType = await page.getByLabel('Typ okresu').first();
	const interestRate = await page.getByLabel('Oprocentowanie [%]').first();
	const capitalisation = await page.getByLabel('Kapitalizacja odsetek').first();
	const regularPaymentAmount = await page.getByLabel('Kwota regularnej wpłaty').first();
	const regularPaymentFrequency = await page.getByLabel('Częstotliwość regularnej wpłaty').first();

	return {
		ammount,
		periods,
		periodsType,
		interestRate,
		capitalisation,
		regularPaymentAmount,
		regularPaymentFrequency
	};
}
export async function getResultDescription(page) {
	const resultDescription = page.locator('p.description').first();

	// Initialize description numbers
	const finalAmount = await resultDescription.getByTestId('finalAmount');
	const depositsTotal = await resultDescription.getByTestId('depositsTotal');
	const profit = await resultDescription.getByTestId('profit');

	return { finalAmount, depositsTotal, profit };
}
