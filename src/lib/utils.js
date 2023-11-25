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
export const slugify = (str) => {
	return String(str)
		.normalize('NFKD') // split accented characters into their base characters and diacritical marks
		.replace(/[\u0300-\u036f]/g, '') // remove all the accents, which happen to be all in the \u03xx UNICODE block.
		.trim() // trim leading or trailing whitespace
		.toLowerCase() // convert to lowercase
		.replace(/[^a-z0-9 -]/g, '') // remove non-alphanumeric characters
		.replace(/\s+/g, '-') // replace spaces with hyphens
		.replace(/-+/g, '-'); // remove consecutive hyphens
};
export const round = (num, decimals = 2) => {
	return (
		Math.round((num + Number.EPSILON) * Math.pow(10, decimals)) / Math.pow(10, decimals)
	)?.toFixed(decimals);
};
function isObject(item) {
	return item && typeof item === 'object' && !Array.isArray(item);
}
export const mergeDeep = (target, ...sources) => {
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

/* Format grade string (eg. 5+) to float (eg. 5.5) */
export const formatGrade = (str) => {
	const regex = /^(\d)([+-])$/;
	const match = str.match(regex);

	if (match) {
		const num = parseFloat(match[1]);
		const operator = match[2];

		if (operator === '+') {
			return num + 0.5;
		} else if (operator === '-') {
			return num - 0.25;
		}
	}

	return parseFloat(str);
};

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
export const calculateBmi = (weight, height) => {
	const bmi = weight / Math.pow(height / 100, 2);
	const clasificationLabel = bmiClassifications.find((b) => b.from <= bmi && b.to > bmi)?.label;
	const correctClassification = bmiClassifications.find((item) => item?.correct);

	let label = `Twoje BMI wynosi <b>${round(
		bmi
	)}</b>. Jest to klasyfikowane jako <b>${clasificationLabel}</b>. `;

	if (bmi >= correctClassification.from && bmi <= correctClassification.to) {
		const maxWeight = correctClassification.to * Math.pow(height / 100, 2);
		const maxWeightGain = round(maxWeight - weight, 1);
		const maxWeightLoss = round(weight - correctClassification.from * Math.pow(height / 100, 2), 1);

		label += `Aby utrzymać prawidłowe BMI możesz maksymalnie przytyć <b>${maxWeightGain} kg</b> lub schudnąć <b>${maxWeightLoss}kg</b>`;
	} else {
		const targetBmi = Math.max(correctClassification.from, Math.min(bmi, correctClassification.to));
		const targetWeight = round(targetBmi * Math.pow(height / 100, 2), 1);
		const weightDifference = round(targetWeight - weight, 1);

		label += `Aby osiągnąć poprawne BMI, musisz ${
			weightDifference > 0 ? 'przytyć' : 'schudnąć'
		} <b>${Math.abs(weightDifference)} kg</b>.`;
	}

	return { bmi, label };
};
