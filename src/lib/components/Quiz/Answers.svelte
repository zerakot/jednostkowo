<script>
	export let setChoice;
	export let answers;
	export let choice;
	export let result;
	export let suffix;
	export let decimals = 0;
</script>

<div class="answers">
	{#each answers as answer}
		<button
			class="answer"
			class:disabled={!!choice}
			class:wrong={choice === answer && choice !== result}
			class:correct={choice && answer === result}
			on:click={() => setChoice(answer)}
		>
			{answer.toFixed(decimals).toString().replace('.', ',') + suffix}
		</button>
	{/each}
</div>

<style lang="scss">
	.answers {
		gap: 0.5rem;
		width: 100%;
		display: grid;
		grid-template-rows: repeat(2, 1fr);
		grid-template-columns: repeat(2, 1fr);

		& button {
			@include input;
			cursor: pointer;
			/* font-size: 0.9rem; */

			&:hover {
				background-color: $gray-light;
			}

			&.disabled {
				pointer-events: none;
			}
			&.correct {
				color: $primary;
				border: 2px solid $primary;
				background-color: transparentize($primary, 0.97);
			}
			&.wrong {
				color: $error;
				border: 2px solid $error;
				background-color: transparentize($error, 0.97);
			}
		}
		@include sm {
			gap: 0.7rem;
		}
		@include lg {
			gap: 1rem;
			grid-template-rows: 1fr;
			grid-template-columns: repeat(4, 1fr);
		}
	}
</style>
