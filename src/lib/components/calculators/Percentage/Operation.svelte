<script>
	import Input from '$lib/components/Input.svelte';
	import { formatOutputNumber, round } from '../../../utils';

	export let operation;

	let a = null,
		b = null;
	let result = 0;

	$: {
		if (a === null || b === null) result = 0;
		else {
			result = formatOutputNumber(
				round(operation.formula({ a: parseFloat(a), b: parseFloat(b) }).result, 2)
			);
		}
	}
</script>

<div class="operation">
	<p class="label">{operation.name}</p>

	<div class="calculation">
		<Input type="number" bind:value={a} placeholder="A" />
		<span class="responsive">{operation.labels[0]}</span>

		<Input type="number" bind:value={b} placeholder="B" />
		<span class="responsive">{operation.labels[1]}</span>

		<div class="result">{result}</div>
		<span class="responsive">{operation.labels[2]}</span>
	</div>
</div>

<style lang="scss">
	.operation {
		width: 100%;
		gap: 0.5rem;
		display: flex;
		flex-direction: column;
		@include calculator;

		& .label {
			font-weight: bold;
		}

		& .calculation {
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
