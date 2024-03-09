<script>
	import Select from '$lib/components/Select.svelte';
	import Input from '$lib/components/Input.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import Button from '../../Button.svelte';

	export let results;
	export let formula;
	export let layout;
	export let controllers = [];
	export let runAnimation;

	let errorMessage = '';
	let advancedVisible = false;

	const getInitialDataset = () => {
		const x = controllers.reduce((res, controller) => {
			if (controller?.ignore) return res;
			if (controller.element === 'select') {
				res[controller.id] = controller.options.find((option) => option.default)?.name;
			} else {
				res[controller.id] = controller.defaultValue || '';
			}
			return res;
		}, {});
		return x;
	};
	let dataset = getInitialDataset();

	const calculate = () => {
		const formulaResult = formula({ ...dataset });
		errorMessage = formulaResult?.error;

		if (formulaResult?.error) {
			runAnimation('error');
			results = null;
			return;
		}

		if (formulaResult?.overwrite) dataset = formulaResult.dataset;
		else results = formulaResult;

		runAnimation('success');
	};

	const reset = () => {
		dataset = getInitialDataset();
		errorMessage = '';
		results = null;
	};
</script>

<div class="controls">
	{#if errorMessage}
		<div class="error">
			<span class="material-symbols-rounded"> error </span>
			{errorMessage}
		</div>
	{/if}

	<div class="inputs" style="--template: {layout?.gridTemplate || 1};">
		{#each controllers as controller}
			{#if (controller?.advanced && advancedVisible) || !controller?.advanced}
				<div class="areaWrapper" style="--area: {layout?.gridTemplate ? controller.id : 'unset'}">
					{#if controller?.element === 'select'}
						<Select
							bind:value={dataset[controller?.id]}
							label={controller?.label}
							{...controller?.attributes}
						>
							{#each controller?.options as option}
								<option value={option?.name}>{option?.label}</option>
							{/each}
						</Select>
					{:else if controller?.element === 'input'}
						<Input
							{...controller?.attributes}
							bind:value={dataset[controller?.id]}
							label={controller?.label}
						/>
					{:else if controller?.element === 'icon'}
						<Icon>{controller?.name}</Icon>
					{/if}
				</div>
			{/if}
		{/each}

		{#if controllers.some((c) => c?.advanced === true)}
			<button class="advancedVisiblity" on:click={() => (advancedVisible = !advancedVisible)}>
				<span class="material-symbols-rounded">
					{advancedVisible ? 'expand_less' : 'expand_more'}
				</span>
				{advancedVisible ? 'Ukryj' : 'Pokaż'} zaawansowane
			</button>
		{/if}
	</div>

	<div class="actions">
		<Button on:click={calculate}>Oblicz</Button>
		<Button variant="ghost" on:click={reset}>Resetuj</Button>
	</div>
</div>

<style lang="scss">
	.controls {
		width: 100%;
		display: flex;
		align-items: flex-end;
		flex-direction: column;

		& .error {
			gap: 0 0.5rem;
			display: flex;
			align-items: center;
			font-size: 0.9rem;
			margin-bottom: 1rem;
			width: 100%;
			padding: 0.6rem 0.8rem;
			border-radius: 5px;
			border: $error 1px solid;
			color: $error;
			background-color: $error-transparent;
		}

		& .inputs {
			gap: 0 0.5rem;
			width: 100%;
			display: grid;
			grid-template: var(--template);
			@include md {
				gap: 0 0.8rem;
			}

			& .areaWrapper {
				display: flex;
				margin-bottom: 0.6rem;
				align-items: center;
				justify-content: center;
				grid-area: var(--area);
			}

			& .advancedVisiblity {
				padding: 0;
				border: none;
				cursor: pointer;
				width: fit-content;
				color: $primary;
				display: flex;
				font-weight: bold;
				align-items: center;
				background-color: transparent;
			}
		}

		& .actions {
			gap: 0.3rem;
			display: flex;
			flex-direction: row-reverse;
		}
	}
</style>
