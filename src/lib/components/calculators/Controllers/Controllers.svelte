<script>
	import Controls from './Controls.svelte';
	import Results from './Results.svelte';

	export let calculatorData;

	let results;
	let animation = null;

	const runAnimation = (mode) => {
		animation = mode;
		setTimeout(() => {
			animation = null;
		}, 600);
	};
</script>

<section class="container {animation}">
	<Controls
		bind:results
		{runAnimation}
		layout={calculatorData.layout}
		formula={calculatorData.formula}
		controllers={calculatorData.controllers}
	/>
	<Results {results} />
</section>

<style lang="scss">
	.container {
		gap: 1rem;
		display: flex;
		flex-direction: column;
		@include calculator;

		&::before {
			top: -2px;
			left: -2px;
			opacity: 0;
			border-radius: 13px;
			width: calc(100% + 4px);
			height: calc(100% + 4px);
			content: '';
			z-index: -2;
			position: absolute;
			background-position: 0 0;
			background-repeat: no-repeat;
		}

		&::after {
			top: 0;
			left: 0;
			border-radius: 10px;
			background-color: $background;
			width: 100%;
			height: 100%;
			content: '';
			z-index: -1;
			position: absolute;
		}

		&.success {
			&::before {
				background: $primary;
				animation: success 0.6s linear forwards;
			}
			@keyframes success {
				0%,
				100% {
					opacity: 0;
					box-shadow: unset;
				}
				50% {
					opacity: 0.7;
					box-shadow: 0 0 30px transparentize($primary, 0.85);
				}
			}
		}

		&.error {
			&::before {
				background: $error;
				animation: error 0.6s linear forwards;
			}
			@keyframes error {
				0%,
				100% {
					opacity: 0;
					box-shadow: unset;
				}
				50% {
					opacity: 0.7;
					box-shadow: 0 0 30px transparentize($error, 0.85);
				}
			}
		}
	}
</style>
