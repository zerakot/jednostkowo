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

	const initialDataset = Object.freeze(
		controllers.reduce((res, controller) => {
			if (controller?.ignore) return res;
			if (controller.element === 'select') {
				res[controller.id] = controller.options.find((option) => option.default)?.name;
			} else {
				res[controller.id] = controller.defaultValue || '';
			}
			return res;
		}, {})
	);
	let dataset = { ...initialDataset };

	const calculate = () => {
		const formulaResult = formula({ ...dataset });
		errorMessage = formulaResult?.error || '';

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
		dataset = { ...initialDataset };
		errorMessage = '';
		results = null;
	};
	const switchAdvencedVisiblity = () => {
		if (advancedVisible) {
			// Reset advenced settings if hidding
			dataset = Object.keys(dataset).reduce((acc, id) => {
				if (controllers.find((c) => c.id === id)?.advanced) acc[id] = initialDataset[id];
				else acc[id] = dataset[id];
				return acc;
			}, {});
		}
		advancedVisible = !advancedVisible;
	};
</script>

<div class="controls">
	{#if errorMessage}
		<div class="error">
			<span class="material-symbols-rounded"> error </span>
			{errorMessage}
		</div>
	{/if}

	<div
		class="inputs {layout?.responsive === false && 'notResponsive'}"
		style="--template: {layout?.gridTemplate || 1};"
	>
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
	</div>
	{#if controllers.some((c) => c?.advanced === true)}
		<Button variant="text" on:click={switchAdvencedVisiblity}>
			<span class="material-symbols-rounded">
				{advancedVisible ? 'expand_less' : 'expand_more'}
			</span>
			{advancedVisible ? 'Ukryj' : 'Pokaż'} zaawansowane
		</Button>
	{/if}

	<div class="actions">
		<Button on:click={calculate}>Oblicz</Button>
		<Button variant="ghost" on:click={reset}>Resetuj</Button>
	</div>
</div>

<style lang="scss">
	.controls {
		width: 100%;
		display: flex;

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
			&.notResponsive {
				grid-template: var(--template);

				& .areaWrapper {
					grid-area: var(--area);
				}
			}
			@include lg {
				gap: 0 0.8rem;
				grid-template: var(--template);
			}

			& .areaWrapper {
				display: flex;
				margin-bottom: 0.6rem;
				align-items: center;
				justify-content: center;

				@include lg {
					grid-area: var(--area);
				}
			}
		}

		& .actions {
			gap: 0.3rem;
			display: flex;
			flex-direction: row-reverse;
		}
	}
</style>
