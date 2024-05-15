<script>
	import Button from '../../lib/components/Button.svelte';
	import Chart from '../../lib/components/Chart.svelte';
	import { shuffleArray } from '../../lib/utils';
	import { getChartConfig, getQuestion } from './utils';
	export let calculatorData;

	const quiz = calculatorData.quiz;

	let chartConfig;
	let score = [];
	let answers = [];
	let choice = undefined;
	let summaryVisible = false;
	let { result, content, wrongAnswers } = getQuestion(calculatorData);

	let setChoice = (value) => {
		choice = value;
		score = [...score, value === result ? 1 : 0];
	};

	let nextQuestion = () => {
		if (score.length >= 10) {
			chartConfig = getChartConfig(score);
			summaryVisible = true;
			return;
		}

		choice = undefined;
		({ result, content, wrongAnswers } = getQuestion(calculatorData));
	};

	let reset = () => {
		choice = undefined;
		summaryVisible = false;
		score = [];
		({ result, content, wrongAnswers } = getQuestion(calculatorData));
	};

	$: answers = shuffleArray([...wrongAnswers, result]);
</script>

<svelte:head>
	<meta name="robots" content="noindex nofollow" />
</svelte:head>

<div class="quiz">
	{#if !summaryVisible}
		<div class="score">
			{#each Object.assign(new Array(10).fill(undefined), score) as item}
				<div class="item" class:correct={item === 1} class:wrong={item === 0} />
			{/each}
		</div>
		<div class="header">
			<h3>{quiz.title} - zadania</h3>
			<div class="beta">Beta</div>
		</div>

		<p>{content}</p>
		<div class="answers">
			{#each answers as answer}
				<button
					class="answer"
					class:disabled={!!choice}
					class:wrong={choice === answer && choice !== result}
					class:correct={choice && answer === result}
					on:click={() => setChoice(answer)}
				>
					{answer.toString().replace('.', ',')}
				</button>
			{/each}
		</div>
		{#if choice}
			<div class="controls">
				<Button on:click={nextQuestion}>
					{score.length < 10 ? 'Następne zadanie' : 'Podsumowanie'}
				</Button>
			</div>
		{/if}
	{/if}

	{#if summaryVisible}
		<div class="summary">
			<h4>Podsumowanie</h4>
			<div class="stats">
				<div class="stat">
					<div class="title">Punktacja</div>
					<div class="value">
						<Chart config={chartConfig} width={80} height={80} autoWidth={false} />
					</div>
				</div>
				<div class="stat green">
					<div class="title">Poprawne odpowiedzi</div>
					<div class="value">{score.filter((i) => i === 1).length}</div>
				</div>
				<div class="stat red">
					<div class="title">Błędne odpowiedzi</div>
					<div class="value">{score.filter((i) => i === 0).length}</div>
				</div>
				<div class="stat green">
					<div class="title">Całkowita ilość pytań</div>
					<div class="value">{score.length}</div>
				</div>
			</div>
			<div class="controls">
				<Button on:click={reset}>Zagraj ponownie</Button>
			</div>
		</div>
	{/if}
</div>

<style lang="scss">
	.quiz {
		gap: 1rem;
		display: flex;
		flex-direction: column;
		height: fit-content;
		@include calculator;

		& .header {
			gap: 0.25rem;
			display: flex;
			align-items: flex-start;

			& .beta {
				margin-top: -0.3rem;
				font-size: 0.8rem;
				color: $primary;
				text-transform: uppercase;
			}
		}

		& .score {
			gap: 0.3rem;
			display: flex;

			& .item {
				overflow: hidden;
				width: 100%;
				height: 5px;
				border-radius: 4px;
				background-color: $gray-medium;

				&.correct {
					position: relative;
					&::after {
						background-color: $primary;
					}
				}
				&.wrong {
					position: relative;
					&::after {
						background-color: $error;
					}
				}
				&.correct::after,
				&.wrong::after {
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					content: '';
					position: absolute;
					border-radius: 3px;
					animation: slideScoreItem 0.5s forwards;
				}
			}
		}

		& .answers {
			gap: 1rem;
			width: 100%;
			display: flex;

			& button {
				@include input;
				cursor: pointer;
				/* font-size: 0.9rem; */

				&:hover {
					background-color: $gray-light;
				}

				&.disabled {
					pointer-events: none;
				}
				&.correct {
					color: $primary;
					border: 2px solid $primary;
					background-color: transparentize($primary, 0.97);
				}
				&.wrong {
					color: $error;
					border: 2px solid $error;
					background-color: transparentize($error, 0.97);
				}
			}
		}

		& .controls {
			display: flex;
			justify-content: flex-end;
		}

		& .summary {
			gap: 1rem;
			flex-direction: column;
			display: flex;
			width: 100%;
			height: 100%;
			background-color: white;

			& .stats {
				gap: 1rem;
				display: grid;
				grid-template-rows: 1fr;
				grid-template-columns: repeat(4, 1fr);

				& .stat {
					gap: 0.2rem;
					text-align: center;
					display: flex;
					flex-direction: column;
					border-radius: 5px;
					border: 1px solid $gray-medium;
					padding: 0.7rem 1rem 0.4rem 1rem;

					&.green {
						color: $primary;
					}
					&.red {
						color: $error;
					}

					& .title {
						line-height: 1.3rem;
						font-weight: bold;
					}

					& .value {
						font-weight: bold;
						font-size: 4rem;
						line-height: 4rem;
					}
				}
			}
		}
	}

	@keyframes slideScoreItem {
		from {
			width: 0%;
		}
		to {
			width: 100%;
		}
	}
</style>
