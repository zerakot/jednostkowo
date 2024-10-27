<script>
	import Select from '$lib/components/Select.svelte';
	import Input from '$lib/components/Input.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import Button from '../../Button.svelte';
	import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { getInitialDataset } from './utils';

	let { calculator, dataset = $bindable(), onAction, onReset } = $props();
	let advancedVisible = $state(false);

	const switchAdvencedVisiblity = () => {
		if (advancedVisible) {
			const initialDataset = getInitialDataset(calculator.controllers);

			dataset = Object.keys(dataset).reduce((acc, id) => {
				if (calculator.controllers.find((c) => c.id === id)?.advanced) acc[id] = initialDataset[id];
				else acc[id] = dataset[id];
				return acc;
			}, {});
		}
		advancedVisible = !advancedVisible;
	};
</script>

<div class="controls">
	<div
		class="inputs {calculator.layout?.responsive === false && 'notResponsive'}"
		style="--template: {calculator.layout?.gridTemplate || 1};"
	>
		{#each calculator.controllers as controller}
			{#if (controller?.advanced && advancedVisible) || !controller?.advanced}
				<div
					class="areaWrapper"
					style="--area: {calculator.layout?.gridTemplate ? controller.id : 'unset'}"
					transition:slide={{ delay: 0, duration: 300, easing: quintOut, axis: 'y' }}
				>
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

	{#if calculator.controllers.some((c) => c?.advanced === true)}
		<Button variant="text" onclick={switchAdvencedVisiblity}>
			<span class="material-symbols-rounded">
				{advancedVisible ? 'expand_less' : 'expand_more'}
			</span>
			{advancedVisible ? 'Ukryj' : 'Pokaż'} zaawansowane
		</Button>
	{/if}

	<div class="actions">
		<!-- Flex direction: row-reverse -->
		{#each calculator.buttons as button}
			<Button onclick={() => onAction(button.action)} variant={button.variant}>
				{button.label}
			</Button>
		{/each}

		<div class="resetWrapper">
			<Button variant="outline" onclick={onReset}>Resetuj</Button>
		</div>
	</div>
</div>

<style lang="scss">
	.controls {
		width: 100%;
		display: flex;
		flex-direction: column;

		& .inputs {
			gap: 0 0.5rem;
			width: 100%;
			display: grid;
			@include md {
				gap: 0 0.8rem;
				grid-template: var(--template);
			}

			&.notResponsive {
				grid-template: var(--template);

				& .areaWrapper {
					grid-area: var(--area);
				}
			}

			& .areaWrapper {
				display: flex;
				margin-bottom: 0.6rem;
				align-items: center;
				justify-content: center;

				@include md {
					grid-area: var(--area);
				}
			}
		}

		& .actions {
			margin-top: 0.8rem;
			gap: 0.5rem;
			display: flex;
			flex-direction: row-reverse;

			& .resetWrapper {
				margin-right: auto;
			}
		}
	}
</style>
