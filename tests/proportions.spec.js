import { test, expect } from '@playwright/test';

const EMPTY_FIELD_ITERATIONS_COUNT = 3;

async function getSubmitButton(page) {
	return await page.getByRole('button', { name: 'Oblicz' });
}
async function getResetButton(page) {
	return await page.getByRole('button', { name: 'Resetuj' });
}
async function getInputs(page) {
	return await page.locator('div.controls').first().getByRole('spinbutton').all();
}

test('Test if every combination of empty field returns correct result', async ({ page }) => {
	await page.goto('/kalkulator-proporcji');

	const submitButton = await getSubmitButton(page);
	const inputs = await getInputs(page);

	const indexesMap = [0, 1, 2, 3];

	for (let iterations = 0; iterations < EMPTY_FIELD_ITERATIONS_COUNT; iterations++) {
		// Loop around every combination of empty field
		for (let i = 0; i < inputs.length; i++) {
			const toFillIndexes = indexesMap.filter((idx) => idx !== i);

			// Clear the field of the number you are looking for and fill in the rest with random numbers
			await inputs[i].fill('');
			await inputs[toFillIndexes[0]].fill((Math.random() * 1000).toString());
			await inputs[toFillIndexes[1]].fill((Math.random() * 1000).toString());
			await inputs[toFillIndexes[2]].fill((Math.random() * 1000).toString());

			// Find the properties of the formula
			// Formula: a = b * c / d
			const divider = await inputs[3 - i].inputValue(); // d
			const multipliers = await Promise.all(
				toFillIndexes
					.filter((idx) => idx !== 3 - i)
					.map(async (idx) => await inputs[idx].inputValue())
			); // b & c

			const result = (multipliers[0] * multipliers[1]) / divider; // a

			await submitButton.click();
			await expect(
				inputs[i],
				'The field with searched value should be equal to the calculated result'
			).toHaveValue(result.toString());
		}
	}
});

test('Test if an error message appears when the number of completed fields is less than 3', async ({
	page
}) => {
	await page.goto('/kalkulator-proporcji');

	// SPRAWDŹ CZY NIE MOŻNA TEGO UPROŚCIĆ

	const inputs = await getInputs(page);
	const submitButton = await getSubmitButton(page);

	await inputs[0].fill('12');
	await submitButton.click();
	await expect(
		page.locator('div.errorMessage').first(),
		'Error message shound be visible'
	).toBeVisible();

	await inputs[1].fill('24');
	await submitButton.click();
	await expect(
		page.locator('div.errorMessage').first(),
		'Error message shound be visible'
	).toBeVisible();

	await inputs[2].fill('54');
	await submitButton.click();
	await expect(
		page.locator('div.errorMessage').first(),
		'Error message shound not be visible'
	).not.toBeVisible();

	await inputs[2].fill('99');
	await submitButton.click();
	await expect(
		page.locator('div.errorMessage').first(),
		'Error message shound not be visible'
	).not.toBeVisible();
});

test('Test if reset button works', async ({ page }) => {
	await page.goto('/kalkulator-proporcji');

	const inputs = await getInputs(page);
	const submitButton = await getSubmitButton(page);
	const resetButton = await getResetButton(page);

	await inputs[0].fill('10');
	await inputs[2].fill('20');
	await inputs[3].fill('30');

	await submitButton.click();
	await resetButton.click();

	for (const [i, input] of inputs.entries()) {
		await expect(input, `Input with index: ${i}, should be empty`).toHaveValue('');
	}
});
