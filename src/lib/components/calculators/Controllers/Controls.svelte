<script>
	import Select from '$lib/components/Select.svelte';
	import Input from '$lib/components/Input.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import Button from '../../Button.svelte';

	export let results;
	export let formula;
	export let layout;
	export let controllers = [];
	export let runSubmitAnimation;

	let errorMessage;
	let dataset = controllers.reduce((res, controller) => {
		if (controller?.ignore) return res;
		res[controller.id] = controller.defaultValue;
		return res;
	}, {});

	const calculate = () => {
		const formulaResult = formula(dataset);
		errorMessage = formulaResult?.error;
		if (formulaResult?.error) return;

		if (formulaResult?.overwrite) dataset = formulaResult.dataset;
		else results = formulaResult;

		runSubmitAnimation();
	};

	const reset = () => {
		dataset = controllers.reduce((res, controller) => {
			res[controller.id] = controller.defaultValue;
			return res;
		}, {});
		results = null;
	};
</script>

<div class="controls">
	{#if errorMessage}
		<div class="error">{errorMessage}</div>
	{/if}

	<div class="inputs" style="--template: {layout?.gridTemplate || 1};">
		{#each controllers as controller}
			<div class="areaWrapper" style="--area: {layout?.gridTemplate ? controller.id : 'unset'}">
				{#if controller?.element === 'select'}
					<Select bind:value={dataset[controller?.id]} label={controller?.label}>
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
		{/each}
	</div>

	<div class="actions">
		<Button variant="ghost" on:click={reset}>Resetuj</Button>
		<Button on:click={calculate}>Oblicz</Button>
	</div>
</div>

<style lang="scss">
	.controls {
		gap: 1rem;
		width: 100%;
		display: flex;
		align-items: flex-end;
		flex-direction: column;

		& .inputs {
			width: 100%;
			gap: 1rem;
			display: grid;
			grid-template: var(--template);

			& .areaWrapper {
				display: flex;
				align-items: center;
				justify-content: center;
				grid-area: var(--area);
			}
		}
	}
</style>
