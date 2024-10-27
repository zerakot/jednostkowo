<script>
	let { label } = $props();
</script>

<div class="separator">
	<div class="line"></div>
	<div class="label">{label}</div>
</div>

<style lang="scss">
	.separator {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;

		& .label {
			z-index: 2;
			color: $text-light;
			font-weight: bold;
			padding: 0 0.4rem;
			background-color: white;
		}

		& .line {
			z-index: 1;
			position: absolute;
			top: 50%;
			left: 0;
			width: 100%;
			height: 2px;
			border-radius: 10px;
			background-color: $gray-medium;
			transform: translateY(-50%);
		}
	}
</style>
