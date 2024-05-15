<script>
	export let score;
</script>

<div class="score">
	{#each Object.assign(new Array(5).fill(undefined), score) as item}
		<div class="item" class:correct={item === 1} class:wrong={item === 0} />
	{/each}
</div>

<style lang="scss">
	.score {
		gap: 0.3rem;
		display: flex;

		& .item {
			overflow: hidden;
			width: 100%;
			height: 4px;
			border-radius: 4px;
			background-color: $gray-medium;

			&.correct {
				position: relative;
				&::after {
					background-color: $primary;
				}
			}
			&.wrong {
				position: relative;
				&::after {
					background-color: $error;
				}
			}
			&.correct::after,
			&.wrong::after {
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				content: '';
				position: absolute;
				border-radius: 3px;
				animation: slideScoreItem 0.5s forwards;
			}
		}

		@include md {
			gap: 0.4rem;
		}
	}

	@keyframes slideScoreItem {
		from {
			width: 0%;
		}
		to {
			width: 100%;
		}
	}
</style>
