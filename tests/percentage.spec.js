import { test, expect } from '@playwright/test';

async function getOperations(page) {
	return await page.locator('div.operation').all();
}
async function getInputsFromOperation(operation) {
	const aInput = await operation.getByPlaceholder('A').first();
	const bInput = await operation.getByPlaceholder('B').first();

	return [aInput, bInput];
}
async function getResultFromOperation(operation) {
	return await operation.locator('div.result').first();
}

const correctDataset = [
	{ inputs: ['13', '50'], result: '6,5' },
	{ inputs: ['54', '32'], result: '168,75' },
	{ inputs: ['67', '89'], result: '126,63' },
	{ inputs: ['42', '12'], result: '36,96' },
	{ inputs: ['91', '82'], result: '-9,89' }
];
const bannedResults = ['NaN', 'undefined', 'null'];

test('Test if correct input returns correct output', async ({ page }) => {
	await page.goto('/');

	const operations = await getOperations(page);

	for (const [i, operation] of operations.entries()) {
		const [a, b] = await getInputsFromOperation(operation);

		await a.fill(correctDataset[i].inputs[0]);
		await b.fill(correctDataset[i].inputs[1]);

		const result = await getResultFromOperation(operation);

		await expect(result, 'Should return correct number').toHaveText(correctDataset[i].result);
	}
});
test('Test if incomplete input doesnt return error', async ({ page }) => {
	await page.goto('/');

	const operations = await getOperations(page);

	for (const [i, operation] of operations.entries()) {
		const [a, b] = await getInputsFromOperation(operation);

		//Fill both inputs and clear A input
		await a.fill(correctDataset[i].inputs[0]);
		await b.fill(correctDataset[i].inputs[1]);
		await a.fill('');

		const result = await getResultFromOperation(operation);

		await expect(result, 'Should not return error when A input is cleared').not.toHaveText(
			bannedResults
		);

		//Fill A input and clear B input
		await a.fill(correctDataset[i].inputs[0]);
		await b.fill('');

		await expect(result, 'Should not return error when B input is cleared').not.toHaveText(
			bannedResults
		);

		//Both inputs are cleared
		await a.fill('');

		await expect(result, 'Should not return error when bots inputs are cleared').not.toHaveText(
			bannedResults
		);
	}
});
