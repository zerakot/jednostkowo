<script>
	import Controls from './Controls.svelte';
	import History from './History.svelte';
	import Results from './Results.svelte';
	import { getInitialDataset } from './utils';

	let { calculator } = $props();
	const initialDataset = getInitialDataset(calculator.controllers);

	let dataset = $state(initialDataset);
	let result = $state();
	let history = $state([]);
	let animation = $state(null);
	let errorMessage = $state('');

	const runAnimation = (mode) => {
		animation = mode;
		setTimeout(() => {
			animation = null;
		}, 600);
	};

	const onAction = (action) => {
		let response = action($state.snapshot(dataset), $state.snapshot(history));

		if (response?.error) {
			errorMessage = response.error;
			result = null;
			runAnimation('error');
			return;
		}

		if (response?.dataset) dataset = response.dataset;
		else result = response;

		if (response?.history) history = response.history;
		if (calculator?.resetOnSubmit) dataset = initialDataset;
		errorMessage = '';
		runAnimation('success');
	};

	const onHistoryRemove = (index) => {
		const response = calculator.history.onRemove($state.snapshot(history), index);

		const { history: newHistory, ...newResult } = response;
		history = newHistory;
		result = newResult;
	};

	const reset = () => {
		result = null;
		history = [];
		errorMessage = '';
		dataset = initialDataset;
	};
</script>

<section class={animation}>
	<h2>{calculator?.label}</h2>

	{#if errorMessage}
		<div class="errorMessage">
			<span class="material-symbols-rounded"> error </span>
			{errorMessage}
		</div>
	{/if}

	<Controls bind:dataset {calculator} {onAction} onReset={reset} />
	<Results {result} />

	{#if calculator?.history && history.length > 0}
		<History {history} {onHistoryRemove} template={calculator.history.template} />
	{/if}
</section>

<style lang="scss">
	@use 'sass:color';

	section {
		gap: 1rem;
		display: flex;
		flex-direction: column;
		@include calculator;

		&::before {
			top: -2px;
			left: -2px;
			opacity: 0;
			border-radius: 13px;
			width: calc(100% + 4px);
			height: calc(100% + 4px);
			content: '';
			z-index: -2;
			position: absolute;
			background-position: 0 0;
			background-repeat: no-repeat;
		}

		&::after {
			top: 0;
			left: 0;
			border-radius: 10px;
			background-color: $background;
			width: 100%;
			height: 100%;
			content: '';
			z-index: -1;
			position: absolute;
		}

		& h2 {
			width: fit-content;
			line-height: 1rem;
			font-weight: bold;
			font-size: 0.9rem;
			position: relative;

			&::after {
				content: '';
				bottom: -5px;
				left: 0;
				width: 70%;
				height: 2px;
				background-color: $primary;
				position: absolute;
				border-radius: 10px;
			}
		}

		& .errorMessage {
			gap: 0 0.5rem;
			display: flex;
			align-items: center;
			font-size: 0.9rem;
			width: 100%;
			padding: 0.6rem 0.8rem;
			border-radius: 5px;
			border: $error 1px solid;
			color: $error;
			background-color: $error-transparent;
		}

		&.success {
			&::before {
				background: $primary;
				animation: success 0.6s linear forwards;
			}
			@keyframes success {
				0%,
				100% {
					opacity: 0;
					box-shadow: unset;
				}
				50% {
					opacity: 0.7;
					box-shadow: 0 0 30px color.scale($primary, $alpha: -85%);
				}
			}
		}

		&.error {
			&::before {
				background: $error;
				animation: error 0.6s linear forwards;
			}
			@keyframes error {
				0%,
				100% {
					opacity: 0;
					box-shadow: unset;
				}
				50% {
					opacity: 0.7;
					box-shadow: 0 0 30px color.scale($error, $alpha: -85%);
				}
			}
		}
	}
</style>
