import { test, expect } from '@playwright/test';
import { round } from '../src/lib/utils';

const getInputs = async (page) => {
	const a = await page.getByLabel('Długość boku A').first();
	const b = await page.getByLabel('Długość boku B').first();
	const c = await page.getByLabel('Długość boku C').first();
	const submitButton = await page.getByRole('button', { name: 'Oblicz' });

	return { a, b, c, submitButton };
};

test('Test if random input generates correct result', async ({ page }) => {
	await page.goto('/kalkulator-pitagorasa/');

	const { a, b, c, submitButton } = await getInputs(page);

	// Obsłuż losowe pola wypełnione jak w proporcjach, gdzie czasem wypełnione są A i B, a czasem A i C itp.
	for (let i = 0; i < 10; i++) {
		const randomNumbers = Array.from({ length: 2 }).map(() => Math.floor(Math.random() * 100));

		await a.fill(randomNumbers[0].toString());
		await b.fill(randomNumbers[1].toString());
		await submitButton.click();

		const result = round(
			Math.sqrt(Math.pow(randomNumbers[0], 2) + Math.pow(randomNumbers[1], 2)),
			5
		);

		console.log(result);
		await expect(c, 'Should return correct number').toHaveValue(result.toString());
	}
});
