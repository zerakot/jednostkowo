<script>
	import Input from '$lib/components/Input.svelte';
	import { round } from '$lib/utils';

	let a = '',
		b = '',
		c = '',
		d = '',
		result = '0.00';

	const calculate = () => {
		const p = { a: parseFloat(a), b: parseFloat(b), c: parseFloat(c), d: parseFloat(d) };
		let res = '0,00';

		if (!!p?.a && !!p?.b) {
			if (!!p?.c && !p?.d) {
				res = (p?.c * p?.b) / p?.a;
			} else if (!!p?.d && !p?.c) {
				res = (p?.a * p?.d) / p?.b;
			}
		} else if (!!p?.c && !!p?.d) {
			if (!!p?.a && !p?.b) {
				res = (p?.a * p?.d) / p?.c;
			} else if (!!p?.b && !p?.a) {
				res = (p?.c * p?.b) / p?.d;
			}
		}

		const rounded = round(res);
		result = isNaN(rounded) ? '0.00' : rounded;
	};
</script>

<section class="container">
	<div class="result">Wynik: <span>{result}</span></div>

	<div class="operation">
		<div class="column">
			<Input type="number" placeholder="x" bind:value={a} on:input={calculate} />
			<div class="separator" />
			<Input type="number" placeholder="x" bind:value={b} on:input={calculate} />
		</div>

		<span class="material-symbols-rounded"> equal </span>

		<div class="column">
			<Input type="number" placeholder="x" bind:value={c} on:input={calculate} />
			<div class="separator" />
			<Input type="number" placeholder="x" bind:value={d} on:input={calculate} />
		</div>
	</div>
</section>

<style lang="scss">
	.container {
		width: 100%;
		gap: 0.5rem;
		display: flex;
		flex-direction: column;
		@include calculator;

		& .result {
			font-size: 1.1rem;
			& span {
				font-weight: bold;
				color: $primary;
			}
		}

		& .operation {
			gap: 1rem;
			display: flex;

			& .column {
				width: 100%;
				gap: 0.8rem;
				display: flex;
				flex-direction: column;

				& .separator {
					height: 1px;
					width: 100%;
					border-radius: 5px;
					background-color: $gray-dark;
				}
			}

			& span {
				color: $text;
				align-self: center;
				font-size: 1rem;
			}
		}

		@include md {
			width: 70%;
		}
	}
</style>
