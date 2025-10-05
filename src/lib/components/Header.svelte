<script lang="ts">
	import logo from '$lib/images/sun.png';
</script>

<header>
	<div class="corner">
		<a href="/">
			<img src={logo} alt="Sun" />
		</a>
	</div>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
		height: 3rem;
	}

	.corner {
		width: 5rem;
		height: 5rem;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner img {
		width: 3rem;
		height: 3rem;
		object-fit: contain;
	}

	.corner img:hover {
		transform: rotate(36deg);
	}
</style>