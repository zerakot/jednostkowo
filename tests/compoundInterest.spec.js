import { test, expect } from '@playwright/test';
import { dataset, getSubmitButton, getInputs, getResultDescription } from './compoundInterest';

//Dodaj obsługę select i dodaj dataset

test('Test if correct basic input returns correct output', async ({ page }) => {
	await page.goto('/kalkulator-procentu-składanego');

	const submitButton = await getSubmitButton(page);
	const { ammount, periodsType, periods, interestRate, capitalisation } = await getInputs(page);

	for (let i = 0; i < dataset.basic.length; i++) {
		// Fill basic inputs and submit
		await ammount.fill(dataset.basic[i].input.ammount);
		await periods.fill(dataset.basic[i].input.periods);
		await periodsType.selectOption({ label: dataset.basic[i].input.periodsType });
		await interestRate.fill(dataset.basic[i].input.interestRate);
		await capitalisation.selectOption({ label: dataset.basic[i].input.capitalisation });
		await submitButton.click();

		const { finalAmount, depositsTotal, profit } = await getResultDescription(page);

		// Check if numbers are valid
		await expect(
			finalAmount,
			'The final amount in the results description should be correct'
		).toContainText(dataset.basic[i].output.finalAmount);
		await expect(profit, 'The profit in the results description should be correct').toContainText(
			dataset.basic[i].output.profit
		);
		await expect(depositsTotal, 'Total deposits should not be visible').not.toBeVisible();
	}
});

test('Test if correct advanced input returns correct output', async ({ page }) => {
	await page.goto('/kalkulator-procentu-składanego');

	// Initialize buttons
	const submitButton = await getSubmitButton(page);
	const advancedButton = page.getByRole('button', { name: /Pokaż zaawansowane/ });
	await advancedButton.click();
	// Initialize basic inputs
	const {
		ammount,
		periods,
		periodsType,
		interestRate,
		capitalisation,
		regularPaymentAmount,
		regularPaymentFrequency
	} = await getInputs(page);

	for (let i = 0; i < dataset.advanced.length; i++) {
		// Fill basic inputs and submit
		await ammount.fill(dataset.advanced[i].input.ammount);
		await periods.fill(dataset.advanced[i].input.periods);
		await periodsType.selectOption({ label: dataset.advanced[i].input.periodsType });
		await interestRate.fill(dataset.advanced[i].input.interestRate);
		await capitalisation.selectOption({ label: dataset.advanced[i].input.capitalisation });
		await regularPaymentAmount.fill(dataset.advanced[i].input.regularPaymentAmount);
		await regularPaymentFrequency.selectOption({
			label: dataset.advanced[i].input.regularPaymentFrequency
		});
		await submitButton.click();

		const { finalAmount, depositsTotal, profit } = await getResultDescription(page);

		// Check if numbers are valid
		await expect(
			finalAmount,
			'The final amount in the results description should be correct'
		).toContainText(dataset.advanced[i].output.finalAmount);
		await expect(profit, 'The profit in the results description should be correct').toContainText(
			dataset.advanced[i].output.profit
		);
		await expect(
			depositsTotal,
			'The total deposits in the results description should be correct'
		).toContainText(dataset.advanced[i].output.depositsTotal);
	}
});

test('Test if switching between advanced and basic resets advanced', async ({ page }) => {
	await page.goto('/kalkulator-procentu-składanego');

	// Initialize buttons
	const submitButton = await getSubmitButton(page);
	await page.getByRole('button', { name: /Pokaż zaawansowane/ }).click();

	// Initialize basic inputs
	const {
		ammount,
		periods,
		periodsType,
		interestRate,
		capitalisation,
		regularPaymentAmount,
		regularPaymentFrequency
	} = await getInputs(page);

	await ammount.fill('10000');
	await periods.fill('5');
	await periodsType.selectOption({ label: 'Lata' });
	await interestRate.fill('2');
	await capitalisation.selectOption({ label: 'Rocznie' });
	await regularPaymentAmount.fill('150');
	await regularPaymentFrequency.selectOption({
		label: 'Kwartalnie'
	});
	await submitButton.click();

	const { finalAmount } = await getResultDescription(page);

	// Check if numbers are valid
	await expect(finalAmount, 'The final amount should be correctly calculated').toContainText(
		'14 186,55'
	);

	await page.getByRole('button', { name: /Ukryj zaawansowane/ }).click();
	await submitButton.click();

	await expect(finalAmount, 'The final amount should not include advanced settings').toContainText(
		'11 040,81'
	);
});
