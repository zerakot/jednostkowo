<script>
	import Input from '$lib/components/Input.svelte';

	export let operation;

	let a = '',
		b = '';
	let result = '';

	const handleOperation = (a, b, operator) => {
		if (!a || !b) return 0;
		a = parseFloat(a);
		b = parseFloat(b);
		const result = operator(a, b);
		return Math.round(result * 10000) / 10000;
	};

	$: {
		result = operation.formula(a, b, handleOperation);
	}
</script>

<div class="operation">
	<div class="label">{operation.name}</div>

	<div class="calculation">
		<Input type="number" bind:value={a} placeholder="A" />
		<span>{operation.labels[0]}</span>

		<Input type="number" bind:value={b} placeholder="B" />
		<span>{operation.labels[1]}</span>

		<div class="result">{result}</div>
		<span>{operation.labels[2]}</span>
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
			font-size: 1rem;
			display: flex;
			align-items: center;
			flex-direction: column;

			& span {
				white-space: pre;
			}

			& .result {
				min-width: 100px;
				width: 100%;
				flex: 1;
				font-size: 0.95rem;
				padding: 0.5rem 0.8rem;
				background-color: $background;
				border-radius: 5px;
				border: 1px solid $gray-dark;
				color: $primary;
				font-weight: bold;
			}
		}

		@include md {
			& .calculation {
				flex-direction: row;
			}
		}
	}
</style>
