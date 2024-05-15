import { website } from '../../assets/seo';
import { round } from '../../utils';

export const getQuestion = (calculator, usedIds) => {
	const quiz = calculator.quiz;
	const questions = quiz.questions;

	const notUsedQuestions = questions.filter((q) => !usedIds.includes(q.content));
	const randomQuestion = notUsedQuestions[Math.floor(Math.random() * notUsedQuestions.length)];

	const filledDataset = getValuesByConditions(randomQuestion.dataset);
	const filledContent = fillQuestionContent(filledDataset, randomQuestion.content);

	const formula = getFormula(randomQuestion, calculator);

	const { result, wrongAnswers } = calculateResult(filledDataset, formula, randomQuestion.decimals);
	return {
		result,
		content: filledContent,
		wrongAnswers,
		suffix: randomQuestion?.suffix || '',
		id: randomQuestion.content,
		decimals: randomQuestion?.decimals || 0
	};
};

const getFormula = (question, calculator) => {
	if (!question?.formulaReference) return calculator.formula;

	const reference = question.formulaReference;
	const path = reference.slice(0, -1);
	const [propety, value] = reference[reference.length - 1].split('=');

	// Dojdź do obiektu, który zawiera listy formuł (operations)
	let operations = calculator;
	for (const key of path) {
		operations = operations[key];
	}

	return operations.find((o) => o[propety] === value)?.formula;
};

const getValuesByConditions = (dataset) => {
	console.log(dataset);
	const filledDataset = {};
	for (const [key, value] of Object.entries(dataset)) {
		if (typeof value === 'number') {
			filledDataset[key] = value;
			continue;
		}

		let randomByConditions;
		do {
			randomByConditions =
				Math.floor(Math.random() * ((value.max - value.min) / value.step + 1)) * value.step +
				value.min;
		} while (Object.values(filledDataset).includes(randomByConditions));
		filledDataset[key] = randomByConditions;
	}
	return filledDataset;
};

const fillQuestionContent = (dataset, content) => {
	return content.replace(/\{(.*?)\}/g, (match, key) => {
		return dataset[key].toString().replace('.', ',');
	});
};

const calculateResult = (dataset, formula, decimals) => {
	// Uzupełnij dataset pod formułę
	const result = round(formula(dataset).result, decimals);
	const wrongAnswers = getWrongAnswers(result, decimals);

	return { result, wrongAnswers };
};

const getWrongAnswers = (result, decimals) => {
	/* 
		Nowy pomysł na losowe odpowiedzi:
		Wylosuj czy:
		- Dodać czy odjąć "i"
		- Zaokraglić jedną z odpowiedzi
	*/
	const wrongAnswers = [];
	const usedNumbers = [];
	for (let i = 0; i < 3; i++) {
		let randomNumber;
		const operationRandom = Math.random();

		if (result % 1000 === 0) {
			if (i === 0) {
				wrongAnswers.push(result / 10);
				continue;
			}
			if (i === 1) {
				wrongAnswers.push(result * 10);
				continue;
			}
			if (i === 2) {
				wrongAnswers.push(operationRandom >= 0.5 ? result / 100 : result * 100);
				continue;
			}
		}

		do randomNumber = Math.floor(Math.random() * (10 - 2 + 1)) + 2;
		while (usedNumbers.indexOf(randomNumber) !== -1);

		if (operationRandom <= 0.5)
			if (result > 0 && result - randomNumber < 0) {
				wrongAnswers.push(result + randomNumber);
			} else {
				wrongAnswers.push(result - randomNumber);
			}
		else {
			if (result < 0 && result + randomNumber > 0) {
				wrongAnswers.push(result - randomNumber);
			} else {
				wrongAnswers.push(result + randomNumber);
			}
		}

		usedNumbers.push(randomNumber);
	}

	const roundedWrongAnswers = wrongAnswers.map((answer) => round(answer, decimals));
	return roundedWrongAnswers;
};

/* CHART */
export const getChartConfig = (score) => {
	const correct = score.filter((i) => i === 1).length;
	const incorrect = score.filter((i) => i === 0).length;
	const correctRatio = correct / score.length;

	return {
		type: 'doughnut',
		data: {
			labels: ['Poprawne', 'Błędne'],
			datasets: [
				{
					data: [correct, incorrect],
					backgroundColor: [website.primaryColor, website.errorColor],
					hoverOffset: 4
				}
			]
		},
		options: {
			responsive: true,
			maintainAspectRatio: false,
			plugins: {
				legend: {
					display: false
				}
			},
			cutout: 30,
			borderRadius: 10
		},

		plugins: [
			{
				id: 'Number in center',
				beforeDraw: function (chart) {
					const {
						ctx,
						chartArea: { width, height }
					} = chart;

					ctx.restore();
					var fontSize = (height / 45).toFixed(2);
					ctx.font = 'bold ' + fontSize + 'rem sans-serif';
					ctx.fillStyle = correctRatio >= 0.5 ? website.primaryColor : website.errorColor;
					ctx.textBaseline = 'middle';

					var text = Math.round(correctRatio * 100),
						textX = Math.round((width - ctx.measureText(text).width) / 2),
						textY = height / 2 + 1;

					ctx.fillText(text, textX, textY);
					ctx.save();
				}
			}
		]
	};
};
