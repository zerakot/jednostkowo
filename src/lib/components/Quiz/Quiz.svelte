<script>
	import Button from '../Button.svelte';
	import { shuffleArray } from '../../utils';
	import Answers from './Answers.svelte';
	import Score from './Score.svelte';
	import Summary from './Summary.svelte';
	import { getQuestion } from './utils';
	import { onMount } from 'svelte';
	import Content from './Content.svelte';
	export let calculatorData;

	const quiz = calculatorData.quiz;

	let score = [];
	let answers = [];
	let choice = undefined;
	let usedQuestions = [];
	let summaryVisible = false;
	let question = {};

	let updateQuestion = () => {
		if (score.length >= 5) {
			summaryVisible = true;
			return;
		}
		choice = undefined;
		question = getQuestion(calculatorData, usedQuestions);
		usedQuestions.push(question.id);
	};
	let reset = () => {
		choice = undefined;
		summaryVisible = false;
		usedQuestions = [];
		score = [];
		updateQuestion();
	};
	let setChoice = (value) => {
		choice = value;
		score = [...score, value === question.result ? 1 : 0];
	};

	$: !!question?.wrongAnswers &&
		(answers = shuffleArray([...question.wrongAnswers, question.result]));
	onMount(updateQuestion);
</script>

<svelte:head>
	<meta name="robots" content="noindex nofollow" />
</svelte:head>

<div class="quiz">
	{#if !summaryVisible}
		<Score {score} />

		<div class="header">
			<h3>{quiz.title} - zadania z treścią</h3>
			<div class="beta">Beta</div>
		</div>

		<Content content={question.content} decimals={question.decimals} />
		<Answers
			{choice}
			{answers}
			{setChoice}
			result={question.result}
			suffix={question.suffix}
			decimals={question.decimals}
		/>

		{#if choice}
			<div class="controls">
				<Button on:click={updateQuestion}>
					{score.length < 5 ? 'Następne zadanie' : 'Podsumowanie'}
				</Button>
			</div>
		{/if}
	{/if}

	{#if summaryVisible}
		<Summary {score} {reset} />
	{/if}
</div>

<style lang="scss">
	.quiz {
		gap: 0.7rem;
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

		& .controls {
			width: 100%;
			display: flex;
			justify-content: flex-end;
		}

		@include md {
			gap: 1rem;
		}
	}
</style>
