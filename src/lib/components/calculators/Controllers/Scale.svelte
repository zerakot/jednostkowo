<script>
	export let data;

	let leftOffset = 0;
	$: leftOffset = Math.min(
		Math.max((100 * (data?.value - data?.scale[0])) / (data?.scale[1] - data?.scale[0]), 0),
		100
	);
</script>

{#if !isNaN(data?.value) && isFinite(data?.value)}
	<div class="container">
		<div class="scale" style="--gradient: {data?.gradient}">
			<div class="pointer" style="--left: {leftOffset}%" />
		</div>
		<p class="label">
			{@html data?.label}
		</p>
	</div>
{/if}

<style lang="scss">
	.container {
		width: 100%;
		display: flex;
		gap: 0.5rem 1rem;
		flex-direction: column;

		& .scale {
			width: 100%;
			height: 32px;
			border-radius: 5px;
			position: relative;
			border: 1px solid $gray-dark;
			background: linear-gradient(var(--gradient));

			& .pointer {
				left: 0;
				top: 50%;
				transform: translateY(-50%);
				width: 9px;
				height: 140%;
				border-radius: 3px;
				position: absolute;
				background-color: white;
				border: 2px solid $gray-dark;
				transition-duration: 0.1s;
				animation: slide 1s forwards;

				@keyframes slide {
					to {
						left: var(--left);
					}
				}
			}
		}

		& p {
			font-size: 1rem;
		}
	}
</style>
