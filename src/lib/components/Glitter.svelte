<script lang="ts">
  import { onMount } from 'svelte';

  let canvas: HTMLCanvasElement;
  let ctx: CanvasRenderingContext2D | null = null;
  let width: number;
  let height: number;
  let particles: { x: number; y: number; size: number; alpha: number; speed: number }[] = [];

  function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
  }

  function initParticles() {
    particles = Array.from({ length: 200 }, () => ({
      x: Math.random() * width,
      y: height * 0.3 + Math.random() * height * 0.7,
      size: 0.3 + Math.random() * 0.7,
      alpha: 0.2 + Math.random() * 0.5,
      speed: 0.05 + Math.random() * 0.15
    }));
  }

  onMount(() => {
    ctx = canvas.getContext('2d');
    resize();
    initParticles();
    window.addEventListener('resize', resize);

    let animationFrame: number;
    function render() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      drawGlitter();
      animationFrame = requestAnimationFrame(render);
    }
    render();

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', resize);
    };
  });

  function drawGlitter() {
    if (!ctx) return;

    for (let p of particles) {
      p.y -= p.speed * 0.1;
      p.alpha += Math.sin(Date.now() / 500 + p.x) * 0.01;

      if (p.alpha < 0.1) p.alpha = 0.1;
      if (p.alpha > 0.8) p.alpha = 0.8;

      ctx.beginPath();
      const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 3);
      gradient.addColorStop(0, `rgba(255, 255, 255, ${p.alpha})`);
      gradient.addColorStop(1, `rgba(255, 255, 255, 0)`);
      ctx.fillStyle = gradient;
      ctx.arc(p.x, p.y, p.size * 2, 0, Math.PI * 2);
      ctx.fill();
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
    z-index: 1; /* Sunlight보다 위, Header보다 아래 */
    pointer-events: none;
  }
</style>
