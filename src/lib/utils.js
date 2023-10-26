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

export const round = (num, decimals = 2) => {
	return (
		Math.round((num + Number.EPSILON) * Math.pow(10, decimals)) / Math.pow(10, decimals)
	)?.toFixed(decimals);
};
