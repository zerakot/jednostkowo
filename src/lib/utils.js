import Big from 'big.js';
Big.DP = 30;

export const getRandomId = (length = 10) => {
	let result = '';
	const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	const charactersLength = characters.length;
	let counter = 0;
	while (counter < length) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
		counter += 1;
	}
	return result;
};
export const round = (num, decimals = 2) => {
	return Math.round((num + Number.EPSILON) * Math.pow(10, decimals)) / Math.pow(10, decimals);
};
export const formatOutputNumber = (number, decimals = 0) => {
	if (isNaN(number)) return 0;
	// Sprawdzamy, czy liczba jest w formacie notacji naukowej
	if (/^(\d+(\.\d+)?|\.\d+)(e[+-]?\d+)$/i.test(number.toString())) {
		return number.toString().replace('.', ',');
	}
	return (
		parseFloat(number).toLocaleString(undefined, {
			minimumFractionDigits: decimals,
			maximumFractionDigits: 20
		}) || 0
	);
};

export const mergeDeep = (target, ...sources) => {
	function isObject(item) {
		return item && typeof item === 'object' && !Array.isArray(item);
	}

	if (!sources.length) return target;
	const source = sources.shift();

	if (isObject(target) && isObject(source)) {
		for (const key in source) {
			if (isObject(source[key])) {
				if (!target[key]) Object.assign(target, { [key]: {} });
				mergeDeep(target[key], source[key]);
			} else {
				Object.assign(target, { [key]: source[key] });
			}
		}
	}

	return mergeDeep(target, ...sources);
};

/* BMI */
const bmiClassifications = [
	{ from: 0, to: 16, label: 'wygłodzenie' },
	{ from: 16, to: 16.99, label: 'wychudzenie' },
	{ from: 17, to: 18.49, label: 'niedowaga' },
	{ from: 18.5, to: 24.99, label: 'waga prawidłowa', correct: true },
	{ from: 25, to: 29.99, label: 'nadwaga' },
	{ from: 30, to: 34.99, label: 'I stopień otyłości' },
	{ from: 35, to: 39.99, label: 'II stopień otyłości' },
	{ from: 40, to: Infinity, label: 'otyłość skrajna' }
];
export const calculateBmi = (weight = 0, height) => {
	const bmi = weight / Math.pow(height / 100, 2);
	const clasificationLabel = bmiClassifications.find((b) => b.from <= bmi && b.to > bmi)?.label;
	const correctClassification = bmiClassifications.find((item) => item?.correct);

	let label = `Twoje BMI wynosi
	<b>${formatOutputNumber(round(bmi))}</b>.
	Jest to klasyfikowane jako <b>${clasificationLabel}</b>. `;

	if (bmi >= correctClassification.from && bmi <= correctClassification.to) {
		const maxWeight = correctClassification.to * Math.pow(height / 100, 2);
		const maxWeightGain = round(maxWeight - weight, 1);
		const maxWeightLoss = round(weight - correctClassification.from * Math.pow(height / 100, 2), 1);

		label += `Aby utrzymać prawidłowe BMI możesz maksymalnie przytyć <b>
		${formatOutputNumber(maxWeightGain)}kg</b> lub schudnąć
		<b>${formatOutputNumber(maxWeightLoss)}kg</b>`;
	} else {
		const targetBmi = Math.max(correctClassification.from, Math.min(bmi, correctClassification.to));
		const targetWeight = round(targetBmi * Math.pow(height / 100, 2), 1);
		const weightDifference = round(targetWeight - weight, 1);

		label += `Aby osiągnąć poprawne BMI, musisz
		${weightDifference > 0 ? 'przytyć' : 'schudnąć'}
		<b>${formatOutputNumber(Math.abs(weightDifference))} kg</b>.`;
	}

	return { bmi, label };
};

/* Converter functions */
export const getUnit = (condition, converters) => {
	for (const converter of converters) {
		const category = converter?.name;

		const unit = converter.units.find((unit) => {
			if (typeof Object.values(condition)[0] === 'string') {
				return (
					unit[Object.keys(condition)[0]]?.toLowerCase() ===
					Object.values(condition)[0]?.toLowerCase()
				);
			}
			return unit[Object.keys(condition)[0]] === Object.values(condition)[0];
		});

		if (unit) return { category: category, ...unit };
	}
	return null;
};
const convertUnit = (amount, from, to, options) => {
	const decimals = parseInt(options?.decimals);

	const bigRatio = new Big(parseFloat(from));
	const bigbaseUnitLabel = new Big(parseFloat(to));
	const bigAmount = new Big(parseFloat(amount));

	let value = bigbaseUnitLabel.div(bigRatio).times(bigAmount);
	return options.scientificNotation
		? value.toExponential(decimals)
		: value.round(decimals).toFixed();
};
export const convert = (ammount, baseLabel, targetLabel, converters, options) => {
	if (!ammount) ammount = 0;

	const baseUnit = getUnit({ label: baseLabel }, converters);

	if (targetLabel) {
		const targetUnit = getUnit({ label: targetLabel }, converters);
		return [
			{
				category: targetUnit?.category,
				units: [
					{
						...targetUnit,
						value: convertUnit(ammount, baseUnit.ratio, targetUnit.ratio, options)
					}
				]
			}
		];
	} else {
		return converters.map((converter) => {
			return {
				category: converter?.category,
				units: converter.units.map((unit) => ({
					...unit,
					active: baseUnit.label === unit.label,
					value: convertUnit(ammount, baseUnit.ratio, unit.ratio, options)
				}))
			};
		});
	}
};
export const sortUnits = (units) => {
	return units.sort((a, b) => new Big(b.ratio).cmp(new Big(a.ratio)));
};
