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
