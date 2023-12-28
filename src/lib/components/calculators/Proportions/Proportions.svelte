<script>
	import Input from '$lib/components/Input.svelte';
	import Button from '../../Button.svelte';
	import Icon from '../../Icon.svelte';

	let values = { a: '', b: '', c: '', d: '' };

	const calculate = () => {
		const p = {
			a: parseFloat(values.a),
			b: parseFloat(values.b),
			c: parseFloat(values.c),
			d: parseFloat(values.d)
		};
		let res = '0.00';

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

		for (let key in values) {
			// Jeśli wartość właściwości jest pusta, ustaw ją na "X" i zakończ pętlę
			if (values[key] === '') {
				values[key] = res;
				break;
			}
		}
	};
	const reset = () => {
		values = { a: '', b: '', c: '', d: '' };
	};
</script>

<section class="container">
	<div class="operation">
		<div class="column">
			<Input type="number" placeholder="A" bind:value={values.a} />
			<div class="separator" />
			<Input type="number" placeholder="B" bind:value={values.b} />
		</div>

		<Icon name="equal" width="20" height="20" />

		<div class="column">
			<Input type="number" placeholder="C" bind:value={values.c} />
			<div class="separator" />
			<Input type="number" placeholder="D" bind:value={values.d} />
		</div>
	</div>
	<div class="actions">
		<Button variant="ghost" on:click={reset}>Resetuj</Button>

		<Button on:click={calculate}>Oblicz</Button>
	</div>
</section>

<style lang="scss">
	.container {
		width: 100%;
		gap: 0.5rem;
		display: flex;
		align-items: flex-end;
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
			width: 100%;
			gap: 1rem;
			align-items: center;
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
		}

		@include xl {
			width: 70%;
		}
	}
</style>
