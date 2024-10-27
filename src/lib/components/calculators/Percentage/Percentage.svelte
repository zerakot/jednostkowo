<script>
	import Input from '$lib/components/Input.svelte';
	import { formatOutputNumber } from '../../../utils';

	let { calculator } = $props();

	let a = $state(null),
		b = $state(null),
		result = $state(0);

	$effect(() => {
		if (a === null || b === null) result = 0;
		else {
			result = formatOutputNumber(
				calculator.formula({ a: parseFloat(a), b: parseFloat(b) }).result
			);
		}
	});
</script>

<div class="percentage">
	<p class="label">{calculator.name}</p>

	<div class="operation">
		<Input type="number" bind:value={a} placeholder="A" />
		<span class="responsive">{calculator.labels[0]}</span>

		<Input type="number" bind:value={b} placeholder="B" />
		<span class="responsive">{calculator.labels[1]}</span>

		<div class="result">{result}</div>
		<span class="responsive">{calculator.labels[2]}</span>
	</div>
</div>

<style lang="scss">
	.percentage {
		width: 100%;
		gap: 0.5rem;
		display: flex;
		flex-direction: column;
		@include calculator;

		& .label {
			font-weight: bold;
		}

		& .operation {
			gap: 0.5rem;
			font-size: 1em;
			display: flex;
			align-items: center;
			flex-direction: row;

			& span {
				white-space: pre;
			}

			& .result {
				@include input;

				max-width: 100px;
				flex: 1;
				color: $primary;
				font-weight: bold;
			}
		}
	}
</style>
