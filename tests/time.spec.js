import { test, expect } from '@playwright/test';
import {
	dataset,
	getAddButton,
	getSubtractButton,
	getResetButton,
	getInputs,
	getResults
} from './time';

//Dodaj obsługę select i dodaj dataset

test('Test if correct input returns correct output', async ({ page }) => {
	await page.goto('/kalkulator-czasu');

	const addButton = await getAddButton(page);
	const subtractButton = await getSubtractButton(page);
	const resetButton = await getResetButton(page);
	const { days, hours, minutes, seconds } = await getInputs(page);

	for (let i = 0; i < dataset.basic.length; i++) {
		await resetButton.click();
		// Fill basic inputs and submit
		for (let j = 0; j < dataset.basic[i].input.length; j++) {
			await days.fill(dataset.basic[i].input[j]?.days || '');
			await hours.fill(dataset.basic[i].input[j]?.hours || '');
			await minutes.fill(dataset.basic[i].input[j]?.minutes || '');
			await seconds.fill(dataset.basic[i].input[j]?.seconds || '');

			if (dataset.basic[i].input[j].operation == 1) {
				await addButton.click();
			} else {
				await subtractButton.click();
			}
		}

		const { daysResult, hoursResult, minutesResult, secondsResult } = await getResults(page);

		/* Sprawdź tabelę */
		await expect(daysResult, 'The days amount in the table should be correct').toContainText(
			dataset.basic[i].output.table[0]
		);
		await expect(hoursResult, 'The hours amount in the table should be correct').toContainText(
			dataset.basic[i].output.table[1]
		);
		await expect(minutesResult, 'The minutes amount in the table should be correct').toContainText(
			dataset.basic[i].output.table[2]
		);
		await expect(secondsResult, 'The seconds amount in the table should be correct').toContainText(
			dataset.basic[i].output.table[3]
		);

		/* Sprawdź historię */
		const historyList = await page.locator('div.history div.list');
		const historyItems = await historyList.locator('div.row p').all();

		for (let h = 0; h < dataset.basic[i].output.history.length; h++) {
			await expect(historyItems[h], 'History item content should be correct').toContainText(
				dataset.basic[i].output.history[h]
			);
		}
	}
});

test('Test if correct input returns correct output when history removed', async ({ page }) => {
	await page.goto('/kalkulator-czasu');

	const addButton = await getAddButton(page);
	const subtractButton = await getSubtractButton(page);
	const resetButton = await getResetButton(page);
	const { days, hours, minutes, seconds } = await getInputs(page);

	for (let i = 0; i < dataset.historyRemove.length; i++) {
		await resetButton.click();

		for (let j = 0; j < dataset.historyRemove[i].input.length; j++) {
			if (!!dataset.historyRemove[i].input[j]?.removeId) {
				// Jeśli w tej iteracji ma być usunięty element z historii
				const buttonId = dataset.historyRemove[i].input[j]?.removeId;

				const historyList = await page.locator('div.history div.list');
				const historyButtons = await historyList.locator('div.row button').all();

				await historyButtons[buttonId].click();
			} else {
				await days.fill(dataset.historyRemove[i].input[j]?.days || '');
				await hours.fill(dataset.historyRemove[i].input[j]?.hours || '');
				await minutes.fill(dataset.historyRemove[i].input[j]?.minutes || '');
				await seconds.fill(dataset.historyRemove[i].input[j]?.seconds || '');

				if (dataset.historyRemove[i].input[j].operation == 1) {
					await addButton.click();
				} else {
					await subtractButton.click();
				}
			}
		}

		const { daysResult, hoursResult, minutesResult, secondsResult } = await getResults(page);

		/* Sprawdź tabelę */
		await expect(daysResult, 'The days amount in the table should be correct').toContainText(
			dataset.historyRemove[i].output.table[0]
		);
		await expect(hoursResult, 'The hours amount in the table should be correct').toContainText(
			dataset.historyRemove[i].output.table[1]
		);
		await expect(minutesResult, 'The minutes amount in the table should be correct').toContainText(
			dataset.historyRemove[i].output.table[2]
		);
		await expect(secondsResult, 'The seconds amount in the table should be correct').toContainText(
			dataset.historyRemove[i].output.table[3]
		);

		/* Sprawdź historię */
		const historyList = await page.locator('div.history div.list');
		const historyItems = await historyList.locator('div.row p').all();

		for (let h = 0; h < dataset.historyRemove[i].output.history.length; h++) {
			await expect(historyItems[h], 'History item content should be correct').toContainText(
				dataset.historyRemove[i].output.history[h]
			);
		}
	}
});

test('Test errow shows when every field is empty', async ({ page }) => {
	await page.goto('/kalkulator-czasu');

	const addButton = await getAddButton(page);
	const subtractButton = await getSubtractButton(page);
	const resetButton = await getResetButton(page);
	const { days, hours, minutes, seconds } = await getInputs(page);

	await days.fill('');
	await hours.fill('');
	await minutes.fill('');
	await seconds.fill('');

	await addButton.click();
	await expect(
		page.locator('div.errorMessage').first(),
		'Error message box should be visible'
	).toBeVisible();

	await resetButton.click();
	await subtractButton.click();
	await expect(
		page.locator('div.errorMessage').first(),
		'Error message box should be visible'
	).toBeVisible();
});
