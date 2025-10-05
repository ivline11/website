<script lang="ts">
	import { onMount } from 'svelte';

	let canvas: HTMLCanvasElement;
	let ctx: CanvasRenderingContext2D | null = null;
	let width: number;
	let height: number;
	let time = 0;

	function resize() {
		width = window.innerWidth;
		height = window.innerHeight;
		canvas.width = width;
		canvas.height = height;
	}

	onMount(() => {
		ctx = canvas.getContext('2d');
		resize();
		window.addEventListener('resize', resize);

		let animationFrame: number;
		function render() {
			if (!ctx) return;
			time += 0.01;
			drawOcean();
			animationFrame = requestAnimationFrame(render);
		}
		render();

		return () => {
			cancelAnimationFrame(animationFrame);
			window.removeEventListener('resize', resize);
		};
	});

	function drawOcean() {
		if (!ctx) return;
		ctx.clearRect(0, 0, width, height);

		const ocean = ctx.createLinearGradient(0, 0, 0, height);
		ocean.addColorStop(0, "#7ee9ff");
		ocean.addColorStop(0.3, "#4fc5f7");
		ocean.addColorStop(0.7, "#0077b6");
		ocean.addColorStop(1, "#023e8a");
		ctx.fillStyle = ocean;
		ctx.fillRect(0, 0, width, height);

		// 🌬 파도 라인
		for (let y = height * 0.25; y < height; y += 30) {
			ctx.beginPath();
			for (let x = 0; x <= width; x++) {
				const wave =
					Math.sin((x * 0.008) + time + y * 0.02) * 10 +
					Math.sin((x * 0.01) + time * 1.2) * 10;
				if (x === 0) ctx.moveTo(x, y + wave);
				else ctx.lineTo(x, y + wave);
			}
			ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 + Math.random() * 0.1})`;
			ctx.lineWidth = 1;
			ctx.stroke();
		}
	}
</script>

<canvas bind:this={canvas}></canvas>

<style>
	canvas {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: block;
		z-index: -1;
	}
</style>
